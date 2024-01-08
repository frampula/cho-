// const user = {
//     name: 'John',
//     lastName: 'Doe',
//     age: 20,
//     'favouirite color': 'red'
// }


// for (let key in user) {
//     console.log(`${key} ---> ${user[key]}`)
// }

const obj = {
    key1: 'Izi',
    key2: 'Pizi',
    key3: 'Lemon',
    key4: 'Squezy'
}

function voicetag () {
    for (let key in obj) {
        console.log(` '${key}': *${obj[key]}*`)
    }
}

console.log(voicetag ())