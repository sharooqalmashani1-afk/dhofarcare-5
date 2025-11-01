document.getElementById('booking-form').addEventListener('submit',function(e){
 e.preventDefault();
 document.getElementById('success-message').classList.remove('hidden');
 setTimeout(()=>{document.getElementById('success-message').classList.add('hidden');},4000);
});