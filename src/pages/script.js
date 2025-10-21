import { getAllCountries, getCountriesByRegion, getCountryByName } from "../services/restcountriesAPI.js";

const darkMode = document.getElementById('darkMode');
const searchBar = document.getElementById('search-input');
const filter = document.getElementById('region');
const countryList = document.getElementById('countryList');
const htmlElement = document.documentElement;
const moonIcon = `moon-outline`;
const sunIcon = `sunny-outline`;


let countries = [];
// set dataAtrribute on each country, make each card an a element, navigate to a details page that passes the dataAttribute into a query for country by name to populate details page

//https://restcountries.com/v3.1/name/Lithuania?fullText=true

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-theme', 'dark');
        } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
    applyTheme();
})

darkMode.addEventListener('click', () => {
    applyTheme();
})

function applyTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const newIcon = document.createElement('ion-icon');
    newIcon.name = currentTheme === 'light' ? sunIcon : moonIcon;
    while (darkMode.firstChild) {
        darkMode.removeChild(darkMode.firstChild);
    }
    darkMode.appendChild(newIcon);
    darkMode.innerHTML = newTheme === 'light' ?  `<ion-icon name=${moonIcon}></ion-icon> Dark Mode` : `<ion-icon name=${sunIcon}></ion-icon> Light Mode`;
    htmlElement.setAttribute('data-theme', newTheme);
    
    localStorage.setItem('theme', newTheme);
    console.log(newTheme);
}

filter.addEventListener('change', (e) => {
    clearCountryList();
    if (filter.value === '') {
        chooseAllCountries();
    } else {
        chooseCountryByRegion();
    }
})

searchBar.addEventListener('input', (e) => {
    clearCountryList();
    if (e.target.value === '') {
        chooseAllCountries();
    } else {
        let input = e.target.value.toLowerCase();
        chooseCountryByName(input); 
    }   
})

function clearCountryList() {
    while (countryList.firstChild) {
        countryList.removeChild(countryList.firstChild);
    }
}

async function chooseAllCountries() {
    countries = await getAllCountries();
    createCards(countries);
}

async function chooseCountryByName(input) {
    countries = await getAllCountries();

    let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(input));

    console.log(filteredCountries);
    createCards(filteredCountries);
}

async function chooseCountryByRegion() {
    countries = await getCountriesByRegion(filter.value);
    createCards(countries);
}

async function createCards(countries) {
    console.log(JSON.stringify(countries[0]));
    for (let i = 0; i < countries.length; i++) {

        const clonedCard = document.createElement('a');
        clonedCard.id = "card";
        // clonedCard.setAttribute('name', countries[i].name.common);
        clonedCard.href = `./src/pages/details.html?name=${countries[i].name.common}`;
        const flag = document.createElement('div');
        flag.id = "flag";
        const flagImage = document.createElement('img');
        flagImage.src = countries[i].flags.png;
        flag.appendChild(flagImage);
        const cardText = document.createElement('div');
        cardText.classList.add('cardText');
        
        let countryName = document.createElement('p');
        countryName.id = 'countryName';
        let countryPopulation = document.createElement('p');
        countryPopulation.id = 'countryPopulation';
        let countryRegion = document.createElement('p');
        countryRegion.id = 'countryRegion';
        let countryCapital = document.createElement('p');
        countryCapital.id = 'countryCapital';

        countryName.innerText = countries[i].name.common;
        countryPopulation.innerHTML = `<span>Population: </span>${countries[i].population}`;
        countryRegion.innerHTML = `<span>Region: </span>${countries[i].region}`;
        countryCapital.innerHTML = `<span>Capital: </span>${countries[i].capital}`;

        cardText.appendChild(countryName);
        cardText.appendChild(countryPopulation);
        cardText.appendChild(countryRegion);
        cardText.appendChild(countryCapital);
        clonedCard.appendChild(flag);
        clonedCard.appendChild(cardText);
        countryList.appendChild(clonedCard);
    }
 }

chooseAllCountries();