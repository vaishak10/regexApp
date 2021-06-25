function validations(field,regex,className,fieldType){
    let fieldName = field.value;
    let fieldRegex = regex;
    if(fieldRegex.test(fieldName)){
        document.querySelector(className).innerHTML = `Valid ${fieldType}: <b class='valid-field'>${fieldName}</b>`;
    } else if(fieldName === ""){
        document.querySelector(className).innerHTML = "" ;
    } else {
        document.querySelector(className).innerHTML = `<b class='invalid-field'>Invalid ${fieldType}</b>`;
    }
}
