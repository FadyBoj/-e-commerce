import React from 'react'

//components

import Footer from '../components/Footer';
import ProfileDashboard from '../components/profile/ProfileDashboard';
import DashBoardHeader from '../components/profile/DashBoardHeader';
import AutoComplete from '../components/AutoComplete';
import mail from '../images/mail.svg';
import truck from '../images/truck.svg';

import cities from '../cities.json';

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


const NewAddress = () => {


    const [isAdress,setIsAdress] = React.useState(false)

    const [city,setCity] = React.useState('Alexandria')

    const [areas,setAreas] = React.useState([]);

    const [area,setArea] = React.useState('Borg El Arab');


    const handleCityChange = (event)=>{ 
        setCity(event.target.textContent);
    }

    const handleAreaChange = (event)=>{
        try {
            
            if(event.target)
            {
                setArea(event.target.textContent)
            }
        } catch (error) {

        }
    }

    React.useEffect(()=>{
        setAreas(()=>{
            return cities.filter(item => item.name === city)[0].cities
            .map((governate,index)=>{
                return <Option key={index + 1} value={governate}>{governate}</Option>
            })
          
        })
    },[city])

    const citiesOptions = cities.map((city,index) =>{
        return <Option key={index + 1} value={city.name}>{city.name}</Option>
    })


    // handle address Auto complete.
    const [address,setAddress] = React.useState('');
    const [renderAuto,setRenderAuto] = React.useState(false);

    const handleAutoInput = (event)=>{
        setAddress(event.target.value)
            setRenderAuto(true)
    }

    const handleCompletedAddress = (value)=>{
        setAddress(value);
    }

    const handleRender = ()=>{
        setRenderAuto(false);
    }


    // Handle refs
    const autoCompleteRef = React.useRef();

    React.useEffect(()=>{
        const handleClick =  (event)=>{
           try {
            if(!autoCompleteRef.current.contains(event.target))
            {
                setRenderAuto(false)
            }
           } catch (error) {
            
           }
        }

        document.addEventListener('click',handleClick);

        return ()=>{
            document.removeEventListener('click',handleClick)
        }  
    })

  return (
    <div>
        <div className='new-address'>
            
            <div className='split-1'>
                <ProfileDashboard id={2}/>
            </div>

            <div className='split-2'>
            <DashBoardHeader/>
                <div className='address'>
                        <div className='main--header'>Add new Address</div>
                        <div className='address-personal-details'>
                            <div className='mail-container'><img draggable='false' className='mail-icon' src={mail}/> Personal details </div>

                            <div className='inpts'>
                                <div className='sec-1'>
                                    <div className='label-inpt'>
                                        <div>
                                            <div className='inpt-container'>
                                                <div>First name</div>
                                                <input className='inpt' name='firstname' type='text' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='label-inpt'>
                                        <div>
                                            <div className='inpt-container'>
                                                <div>Last name</div>
                                                <input className='inpt' name='lastname' type='text' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='sec-2'>
                                    <div className='label-inpt'>
                                        <div>
                                            <div className='inpt-container'>
                                                <div>Phone number</div>
                                                <input className='inpt' name='phonenumber' type='text' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='label-inpt'>
                                        <div>
                                            <div className='inpt-container'>
                                                <div>Email</div>
                                                <input className='inpt' name='email' type='text' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='space'></div>
                            <div className='mail-container'><img draggable='false' className='truck-icon' src={truck}/> Address details </div>
                            <div className='inpts'>
                                <div className='sec-2'>
                                    <div className='label-inpt'>
                                            <div>
                                                <div className='inpt-container'>
                                                    <div>City</div>
                                                    <Select className='mui' onChange={handleCityChange}  
                                                    style={{width:'480px',height:'47px'}} 
                                                    defaultValue={city}>

                                                        {citiesOptions}
                                                    </Select>
                                                </div>
                                            </div>
                                    </div>

                                    <div className='label-inpt'>
                                            <div>
                                                <div className='inpt-container '>
                                                    <div>Area</div>
                                                    <Select className='mui' onChange={handleAreaChange}  
                                                    style={{width:'480px',height:'47px'}} 
                                                    defaultValue={area}
                                                    value={area} >
                                                        {areas}
                                                    </Select>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                                <div className='label-inpt'>
                                        <div>
                                            <div className='inpt-container '>
                                                <div>Address</div>
                                                <input onChange={handleAutoInput} value={address} className='inpt address-inpt' type='text'/>
                                                { renderAuto &&
                                                <AutoComplete
                                                address={address}
                                                handleRender={handleRender}
                                                isVisible={renderAuto}
                                                setAddress={handleCompletedAddress}
                                                refs={autoCompleteRef}
                                                />
                                                }
                                            </div>
                                        </div>
                                </div>
                                

                            </div>
                            
                            <button className='address-btn'>Save Address</button>
                                
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
   </div>
  )
}

export default NewAddress