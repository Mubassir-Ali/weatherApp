window.addEventListener("load", ()=>{
    let long;
    let lat;
    let locationTimezone =document.querySelector(".location-timezone");
    let temperatureDegree =document.querySelector(".temperature-degree");
    let temperatureDescruption =document.querySelector(".temperature-descruption");


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            
            lon =position.coords.longitude;
            lat =position.coords.latitude;
            const proxy ='https://cors-anywhere.herokuapp.com/';

            //console.log(lat,lon);
            
           const api =`${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20b19a15be9fc0af6796ee8ffb96329f`;



            fetch(api)
                .then(response=>{
                    return response.json();
                })

                .then(data=>{
                    console.log(data);
                    const temp=data.main.temp;
                    const desc =data.weather[0].description;
                    const {name}= data;
                    

                    //Set DOM Elements from the Weather API
                    temperatureDegree.textContent=temp;
                    temperatureDescruption.textContent=`it's ${desc}`;
                    locationTimezone.textContent=`Time Zone: ${name}`;

                    

                });
                
        });

        
     }
    });


