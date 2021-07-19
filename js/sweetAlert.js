const usernav = document.getElementById('usernav');
const close = document.getElementById('close');
var username= JSON.parse(localStorage.getItem('user'));

if(username!==null){
    usernav.innerHTML=' <strong><a href="#" id="close"class="nav-item nav-link active">'+username[0].usuario+'</a></strong>'
   
}else if(username){
    usernav.innerHTML=' <a href="index.html" id="close"class="nav-item nav-link active">Iniciar sesión</a>'
}
close.addEventListener('click',function(){
    localStorage.clear('user');
    location.href='index.html';
});
console.log(username);

(function getHour(){
    const h = new Date();
    const hours=((h.getHours()<10)? "0" : "")+h.getHours();
    const minutes=((h.getMinutes()<10)?"0": "")+h.getMinutes();
    const secs=((h.getSeconds()<10)?"0":"")+h.getSeconds();
    document.write("hora actual: "+hours+":"+minutes+":"+secs);
    document.write('<br>');
    if(username!=null){
        saludar(hours,username)
    }else{
        Swal.fire("debes loguearte")
    }
   
})();


function saludar(hours,username){
    if(username!=null){
        if(hours<("0"+7)){
            return Swal.fire("hola buenas madrugadas\n"+(username[0].usuario).toUpperCase());
        }else if(hours>("0"+6)&&hours<13){
            return Swal.fire("Buenos dias\n"+(username[0].usuario).toUpperCase());
        }else if(hours>12&&hours<20){
            return Swal.fire('Buenas tardes\n '+(username[0].usuario).toUpperCase());
        }else if(hours>19&&hours<24){
           
            return Swal.fire("buenas noches\n"+(username[0].usuario).toUpperCase());
        }
    }

}

/*
function saludo(){
    Swal.fire({
        title:
    });
}*/



