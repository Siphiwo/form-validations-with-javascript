const root =document.documentElement
const password_input = document.getElementById('password')
const confirm_password = document.getElementById('password-confirm')
const visibility_toggle = document.getElementById('eye-icon')
const display_error = document.getElementById('pass-error')

visibility_toggle.addEventListener('click', () => {
    if(password_input.type == 'password'){
        password_input.type = 'text'
        confirm_password.type = 'text'
        visibility_toggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>'
    } else {
        password_input.type = 'password'
        confirm_password.type = 'password'
        visibility_toggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>'
    }
})

invalidInput = text => {
    display_error.innerHTML = text
    root.style.setProperty('--display-error', '0px')
    password_input.classList.remove('input-valid')
    password_input.classList.add('input-invalid')
}



password_input.addEventListener('change', ()=> {
    if(password_input.value.length < 8) {
        invalidInput("Password must be more then 8 characters")
        confirm_password.setAttribute('disabled', true)
        return
    }

    if(/[^A-Za-z0-9]/.test(password_input.value) == false ){
        invalidInput("Password must contain Special character")
        confirm_password.setAttribute('disabled', true)
        return
    }

    if(/\d/.test(password_input.value) == false) {
        invalidInput("Password must contain a Number")
        confirm_password.setAttribute('disabled', true)
        return
    }

    root.style.setProperty('--display-error', '-45px')
    display_error.innerHTML = ''
    password_input.classList.add('input-valid')
    confirm_password.removeAttribute('disabled')

})

confirm_password.addEventListener('change', ()=> {
    if(password_input.value != confirm_password.value) {
        invalidInput("Password must be the same")
        confirm_password.classList.add('input-invalid')
        return
    }
    root.style.setProperty('--display-error', '-45px')
    display_error.innerHTML = ''
    password_input.classList.add('input-valid')
    confirm_password.classList.add('input-valid')

})