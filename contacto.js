function validarFormulario() {
    
    var expReg = /[a-zA-Z]\w+\w/;
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var descripcion = document.getElementById("descripcion").value.trim();

    if (nombre ==="" || email==="" || descripcion==="") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    if(!expReg.test(nombre)){
        alert("Por favor, ingres un nombre válido.");
        return false; // Evita el envío del formulario
    }
    // Validación adicional del campo de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false; // Evita el envío del formulario
    }


    // Si todo está bien, puedes enviar el formulario
    return true;

 }