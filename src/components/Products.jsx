import React,{useState,useEffect} from 'react'

const Products = ({handleCartUpdate}) => {
const [mycart, setmycart] = useState([])


let productData=[
{
    "id":1,
     "name":"Susi",
     "desc":"A delectable seafood dish featuring perfectly prepared raw fish and vegetables, offering an authentic taste of Japanese cuisine. Savor the delicate flavors and textures in each bite.",
     "image":"https://images.unsplash.com/photo-1625668742946-4ade4980c01e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaXxlbnwwfHwwfHx8MA%3D%3D",
     "price":"720"

},
{
    "id":2,
     "name":"Noodles",
     "desc":"A comforting bowl of noodles with savory broth and an array of fresh ingredients. Perfect for a quick and satisfying meal, this dish combines a variety of flavors to create a delightful dining experience",
     "image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "price":"350"

},
{
    "id":3,
     "name":"Momo's",
     "desc":"Delicious steamed dumplings filled with a savory mixture of vegetables and spices. These soft and flavorful pockets are a popular snack or appetizer, offering a burst of taste with every bite",
     "image":"https://images.unsplash.com/photo-1664990035720-faac522df41f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vbW9zfGVufDB8fDB8fHww",
     "price":"280"

},

{
    "id":4,
     "name":"Veg-bowl",
     "desc":"A nutritious and vibrant bowl filled with a colorful assortment of fresh vegetables, grains, and protein. This healthy and satisfying meal is packed with essential nutrients and offers a delightful blend of textures and flavors",
     "image":"https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym93bHxlbnwwfHwwfHx8MA%3D%3D",
     "price":"480"
}

]



const addToCartClicked=(e)=>{
// console.log(e.target.value)
// console.log(e.target)
//

//here i will be adding the data in object that we got once the button is being clicked 
const mydata ={
    id:e.target.id,
    price:e.target.value,
    name:e.target.name,
    qty:1
};
console.log("mydata is ",mydata)

// Update the cart state
    setmycart((prevmyCart) => {
        // Create a new cart array with the new item added
        const updatedCart = [...prevmyCart, mydata];
        
        // Log the entire cart after the update
        console.log("Updated cart:", updatedCart);

        // Call the handleCartUpdate function from Home component to pass the updated cart
        handleCartUpdate(updatedCart);
        
        // Return the updated cart state
        return updatedCart;

    });
}


 // Use useEffect to monitor changes to the cart state
 useEffect(() => {
    console.log("Current cart state:", mycart);
    // You can use the updated cart state here
   
}, [mycart]);




  return (
    <div  style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', backgroundColor:"#F5F5DC"}}>
 {
        productData.map((currEle)=>(
          
<div className="card" key={currEle.id} style={{ width: '18rem', marginBottom: '1rem',  alignItems:'center'}}>
<img src={currEle.image} className="card-img-top" alt={currEle.name} />
  <div className="card-body">
    <h5 className="card-title">{currEle.name}</h5>
    <p className="card-title">{currEle.desc}</p>
    <h4 className="card-text">${currEle.price}</h4>
    <button className='btn btn-success' value={currEle.price} id={currEle.id} name={currEle.name} onClick={addToCartClicked}>Add to Cart</button>
  </div>
</div>




           
        )) 
    }
    </div>
   
   


  )
}

export default Products