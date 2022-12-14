var express = require("express");
var router = express.Router();


const GOODS = [
    {
      counter: 0,
      favorite: false,
      id: "1",
      name: "SYNOLOGY NAS DISK STATION DS1520",
      descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam iusto omnis inventore ",
      images: [
        {
          id: 1,
          imageUrl: "https://www.mainframe.co.me/modules/uploader/uploads/s_product/pictures/synology-nas-disk-station-ds1520--0.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://m.media-amazon.com/images/I/41gE3-i77hL._AC_SY350_.jpg",
          classes: "no-bg"
        },
        {
          id: 3,
          imageUrl: "https://i0.wp.com/www.nasmaster.com/wp-content/uploads/2022/11/synology-diskstation-ds1522-bays.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://www.engineerscorner.in/wp-content/uploads/2020/10/Synology-DS920-NAS-Unit-1024x768.jpg",
          classes: "bg"
        },
        {
          id: 5,
          imageUrl: "https://cdn.mos.cms.futurecdn.net/XTNaaxujVLEkabhrqQhhcm-480-80.jpg",
          classes: "bg"
        },
        {
          id: 6,
          imageUrl: "https://davejansen.com/content/images/2022/06/IMG_4054.opti-1.webp",
          classes: "bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://www.multicom.me/Katalozi/Slike/Velike/77942-17b0fb02-87f8-4667-aa4b-41f5e1c8870b.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://content2.rozetka.com.ua/goods/images/big/238702817.jpg",
          classes: "no-bg"
        },
        {
          id: 3,
          imageUrl: "https://content2.rozetka.com.ua/goods/images/big/238702819.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://content.rozetka.com.ua/goods/images/big/238702821.jpg",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://7745.by/sites/default/files/imagecache/card_big_image/products/6-6494af015ba014a384d5367ee76ef54b.jpg",
          classes: "no-bg"
        },
        {
          id: 6,
          imageUrl: "https://th.bing.com/th/id/R.1cdf59757d18fe42d12839a9ee2dc1bc?rik=SthF5Kbniv6sAw&pid=ImgRaw&r=0",
          classes: "bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634148620000",
          classes: "no-bg"
        },
        {
          id: 3,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634148614000",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010_AV3?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1634148615000",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010_AV4?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1634148614000",
          classes: "no-bg"
        },
        {
          id: 6,
          imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010_AV6?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1659482007221",
          classes: "no-bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713_2/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "no-bg"
        },
        {
          id: 3,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713_3/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713_4/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "bg"
        },
        {
          id: 5,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713_7/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "bg"
        },
        {
          id: 6,
          imageUrl: "https://www.tradeinn.com/f/13783/137832713_4/xiaomi-mi-4k-laser-projector-150.jpg",
          classes: "bg"
        },
      ],
      img: "https://www.tradeinn.com/f/13783/137832713/xiaomi-mi-4k-laser-projector-150.jpg",
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
      images: [
        {
          id: 1,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1544446886_IMG_1107948.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1536120910_IMG_1061041.jpg",
          classes: "no-bg"
        },
        {
          id: 3,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1536120910_IMG_1061042.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1544447732_IMG_1107958.jpg",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1544452632_IMG_1108046.jpg",
          classes: "no-bg"
        },
        {
          id: 6,
          imageUrl: "https://static.bhphoto.com/images/multiple_images/images500x500/1544454930_IMG_1061044.jpg",
          classes: "no-bg"
        },
      ],
      img: "https://static.bhphoto.com/images/multiple_images/images500x500/1544446886_IMG_1107948.jpg",
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
      images: [
        {
          id: 1,
          imageUrl: "https://www.shopkees.com/cdn/images/1000/4655964666_1627621927.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://m.media-amazon.com/images/I/71kLWFd5hoL._AC_SL1500_.jpg",
          classes: "bg"
        },
        {
          id: 3,
          imageUrl: "https://m.media-amazon.com/images/I/71D2-OsX-hL._AC_SL1500_.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://m.media-amazon.com/images/I/612aqY86Q4L._AC_SL1500_.jpg",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://m.media-amazon.com/images/I/81D7szIF-HL._AC_SL1500_.jpg",
          classes: "bg"
        },

      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://m.media-amazon.com/images/I/61rt14PIodL.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/d517c8944cad4b8e8de83e10a367d9c2_Original.jpg",
          classes: "bg"
        },
        {
          id: 3,
          imageUrl: "https://i.ebayimg.com/images/g/4BQAAOSw4RZg3Hfu/s-l640.jpg",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://uploadvr.com/wp-content/uploads/2019/04/Valve-Index-People_08.jpg",
          classes: "no-bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://m.media-amazon.com/images/I/813GAqvZQlL._SL1500_.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwb6a3fdcf/JBL_Charge4_Back_Midnight_Black_1605x1605px.png?sw=537&sfrm=png",
          classes: "bg"
        },
        {
          id: 3,
          imageUrl: "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwbf2622bd/JBL_Charge4_Top_Midnight_Black_1605x1605px.png?sw=537&sfrm=png",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw50a3d792/JBL_Charge4_Hero_Midnight_Black_1605x1605px.png?sw=537&sfrm=png",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwecf103eb/JBL_Charge4-Water_Splash_Black_Hero-1605x1605px.png?sw=537&sfrm=png",
          classes: "bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://ae01.alicdn.com/kf/U895b8ffc37974b5d862ecc663cb2347fY/Backpack-XD-Design-Bobby-hero-XL.jpg",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://www.xd-design.com/media/wysiwyg/Black_PP6_3.png",
          classes: "bg"
        },
        {
          id: 3,
          imageUrl: "https://www.xd-design.com/media/wysiwyg/Black_PP12_3.png",
          classes: "no-bg"
        },
        {
          id: 4,
          imageUrl: "https://www.xd-design.com/media/wysiwyg/Black_PP14_1.png",
          classes: "no-bg"
        },
        {
          id: 5,
          imageUrl: "https://www.xd-design.com/media/wysiwyg/Black_PP11_2.png",
          classes: "no-bg"
        },
        {
          id: 6,
          imageUrl: "https://www.xd-design.com/media/wysiwyg/Black_PP9_2.png",
          classes: "no-bg"
        },
      ],
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
      images: [
        {
          id: 1,
          imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
          classes: "no-bg"
        },
        {
          id: 2,
          imageUrl: "https://cdn.tiramisuerp.com/s3.tehnoplus.me/269527_13757.jpg",
          classes: "bg"
        },
        {
          id: 3,
          imageUrl: "https://cdn.tiramisuerp.com/s3.tehnoplus.me/269507_13757.jpg",
          classes: "bg"
        },
        {
          id: 4,
          imageUrl: "https://cdn.tiramisuerp.com/s3.tehnoplus.me/269515_13757.jpg",
          classes: "bg"
        },
        {
          id: 5,
          imageUrl: "https://cdn.tiramisuerp.com/s3.tehnoplus.me/269518_13757.jpg",
          classes: "bg"
        },
      ],
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