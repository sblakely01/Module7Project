import { getCountryByName, getCountryNameByCode } from "../services/restcountriesAPI.js";

const darkMode = document.getElementById('darkMode');
const backButton = document.getElementById('backButton');
const htmlElement = document.documentElement;

const flagImage = document.getElementById('detailFlagImg');
const countryNameUI = document.getElementById('countryName');

const nativeNameUI = document.getElementById('nativeName');
const populationUI = document.getElementById('population');
const regionUI = document.getElementById('region');
const subregionUI = document.getElementById('subregion');
const capitalUI = document.getElementById('capital');
const domainUI = document.getElementById('domain');
const currenciesUI = document.getElementById('currencies');
const languagesUI = document.getElementById('languages');
const borderCountriesUI = document.getElementById('borderCountries');
const moonIcon = `moon-outline`;
const sunIcon = `sunny-outline`;


// searchBar.className = 'hidden';
// countryList.className = 'hidden';
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


backButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../../index.html';
})

async function fillDetails() {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const commonName = urlParams.get('name');
    let country = await getCountryByName(commonName);
    console.log(JSON.stringify(country));

    

    flagImage.src = country.flags.svg;
    countryNameUI.innerText = country.name.common;
    let nativeNameList = country.name.nativeName;
    for (const key in nativeNameList) {
        console.log(key);
        for (const type in nativeNameList[key]) {
            console.log(JSON.stringify(type));
            if (type === 'official') {
                console.log(nativeNameList[key][type]);
                let officialName = nativeNameList[key][type];
                nativeNameUI.innerHTML = `<span>Native Name: </span>${officialName}`;
                break;
            }
        }

    }
    populationUI.innerHTML = `<span>Population: </span>${country.population}`;
    regionUI.innerHTML = `<span>Region: </span>${country.region}`;
    subregionUI.innerHTML = `<span>Sub Region: </span>${country.subregion}`;
    capitalUI.innerHTML = `<span>Capital: </span>${country.capital}`;
    domainUI.innerHTML = `<span>Top Level Domain: </span>${country.tld}`;
    let currencyBuilder = `<span>Currencies: </span>`;
    for (const key in country.currencies) {
        currencyBuilder = currencyBuilder + key + ', ';
    }
    currenciesUI.innerHTML = currencyBuilder.slice(0, -2);
    let languagesBuilder = `<span>Languages: </span>`;
    for (const key in country.languages) {
        languagesBuilder = languagesBuilder + country.languages[key] + ', ';
    }
    languagesUI.innerHTML = languagesBuilder.slice(0, -2);
    for (let i = 0; i < country.borders.length; i++) {
        let newButton = document.createElement('a');
        newButton.id = "borderCountry";
        let borderName = await getCountryNameByCode(country.borders[i]);
        newButton.innerText = borderName; 
        newButton.href = `./details.html?name=${borderName}`;

        borderCountriesUI.appendChild(newButton);
    }
}

fillDetails();