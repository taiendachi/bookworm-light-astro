---
title: Aplikasi Menghitung Kebutuhan Guru
meta_title: ""
description: ""
draft: false
---
```html
<style>
.guru-calculator {
  max-width: 600px;
  margin: 20px auto;
  background: #f9fafc;
  border-radius: 20px;
  padding: 25px 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
  border: 1px solid #e9ecf0;
}
.guru-calculator h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #0a2540;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 3px solid #2b6f9b;
  padding-bottom: 10px;
}
.guru-calculator h3 span {
  background: #2b6f9b;
  color: white;
  font-size: 1.2rem;
  padding: 2px 12px;
  border-radius: 40px;
}
.guru-calculator p {
  color: #2d3a4b;
  line-height: 1.5;
  margin-bottom: 20px;
}
.guru-calculator label {
  font-weight: 500;
  color: #1f3a5f;
  display: block;
  margin-bottom: 6px;
}
.guru-calculator input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #dde3ea;
  border-radius: 14px;
}
.input-group { margin-bottom:20px; }

.row{
  display:flex;
  gap:15px;
  flex-wrap:wrap;
}

.row .input-group{
  flex:1 1 200px;
}

.guru-calculator button{
  background:#2b6f9b;
  color:white;
  border:none;
  padding:14px;
  border-radius:40px;
  width:100%;
  cursor:pointer;
  font-weight:600;
}

.result-box{
  background:white;
  border-radius:18px;
  padding:20px;
  margin-top:25px;
  border:2px dashed #cbd5e1;
}

.result-item{
  display:flex;
  justify-content:space-between;
  padding:10px 0;
}

.badge{
  background:#ecf7ff;
  padding:6px 12px;
  border-radius:30px;
  font-weight:600;
}

.status{
  padding:8px 12px;
  border-radius:40px;
  font-weight:600;
}

.status.kurang{background:#ffe0d9;color:#b13e2d;}
.status.lebih{background:#ffefc9;color:#8e6100;}
.status.cocok{background:#dff0d8;color:#2b6e3f;}
</style>


<div class="guru-calculator">

<h3><span>🧑‍🏫</span> Kalkulator Kebutuhan Guru</h3>

<p>
Hitung jumlah ideal guru berdasarkan rumus
<strong>(Rombel × Jam Mapel) / 24</strong>
</p>

<div class="input-group">
<label>Jumlah Rombel</label>
<input type="number" id="rombel" value="12">
</div>

<div class="row">

<div class="input-group">
<label>Jam Mapel</label>
<input type="number" id="jamMapel" value="5">
</div>

<div class="input-group">
<label>Guru Tersedia</label>
<input type="number" id="guruTersedia" value="3">
</div>

</div>

<button id="hitungBtn">
🔍 Hitung Kebutuhan Guru
</button>


<div class="result-box">

<div class="result-item">
<span>Kebutuhan Ideal</span>
<span class="badge" id="idealPecahan">0</span>
</div>

<div class="result-item">
<span>Pembulatan</span>
<span class="badge" id="idealBulat">0 guru</span>
</div>

<div class="result-item" id="statusBaris" style="display:none;">
<span>Status</span>
<span class="status" id="statusText"></span>
</div>

<div class="result-item" id="selisihBaris" style="display:none;">
<span>Selisih</span>
<span class="badge" id="selisihValue"></span>
</div>

</div>

</div>


<script>
document.addEventListener("DOMContentLoaded", function () {

const rombelInput =
document.getElementById("rombel");

const jamMapelInput =
document.getElementById("jamMapel");

const guruTersediaInput =
document.getElementById("guruTersedia");

const hitungBtn =
document.getElementById("hitungBtn");

const idealPecahanSpan =
document.getElementById("idealPecahan");

const idealBulatSpan =
document.getElementById("idealBulat");

const statusBaris =
document.getElementById("statusBaris");

const selisihBaris =
document.getElementById("selisihBaris");

const statusText =
document.getElementById("statusText");

const selisihValue =
document.getElementById("selisihValue");


function hitungKebutuhan(){

let rombel =
parseFloat(rombelInput.value);

let jamMapel =
parseFloat(jamMapelInput.value);

let guruTersedia =
guruTersediaInput.value.trim()===""
? null
: parseFloat(guruTersediaInput.value);

if(isNaN(rombel)||rombel<1) rombel=12;
if(isNaN(jamMapel)||jamMapel<0.5) jamMapel=5;

const totalJam=rombel*jamMapel;
const kebutuhanPecahan=totalJam/24;
const kebutuhanBulat=
Math.ceil(kebutuhanPecahan);

idealPecahanSpan.textContent=
kebutuhanPecahan.toFixed(2);

idealBulatSpan.textContent=
kebutuhanBulat+" guru";


if(guruTersedia!==null &&
!isNaN(guruTersedia)){

const tersedia=
Math.floor(guruTersedia);

const selisih=
tersedia-kebutuhanBulat;

let statusClass="";
let statusMessage="";

if(selisih>0){
statusClass="lebih";
statusMessage=
"Kelebihan "+selisih+" guru";
}
else if(selisih<0){
statusClass="kurang";
statusMessage=
"Kekurangan "+
Math.abs(selisih)+" guru";
}
else{
statusClass="cocok";
statusMessage="Ideal";
}

statusText.className=
"status "+statusClass;

statusText.textContent=
statusMessage;

selisihValue.textContent=
(selisih>0?"+":"")+selisih;

statusBaris.style.display="flex";
selisihBaris.style.display="flex";

}else{
statusBaris.style.display="none";
selisihBaris.style.display="none";
}

}

hitungBtn.addEventListener(
"click",
hitungKebutuhan
);

hitungKebutuhan();

});
</script>
```

​
