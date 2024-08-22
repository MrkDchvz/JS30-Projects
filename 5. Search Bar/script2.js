let cities = [];

async function populate() {
    const requestURL = 
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const request  = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    cities =  data;
}


function filterCities(query) {
    const regex = new RegExp(query, "gi");
    return cities.filter((city) => {
        return regex.test(city.city) || regex.test(city.state)});
}

function displayCities() {
    const filteredCities = filterCities(this.value);
    
    const html = filteredCities.map(place => {
        const regex = new RegExp(this.value, "i");
        const city = place.city.replace(regex, `<mark>${place.city.match(regex)}</mark>`);
        const state = place.state.replace(regex, `<mark>${place.state.match(regex)}</mark>`);
        
        return `<div class="result">
                    <p class="location">${city}, ${state}</p>
                    <p class="population">${place.population}</p>
                </div>`
    }).join('');

    searchResults.innerHTML = html;
    console.log(searchResults.childNodes);

}




const searchBar = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");

populate();

searchBar.addEventListener('keyup', displayCities);


















