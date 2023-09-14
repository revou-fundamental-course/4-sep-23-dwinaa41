var current = "luas";
const luasBody = document.getElementById("luas-body");
const kelilingBody = document.getElementById("keliling-body");
const kelilingBtn = document.getElementById("kelilingBtn");
const luasBtn = document.getElementById("luasBtn");
const answerContainer = document.getElementById('answer-container');

function changeMenu(name) {
  resetAll();
  if (name == "luas") {
    luasBtn.className = "btn btn-primary";
    kelilingBtn.className = "btn btn-secondary";
    luasBody.style.display = "block";
    kelilingBody.style.display = "none";
    document.getElementById('calculator-title').innerText = 'Hitung Luas Persegi';
    document.getElementById('title').innerText = 'Luas Persegi'
    current = "luas";
  } else if (name == "keliling") {
    kelilingBtn.className = "btn btn-primary";
    luasBtn.className = "btn btn-secondary";
    luasBody.style.display = "none";
    kelilingBody.style.display = "block";
    document.getElementById('calculator-title').innerText = 'Hitung Keliling Persegi';
    document.getElementById('title').innerText = 'Keliling Persegi'
    current = "keliling";
  }
}

function resetAll() {
  document.getElementById("sisi").value = "";
  document.getElementById("rumus1").innerHTML = "";
  document.getElementById('rumus2').innerHTML = "";
  document.getElementById("jawaban").innerHTML = "";
  document.getElementById("error").style.display = "none";
  answerContainer.style.display = 'none';
}

function getLuas(sisi) {
  return sisi * sisi;
}

function getKeliling(sisi) {
  return 4 * sisi;
}

function hitung() {
  const sisi = document.getElementById("sisi").value;
  var hasil = 0;
  if (current == "luas") {
    hasil = getLuas(sisi);
    console.log("Hasil luas: " + hasil);
  } else if (current == "keliling") {
    hasil = getKeliling(sisi);
    console.log("Hasil keliling: " + hasil);
  }

  if (!isNaN(hasil) && current == "luas") {
    document.getElementById("rumus1").innerHTML = "L = S x S";
    document.getElementById("rumus2").innerHTML = "L = " + sisi + " x " + sisi;
    document.getElementById("jawaban").innerHTML = hasil;
    answerContainer.style.display = 'block';
  } else if (!isNaN(hasil) && current == "keliling") {
    document.getElementById("rumus1").innerHTML = "K = 4 x S";
    document.getElementById("rumus2").innerHTML = "K = 4 x " + sisi;
    document.getElementById("jawaban").innerHTML = hasil;
    answerContainer.style.display = 'block';
  } else {
    document.getElementById("error").style.display = "block";
  }
}
