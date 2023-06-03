
let root = document.getElementById("main");
    let getData = () => {
     
        url = "https://fakestoreapi.com/products";
        fetch(url).then((response) => {
            
            return response.json();
        }).then(data => {
           
           data.forEach(element => {
               
               root.innerHTML += '<div class="card-container" style: backgound-color:red ><div class="img"><img src="' + element.image
                   + '" alt=""></div><div class="name">' + element.title + '</div><div class="price"><strong>$' + element.price + '</strong></div><div class="description" >' + element.description.slice(0,100)+'...</div><div class="btn-group"><button class="primary">Add to Cart</button> <button>Read More</button></div></div ></div>';
           });
        }).catch(err => {
            console.log(err);
        })
    }
getData()
    
    
   
    
        
    