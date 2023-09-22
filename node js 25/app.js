
const http = require('http');
const url = require('url');

const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

async function fetchDataAsync(lat, lng) {
  const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
  const value = await data.json();
  return value;
}

// Define the port to listen on
const port = 3000;

// Create a server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;         //pathname
  const query = parsedUrl.query;           //query

  if (path === "/weather") {
    if ('city' in query) {
        const cityName = query.city.toLowerCase();
      for (let i = 0; i < cities.length; i++) {
        const current = cities[i];
        const currentCityName = current.name.toLowerCase();

        if (currentCityName === cityName) {
          const existe = await fetchDataAsync(current.lat, current.lng);
          const temperature = existe.current_weather.temperature;

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Weather in ${current.name}: ${temperature}°C`);
          console.log(`Weather in ${current.name}: ${temperature}°C`);
          return;
        }
      }

      // If the city is not found in the loop, respond with a 404 error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('City not found');
    } else {
      // If the 'city' query parameter is missing, respond with a 400 error
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('City parameter missing');
    }
  } else {
    // For any other path, respond with a 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});