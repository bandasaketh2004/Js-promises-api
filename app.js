
// console.log("html")
// setTimeout(()=>{
//   console.log("css")
// },3000)
// console.log("js")

// let p =new Promise((resolve,reject)=>{
//    console.log("html"),
//    setTimeout(()=>{
//     console.log("css")
//     resolve()
//    },3000)
// }).then(()=>{
//     console.log("js")
// })
// console.log(p)

// let products = fetch("https://dummyjson.com/products")
// .then((response)=>{
//      return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })

//using dummyjson creating card
let container=document.getElementById("container");
let products = fetch("https://dummyjson.com/products?limit=100")
.then((response)=>{
     return response.json()
})
.then((data)=>{
    let b = data.products.map((value)=>{
        return `<div id="card">
            <img src=${value.thumbnail} alt="" width=150>
            <h1>${value.title}</h1>
            <p>${value.description}</p>
        </div>`
    })
    container.innerHTML+=b.join("")
})
