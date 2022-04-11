const products = [
    { 
    id: '1',
    name: 'Pokemon Verde hoja',
    price: 2500,
    category: 'GBA', 
    img:'https://images.wikidexcdn.net/mwuploads/wikidex/3/31/latest/20211108122911/Car%C3%A1tula_de_Verde_Hoja.png',
    stock: 50, 
    description: 'Remake del Pokemon Green salido solo en Japon'
    },
    { 
    id: '2', 
    name: 'Pokemon Rojo fuego', 
    price: 1700, 
    category: 'GBA', 
    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/a/ac/latest/20211108122617/Car%C3%A1tula_de_Rojo_Fuego.png',
    stock: 50, 
    description: 'Remake del juego original del gameboy'
    },
    { 
    id: '3', 
    name: 'Pokemon Esmeralda', 
    price: 1500, 
    category: 'GBA',
    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20211108123052/Caratula_Esmeralda.jpg',
    stock: 50, 
    description: 'Version mejorada de los juegos Pokemon Zafiro y Pokemon Rubi'
    },
    { 
    id: '4', 
    name: 'Pokemon Rojo', 
    price: 1500, 
    category: 'GB',
    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/d/db/latest/20160715095430/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg',
    stock: 50, 
    description: 'Juego original de Pokemon salido en 1988 con Charizard de portada'
    },
    { 
    id: '5', 
    name: 'Pokemon Azul', 
    price: 1200, 
    category: 'GB',
    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/9/9d/latest/20160715095744/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg',
    stock: 50, 
    description: 'Juego original de Pokemon salido en 1988 con Blastoise de portada'
    },
    { 
    id: '6', 
    name: 'Pokemon Amarillo', 
    price: 1500, 
    category: 'GB',
    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160715100157/Pok%C3%A9mon_Amarillo.png',
    stock: 50, 
    description: 'Version mejorada de Pokemon Rojo y Pokemon Azul, con Pikachu como inicial'
    }
]

const categories = [
    {id: 'GBA', description: 'Gameboy Advance'},
    {id: 'GB', description: 'Gameboy'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}


export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok){
                    resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products);
                } else {
                    reject('error');
                }
            }, 500);
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
