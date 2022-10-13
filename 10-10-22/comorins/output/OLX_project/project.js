let product_list=[
    {
    id:1,
    name:"scooty",
    price: "Rs.50,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/uc93s7muoyf93-IN/image;s=300x600;q=60",
    location:"Ngercoil",
    },
    {
    id:2,
    name:"mobile",
    price: "Rs.20,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/i7lgkrq40ny62-IN/image;s=780x0;q=60",
    location:"chennai",
    },
    {
    id:3,
    name:"car",
    price: "Rs.6,00,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/z3bv3l3hgvw8-IN/image;s=300x600;q=60",
    location:"Ngercoil",
    },
    {
    id:4,
    name:"earpods",
    price: "Rs.1,500",
    image:"https://apollo-singapore.akamaized.net/v1/files/gmvpe8wkoepe3-IN/image;s=300x600;q=60",
    location:"Thirunelveli",
    },
    {
    id:5,
    name:"Smart Watch",
    price: "Rs.995",
    image:"https://apollo-singapore.akamaized.net/v1/files/6ue0174uqdar2-IN/image;s=300x600;q=60",
    location:"Madurai",
    },
    {
    id:6,
    name:"LED projector",
    price: "Rs.3,500",
    image:"https://apollo-singapore.akamaized.net/v1/files/0150adyrnom12-IN/image;s=300x600;q=60",
    location:"Trichi",
    },
    {
    id:7,
    name:"snikers",
    price: "Rs.1,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/x809khh20ce1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:8,
    name:"trimmer",
    price: "Rs.800",
    image:"https://apollo-singapore.akamaized.net/v1/files/wl6idyw7xkjg2-IN/image;s=300x600;q=60",
    location:"punjob",
    },
    {
    id:9,
    name:"bike",
    price: "Rs.2,00,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/whi0zwe2ot5w-IN/image;s=300x600;q=60",
    location:"chennai",
    },
    {
    id:10,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:11,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:12,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:13,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:14,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:15,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    },
    {
    id:16,
    name:"sofa_set",
    price: "Rs.35,000",
    image:"https://apollo-singapore.akamaized.net/v1/files/9t8s53d41ibi1-IN/image;s=300x600;q=60",
    location:"kerala",
    }
]

localStorage.setItem('product',JSON.stringify(product_list));

let list=JSON.parse(localStorage.getItem("product"))
for(let i=0; i<list.length;i++){
    list[i].title="<a target='_blank' href='view.html?id="+list[i].id +"'>"+list[i].title+"</a>"
    document.getElementById("name"+i).innerHTML=list[i].name;
    document.getElementById("image"+i).src=list[i].image;
    document.getElementById("price"+i).innerHTML=list[i].price;

    
}