function clickToChange(){
   let clicker = document.getElementById('click-me');
   clicker.innerHTML = `This is onclick`;
}

document.getElementById('event-listener').addEventListener('click', function(){
   let listenver = document.getElementById('click-me');
   listenver.innerHTML = 'This is Event Listener';
})

document.getElementById('btn-update').addEventListener('click', function(){
   let inputField = document.getElementById('input-field');
   let inputText = inputField.value;
   let p = document.getElementById('click-me');
   p.innerText = inputText;
   inputField.value = '';
})