function validations(field,regex,className,fieldType){
    let fieldName = field.value;
    let fieldRegex = regex;
    if(fieldRegex.test(fieldName)){
        document.querySelector(className).innerHTML = `Valid ${fieldType}: <strong class='valid-field'>${fieldName}</strong>`;
    } else if(fieldName === ""){
        document.querySelector(className).innerHTML = "" ;
    } else {
        document.querySelector(className).innerHTML = `<strong class='invalid-field'>Invalid ${fieldType}</strong>`;
    }
}
