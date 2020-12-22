window.addEventListener("load", ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon =position.coords.longitude;
            lat =position.coords.latitude;
            const apiKey='20b19a15be9fc0af6796ee8ffb96329f';
            const api =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units={units}`;



            fetch(api)
            .then(response=>{
                return response.json;
            })

            .then(data=>{
                console.log(data);
            })
        });

        
    }
})