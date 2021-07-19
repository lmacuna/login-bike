const form =document.getElementById('form');
const us =document.getElementById('username');
const password=document.getElementById('password');



form.addEventListener('submit',function(event){
    event.preventDefault();
  
  
  let users = Array(
         {
             usuario: us.value,
             contrasenia: password.value
         }  
         
  );
        
  console.log(users);
  localStorage.setItem('user',JSON.stringify(users));
  location.href='page.html';
});
var username=localStorage.getItem('user')




