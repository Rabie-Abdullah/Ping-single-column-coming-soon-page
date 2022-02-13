let btn = document.getElementById('btn')


btn.addEventListener('click', function(e) {
    e.preventDefault()
})
function validateEmail() {

    let email = document.getElementById('email').value
    let errorMessage = document.getElementById('text_error')
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let input = document.querySelector('input')

    if(email.match(mailformat)) {
        errorMessage.innerHTML = 'valid email address'
        errorMessage.style.color = 'green'
        input.style.borderColor = 'green'

    } else if(email == '') {
        errorMessage.innerHTML = ''
    } else {
        errorMessage.innerHTML = 'please provide a valid email'
        errorMessage.style.color = 'red'
        input.style.borderColor = 'red'

    }

 }