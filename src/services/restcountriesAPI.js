const BASE_URL = 'https://restcountries.com/v3.1'

// Retrieve All countries from the API
export async function getAllCountries() {
    try {
        const response = await fetch(`${BASE_URL}/all?fields=name,capital,region,population,flags`);

        if (!response.ok) {
            throw new error('Error fetching countries.', resonse.status);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
    
} 
// Retrieve a country by name from the API

export async function getCountryByName(name) {
    try {
        const response = await fetch(`${BASE_URL}/name/${name}`);

        if (!response.ok) {
            throw new error('Error fetching countries.', response.status);
        }

        const data = await response.json();
        return data[0];
    } catch (e) {
        console.error(e);
    }
}

// Retrieve country name by Code

export async function getCountryNameByCode(code) {
    try {
        const response = await fetch(`${BASE_URL}/alpha/${code}`);

        if (!response.ok) {
            throw new error('Error fetching country name.', response.status);
        }

        const data = await response.json();
        return data[0].name.common;
    } catch (e) {
        console.error(e);
    }
}

// Retrieve country by region

export async function getCountriesByRegion(region) {
    try {
        const response = await fetch(`${BASE_URL}/region/${region}`);

        if (!response.ok) {
            throw new error('Error fetching countries by region.', response.status);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}
// /region/asia