const secret_text = "23dn3ir30fd2eddd"

const masking = secret_text.replace(/.(?=.{3,}$)/g, '*');

console.log(masking)