let form = document.getElementById('signup');

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let Users ={
        name,
        email,
        country,
        phone,
    }

    console.log(Users);
})