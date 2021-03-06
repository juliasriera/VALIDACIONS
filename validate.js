
//LOGIN

const form = document.getElementById('login');

function login() {

	var acumErrores = 0;
	form.classList.remove('is-invalid');
	
	var valueEmail = document.getElementById('email');
	var valuePassword = document.forms["formulario"]["password"];

	if(valueEmail.value == "") {
		valueEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
        
    }else if(!validar_email(valueEmail.value)){
		valueEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(valuePassword.value == "") {
		valuePassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;

    }else{

		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}



//REGISTRO

const reg = document.getElementById('registro');

function registro() {

	var acumErrores = 0;
	reg.classList.remove('is-invalid');
	
	var emailV= document.getElementById('e-mail');
    var PswV = document.forms["miRegistro"]["psw"];
    var inputProvince = document.forms["miRegistro"]["inputProvince"];
    var PswV2 = document.forms['miRegistro']["psw2"]

	if(emailV.value == "") {
		emailV.classList.add("is-invalid");
		document.getElementById("erEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
        
    }else if(!validar_email(emailV.value)){
		emailV.classList.add("is-invalid");
		document.getElementById("erEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(PswV.value == "") {
		PswV.classList.add("is-invalid");
		document.getElementById("erPassword").textContent = "Es campo es obligatorio";
		acumErrores ++;
    }

    if (PswV2.value == "") {
        PswV2.classList.add("is-invalid");
        document.getElementById("erPassword2").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }

    
    if (PswV2.value !== PswV.value) {
        PswV2.classList.add("is-invalid");
        document.getElementById("erPassword2").textContent = "las contraseñas no coinciden";
        acumErrores ++;
    }

    
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;

    }else{

		return true;
	}
}

reg.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}


// BUSCADOR

const cercar = document.getElementById('buscador')

function buscar() {

    var acumErrores = 0;
	cercar.classList.remove('is-invalid');

    

	if(cercar.value == ""){

        cercar.classList.add("is-invalid");
		document.getElementById("erBuscador").textContent = "Campo obligado";
		acumErrores ++;      
    }


    if (acumErrores > 0){
        return false;

    }else{

		return true;
	}

}

