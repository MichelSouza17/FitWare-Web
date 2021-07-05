export const maskCpf = (cpf) => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const maskCep = (cep) =>
  cep.replace(/(\d{5})(\d)/, "$1-$2").replace(/(\d{3})$/, "$1");

export const maskCel = (celular) => {
  return celular
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
};
