//Selectors

const input = document.querySelector("#input")

const noteContainer = document.querySelector(".noteContainer")


const submit = document.querySelector("#submit")

const deleteButton = document.querySelector(".deleteButton")



//Event Listeners

submit.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please enter a task")
    }
    else {
    noteContainer.innerHTML += 
    `
    <p class="task" > <span class="unchecked" ></span> ${input.value} <span class="deleteButton" >&#10005;</span> </p>
    `
    let total = document.querySelector(".total")
    total.textContent = parseInt(total.textContent) + 1
    input.value = ""
    }
})

noteContainer.addEventListener ("click", (e) => {
    let completed = document.querySelector(".completed")
    if (e.target.classList.contains("unchecked")) {
        e.target.classList.replace("unchecked", "checked")
        let completed = document.querySelector(".completed")
        completed.textContent = parseInt(completed.textContent) + 1
    }
    else if (e.target.classList.contains("checked")) {
        e.target.classList.replace("checked", "unchecked")
        let completed = document.querySelector(".completed")
        completed.textContent = parseInt(completed.textContent) -1
    } 
    
    else if (e.target.classList.contains("deleteButton")) {
        e.target.parentElement.remove()
        let total = document.querySelector(".total")
        total.textContent = parseInt(total.textContent) -1
        if (completed.textContent < 1) {
            completed.textContent = 0
        }
        else {
        let completed = document.querySelector(".completed")
        completed.textContent = parseInt(completed.textContent) -1
        }
    }
})


