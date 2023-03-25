document.querySelector("body").addEventListener(onload, slideShow);
document.querySelector("#stock").addEventListener('click', getStocks);
document.querySelector("#ipo").addEventListener('click', getIPO);
document.querySelector("#mutuals").addEventListener('click', getMutuals);
document.querySelector("#fno").addEventListener('click', getFnO);

const img_scroll = document.querySelector("#slider");

document.querySelector("#phone").addEventListener('blur', validatePhone);

function validatePhone(){
  const phone = document.querySelector('#phone');
  const re = /^[^0][0-9]{10}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  }
  else{
    phone.classList.remove('is-invalid');
  }
}

var i = 0;

function slideShow(){
  var sources = ["../images/dark-slide-1.png", "../images/dark-slide-2.png", "../images/dark-slide-3.png", "../images/dark-slide-4.png"];

  img_scroll.src = sources[i];
  i++;
  if(i === 3){
    i = 0;
  }

  setTimeout(slideShow, 3000);
}

function getStocks(){

  document.querySelector("#stock-info").style.display = 'block';
  document.querySelector("#ipo-info").style.display = 'none';
  document.querySelector("#mutuals-info").style.display = 'none';
  document.querySelector("#fno-info").style.display = 'none';
}

function getIPO() {

  document.querySelector("#stock-info").style.display = 'none';
  document.querySelector("#ipo-info").style.display = 'block';
  document.querySelector("#mutuals-info").style.display = 'none';
  document.querySelector("#fno-info").style.display = 'none';
}

function getMutuals(){

  document.querySelector("#stock-info").style.display = 'none';
  document.querySelector("#ipo-info").style.display = 'none';
  document.querySelector("#mutuals-info").style.display = 'block';
  document.querySelector("#fno-info").style.display = 'none';
}

function getFnO(){

  document.querySelector("#stock-info").style.display = 'none';
  document.querySelector("#ipo-info").style.display = 'none';
  document.querySelector("#mutuals-info").style.display = 'none';
  document.querySelector("#fno-info").style.display = 'block';
}

function search_stock() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('s-price');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}

// document.getElementById('searchbar').addEventListener('blur', function(){
//   document.querySelector("#search-list").style.display = 'none';
// });