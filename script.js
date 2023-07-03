const APIKEY = '6a42eaeb3cda4ce4969184121230207';

        const place = document.getElementById('place');

        function getvalue() {
            const api = 'http://api.weatherapi.com/v1/current.json?key=' + APIKEY + `&q=${place.value}`;
            fetch(api).then(Response => Response.json())
                .then(data => {
                    if (data && data.current) {
                        document.getElementById('error').style.display = 'none';
                        document.getElementById('other').classList.add('flex');
                        document.getElementById('container').classList.add('height');
                        document.getElementById('temp').innerHTML = `${parseInt(data.current.temp_c)}<span>°C</span>`;
                        document.getElementById('condition').innerHTML = data.current.condition.text;
                        document.getElementById('image').src = data.current.condition.icon;
                        document.getElementById('windSpeed').innerHTML = data.current.wind_kph;
                        document.getElementById('humidity').innerHTML = data.current.humidity;
                        document.getElementById('temp').style.display = 'block';
                        document.getElementById('condition').style.display = 'block';
                        document.getElementById('image').style.display = 'flex';
                    }
                    else {
                        document.getElementById('container').classList.add('height');
                        document.getElementById('other').classList.remove('flex');
                        document.getElementById('temp').style.display = 'none';
                        document.getElementById('condition').style.display = 'none';
                        document.getElementById('image').style.display = 'none';
                        document.getElementById('error').style.display = 'block';
                    }
                })
        }