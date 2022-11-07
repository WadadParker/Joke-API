var button = document.querySelector("#btn");
var setupText = document.querySelector("#setup");
var punchlineText=document.querySelector("#punchline");
var url = "https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode";

function clickEventHandler() {
    fetch(url)
        .then(res1 => res1.json())
        .then(res2 => {
            setupText.innerText = res2.setup;
            punchlineText.innerText= res2.delivery;
            console.log('Click is gettining listened');
        })
    }

button.addEventListener("click", clickEventHandler);