var express = require("express");
var router = express.Router();


const GOODS = [
    {
      counter: 0,
      favorite: false,
      id: "1",
      name: "SYNOLOGY NAS DISK STATION DS1520",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://www.mainframe.co.me/modules/uploader/uploads/s_product/pictures/synology-nas-disk-station-ds1520--0.jpg",
      price: "677",
      category: [
        "gadgets",
        "computing"
      ],
      sale: "20"
    },
    {
      counter: 0,
      favorite: false,
      id: "2",
      name: "TP-LINK Archer C80",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://www.multicom.me/Katalozi/Slike/Velike/77942-17b0fb02-87f8-4667-aa4b-41f5e1c8870b.jpg",
      price: "250",
      category: [
        "computing"
      ],
      sale: "0"
    },
    {
      counter: 0,
      favorite: false,
      id: "3",
      name: "Apple MacBook Air 13",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
      price: "1029",
      category: [
        "computing"
      ],
      sale: "0"
    },
    {
      counter: 0,
      favorite: false,
      id: "4",
      name: "Xiaomi Mi 4K Laser Projector 150",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi-Projector_grande_00efbef2-7fc0-4806-b820-bbc75743202b_grande.png?v=1616613722",
      price: "2112",
      category: [
        "tv"
      ],
      sale: "40"
    },
    {
      counter: 0,
      favorite: false,
      id: "5",
      name: "Canon EOS R",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://m.media-amazon.com/images/I/81UnZLEsujL._SY450_.jpg",
      price: "1624",
      category: [
        "photo"
      ],
      sale: "10"
    },
    {
      counter: 0,
      favorite: false,
      id: "11",
      name: "Amazfit T-Rex Pro",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://www.shopkees.com/cdn/images/1000/4655964666_1627621927.jpg",
      price: "135",
      category: [
        "gadgets"
      ],
      sale: "15"
    },
    {
      counter: 0,
      favorite: false,
      id: "21",
      name: "Valve Index VR KIT",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://m.media-amazon.com/images/I/61rt14PIodL.jpg",
      price: "1489",
      category: [
        "gadgets",
        "computing"
      ],
      sale: "10"
    },
    {
      counter: 0,
      favorite: false,
      id: "31",
      name: "JBL Charge 4",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://m.media-amazon.com/images/I/813GAqvZQlL._SL1500_.jpg",
      price: "135",
      category: [
        "gadgets"
      ],
      sale: "10"
    },
    {
      counter: 0,
      favorite: false,
      id: "41",
      name: "XD Design Bobby Hero XL",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://ae01.alicdn.com/kf/U895b8ffc37974b5d862ecc663cb2347fY/Backpack-XD-Design-Bobby-hero-XL.jpg",
      price: "124",
      category: [
        "tourism"
      ],
      sale: "20"
    },
    {
      counter: 0,
      favorite: false,
      id: "51",
      name: "Sony PlayStation 5",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      img: "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
      price: "731",
      category: [
        "gadgets",
        "computing"
      ],
      sale: "20"
    }
]

router.get("/", function(req, res) {
    res.send(GOODS);
});

module.exports = router;