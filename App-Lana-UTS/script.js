function tampilkanData() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var matkul = document.getElementById('matkul').value;
    var nilai = parseInt(document.getElementById('nilai').value);
  
    var nilaiHuruf = '';
    var indeksNilai = 0;
  
    if (nilai >= 85) {
      nilaiHuruf = 'A';
      indeksNilai = 4.00;
    } else if (nilai >= 79) {
      nilaiHuruf = 'A-';
      indeksNilai = 3.67;
    } else if (nilai >= 74) {
      nilaiHuruf = 'B+';
      indeksNilai = 3.33;
    } else if (nilai >= 69) {
      nilaiHuruf = 'B';
      indeksNilai = 3.00;
    } else if (nilai >= 64) {
      nilaiHuruf = 'B-';
      indeksNilai = 2.67;
    } else if (nilai >= 59) {
      nilaiHuruf = 'C+';
      indeksNilai = 2.33;
    } else if (nilai >= 54) {
      nilaiHuruf = 'C';
      indeksNilai = 2.00;
    } else if (nilai >= 41) {
      nilaiHuruf = 'D';
      indeksNilai = 1.00;
    } else {
      nilaiHuruf = 'E';
      indeksNilai = 0.00;
    }
  
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Hasil:</h2>' +
                          '<p>NIM: ' + nim + '</p>' +
                          '<p>Nama: ' + nama + '</p>' +
                          '<p>Mata Kuliah: ' + matkul + '</p>' +
                          '<p>Nilai Akhir: ' + nilai + '</p>' +
                          '<p>Nilai Huruf: ' + nilaiHuruf + '</p>' +
                          '<p>Indeks Nilai: ' + indeksNilai + '</p>';
  }
  