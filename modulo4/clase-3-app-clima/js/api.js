const apiKey = "13b0ca88cc8e97eb7990481ea9f7c5cd";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((posicion) => {
    let longitude = posicion.coords.longitude;
    let latitude = posicion.coords.latitude;

    //ubicación por ciudad
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=${apiKey}`;

    //console.log(url);
    fetch(`${urlCity}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}
