const button = document.querySelector(".button")



button.addEventListener("click", () => {
    fetch("http://localhost:8989/api/competencies").then(responce => {return responce.json()}).then(data => {console.log(data)}).catch(err => console.log(err))
})