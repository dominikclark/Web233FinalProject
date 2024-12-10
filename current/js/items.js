"use strict"

// Array used to store all of the products on the page.
// Some of the products will use elements such as <s> and <u> to use formatting about info with the product.
// Higher product spec prices will not be apart of the website due to time constraints, only lower will be up for purchase.
const productsAndServices = [{
    id: 0,
    id: 0,
    title: "Surface Laptop Go 3 (Windows 11)",
    description: "Intel Core i5, 16 GB RAM & 256 GB SSD",
    price: "$799.99", // This is for the HTML on the products page
    intPrice: "799.99", // For calculations for the cart purchase page.
    productImage: "imgs/thumb/Surface.jpg",
    highResImage: "imgs/highres/Surface.webp",
},
{
    id: 1,
    id: 1,
    title: "Dell XPS 13 (Windows 11)",
    description: "Snapdragon X Elite, 16 GB RAM & 512 GB SSD",
    price: "<s> $1,199.99</s> $849.99", // <s> element is used to add the orginal price of the product
    intPrice: "849.99",
    productImage: "imgs/thumb/XPS13.jpg",
    highResImage: "imgs/highres/XPS13.webp",
},
{
    id: 2,
    id: 2,
    title: "HP Omen (Windows 11)",
    description: "Intel Core i7, RTX 4070 & 16 GB RAM",
    price: "$1,949.99",
    intPrice: "1949.99",
    productImage: "imgs/thumb/Omen.jpg",
    highResImage: "imgs/highres/Omen.webp",
},
{
    id: 3,
    id: 3,
    title: "REFURBISHED ASUS D520MT (Windows 10/11)",
    description: "Up to Intel Core i7, 64 GB RAM & 2TB SSD",
    price: "$499.99 BASE <s> $699.99 MAX </s>", // <s> element is used to display that the higher end spec is out of stock
    intPrice: "499.99",
    productImage: "imgs/thumb/D520MT.jpg",
    highResImage: "imgs/highres/D520MT.jpg",
},
{
    id: 4,
    id: 4,
    title: "REFURBISHED Dell Optiplex 3010 (Windows 10)",
    description: "Intel Core i5, 500 GB HHD & 16 GB RAM",
    price: "$249.99",
    intPrice: "249.99",
    productImage: "imgs/thumb/Optiplex3010.jpg",
    highResImage: "imgs/highres/Optiplex.jpg",
},
{ // Services are displayed for id numbers 6-9, these use the price as the base level fee and all use only the custom wrench image.
    id: 5,
    id: 5,
    title: "CUSTOM BUSINESS PC BUILDING ",
    description: "Will be built to clients specfications, add to cart for the base service fee",
    price: "$100 BOOKING/SERVICE FEE PRICE WILL VARY FROM BUILD",
    intPrice: "100",
    productImage: "imgs/thumb/Custom.jpg",
    highResImage: "imgs/highres/BuildingComp.jpg",
},
{
    id: 6,
    id: 6,
    title: "CUSTOM HOME PC BUILDING ",
    description: "Will be built to clients specfications, add to cart for the base service fee",
    price: "$100 BOOKING/SERVICE FEE PRICE WILL VARY FROM BUILD",
    intPrice: "100",
    productImage: "imgs/thumb/Custom.jpg",
    highResImage: "imgs/highres/BuildingComp.jpg",
},
{
    id: 7,
    id: 7,
    title: "CUSTOM GAMING PC BUILDING ",
    description: "Will be built to clients specfications, add to cart for the base service fee",
    price: "$100 BOOKING/SERVICE FEE PRICE WILL VARY FROM BUILD",
    intPrice: "100",
    productImage: "imgs/thumb/Custom.jpg",
    highResImage: "imgs/highres/BuildingComp.jpg",
},
{ // Still a service just lower price for booking fee.
    id: 8,
    id: 8,
    title: "MAC & PC REPAIR ",
    description: "Will be built to clients specfications, add to cart for the base service fee",
    price: "$75 BOOKING/SERVICE FEE PRICE WILL VARY FROM BUILD",
    intPrice: "75",
    productImage: "imgs/thumb/Custom.jpg",
    highResImage: "imgs/highres/RepairingComp.jpg",
},
{
    id: 9,
    id: 9,
    title: "Macbook Pro",
    description: "Apple M2, 8 GB RAM & 256GB SSD",
    price: "$899.99 <u> GREAT PRICE! </u>",
    intPrice: "899.99",
    productImage: "imgs/thumb/M2Book.jpg",
    highResImage: "imgs/highres/M2Book.webp",
},
{
    id: 10,
    id: 10,
    title: "REFURBISHED iMac (2017)",
    description: "Intel Core i5, 8 GB RAM & 1TB HDD",
    price: "$449.99",
    intPrice: "449.99",
    productImage: "imgs/thumb/iMac.jpg",
    highResImage: "imgs/highres/iMac.jpg",
},
{
    id: 11,
    id: 11,
    title: "REFURBISHED Xserve",
    description: "Mac based server great for hosting websites Contact Us for the exact specfications of model if needed",
    price: "$749.99",
    intPrice: "749.99",
    productImage: "imgs/thumb/Xserve.jpg",
    highResImage: "imgs/highres/Xserve.jpg",
}]