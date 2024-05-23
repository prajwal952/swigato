import React from 'react'
import Navbar from './Navbar'
import img1 from '../assests/image.png'
import Products from './Products';
import {useState} from 'react'


const Home = () => {
    //to handle the card once the yourCart button is being clicked 
    const [cardOpen, setcardOpen] = useState(false);
const [cart, setcart] = useState([]);
    // to see the values in card this is being shown in UI once the yourCart button is being clicked 


    const handleCartUpdate=(updatedCart)=>{
        setcart(updatedCart);
    };

    // to show and unshow the card after clicking your cart
    const showCard=()=>{
        console.log("button clicked")
        return setcardOpen(!cardOpen);
    }

    // to calculate the sum of amounts of products selected 
    const calculateSum = (cart) => {
        let sum = 0;
       cart.map((e)=>{
        sum=parseInt(sum)+parseInt(e.price);
       })
       return sum
    };
    
    const totalSum = calculateSum(cart);



  return (
    <>
        <Navbar props={showCard }/>

{/* conditional rendring */}
        {cardOpen && (

                <div style={{
                  backgroundColor:'#43A6C6',
                  display:'flex',
                  text : 'red'
                }} >
                  <div className='col-md-4'> </div>
                      <div className='col-md-4'>
                        <div class="card" style={{width: '18rem;'}}>
                            <span>Your Order details are:-</span>
                                <ul class="list-group list-group-flush">
                                 {
                                    
                                    cart.map((event)=>(
                                        <>
                                    <li key={event.id} style={{backgroundColor:'#CEFCBA'}} > Dish name  {event.name} and price is {event.price}</li>
                                        
                                    </> 
                                    )
                                    
                                    )
                                 }
                                  <li className="list-group-item" style={{ backgroundColor: '#CEFCBA' }}>
                                    Total Sum: ${totalSum}
                                </li>
                                </ul>
                        </div>
                        
                      </div>
                      <div className='col-md-4'> </div>
                  
                    </div>
         
              )
       
        }

        <img 
      src={img1}
      alt="Canvas Logo"
      width={1670} 
      height={380}   
    />

 
<Products handleCartUpdate={handleCartUpdate}/>

    </>
  )
}

export default Home