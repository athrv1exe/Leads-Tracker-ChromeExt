const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // clearing out the input field
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    

let listItems = ""

for(let i = 0; i < myLeads.length; i++){
    listItems += 
    `<li>
        <a target='_blank' href=' ${myLeads[i]} '>
         ${myLeads[i]} 
        </a>
     </li>`

  // simplifying above expression - template string
  // use ${} and pass the variables inside a string
    // listItems += 
    // `<li>
    // <a target='_blank' href='${myLeads[i]}'>"+ ${myLeads[i]} +
    // "</a>
    // </li>`
    
    ////ulEl.innerHTML += "<li> " + myLeads[i] + "</li> "
    //create element
    //set textContent
    //append to ul
    // const li = document.createElement("li")
    // ulEl.append(li)
    // li.textContent = myLeads[i]
    console.log(listItems)
}
ulEl.innerHTML = listItems
}




