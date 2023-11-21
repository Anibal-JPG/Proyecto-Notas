///////////////////////-------------PROYECTO NOTAS-------------------/////////////////////



const notes = [
    {noteInfo: "Una variable puede declararse usando * const * o * let *."},
    {noteInfo: "Un arreglo es un conjunto de datos ordenados."}
];

 function printNotes() {
    for(let i = 0; i < notes.length; i++){
        const vizualicerNotes = `${i}. ${notes[i].noteInfo}`;
        console.log(vizualicerNotes);
     }
 }
function printInterface() {
    console.log(`Ustes tiene ${notes.length} notas.`)  /// correguir
    printNotes();
    console.log("----------------------");
    console.log("1. Crear una nota");
    console.log("2. Editar una nota");
    console.log("3. Eliminar notas");   
}
function addNotes() {
    const comment = prompt("Agregar una nota.");
    const newNotes = {noteInfo: comment};  /// poner newnotes
    notes.push(newNotes);
    console.clear();
    printInterface();
}
function editNote() {
    let indexNote = parseInt(prompt("seleccione el indice de la nota a editar.")); // quitar la s de indexnote
    while (isNaN(indexNote) || indexNote < 0 || indexNote >= notes.length) {
        alert("Escriba un indice valido");
        indexNote = parseInt(prompt("Seleccione el indice de la nota a editar:"));
      }
    const viuwNotes = notes[indexNote].noteInfo;
    const modifyNoteInfo = prompt("Modifique su nota.", );
    notes[indexNote].noteInfo = modifyNoteInfo;
    console.clear();
    printInterface();
}
function eliminateNote() {
    let indexNote = parseInt(prompt("seleccione el indice de la nota que desea eliminar."));
    while (isNaN(indexNote) || indexNote < 0 || indexNote >= notes.length) {
        alert("Escriba un indice valido");
        indexNote = parseInt(prompt("Seleccione el indice de la nota a eliminar:"));
      }
    notes.splice(indexNote, 1);
    console.clear();
    printInterface();
}
printInterface();

let userOption = prompt("ingrese un numero de el 1 al 3", 0);

while (userOption !== null) {
    if (userOption === "1") {
        addNotes();
    }else if (userOption === "2"){
        editNote();
    }else if(userOption === "3"){
        eliminateNote();
    }else{
        alert("Por favor escriba un numero correcto.")
    }
    userOption = prompt("ingrese un numero de el 1 al 3", 0);
}

alert("Gracias por usar AppNotes");
