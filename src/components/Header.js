import React from "react";
import NavItem from "./NavItem";
import filters from './filters.json'
import SearchInput from "./searchInput";
import MobileMenu from "./MobileMenu";
import Icons from "./Icons";
import { Link } from 'react-router-dom';
const shoperz = 'images/shoperz.png'
// Man, Fuck you ! 

export default function Header(props)
{
    const [filterElements,setFilterElemetns] = React.useState(filters)
   
    function handleLine(id)
    {
        setFilterElemetns((prevElemetns)=>{
            return prevElemetns.map((element)=>{
                return element.id === id ? {...element,width : '100%'}: element
            })
        })
    }

    function removeLine(id){
        setFilterElemetns((prevElemetns) =>{
            return prevElemetns.map((element) =>{
                return element.id === id ? {...element,width:'0%'} : element
            })
        })
    }

    const navItems = filterElements.map((item) =>{
        return <NavItem key={item.id} id={item.id} handleRemoveHover={removeLine} handleHover={handleLine} styles={{width:item.width}} name={item.name}/>
    })


    //search
    const [searchFocus,setSearchFocus] = React.useState(false)

    function setFocus()
    {
        setSearchFocus(()=>true)
    }

    function removeFocus()
    {
        setSearchFocus(()=>false)
    }

    //mobile menu


    function handleMenu()
    {
        props.handleMenu()

        
         setVisibleIcon((prevValue) =>{
            return !prevValue
         })
        
    }

    //icon
    const [visibleIcon,setVisibleIcon] = React.useState(!props.visible)

    return(
        <div className="app--header">
            <MobileMenu visible={props.visible} setMenu={handleMenu} />
        <header>
            <div className="headerContainer">
            <div className="logoContainer">
                <img alt="shoperz" className="shoperz" src={require('../images/shoperz.png')}/>
            </div>

            <nav>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Services</li>
                    <SearchInput focus={searchFocus} handleRemoveHover={removeFocus} handleHover={setFocus} />
                </ul>
            </nav>

            <div className="allIcons">
            <Icons visible={!props.visible} />
            <div className="mContainer"  onClick={handleMenu} ><img alt="menu" className="mobile--menu" src={require(`../images/${props.visible ? 'close.png':'menu.png'}`)} /></div>

            </div>

           
        </div>


        <div className="filters">
        

        <div className="search--input--container--mobile">
                   <div className="search--icon--container--mobile"><img alt="search" className="search--icon" src="images/search.png" /></div>
                   <div><input placeholder="Search product" className="search--input--mobile" type="text"/></div>
               </div>

       <div className="all">
           <div className="menu--icon"><ion-icon  name="menu"></ion-icon></div>
           <div><p>Shop all categories</p></div>
       </div>

       <div className="filter--types">
           {navItems}
       </div>

   </div>

        </header>

        </div>
    )
    
}




