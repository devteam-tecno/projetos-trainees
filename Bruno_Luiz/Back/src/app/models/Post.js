const mongoose = require("../../database/index");

const PostSchema = new mongoose.Schema({
	nomeUsuario: {
		type: String,
		required: true,
	},
	imagem: {
		type: Array,
		required: false,
	},
	texto: {
		type: String,
		required: false,
	},
	likes: {
		type: Number,
		required: true,
	},
	usuariosLikes: {
		type: Array,
		required: false,
	},
	numeroComentarios: {
		type: Number,
		required: true,
	},
	comentarios: {
		type: Array,
		required: false,
	},
	codigoPost: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
