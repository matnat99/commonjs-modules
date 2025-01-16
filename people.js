const fullName = require('./names.js')

const hobbiesList = require('./hobbies.js')

person = () =>{
    const fName = fullName('Mattia', 'Natale')
    const hobbies = hobbiesList('Fotografia', 'Giocare al pc', 'Serie tv')

    return {
        fName,
        hobbies
    }
}

console.log(person())