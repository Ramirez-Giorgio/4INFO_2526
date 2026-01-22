export const protect_email = (email) => {
   let [nome, mail] = email.split('@');
   let cripted = nome.slice(0, nome.split('').length/2);
   return cripted + '...@' + mail;
};
