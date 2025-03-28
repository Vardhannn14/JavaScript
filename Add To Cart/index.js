


















let a = fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data)=>{
    let store = data.map((el)=> `
    <h1> ${el.id} </h1>
    <img src=${el.image} height="100px" width="100px">
    `
    
) 
document.getElementById('container').innerHTML = store.join("")
    
}
    


)
.catch((err)=>console.log(err))

