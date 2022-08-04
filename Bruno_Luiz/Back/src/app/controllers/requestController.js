const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const router = express.Router();
const generateCode = require("../../utils/funcoes");

router.post("/usuario", async (req, res) => {
	try {
		const { chave } = req.body;
		const user = await User.findOne({ chave: chave });
		user.senha = undefined;
		const posts = await Post.find({ nomeUsuario: user.nomeUsuario });
		return res.status(200).send({ user, posts });
	} catch (error) {
		console.error(error);
		return res.status(400);
	}
});

router.post("/outroUsuario", async (req, res) => {
	try {
		const { userName } = req.body;
		const usuario = await User.findOne({ nomeUsuario: userName });
		const user = {
			nome: usuario.nome,
			nomeUsuario: usuario.nomeUsuario,
			imgPerfil: usuario.imgPerfil,
			imgBanner: usuario.imgBanner,
			sobreMim: usuario.descricao,
			seguidores: usuario.seguidores,
			seguindo: usuario.seguindo,
			corTema: usuario.corTema,
		};
		const posts = await Post.find({ nomeUsuario: userName });
		return res.status(200).send({ user, posts });
	} catch (error) {
		console.error(error);
		return res.status(400);
	}
});

router.post("/buscar", async (req, res) => {
	try {
		let usuario = req.body.userName.trim();
		let busca = await User.find({
			nomeUsuario: { $regex: new RegExp("^" + usuario + ".*", "i") },
		}).exec();
		busca = busca.slice(0, 10);
		return res.status(200).send({ usuario: busca });
	} catch (error) {
		console.error(error);
		return res.status(400);
	}
});

router.post("/atualizarImgPerfil", async (req, res) => {
	try {
		const { chave, imgPerfil } = req.body;

		await User.updateOne(
			{ chave: chave },
			{
				$set: { imgPerfil: imgPerfil },
			}
		);

		return res.status(200).send("Imagem de Perfil atualizada!");
	} catch (error) {
		console.error(error);
		return res
			.status(400)
			.send("Imagem de Perfil não pôde ser atualizada!");
	}
});

router.post("/atualizarImgBanner", async (req, res) => {
	try {
		const { chave, imgBanner } = req.body;

		await User.updateOne(
			{ chave: chave },
			{
				$set: { imgBanner: imgBanner },
			}
		);

		return res.status(200).send("Imagem de Banner atualizado!");
	} catch (error) {
		console.error(error);
		return res
			.status(400)
			.send("Imagem de Banner não pôde ser atualizada!");
	}
});

router.post("/atualizarSobreMim", async (req, res) => {
	try {
		const { chave, sobreMim } = req.body;

		await User.updateOne(
			{ chave: chave },
			{
				$set: { descricao: sobreMim },
			}
		);

		return res.status(200).send("Sobre Mim atualizado!");
	} catch (error) {
		console.error(error);
		return res.status(400).send("Sobre Mim não pôde ser atualizado!");
	}
});

router.post("/atualizarCorTema", async (req, res) => {
	try {
		const { chave, corTema } = req.body;
		await User.updateOne(
			{ chave: chave },
			{
				$set: { corTema: corTema },
			}
		);
		return res.status(200).send("Cor Tema atualizada!");
	} catch (error) {
		console.error(error);
		return res.status(400).send("Cor Tema não pôde ser atualizada!");
	}
});

router.post("/criarPost", async (req, res) => {
	try {
		const { chave, imgPost, texto } = req.body;
		const user = await User.findOne({ chave: chave });
		if (user == undefined)
			return res.status(404).send("Usuário não validado!");
		let codigo = generateCode(40);
		await Post.create({
			nomeUsuario: user.nomeUsuario,
			imagem: imgPost,
			texto: texto,
			likes: 0,
			numeroComentarios: 0,
			comentarios: null,
			codigoPost: codigo,
		});
		return res.status(200).send("Post criado com sucesso!");
	} catch (error) {
		console.error(error);
		return res.status(400).send("Não foi possível criar o Post!");
	}
});

router.post("/seguir", async (req, res) => {});
module.exports = (app) => app.use("/request", router);
