const scriptURL = 'https://script.google.com/macros/s/AKfycbwRWWyjPLw3uhbSG0uggRC0W56-2p1g6rsvsTDfe3OjY00DnHx6lpGw0ACSzwCRrpRBRA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = "" 
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
    err.innerHTML="error found"
    setTimeout(()=>{
        err.innerHTML=""
        form.reset()
    },2000)
  })