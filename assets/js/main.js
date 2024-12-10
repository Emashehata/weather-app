let rowData=document.querySelector("#rowData");
let searchInput=document.getElementById('searchInput');
let formsumbit=document.getElementById('formSubmit');

async function getWeather(country="cairo") {
    let weather= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d0b28d7138664dfeb66192740240812&q=${country}%20states&days=3&aqi=no&alerts=no`);
    if (weather.ok){
        weather= await weather.json();
        var x= weather.forecast.forecastday[0].hour;
        console.log(x.length);
        
        day1=new Date (weather.forecast.forecastday[0].date);
        day2=new Date (weather.forecast.forecastday[1].date);
        day3=new Date (weather.forecast.forecastday[2].date);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        rowData.innerHTML=`<div class="col-md-4">
        <div class="table">
          <div
            class="table-header1 rounded-3 rounded-bottom-0 rounded-end-0 p-2 d-flex justify-content-between"
          >
            <span>${daysOfWeek[day1.getDay()]}</span>
            <span>${day1.getDate()}${monthNames[day1.getMonth()]}</span>
          </div>
          <div class="table-body1 rounded-3 rounded-top-0 rounded-end-0 py-4 px-3">
             <span class="location">${weather.location.name}</span>
            <h1 class="text-white mt-2">${weather.forecast.forecastday[0].hour[day1.getHours()].temp_c}<sup class="">o</sup>c</h1>
            <img
              src="${ weather.forecast.forecastday[0].hour[day1.getHours()].condition.icon}"
              width="64"
              height="64"
            />
            <span class="icon-desc d-block">${weather.forecast.forecastday[0].hour[day1.getHours()].condition.text}</span>
            <div class="footer mt-3">
              <span class="icon-img"><i class="fa-solid fa-umbrella fs-3"></i>
               ${weather.forecast.forecastday[0].hour[day1.getHours()].chance_of_rain}</span
              >
              <span class="icon-img"><i class="fa-solid fa-wind"></i>
               ${weather.forecast.forecastday[0].hour[day1.getHours()].windchill_c}</span
              >
              <span class="icon-img"><i class="fa-regular fa-compass"></i>
               ${weather.forecast.forecastday[0].hour[day1.getHours()].wind_dir}</span
              >
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="table">
          <div
            class="table-header2  rounded-3 rounded-bottom-0 rounded-start-0 rounded-end-0 p-2 d-flex justify-content-center"
          >
            <span>${daysOfWeek[day2.getDay()]}</span>
          </div>
          <div class="table-body2 rounded-3 rounded-top-0 rounded-start-0 rounded-end-0 py-4 px-3 d-flex justify-content-center flex-wrap gy-0">
           <img src="${weather.forecast.forecastday[1].day.condition.icon}" width="64" height="64"/>
           <h2 class="text-white w-100 text-center">${weather.forecast.forecastday[1].day.maxtemp_c}<sup class="">o</sup>c
            <span class="min-temp h6 d-block bg-transparent text-center w-100">${weather.forecast.forecastday[1].day.mintemp_c}<sup class="">o</sup>c</span>
             <span class="icon-desc h6 bg-transparent">${weather.forecast.forecastday[1].day.condition.text}</span>
           </h2>
           
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="table">
          <div
            class="table-header3  rounded-3 rounded-bottom-0 rounded-start-0  p-2 d-flex justify-content-center"
          >
            <span>${daysOfWeek[day3.getDay()]}</span>
          </div>
          <div class="table-body3 rounded-3 rounded-top-0 rounded-start-0   py-4 px-3 d-flex justify-content-center flex-wrap">
           <img
              src="${weather.forecast.forecastday[2].day.condition.icon}"
              width="64"
              height="64"
              class="m-0 p-0"
            />
            <h2 class="text-white w-100 text-center">${weather.forecast.forecastday[2].day.maxtemp_c}<sup class="">o</sup>c
            <span class="d-block min-temp bg-transparent w-100 text-center d-block h6">${weather.forecast.forecastday[2].day.mintemp_c}<sup class="">o</sup>c</span>
            <span class="icon-desc bg-transparent d-block h6">${weather.forecast.forecastday[2].day.condition.text}</span>
            </h2>
             
          </div>
        </div>
      </div>`
        
    }
}
getWeather();

formsumbit.addEventListener('submit',e=>{
    e.preventDefault();
    let input= searchInput.value;
    getWeather(input);
    console.log();
    formsumbit.reset();
})
searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value.trim();
    if (inputValue) {
      getWeather(inputValue);
    }
  });
formsumbit.addEventListener('keydown',e=>{
    if(e.key=="Enter"){
        getWeather(searchInput.value)
    }
})







