const button = document.getElementById('button');
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const adress = document.getElementById('adress').value;
    document.getElementById('cardFirstName').textContent = firstName;
    document.getElementById('cardLastName').textContent = lastName;
    document.getElementById('cardAge').textContent = age;
    document.getElementById('cardAdress').textContent = adress;
    document.getElementById('nameCard').style.display = 'block';
});
button && button.addEventListener('click',function () {
    localStorage.setItem('name',firstName.value);
    localStorage.setItem('lastname',lastName.value)
    localStorage.setItem('age',age.value)
    localStorage.setItem('adress',adress.value)
})