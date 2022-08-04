const express = require("express");
const User = require("../models/User");
const Email = require("../models/Email");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../../modules/mailer");
const generateCode = require("../../utils/funcoes");
const authConfig = require("../../config/auth.json");
const { isNull } = require("util");

router.post("/confirmar_email", async (req, res) => {
	const { email } = req.body;
	try {
		if (await User.findOne({ email }))
			return res.status(400).send("Usuário já existe!");
		const codigo = generateCode(30);
		if (await Email.findOne({ email })) {
			const emailBD = await Email.findOne({ email });
			const agora = new Date();
			if (emailBD.tempoExpiracaoCodigo > agora) {
				emailBD.codigo = codigo;
				emailBD.save();
				return res.status(200).send("Codigo atualizado!");
			} else {
				return res.status(400).send("Codigo ja enviado!");
			}
		}
		const codigoExpirar = new Date();
		codigoExpirar.setHours(codigoExpirar.getHours() + 0.3);
		const mail = {
			email,
			codigo,
			tempoExpiracaoCodigo: codigoExpirar,
		};
		await Email.create(mail);
		mailer.sendMail(
			{
				to: email,
				from: "oladev.cic@hotmail.com",
				subject: "Cadastro | OlaDev",
				template: "auth/confirmar_email",
				context: {
					codigo: `https://brunofelipecoder.github.io/ProjetoFinalTecnoJr_Front/html/cadastro.html?token=${codigo}`,
					/*codigo: `http://127.0.0.1:5500/html/cadastro.html?token=${codigo}`*/
				},
			},
			(err) => {
				if (err) {
					console.log(err);
					return res
						.status(400)
						.send("Não pode mandar o email de recuperação!");
				}
				return res
					.status(200)
					.send("link de cadastro enviado com sucesso!");
			}
		);
	} catch (error) {
		res.status(404).send("Erro no envio do email, tente novamente!");
	}
});

router.post("/verificar_token", async (req, res) => {
	try {
		const { token } = req.body;
		const tokenVerificado = await Email.findOne({ codigo: token });
		if (tokenVerificado.codigo != undefined) {
			const email = tokenVerificado.email;
			console.log(email);
			return res.status(200).send(email);
		} else {
			return res.status(401);
		}
	} catch (error) {
		return res.status(404);
	}
});

router.post("/cadastro", async (req, res) => {
	try {
		const { email } = req.body;

		if (await User.findOne({ email }))
			return res.status(400).send("Usuário já cadastrado!");

		const user = await User.create(req.body);
		await Email.deleteOne({ email });

		user.senha = undefined;
		const chave = generateCode(100);
		const cor = 591277;
		await User.updateOne(
			{ email: email },
			{
				$set: {
					chave: chave,
					corTema: cor,
					seguidores: 0,
					seguindo: 0,
				},
			}
		);
		return res.status(200).send(chave);
	} catch (err) {
		console.log(err);
		return res.status(400).send("Falha no cadastro!");
	}
});

router.post("/autenticacao", async (req, res) => {
	try {
		const { usuario, senha } = req.body;
		const user = await User.findOne({ nomeUsuario: usuario }).select(
			"+senha"
		);

		if (!user) {
			return res.status(400).send({ error: "Usuário não existe!" });
		}

		if (!(await bcrypt.compare(senha, user.senha))) {
			return res.status(400).send({ error: "Senha incorreta!" });
		}

		user.senha = undefined;

		const chave = generateCode(100);
		await User.updateOne(
			{ nomeUsuario: usuario },
			{ $set: { chave: chave } }
		);
		return res.status(200).send(chave);
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
});

router.post("/esqueci_senha", async (req, res) => {
	const { email } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).send({ error: "Usuário não existe!" });
		}

		const token = crypto.randomBytes(20).toString("hex");

		const now = new Date();
		now.setHours(now.getHours() + 1);

		await User.findByIdAndUpdate(user._id, {
			$set: {
				tokenRecuperacaoSenha: token,
				tempoExpiracaoSenha: now,
			},
		});

		mailer.sendMail(
			{
				to: email,
				from: "oladev.cic@hotmail.com",
				template: "auth/esqueci_senha",
				subject: "Recuperar Senha | OlaDev",
				context: {
					token: `https://brunofelipecoder.github.io/ProjetoFinalTecnoJr_Front/html/novaSenha.html?token=${token}`,
				},
			},
			(err) => {
				if (err) {
					console.log(err);
					return res.status(400).send({
						erro: "Não pode mandar o email de recuperação!",
					});
				}
				return res.status(200).send({ mensagem: "Email enviado!" });
			}
		);
	} catch (err) {
		res.status(404).send({
			erro: "Erro na recuperação de senha, tente novamente!",
		});
	}
});

router.post("/resetar_senha", async (req, res) => {
	const { email, token, senha } = req.body;
	try {
		const user = await User.findOne({ email }).select(
			"tokenRecuperacaoSenha tempoExpiracaoSenha"
		);

		if (!user) {
			return res.status(400).send({ error: "Usuário não existe!" });
		}

		if (token !== user.tokenRecuperacaoSenha) {
			console.log(token);
			console.log(user.tokenRecuperacaoSenha);
			return res.status(400).send({ erro: "Token inválido!" });
		}

		const now = new Date();

		if (now > user.tempoExpiracaoSenha) {
			return res.status(400).send({
				erro: "Tempo de recuperação expirado! Gere um novo token.",
			});
		}
		user.senha = senha;
		await user.save();
		res.send();
	} catch (err) {
		res.status(400).send({
			erro: "Erro ao tentar resetar senha. Tente novamente.",
		});
	}
});

module.exports = (app) => app.use("/auth", router);
