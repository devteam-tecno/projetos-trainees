const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    selected: false,
  },
  tempoExpiracaoCodigo: {
    type: Date,
    selected: false,
  },
});

const Email = mongoose.model("Email", EmailSchema);
module.exports = Email;
