
let resultsArr = [];

async function populate() {
    const requestURL = 
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const request  = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    resultsArr = data;
}

function search(query) {
    removeAllChild(document.querySelector('.search-results'));
    // Counter to alternate between results--1 and results--2
    let counter = 0
    for (let i = 0; i < resultsArr.length; i++) {
        const city = resultsArr[i].city.toLowerCase();
        const state = resultsArr[i].state.toLowerCase();
        const searchQuery = query.toLowerCase().trim();
        // Check if query is a sub-string of city or state (case insensitve).
        if (city.includes(searchQuery) || state.includes(searchQuery)) {
            const node = createNode(resultsArr[i].city, resultsArr[i].state, resultsArr[i].population, counter);
            // nodeLocation has two parts city and state.
            const nodeLocation = node.querySelector(".location");
            const locationCity = nodeLocation.querySelector(".city");
            const locationState = nodeLocation.querySelector(".state");

            highlight(searchQuery,locationCity);
            highlight(searchQuery,locationState);

            counter++;
        }
    }
}

function highlight(query, node) {
    const nodeText = node.textContent;
    const queryStart = nodeText.toLowerCase().indexOf(query);
    if (queryStart != -1) {
        const queryEnd = queryStart + query.length;
        // Split the original nodeText to 3 parts
        const queryPart = nodeText.slice(queryStart, queryEnd);
        const firstPart = nodeText.slice(0, queryStart);
        const lastPart = nodeText.slice(queryEnd, nodeText.length);
        
        // Testing Purposes
        // console.log(`first Part: ${`${firstPart}, Index: ${[0, queryStart]}`}`);
        // console.log(`middle Part: ${`${queryPart}, Index: ${[queryStart, queryEnd]}`}`);
        // console.log(`last Part: ${`${lastPart}`}, Index: ${[queryEnd, nodeText.length]}`);

        removeAllChild(node);

        // Convert the text into elements 
        const firstNode = document.createTextNode(firstPart);

        const highlightedNode = document.createElement('mark');
        const highlightedNodeText = document.createTextNode(queryPart);
        highlightedNode.appendChild(highlightedNodeText);

        const lastNode = document.createTextNode(lastPart);

        // Append all child to the parent node
        node.appendChild(firstNode);
        node.appendChild(highlightedNode);
        node.appendChild(lastNode);
    } 
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createNode(city, state, population, index) {
    const container = document.querySelector(".search-results");
        // Create a node for the list
        const node = document.createElement('div');
        node.classList.add("result");

        if (index % 2 == 0) {
            node.classList.add("result--2");
        } else {
            node.classList.add("result--1");
        }

        const cityNode = document.createElement('span');
        cityNode.classList.add("city");
        cityNode.appendChild(document.createTextNode(`${city}`));
        
        const stateNode = document.createElement('span');
        stateNode.classList.add("state");
        stateNode.appendChild(document.createTextNode(`${state}`));

        const locationNode = document.createElement('p');
        locationNode.classList.add("location");
        locationNode.appendChild(cityNode);
        locationNode.appendChild(document.createTextNode(", "));
        locationNode.appendChild(stateNode);

        const populationNode = document.createElement('p');
        populationNode.classList.add("population");
        populationNode.appendChild(document.createTextNode(`${population}`));

        node.appendChild(locationNode);
        node.appendChild(populationNode);

        container.appendChild(node);

        return node;
}

populate();


const searchBar = document.getElementById("search-input");

searchBar.addEventListener("keyup", (event) => {
    search(searchBar.value);
})

