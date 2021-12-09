var clicked = document.querySelector("#clicked");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTransalationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try after sometime")
}
function clickHandler() {
var inputText = textInput.value;

    fetch(getTransalationURL(inputText))
        .then(response => response.json())
        .then(json =>{ var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)
}

clicked.addEventListener("click", clickHandler)