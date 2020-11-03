import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'; 
import Geocode from "react-geocode";

export default function Component (){
   
    const [value, setValue] = React.useState(null);

    if(value != null){
        
        Geocode.setApiKey("AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to");
        Geocode.setLanguage("en");  
        Geocode.setRegion("es");
        Geocode.enableDebug();
        Geocode.fromAddress(value.label).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        error => {
            console.error(error);
        }
        );

    }
    

    return(
        <div>
            <GooglePlacesAutocomplete apiKey="AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to" 
            selectProps={{
                value,
                onChange: setValue,
                placeholder: 'Choose Your Address',
            }}
            />
        </div>
    )
}

