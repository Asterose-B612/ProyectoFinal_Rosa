const products = [
    {
      id: '1',
      image: 'https://images.idgesg.net/images/article/2017/08/dell_xps_13_right_side_half-open_3qtr-cropped-100733555-orig.jpg',
      title: 'Dell XPS 13',
      price: 500019,
      category: 'Notebooks',
      itHasDues: true,
      isAnOffer: false,
      stock: 5
    },

    {
      id: '2',
      image: 'https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7376101810974_1991754528.jpg',
      title: 'Apple iPhone 14 Pro Max',
      category: 'Smartphones',
      price: 890999,
      itHasDues: false,
      isAnOffer: true,
      stock: 8
    },

    {
      id: '3',
      image: 'https://th.bing.com/th/id/R.dd8770ef96efbf3725cc82d3c00161bf?rik=ejg3K7qbx2D%2bmA&pid=ImgRaw&r=0',
      title: 'Apple MacBook Pro',
      price: 390000,
      category: 'Notebooks',
      itHasDues: true,
      isAnOffer: true,
      stock: 10
    },

    {
      id: '4',
      image: 'https://th.bing.com/th/id/OIP.6h7rf2NCBV6X-7UL7SDZQQHaEc?pid=ImgDet&rs=1',
      title: 'Huawei MatePad Pro',
      price: 490000,
      category: 'Tablets',
      itHasDues: false,
      isAnOffer: false,
      stock: 11
    },

    {
      id: '5',
      image: 'https://th.bing.com/th/id/R.b0f1de5b30bd996f259b8a9c2b8d5ef1?rik=2DbnJzce%2fRfl7w&pid=ImgRaw&r=0',
      title: 'Apple iPad Pro',
      price: 590000,
      category: 'Notebooks',
      itHasDues: true,
      isAnOffer: true,
      stock: 10
    },

    {
      id: '6',
      image: 'https://th.bing.com/th/id/R.336e8d9b20537ff7f8e6328b4f09dab6?rik=KzVlyza9dRBifA&pid=ImgRaw&r=0',
      title: 'Xiaomi Redmi Pad SE',
      price: 69000,
      category: 'Tablets',
      itHasDues: false,
      isAnOffer: false,
      stock: 10
    },

    {
      id: '7',
      image: 'https://fdn.gsmarena.com/imgroot/news/22/01/lenovo-tab-p12-pro-android-12l-beta-2/inline/-1200/gsmarena_001.jpg',
      title: 'Lenovo Tab P12 Pro',
      price: 790000,
      category: 'Notebooks',
      itHasDues: true,
      isAnOffer: true,
      stock: 7
    },

    {
      id: '8',
      image: 'https://i5.walmartimages.com/asr/4b82505c-9988-4bde-b2fb-e899a8aa345a.115ed912d260407419bccf8f859442b0.jpeg',
      title: 'Apple iPhone Pro',
      price: 890000,
      category: 'Smartphones',
      itHasDues: false,
      isAnOffer: false,
      stock: 18
    },

    {
      id: '9',
      image: 'https://th.bing.com/th/id/OIP.zi801rYOccfivC3VRbf2WgHaDn?pid=ImgDet&rs=1',
      title: 'Microsoft Surface Go 3',
      price: 990000,
      category: 'Notebooks',
      itHasDues: true,
      isAnOffer: true,
      stock: 30
    },

    {
      id: '10',
      image: 'https://p2-ofp.static.pub/ShareResource/na/products/lenovo-laptops/560x450/lenovo-loq-15-inch-01.png',
      title: 'Lenovo LOQ',
      price: 454109,
      category: 'Notebooks',
      itHasDues: false,
      isAnOffer: false,
      stock: 20
    },

    {
      id: '11',
      image: 'https://th.bing.com/th/id/OIP.1Js7VtZgQQXMsOU5bQV'
    },

    {
      id: '12',
      image: 'https://th.bing.com/th/id/R.34410c6e45a32d7cf37e01d7a6210712?rik=DskSXDY5mNLVKA&pid=ImgRaw&r=0',
      title: 'Apple iPhone 14',
      price: 129000,
      category: 'Smartphones',
      itHasDues: false,
      isAnOffer: false,
      stock: 12
    },

    {
      id: '13',
      image: 'https://th.bing.com/th/id/OIP.wIh29PZ_yFHWwdEsFExXDQHaFj?pid=ImgDet&rs=1',
      title: 'HP eNVY X360',
      price: 435139,
      category: 'Tablets',
      itHasDues: true,
      isAnOffer: true,
      stock: 1
    },

    {
      id: '14',
      image: 'https://www.geekbuying.pl/28432-large_default/dere-t30-pro-2-in-1-laptop-13-inch-2k-ips-touch-screen-tablet-pc-magic-keyboard-stylus-pen-16gb-ddr4-1tb-ssd-green.jpg',
      title: 'Dere T30 Pro',
      price: 490000,
      category: 'Tablets',
      itHasDues: false,
      isAnOffer: false,
      stock: 10
    }

  ];

//funcion que retorna una promesa y esa promesa va a ser resuelta luego de un tiempo. Este tiempo sirve para emular retrazos en la web 
  export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })
  }

  //funcion find a partir del array del producto que recibe por parametros el productId utilizado para devolver aquel producto que queremos mostrar. El setTimeout emula los retrazos de la red
  export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find( prod => prod.id === productId))
        }, 500)
    })
  }

  
  export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.filter( prod => prod.category === categoryId))
        }, 500)
    })
  }
