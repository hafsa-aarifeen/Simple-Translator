import countries from './countries.js';

const selectTag = document.querySelectorAll("select");

selectTag.forEach(tag => {
    for (const country_code in countries) {
        console.log(country_code);
    }
});
