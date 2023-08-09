import React from 'react'
import { VscLocation } from 'react-icons/vsc';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const AutoComplete = (props) => {

    const AutoCompleteItem = (props)=>{
        return(
            <div style={props.styles} onClick={(()=>{
                props.setAddress(props.text)
                props.handleRender()
            })} className='auto-item'>
                <div><VscLocation size={25}/></div>
                <div className='text'>{props.text}</div>
            </div>
        )
    }
    const [animating,setAnimating] = React.useState(true);
    const [delay,setDelay] = React.useState(null);
    const [autoElements,setAutoElemetns] = React.useState([]);

    React.useEffect(()=>{
        function getAddress (){

            if(delay)
            {
                clearTimeout(delay);
            }
            if(props.address.length === 0){
            props.handleRender()
            return
            }
            setAutoElemetns([])
            setAnimating(true)

            const options = {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    value:props.address
                })
            }

            setDelay(
                setTimeout(async()=>{
                    const response = await fetch('http://localhost:8000/get-data',options);
                    const data = await response.json();
        
                    setAutoElemetns(()=>{
                        return data.data.results.map((place,index) =>{
                            return <AutoCompleteItem
                                   key={index + 1}
                                   id={index + 1}
                                   text={place.formatted}
                                   handleRender={props.handleRender}
                                   setAddress={props.setAddress}
                                    styles={index === (data.data.results.length - 1) ? 
                                    {borderRadius:'0 0 6px 6px',borderBottom:'unset'}:{borderRadius:'0px'}}
                                    />
                        })
                    })
                    setAnimating(false)
                },500)
            )

           
        }

        getAddress()

    },[props.address])


  return (
    <div ref={props.refs} style={{display:props.isVisible ? '' :'none'}} className='auto-complete'>
            {   animating && 
        <div className='loading-container'>
               <Stack sx={{ color: '#1d4ca1' }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
              </Stack>
        </div>
            }   

            {
            autoElements.length > 0 ? autoElements :
            <div className='empty-address'>Can't find the address you're looking for .</div>
            }
        <div className='p-google'>
            Powered by <span id='G'>G</span>
            <span id='o'>o</span>
            <span id='o-2'>o</span>
            <span id='g'>g</span>
            <span id='l'>l</span>
            <span id='e'>e</span>
        </div>
    </div>
  )
}

export default AutoComplete