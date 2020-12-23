window.addEventListener("load", ()=>{
    let long;
    let lat;
    
    let locationTimezone =document.querySelector(".location-timezone");
    let temperatureDegree =document.querySelector(".temperature-degree");
    let temperatureDescruption =document.querySelector(".temperature-descruption");
    
    let temperatureSection =document.querySelector('.temperature-section')
    let temperatureSpan =document.querySelector('.temperature-section span')


    
    


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
                    const icons =data.weather[0].icon;
                    

                    //Set DOM Elements from the Weather API
                    
                    temperatureDescruption.textContent=`it's ${desc}`;
                    locationTimezone.textContent=name;
                    temperatureDegree.textContent=Math.floor(temp);
                    
                    //Fromula
                    let Celsius =(temp-32)*(5 / 9);


                    //Set icon 
                    document.getElementById('icon').src=`http://openweathermap.org/img/wn/${icons}@2x.png`;
                    
                    
                    // change temperature to Celsius/Farenheit
                    temperatureSection.addEventListener('click', ()=>{
                        if(temperatureSpan.textContent==="F"){
                            temperatureSpan.textContent='C';
                            temperatureDegree.textContent=Math.floor(Celsius);

                        }else{
                            temperatureSpan.textContent='F';
                            temperatureDegree.textContent=Math.floor(temp);
                        }
                    })

                    


                });
                
        });

        
     }
    });


