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


### Continued development

Working with this API was fun and easy for the project, but I would love to make the code more efficient by finding ways to reduce the number of API calls. One way would be that instead of doing a separate API call for each border country in the details page, to keep a JSON file that stores the Alpha3 Codes of each country along with their country name and referencing that.

### Useful resources

- [Ion Icons](https://ionic.io/ionicons/usage) - This helped me figure out icons for use on my UI and how to quickly and easily implement them into the design.
- [Rest Countries NPM Package](https://www.npmjs.com/package/@yusifaliyevpro/countries#available-fields) - I used the documentation on the NPM package in order to have a list of fields that are being returned from the API calls. This was helpful in dealing with the recent changes to the Get All API call that requires you to list fields as parameters.

## Author

- Website - [Stephanye Blakely](https://www.stephanyeblakely.com)
- LinkedIn - [Stephanye-Blakely](https://www.linkedIn.com/in/stephanye-blakely)

