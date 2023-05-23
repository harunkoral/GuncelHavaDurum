const url = 'yourApi';
const key = 'yourKey';


const setQuary = (e) =>{
  if (e.keyCode == '13') {
    getResult(sehirGir.value)
  }
}

const getResult = (sehirName) => {
  let query = `${url}weather?q=${sehirName}&appid=${key}&units=metric&lang=tr`
  fetch(query)
  .then(weather => {
    return weather.json()
  })
  .then(displayResult)
}

const displayResult= (result) => {
  let sehir = document.querySelector('.sehir');
  sehir.innerText = `${result.name}, ${result.sys.country}`

  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)}°C`

  let aciklama = document.querySelector('.aciklama');
  aciklama.innerText = result.weather[0].description;

  let minmax = document.querySelector('.minmax');
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
}

const sehirGir = document.getElementById('sehirGir');

sehirGir.addEventListener('keypress',setQuary);