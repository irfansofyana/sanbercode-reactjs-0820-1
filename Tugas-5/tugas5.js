// Soal 1
function halo() {
    return 'Halo Sanbers!';
}

console.log(halo()) // "Halo Sanbers!" 

// Soal 2
function kalikan(a, b) {
    return a * b;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}
 
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3]
};
console.log(objectDaftarPeserta);

// Soal 5
var data = [
    {
        nama: 'strawberry',
        warna: 'merah',
        ada_bijinya: 'tidak',
        harga: 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        ada_bijinya: 'ada',
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & merah',
        ada_bijinya: 'ada',
        harga: 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        ada_bijinya: 'tidak',
        harga: 5000
    }
];

console.log(data[0]);

// Soal 6
var dataFilm = [];

function addElementDataFilm(dataFilm, nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });

    return dataFilm;
}

console.log(addElementDataFilm(dataFilm, "Doraemon", "60", "Kartun", "2020"));
