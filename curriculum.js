function borrar() {
    document.getElementById('subtitulo').innerHTML = "";
    document.getElementById('subtitulo-menor').innerHTML = "";
    document.getElementById('texto').innerHTML = "";
    document.getElementById('texto2').innerHTML = "";
    document.getElementById('subtitulo-menor2').innerHTML = "";
    document.getElementById('texto3').innerHTML = "";
    document.getElementById('texto4').innerHTML = "";
    document.getElementById('subtitulo-menor3').innerHTML = "";
    document.getElementById('texto5').innerHTML = "";
    document.getElementById('texto6').innerHTML = "";
    document.getElementById('subtitulo-menor4').innerHTML = "";
    document.getElementById('texto7').innerHTML = "";
    document.getElementById('texto8').innerHTML = "";
}

document.getElementById("perfil-p").onclick= function () {
    console.log("Capturamos el click en Perfil Personal");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Perfil Personal";
    document.getElementById('texto').innerHTML = "Estudiante de segundo año de la carrera Analista programador. con conocimientos intermedios en informática. Responsable, puntual y buen compañero en ambientes laborales. A la espera de una nueva oportunidad.";
};

document.getElementById("formacion").onclick= function () {
    console.log("Capturamos el click en Formación académica");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Formación Académica";
    document.getElementById('subtitulo-menor').innerHTML = "PRIMARIA ESCUELA MANUEL BELGRANO(MENDOZA, ARGENTINA)";
    document.getElementById('texto').innerHTML = "2010-2016 Promedio 9,87.";
    document.getElementById('texto2').innerHTML = "Abanderado suplente, Escuela pública";
    document.getElementById('subtitulo-menor2').innerHTML = "SECUNDARIA: ESCUELA DE COMERCIO MARTIN ZAPATA(MENDOZA, ARGENTINA)";
    document.getElementById('texto3').innerHTML = "2017-2021 promedio 8,71.";
    document.getElementById('texto4').innerHTML = "Titulo: Bachiller en Informática. Colegio perteneciente a la Universidad Nacional de Cuyo.";
    document.getElementById('subtitulo-menor3').innerHTML = "TERCIARIA: UNIVERSIDAD ABIERTA INTERAMERICANA";
    document.getElementById('texto5').innerHTML = "2022-Actualidad";
    document.getElementById('texto6').innerHTML = "Carrera Analista programador a distancia, cursando el primer año";
    document.getElementById('subtitulo-menor4').innerHTML = "CURSO ARGENTINA PROGRAMA 4";
    document.getElementById('texto7').innerHTML = "2023-Actualidad.";
    document.getElementById('texto8').innerHTML = "Cursando la primera parte de Desarrollo de Frontend.";
};

document.getElementById("informacion").onclick= function () {
    console.log("Capturamos el click en Información");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Información personal";
    document.getElementById('texto').innerHTML = "Edad: 20 Años";
    document.getElementById('texto3').innerHTML = "Fecha de nacimiento: 2/4/2002";
    document.getElementById('texto5').innerHTML = "Nacionalidad: Argentina";
    document.getElementById('texto7').innerHTML = "Dirección: 7371 Oak Lawn Ave";
};

document.getElementById("experiencia").onclick= function () {
    console.log("Capturamos el click en Experiencia Laboral");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Experiencia Laboral";
    document.getElementById('subtitulo-menor').innerHTML = "Pasantía en la Empresa Ualá";
    document.getElementById('texto').innerHTML = "Sector Frontend";
    document.getElementById('subtitulo-menor2').innerHTML = "Pasantía en la Empresa Personal";
    document.getElementById('texto3').innerHTML = "Encargado en desarrolo de backend";
};

document.getElementById("contacto").onclick= function () {
    console.log("Capturamos el click en Contacto");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Contacto";
    document.getElementById('subtitulo-menor').innerHTML = "Teléfono";
    document.getElementById('texto').innerHTML = "Celular: +410 753-4178";
    document.getElementById('texto2').innerHTML = "Fijo: +410 444 6270";
    document.getElementById('subtitulo-menor2').innerHTML = "Mail";
    document.getElementById('texto3').innerHTML = "Levi.Holt@gmail.com";
    document.getElementById('texto4').innerHTML = "leviholt@hotmail.com";
};

document.getElementById("conocimientos").onclick= function () {
    console.log("Capturamos el click en Conocimientos y Habilidades");
    borrar();
    document.getElementById('subtitulo').innerHTML = "Conocimientos y habilidades";
    document.getElementById('subtitulo-menor').innerHTML = "Office";
    document.getElementById('texto').innerHTML = "Word: * * * * *";
    document.getElementById('texto2').innerHTML = "Excel: * * *";
    document.getElementById('subtitulo-menor2').innerHTML = "Programas";
    document.getElementById('texto3').innerHTML = "HTML-CSS-JS: * *";
    document.getElementById('texto4').innerHTML = "SQL: *";
    document.getElementById('subtitulo-menor3').innerHTML = "Habilidades Personales";
    document.getElementById('texto5').innerHTML = "Capacidad de trabjo en equipo y relaciones interpersonales";
    document.getElementById('texto6').innerHTML = "Capacidad de adaptación";
    document.getElementById('subtitulo-menor4').innerHTML = "Extras";
    document.getElementById('texto7').innerHTML = "Pro Activo";
    document.getElementById('texto8').innerHTML = "Manejo de Ingles: * * *";
};
