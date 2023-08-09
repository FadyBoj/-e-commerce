import React from 'react';

//Componenets

import SortSelect from './SortSelect';
import Select from './SelectRange';
import BrandSelect from './BrandSelect';
import Product from './product';
import productsDummy from '../pTest.json'
import MiniCartItem from './Mini-cart-item';

export default function Products()
{
    //sort select

    const [sortVisible,setSortVisible] = React.useState(false);

    function checkId(id)
    {
        console.log(id);
    }
    
    function setSort()
    {
        setSortVisible((prevValue) =>{
            return !prevValue;
        })
    }

    const options = ['Default sorting',
                    'Price Hight-low',
                    'Price Low-high',
                    'Alphabetically']
      

    //active option

    const [activeOption,setActiveOption] = React.useState(0);

    function handleActiveOption(id,item)
    {
        setActiveOption((preValue) =>{
            return id - 1;
        })
        
        console.log(item)
      
    }

    //price range state

    const [rangeValue,setRangeValue] = React.useState([0,100]);

    function handlePriceRange(event,newValue)
    {
        setRangeValue((prevValue) =>{
            return newValue
        })
    }
    //refs

    const rangeMenuRef = React.useRef();
    const sortRef = React.useRef();
    const brandRef = React.useRef();
    const [isOpen,setIsOpen] = React.useState(false);

    
    

      //Brand

      const [brandVisible,setBrandVisible] = React.useState(false);
      const [brandActiveOptions,setBrandActiveOptions] = React.useState(0);
      const [selectedBrands,setSelectedBrands] = React.useState([]);

      const brandOptions = ['Coca Cola','Red Bull','Pepsi','7up'];

      function handleBrandVisible()
      {
        setBrandVisible((prevValue)=>!prevValue);
      }

      function handleSelectedBrands(event)
      {
        const {checked,dataset} = event.target
        
        setSelectedBrands((prevValue)=>{
            return checked ? [...prevValue,dataset.value]:
            prevValue.map((item)=>{
                return item === dataset.value ? null : item
            }).filter(item=> item != null)
        })

      }

      //delete function 
        const deleteFromCart = (id)=>{  
            setTimeout(()=>{
                
            })
            setCartItems((prevItems)=>{
                return prevItems.map((product)=>{
                    return product.id === id ? null : product
                }).filter(id => id != null)
            })
       }

      //mini cart elemetns 
      const [miniCartElements,setMiniCartElements] = React.useState([]);


      const setCartElemetns = (value) =>{
        const cartJson = value.map((item)=>{
            return productsDummy.filter(product => product.id === item.id)
        }).flat()

        // add qty
        const addQty = (id)=>{
            setCartItems((prevItems)=>{
                return prevItems.map((item)=>{
                    return item.id === id ? {...item,qty:item.qty + 1} : item
                })
            })
        }

        const minusQty = (id)=>{
            setCartItems((prevItems)=>{
                return prevItems.map((item)=>{
                    return item.id === id ? {...item,qty:item.qty > 1 ? item.qty -1 : item.qty} : item
                })
            })
        }

        setMiniCartElements(()=>{
            return cartJson.map((item,index)=>{
                return <MiniCartItem
                        key={index + 1}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        qty={value[index].qty}
                        addQty={addQty}
                        minusQty={minusQty}
                        delete={deleteFromCart}/>
            })
        })
      }


       //cart
       const [cartItems,setCartItems] = React.useState([]);

       const addToCart = (id,price)=>{
        setCartItems((prevItems)=>{
            let exsist = false;
            for(let i = 0; i < prevItems.length;i++)
            {
                if(prevItems[i].id === id){
                exsist = true;
                break;
                }
            }
            return exsist ? prevItems : [...prevItems,{id:id,qty:1,price:price}]
        })
       }

     
 
       React.useEffect(()=>{
        setCartElemetns(cartItems)
      },[cartItems])

      const ids = cartItems.map((item)=>{
        return item.id
    })

      //Products dummy test
      const productsElements = productsDummy.map((product,index)=>{
        return <Product
                id={product.id}
                key={index + 1}
                title={product.title}
                price={product.price}
                image={product.image}
                cartItems={cartItems}
                windowWidth={window.innerWidth}
                exist={ids.includes(product.id)}
                addToCart={addToCart}/>
      })

     

      React.useEffect(()=>{
        let handleClickOutside = (e)=>{
        if(!rangeMenuRef.current.contains(e.target))
        {
            setIsOpen(false)
        }

        if(!sortRef.current.contains(e.target))
        {
            setSortVisible(false)
        }
        if(!brandRef.current.contains(e.target) && !e.target.classList.contains('brand--checkbox'))
        {
                setBrandVisible(false)
        }
        }
      document.addEventListener('click',handleClickOutside)

        return()=>{
            document.removeEventListener('click',handleClickOutside)
        }

    })
      
      const handleClickInside = (event) => {
          setIsOpen((prevValue)=>!prevValue);
        
      };
      
      //Total price
      const [totalPrice,setTotalPrice] = React.useState(0);
      React.useEffect(()=>{
        setTotalPrice(()=>{
            let tp = 0;
            cartItems.map((item) =>{
                tp += item.price * item.qty;
            })
            return tp.toFixed(2)
        })
      },[cartItems])

      console.log(`Total price : ${totalPrice}`)

    return(
        <div className='products--section'>
            <div className='split--1'>

                {/*Routes*/}
                <div className='routes'>
                    <p>Home </p>
                    <p>&gt;</p>
                    <p>Fresh fode</p>
                    <p>&gt;</p>
                </div>

                <div className='category--title'>
                    <h1>Fresh food</h1>
                </div>
                
                {/*Products--api--section*/}
                <div className='products--api'>
                    <div className='row-1'>
                        <div className='col--1'>
                            <p>Filter by</p>
                            <p className='products--length'>10 results found</p>
                        </div>

                        <div>
                            <SortSelect handleId={checkId} 
                            handleClick={setSort}
                             isVisible={sortVisible}
                             options={options}
                             setActiveOption={handleActiveOption}
                             activeOption={activeOption}
                             refs={sortRef}
                             />
                        </div>

                    </div>

                    <div className='row--2'>
                       
                           <div>
                                <Select
                                title={'Price'}
                                rangeValue={rangeValue}
                                handlePriceRange={handlePriceRange}
                                handleClick={handleClickInside}
                                isOpen={isOpen}
                                refs={rangeMenuRef}
                                 />
                           </div>
                          <div>
                            <BrandSelect
                            isVisible={brandVisible}
                            handleVisible={handleBrandVisible}
                            refs={brandRef}
                            brands={brandOptions}
                            setBrand={handleSelectedBrands}
                            selectedBrands={selectedBrands}
                            />
                          </div>
                       
                    </div>

                    <div className='row--3'>
                        {productsElements}
                    </div>

                </div>

            </div>

           
            <div className='cart'>
                <div className='row-1'>
                    <p>My Cart</p>
                </div>

                <div className='row-2'>
                    { cartItems.length === 0 && 
                    <div className='empty-miniCart'>
                        <img src='../images/cart.svg' className='cart--icon' />
                        <p className='empty--phrase'>Your shopping cart is still empty, you can now fill it by adding products</p>
                    </div>
                    }
                    { cartItems.length > 0 &&
                    <div style={{height:'calc(100vh - 170px)',width:'100%',display:'flex',flexDirection:'column'}}>

                    <div className='cart--elemetns'>
                        {miniCartElements}
                    </div>

                    <div className='check--out'>
                       <div className='row--1'>
                        <div>Total</div>
                        <div className='price'>{totalPrice} <span>EGP</span></div>
                       </div>

                       <div className='row--2'>
                        <div><button className='view-cart'>View Cart</button></div>
                        <div><button className='checkout'>Checkout</button></div>
                       </div>
                    </div>

                    </div>
                    }
                    


                </div>
            </div>

        </div>
    )
}