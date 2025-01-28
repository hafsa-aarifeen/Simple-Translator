import countries from './countries.js';

const selectTag = document.querySelectorAll("select");

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected;
        if(id == 0 && country_code == "en-GB") {
            selected = "selected";
        } else if(id == 1 && country_code == "hi-IN") {
            selected = "selected";
        }
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});
