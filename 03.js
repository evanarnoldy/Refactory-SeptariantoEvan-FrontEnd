const paragraf = 'Aku ingin begini Aku ingin begitu ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'
const kalimat1 = paragraf.split(/aku/i).length-1;
console.log('Jumlah kata Aku = ' + kalimat1);
const kalimat2 = paragraf.split(/ingin/i).length-1;
console.log('Jumlah kata ingin = ' + kalimat2);
const kalimat3 = paragraf.split(/dapat/i).length-1;
console.log('Jumlah kata Aku = ' + kalimat3);
