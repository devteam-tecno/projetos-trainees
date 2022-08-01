function generateCode(tam) {
  let token = "";
  const alfabeto =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < tam; i++) {
    let aux = Math.floor(Math.random() * (alfabeto.length - 1 + 1));
    token += alfabeto[aux];
  }
  return token;
}

module.exports = generateCode;
