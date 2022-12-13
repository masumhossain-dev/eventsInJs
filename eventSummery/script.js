function clickToChange(){
   let clicker = document.getElementById('click-me');
   clicker.innerHTML = `This is onclick`;
}

document.getElementById('event-listener').addEventListener('click', function(){
   let listenver = document.getElementById('click-me');
   listenver.innerHTML = 'This is Event Listener';
})