
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const number = document.querySelector('#Phone');
const msg = document.querySelector('.msg');
const userList = document.getElementById('users');


// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '' || number.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const userDetails = {
      name :nameInput.value,
      email: emailInput.value,
      phone :number.value
    }
    //var userDetails_toString = JSON.stringify(userDetails);
    //localStorage.setItem(`${number.value}`,userDetails_toString)
    //showNewUserOnScreen(userDetails)

    axios.post('https://crudcrud.com/api/af31aca9e62348c8bb8fb49cb296b577/BookingApp',
      userDetails)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    //clearFields
    nameInput.value = ""
    emailInput.value =""
    number.value =""
  }
}
    /* window.addEventListener("DOMContentLoaded",()=>{
      const localStorageObj = localStorage
      const localStorageKeys = Object.keys(localStorageObj)
     for(let i=0; i<localStorageKeys.length ;i++){
        const key = localStorageKeys[i]
        const userDetailsString = localStorageObj[key]
        const userDetailsObject = JSON.parse(userDetailsString)
        showNewUserOnScreen(userDetailsObject)
     }
}) 
    function showNewUserOnScreen(user){
      const parentNode = userList
      const childHTML = `<li id=${user.phone}>${user.name} - ${user.email} - ${user.phone} 
                          <button onclick=deleteUser('${user.phone}')>Delete</button>
                          <button onclick=editDetails('${user.name}','${user.email}','${user.phone}')>Edit</button></li>`
       parentNode.innerHTML = parentNode.innerHTML + childHTML
    }
function deleteUser(phone){
  if(confirm("sure delete?")){
     localStorage.removeItem(phone) 
     removeUserFromScreen(phone)
  }
    
  } 
  function removeUserFromScreen(phone){
    const parentNode = userList
    const childNodeToBeDeleted = document.getElementById(phone);

    parentNode.removeChild(childNodeToBeDeleted)
}
function editDetails(name,email,phone){
  document.getElementById('name').value=name
  document.getElementById('email').value=email
  document.getElementById('Phone').value=phone
  localStorage.removeItem(phone) 
  removeUserFromScreen(phone)
} */