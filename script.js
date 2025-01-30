import countries from './countries.js';

const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const selectTag = document.querySelectorAll("select");
const exchageIcon = document.querySelector(".exchange");
const translateBtn = document.querySelector("button");
const icons = document.querySelectorAll(".row i");
const API_KEY = "AIzaSyCfbt01E4qgAWqL1XMQ4FgXVfl3HRIcNBc";

const showError = (message) => {
    toText.value = "";
    let alertBox = document.getElementById("custom-alert");
    alertBox.textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
};

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "si-LK" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value.trim()) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", async () => {
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    
    if (!text) {
        showError("Please enter text to translate.");
        return;
    }
    
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    let requestBody = {
        q: text,
        source: translateFrom,
        target: translateTo,
        format: "text"
    };
    
    try {
        let response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        toText.value = data.data.translations[0].translatedText;
    } catch (error) {
        console.error("Translation error:", error);
        showError("Translation failed! Please try again later.");
    }
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value.trim() || !toText.value.trim()) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value)
                    .then(() => alert("Text copied!"))
                    .catch(() => alert("Failed to copy text."));
            } else {
                navigator.clipboard.writeText(toText.value)
                    .then(() => alert("Text copied!"))
                    .catch(() => alert("Failed to copy text."));
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});
