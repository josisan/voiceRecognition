//Creamos la variable recognition que tendra la instancia new webkitSpeechRecognition():
const recognition = new webkitSpeechRecognition();
//indicamos el lenguaje de recognition:
recognition.lang = 'es-ES';
//Le decimos que queremos escuchar de forma continua lo que estamos diciendo:
recognition.continuous = true;
//agregamos un evento que cunado tengamos los resultados se ejecutara cierta funcion
recognition.onresult = event =>{
    for (const result of event.results){
        console.log(result[0].transcript);
    }
}
recognition.start();