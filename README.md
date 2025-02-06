# Simple Translator - LinguaMate
LinguaMate is a simple web-based translator that allows users to translate text between different languages using the Google Translate API.

## Features
* Translate text between multiple languages
* Copy translated text with one click
* Text-to-speech support for both input and output text
* Responsive and user-friendly UI

## Technologies Used
* HTML, CSS, JavaScript (Vanilla JS)
* Google Translate API
* Font Awesome for icons

## Prerequisites
Before setting up the project, make sure you have the following installed:
* A modern web browser (Chrome, Firefox, Edge, etc.)
* A code editor (VS Code, Sublime Text, etc.)
* Node.js (optional, for running a local server)

## Setup Instructions
#### 01. Clone the Repository
* _git clone https://github.com/hafsa-aarifeen/Simple-Translator.git_

#### 02. Navigate to the Project Directory
* _cd Simple-Translator_

#### 03. Open the Project in a Code Editor
* _code ._

#### 04. Set Up the API Key
The project uses the Google Translate API. You need to obtain an API key from Google Cloud and replace it in _script.js_:
* Go to **Google Cloud Console**
* Enable the **Cloud Translation API**
* Generate an API key
* Replace the existing _API_KEY_ in _script.js_ with your generated key:
   * _const API_KEY = "YOUR_GOOGLE_TRANSLATE_API_KEY";_

#### 05. Run the Project
* Open in Browser - Simply open _index.html_ in your browser.

#### 06. Start Using the Translator
* Enter text in the left box.
* Select the source and target languages.
* Click the **Translate** button to get the translation.
* Click the copy icon to copy the text.
* Click the speaker icon to listen to the text.

## File Structure
📂 Simple Translator/
* 📄 index.html--------Main HTML file
* 📄 style.css----------Styling (CSS)
* 📄 script.js-----------Main JavaScript logic
* 📄 countries.js-------List of supported languages
* 📄 README.md-----Project documentation
