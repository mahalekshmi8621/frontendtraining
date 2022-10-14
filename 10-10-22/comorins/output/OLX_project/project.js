const product_list=[
    {
    id:1,
    name:"scooty",
    price: "Rs.50,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/uc93s7muoyf93-IN/image;s=300x600;q=60",
    location:"Ngercoil",
    contact:"1234567890"
    },
    {
    id:2,
    name:"mobile",
    price: "Rs.20,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/i7lgkrq40ny62-IN/image;s=780x0;q=60",
    location:"chennai",
    contact:"1234567890"
    },
    {
    id:3,
    name:"car",
    price: "Rs.6,00,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/z3bv3l3hgvw8-IN/image;s=300x600;q=60",
    location:"Ngercoil",
    contact:"1234567890"
    },
    {
    id:4,
    name:"earpods",
    price: "Rs.1,500",
    image:"https://apollo-singapore.akamaized.net/v1/files/gmvpe8wkoepe3-IN/image;s=300x600;q=60",
    location:"Thirunelveli",
    contact:"1234567890"
    },
    {
    id:5,
    name:"Smart Watch",
    price: "Rs.995",
    image:"https://apollo-singapore.akamaized.net/v1/files/6ue0174uqdar2-IN/image;s=300x600;q=60",
    location:"Madurai",
    contact:"1234567890"
    },
    {
    id:6,
    name:"LED projector",
    price: "Rs.3,500",
    image:"https://apollo-singapore.akamaized.net/v1/files/0150adyrnom12-IN/image;s=300x600;q=60",
    location:"Trichi",
    contact:"1234567890"
    },
    {
    id:7,
    name:"snikers",
    price: "Rs.1,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/x809khh20ce1-IN/image;s=300x600;q=60",
    location:"kerala",
    contact:"1234567890"
    },
    {
    id:8,
    name:"trimmer",
    price: "Rs.800",
    image:"https://apollo-singapore.akamaized.net/v1/files/wl6idyw7xkjg2-IN/image;s=300x600;q=60",
    location:"punjob",
    contact:"1234567890"
    },
    {
    id:9,
    name:"bike",
    price: "Rs.2,00,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/whi0zwe2ot5w-IN/image;s=300x600;q=60",
    location:"chennai",
    contact:"1234567890"
    },
    {
    id:10,
    name:"sofa set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    contact:"1234567890"
    },
    {
    id:11,
    name:"3D projector",
    price: "Rs.3,300",
    image:"https://apollo-singapore.akamaized.net/v1/files/z0n1bk6qkd4r-IN/image;s=300x600;q=60",
    location:"coimbator",
    contact:"1234567890"
    },
    {
    id:12,
    name:"Watch",
    price: "Rs.5,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/hv1fllwqr7a22-IN/image;s=300x600;q=60",
    location:"bangaloor",
    contact:"1234567890"
    },
    {
    id:13,
    name:"iphone",
    price: "Rs.16,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/ntse6ssjyetu1-IN/image;s=300x600;q=60",
    location:"chennai",
    contact:"1234567890"
    },
    {
    id:14,
    name:"Ps4 & ps5 fifa 23 games available",
    price: "Rs.4,500",
    image:"https://apollo-singapore.akamaized.net/v1/files/2uidntdzznfv1-IN/image;s=300x600;q=60",
    location:"nagercoil",
    contact:"1234567890"
    },
    {
    id:15,
    name:"New i7 pro max smart watches",
    price: "Rs.1,232",
    image:"https://apollo-singapore.akamaized.net/v1/files/xgz210lye0vm3-IN/image;s=300x600;q=60",
    location:"thirunelveli",
    contact:"1234567890"
    },
    {
    id:16,
    name:"New toothpaste dispenser",
    price: "Rs.399",
    image:"https://apollo-singapore.akamaized.net/v1/files/2nq4vvtenr0x1-IN/image;s=300x600;q=60",
    location:"nagercoil",
    contact:"1234567890"
    }
];

product_list.forEach((Element,i) =>{
const section=document.querySelector(".section");

const card = document.createElement('div');
card.classList = 'card';

const productcard = `

          <a target='blank' href="viewpage.html?id="+product_list[i].id=">"+product_list[i].name+"</a>
          <img src="${product_list[i].image}" alt="">
          <div class="info">
            <h3>${product_list[i].price}<h3>
            <span>${product_list[i].name}</span>
          </div>
         

`;

card.innerHTML += productcard;
section.appendChild(card);

});
