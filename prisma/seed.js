const prisma = require('../src/models/prisma-model')

const data = [
    {
      "name": "SKbasic",
      "model": "SNEAKER",
      "color": "WHITE",
      "image": "https://img2.pic.in.th/pic/SKbasic.png",
      "price": 500,
      "stock": 1
    },
    {
      "name": "SKripple",
      "model": "SNEAKER",
      "color": "WHITE",
      "image": "https://img5.pic.in.th/file/secure-sv1/SKripplec0e1f80a91a43f75.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SKplatform",
      "model": "SNEAKER",
      "color": "WHITE",
      "image": "https://img5.pic.in.th/file/secure-sv1/SKplatfrom.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SKmax",
      "model": "SNEAKER",
      "color": "WHITE",
      "image": "https://img5.pic.in.th/file/secure-sv1/SKmax.png",
      "price": 1000,
      "stock": 1
    },
    {
      "name": "SPbasic",
      "model": "SPORT",
      "color": "WHITE",
      "image": "https://img2.pic.in.th/pic/SPbasic.png",
      "price": 500,
      "stock": 1
    },
    {
      "name": "SPblow",
      "model": "SPORT",
      "color": "WHITE",
      "image": "https://img5.pic.in.th/file/secure-sv1/SPblow.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SPsiva",
      "model": "SPORT",
      "color": "WHITE",
      "image": "https://img5.pic.in.th/file/secure-sv1/SPsiva.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SKbasic",
      "model": "SNEAKER",
      "color": "BLACK",
      "image": "https://img5.pic.in.th/file/secure-sv1/SKbasic_black.png",
      "price": 500,
      "stock": 1
    },
    {
      "name": "SKripple",
      "model": "SNEAKER",
      "color": "BLACK",
      "image": "https://img5.pic.in.th/file/secure-sv1/SKripple_black.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SKplatform",
      "model": "SNEAKER",
      "color": "BLACK",
      "image": "https://img2.pic.in.th/pic/SKplatform_black.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SKmax",
      "model": "SNEAKER",
      "color": "BLACK",
      "image": "https://img2.pic.in.th/pic/SKmax_black.png",
      "price": 1000,
      "stock": 1
    },
    {
      "name": "SPbasic",
      "model": "SPORT",
      "color": "BLACK",
      "image": "https://img5.pic.in.th/file/secure-sv1/SPbasic_black.png",
      "price": 500,
      "stock": 1
    },
    {
      "name": "SPblow",
      "model": "SPORT",
      "color": "BLACK",
      "image": "https://img5.pic.in.th/file/secure-sv1/SPblow_black.png",
      "price": 750,
      "stock": 1
    },
    {
      "name": "SPsiva",
      "model": "SPORT",
      "color": "BLACK",
      "image": "https://img2.pic.in.th/pic/SPsiva_black.png",
      "price": 750,
      "stock": 1
    }
  ]
  


const seedData = async() => {
    return await prisma.product.createMany({data})
}

seedData();