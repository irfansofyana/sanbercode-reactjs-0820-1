// Soal 1
const luasLingkaran = (radius) => Math.PI * radius * radius;
let luasSegitiga = (base, height) => 0.5 * base * height;

console.log(luasLingkaran(10));
console.log(luasSegitiga(5, 12));

// Soal 2
let kalimat = '';

const tambahKata = (kalimat, kata) => {
    kalimat = (kalimat ? `${kalimat} ${kata}` : `${kata}`);
    return kalimat;
}

kalimat = tambahKata(kalimat, 'saya');
kalimat = tambahKata(kalimat, 'adalah');
kalimat = tambahKata(kalimat, 'seorang');
kalimat = tambahKata(kalimat, 'frontend');
kalimat = tambahKata(kalimat, 'developer');

console.log(kalimat);

// Soal 3
const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: () => firstName + ' ' + lastName
    }
}

console.log(newFunction('William', 'Imoh').fullName());

// Soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName);
console.log(lastName);
console.log(destination);
console.log(occupation);
console.log(spell);

// Soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined);