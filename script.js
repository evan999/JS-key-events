document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('You pressed the ' + keyName + ' key');
  
  var msg = document.getElementById('msg');
  if(event.which == 13){
    msg.innerHTML = 'The enter key was pressed';
  }
  else if(event.which == 38){
    msg.style.display = 'none';
  }
  else if(event.which == 65){
    document.body.style.backgroundColor = 'blue';
  }
  else if(event.which == 88){
    window.close();  
  }
  
  
    
});

