const products = [
    {
      id: 1,
      name: 'Xiaomi',
      brand: 'Redminote 11 pro',
      color: 'blue',
      storage: '128gb',
      description:'Telefono xiaomi color blue con 128gb',
      ram: '4gb',
      img: 'https://http2.mlstatic.com/D_NQ_NP_610343-MLA48770734179_012022-O.jpg',
      price: '120000',
      stock: 10,
    }, 
    {
        id: 2,
        name: 'Samsung',
        brand: 'Galaxy S10',
        color: 'black',
        storage: '128gb',
        description:'Telefono Samsung galaxy S10 negro con 128gb',
        ram: '8gb',
        img: 'https://i.blogs.es/addc23/samsung-galaxy-s10/1366_2000.jpg',
        price: '180000',
        stock: 5,
      }
  ]

  export const getProducts = () => {
      return new Promise (resolve =>{
          setTimeout(()=>{
              resolve(products)
          }, 2000)
      })
  }
