document.getElementById("btn").addEventListener("click" , () => {

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response =>response.json())
    .then(data => {
        document.getElementById("output").innerHTML=`
        <h2>Joke</h2>
        <p>${data.setup}</p>
        <p>${data.punchline}
        
        `;

    })
    .catch(error => console.error("Error:" ,error));
});