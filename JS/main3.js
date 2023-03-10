let btnForm = document.querySelector("#person-form button")

let arrayPeople = []
btnForm.addEventListener("click",()=> {
    let fields = document.querySelectorAll("#person-form input")
    let personObject = {}
    fields.forEach((item)=>{
        let property = item.name
        let value = item.value
        personObject[property] = value
        item.value = ""
    })
    console.log(personObject)
    arrayPeople.push(personObject)
    getPeople(arrayPeople)
})

const getPeople = (arrayPeople) => {
    let peopleList = document.getElementById("tbody-id")
    peopleList.innerHTML = ""
    arrayPeople.forEach(element => {
        let {name, lastname, email} = element
        
        let trElement = document.createElement("tr")
        
        let tdName = document.createElement("td")
        let textName = document.createTextNode(`${name}`)
        tdName.appendChild(textName)

        let tdLastName = document.createElement("td")
        let textLastName = document.createTextNode(lastname)
        tdLastName.appendChild(textLastName)

        let tdEmail = document.createElement("td")
        let textEmail = document.createTextNode(email)
        tdEmail.appendChild(textEmail)

        let tdButton = document.createElement("td")
        let btn = document.createElement("button")
        let textButton = document.createTextNode("Eliminar")
        btn.appendChild(textButton)
        tdButton.appendChild(btn)

        trElement.append(tdName,tdLastName,tdEmail, tdButton)
        peopleList.appendChild(trElement)
    });
}