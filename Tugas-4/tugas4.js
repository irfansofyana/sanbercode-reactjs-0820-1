// Soal 1
console.log('LOOPING PERTAMA');
let i = 2;
while (i <= 20) {
    console.log(i + " - I love coding");
    i += 2;
}
console.log('LOOPING KEDUA');
i = 20;
while (i >= 2) {
    console.log(i + " - I will become a frontend developer");
    i -= 2;
}

// Soal 2
for (let i = 1; i <= 20; i++){
    if (i%3 === 0 && i%2 === 1) {
        console.log(i + " - I Love Coding");
    } else if (i%2 === 1) {
        console.log(i + " - Santai");
    } else if (i%2 === 0) {
        console.log(i + " - Berkualitas");
    }
}

// Soal 3
for (let i = 1; i <= 7; ++i){
    let row = '';
    for (let j = 1; j <= i; ++j){
        row = row.concat('#');
    }
    console.log(row);
}

// Soal 4
var kalimat="saya sangat senang belajar javascript"

const arrayKalimat = kalimat.split(' ');
console.log(arrayKalimat);

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah = daftarBuah.sort();
for (let i = 0; i < daftarBuah.length; i++){
    console.log(daftarBuah[i]);
}