const paises = [
  {
    nombre: "Guatemala",
    bandera: "https://bit.ly/3Bwr2rm",
    capital: "Ciudad de Guatemala",
    idioma_oficial: "Español",
    moneda: "Quetzal"
},
{
    nombre: "Argentina",
    bandera: "https://bit.ly/3BEJC0y",
    capital: "Buenos Aires",
    idioma_oficial: "Español",
    moneda: "Peso"
},
{
    nombre: "Francia",
    bandera: "https://bit.ly/3HFZ7t5",
    capital: "Paris",
    idioma_oficial: "Frances",
    moneda: "Euro"
},
{
    nombre: "El Salvador",
    bandera: "https://bit.ly/3uRN5F6",
    capital: "San Salvador",
    idioma_oficial: "Español",
    moneda: "Dolar"
},
{
    nombre: "Honduras",
    bandera: "https://bit.ly/3UWcrMM",
    capital: "Tegucigalpa",
    idioma_oficial: "Español",
    moneda: "Lempira"
}
];

const dl = document.getElementById('paises');


function mostrarPaises() {
  paises.forEach(pais => {
    dl.insertAdjacentHTML('beforeend','<div class="col-lg-6">' +
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          '<h3 class="panel-title">' + pais.nombre +'</h3>' +
        '</div>' +
        '<div class="panel-body">' +
          '<div class="col-lg-4">' +
            '<img src="' + pais.bandera +'" />' +
          '</div>' +
          '<div class="col-lg-8">' +
            '<h4>Capital: ' + pais.capital +'</h4>' +
            '<h4>Idioma: ' + pais.idioma_oficial +'</h4>' +
            '<h4>Moneda: ' + pais.moneda +'</h4>' +
          '</div>');
  });
}


function savePais() {
  const nombre = document.getElementById('inputNombre').value;
  const bandera = document.getElementById('inputBandera').value;
  const capital = document.getElementById('inputCapital').value;
  const idioma = document.getElementById('inputIdioma').value;
  const moneda = document.getElementById('inputMoneda').value;

  
  paises.push(
    {
      nombre: nombre,
      bandera: bandera,
      capital: capital,
      idioma_oficial: idioma,
      moneda: moneda
    }
  );
  dl.replaceChildren();
  clearModal();
  mostrarPaises();
}

function clearModal() {
  document.getElementById('inputNombre').value = '';
  document.getElementById('inputBandera').value = '';
  document.getElementById('inputCapital').value = '';
  document.getElementById('inputIdioma').value = '';
  document.getElementById('inputMoneda').value = '';

  $('#addPais').modal('hide');
}

document.getElementById("mostrarPaises").addEventListener("click",mostrarPaises);
document.getElementById("guardar").addEventListener("click",savePais);



