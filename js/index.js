//Declarar variables
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//Leyendo eventos
formulario.addEventListener('sumbit', login);

//Funciones
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        crearMensaje('Verifica tuscampos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto =JSON.parse (localStorage.getItem('usuario'));
        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            crearMensaje('Logincorrecto', 'successs');
            localStorage.setItem('secion', 'activa');
            setTimeout(function() {
                window.open('./inicio.html', '_self');
            },2000);
            
        }
        else{
            crearMensaje('Usuario icorrecto', 'danger');
        }
    }
    else{
        crearMensaje('No hay usuarios registrados', 'danger');
    }


}