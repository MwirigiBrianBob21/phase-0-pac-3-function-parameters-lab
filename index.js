// // var name=Aki

// function introduction(name = "Aki"){
//     return (`Hi, my name is ${name}`);
// }


// function introductionWithLanguageOptional(name="Aki", language=""){
//     return (`Hi, my name is ${name="Gracie"} and I am learning to program in ${language="JavaScript"}`)
// }



function introduction(name="Aki"){
     return (`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name="Aki", language="Ember.js"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name="Aki", language="JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

