# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Reflection](#reflection)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./design/screenshot/Screenshot%202025-10-20%20203114.png)

### Links

- Live Site URL: [Live Site](https://sblakely01.github.io/Module7Project/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I previously didn't have experience with impplementing a Dark/Light Mode in base JavaScript with HTML and CSS, so it was a ne process for me to set the toggle and utilize localStorage to save the value. I also got some good practice with using APIs and parsing retrieved data to frontend elements. Lastly, I have never before created a basic JavaScript app that used routing, so this took some time for me to learn how to implement it in a way that works.

```css
:root {
    --bg-color: hsl(0, 0%, 99%);
    --card-color:  hsl(0, 100%, 100%);
    --text-color: hsl(200, 15%, 8%);
    --input-color: hsl(0, 100%, 100%);
    --accent-color: hsl(0, 0%, 95%);
}

html[data-theme="dark"] {
    --bg-color: hsl(207, 26%, 17%);
    --card-color: hsl(209, 23%, 22%);
    --text-color: hsl(0, 100%, 100%);
    --input-color: hsl(0, 0%, 50%);
    --accent-color: hsl(209, 23%, 22%);
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    font-family: 'Nunito_Sans';
}
```
```js
 for (let i = 0; i < country.borders.length; i++) {
        let newButton = document.createElement('a');
        newButton.id = "borderCountry";
        let borderName = await getCountryNameByCode(country.borders[i]);
        newButton.innerText = borderName; 
        newButton.href = `./details.html?name=${borderName}`;

        borderCountriesUI.appendChild(newButton);
    }
```

### Reflection

To complete this project, I started by writing the HTML document so I would have a framework to work within. I included all inputs, buttons, and used static mock data to fill in the cards and detail page. I did not tackle styling at this time, but used this more as a way to do blocking, planning, and design. Once I had an idea of what the project was going to entail, I started on the JavaScript code by writing the script.js and the restcountriesAPI.js to perform all of the API calls needed. I started with a call to return all countries and ended up adding the calls to get a country by name (For the search function), get countries by region (for the select filter option), and get country by code (for the border country buttons to allow me to display the full names of the countries on the buttons). Once I got all of the API calls working and displaying data on my site, I worked on the Light/Dark mode toggle button and then moved on to styling in CSS. 

One of the challenges I faced in this project was figuring out how to display the full country names on the Border Country buttons. I consulted my classmates and instructor and realized that the Get Country By Code endpoint would allow us to return the full JSON data for a country by sending just the 3 letter Alpha 3 Code. I used this knowledge to do API calls for each border country when a user clicks on the details page and to return and display just the country's full name on the buttons.

Changes I would make to this project if I had more time include implementing other technologies like TypeScript or TailwindCSS into the project, or using other details returned from the Rest Countries API to display additional data. For this last one, I noticed that the Rest Countries API returns google map data for the locations of the countries, and I would've liked to use this to display maps in my app for each country's detail page but I didn't have time to implement this during the project.


### Continued development

Working with this API was fun and easy for the project, but I would love to make the code more efficient by finding ways to reduce the number of API calls. One way would be that instead of doing a separate API call for each border country in the details page, to keep a JSON file that stores the Alpha3 Codes of each country along with their country name and referencing that.

### Useful resources

- [Ion Icons](https://ionic.io/ionicons/usage) - This helped me figure out icons for use on my UI and how to quickly and easily implement them into the design.
- [Rest Countries NPM Package](https://www.npmjs.com/package/@yusifaliyevpro/countries#available-fields) - I used the documentation on the NPM package in order to have a list of fields that are being returned from the API calls. This was helpful in dealing with the recent changes to the Get All API call that requires you to list fields as parameters.

## Author

- Website - [Stephanye Blakely](https://www.stephanyeblakely.com)
- LinkedIn - [Stephanye-Blakely](https://www.linkedIn.com/in/stephanye-blakely)

