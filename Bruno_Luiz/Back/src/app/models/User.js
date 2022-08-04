const mongoose = require("../../database/index");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	dataNascimento: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
	},
	nomeUsuario: {
		type: String,
		unique: true,
		required: true,
	},
	senha: {
		type: String,
		selected: false,
		unique: false,
		required: true,
	},
	imgBanner: {
		type: String,
		selected: false,
		unique: false,
		required: false,
	},
	imgPerfil: {
		type: String,
		selected: false,
		unique: false,
		required: false,
	},
	corTema: {
		type: String,
		unique: false,
		required: false,
	},
	descricao: {
		type: String,
		selected: false,
		unique: false,
		required: false,
	},
	seguidores: {
		type: Array,
		unique: false,
		required: false,
	},
	seguindo: {
		type: Array,
		unique: false,
		required: false,
	},
	tokenRecuperacaoSenha: {
		type: String,
		selected: false,
	},
	tempoExpiracaoSenha: {
		type: Date,
		selected: false,
	},
	dataCriacao: {
		type: Date,
		default: Date.now(),
	},
	chave: {
		type: String,
		required: false,
		unique: true,
		selected: false,
	},
});

UserSchema.pre("save", async function (next) {
	const hash = await bcrypt.hash(this.senha, 10);
	this.senha = hash;

	next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
