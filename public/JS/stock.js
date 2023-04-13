document.querySelector("#buy").addEventListener('click', function(){
    const buy = prompt('Enter the number of stocks to buy');
    document.querySelector("#stockNum").innerHTML = 882*buy;
    document.querySelector("#name_of_stock").innerHTML = 'ICICI BANK';
});

document.querySelector("#sell").addEventListener('click', function(){
  const sell = prompt('Enter the number of stocks to sell');

  if(sell < document.querySelector("#stockNum").innerHTML){
    document.querySelector("#stockNum").innerHTML -= 882*sell;
  }
  else{
    alert('This action cannot be performed');
  }
});