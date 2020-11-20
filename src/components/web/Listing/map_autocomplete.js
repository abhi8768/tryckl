import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'; 
import Geocode from "react-geocode";

export default function Component (props){
   
    const [value, setValue] = React.useState(null);
    let address = ''; 
    const setValue2 = (add) =>{
       props.setAddress(add);
       address = add;
    }
    

    return(
        <div>
            <GooglePlacesAutocomplete apiKey="AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to" 
            selectProps={{
                address,
                onChange: setValue2,
                placeholder: 'Choose Your Address',
                
            }}
            />
        </div>
    )
}

