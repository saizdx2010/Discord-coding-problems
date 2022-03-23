const kawan = ["Sai","Alvin","Ricardo"];
const kawan2 = ["Stevan","Azka"];

const tambahKawanDiPosisiPertama = (namaKawan, array) => {
    array.unshift(namaKawan);
    return array;
}

tambahKawanDiPosisiPertama("Stevan", kawan);

for(let i = 0; i < kawan2.length; i++){
    kawan.push(kawan2[i]);
}

const hapusKawanDiPosisiPertama = array => {
    array.shift();
    return array;
}

hapusKawanDiPosisiPertama(kawan);

console.log(kawan)