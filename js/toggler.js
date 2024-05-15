document.addEventListener('DOMContentLoaded', function() {

    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
  
    const navegation = document.getElementById('navegation');
  
    openBtn.addEventListener('click', function(){
      navegation.classList.add('visible');
    });
  
    closeBtn.addEventListener('click', function(){
      navegation.classList.remove('visible')
    })
  
  });