const cardUi = (data) => {
    console.log(data ,"====>data")



 // const {title, image, description} = data
 const imageUi = document.querySelector('#image')
 const cardTitle = document.querySelector('.card-title')
 const cardText = document.querySelector('.card-text')
 const container = document.querySelector('.container')


 const mappingTheData = data.map((item)=> {
    const singleAmountOfData = `<div class="main col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description.slice(0,61)}</p>
        <a href="#" class="btn btn-primary">Click Here!</a>
    </div>
    </div>`


    return singleAmountOfData
 })

 container.innerHTML= mappingTheData.join('');

 console.log(container)
}


const products = () => {
    fetch(`https://fakestoreapi.com/products/`)
        .then(function (response) {
            console.log(response, "==>> response of fetch")
            return response.json()
        }).then(function(data){
            console.log(data, "==>> my data as json")
            console.log()
            cardUi(data)
        })
}

products()


const getAllProducts = () => {
    fetch(`https://fakestoreapi.com/products/`)
        .then(resp => resp.json())
        .then(data => console.log(data, "==>>allProducts"))
}

getAllProducts()

