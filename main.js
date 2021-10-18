let containerBoxesDOOM = document.body.querySelector(".containerBoxes")
let inputBoxDOOM = document.body.querySelectorAll(".inputBox")
let boxNumberOneDOOM = document.body.querySelector("#numberOne")
let boxNumberTwoDOOM = document.body.querySelector("#numberTwo")

let divideButtonDOOM = document.body.querySelector("#divideButton")
let multiplyButtonDOOM = document.body.querySelector("#multiplyButton")

let displayResultDOOM = document.body.querySelector("#displayResult")

function isNumeric(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
}

for (let x = 0, length = containerBoxesDOOM.children.length;x < length;x++) {
 containerBoxesDOOM.children[x].value = ""
}


divideButtonDOOM.disabled = true
multiplyButtonDOOM.disabled = true

let firstBoxOk = false;
boxNumberOneDOOM.addEventListener("input", () => {
 isNumeric(boxNumberOneDOOM.value) ? firstBoxOk = true : firstBoxOk = false

 if (firstBoxOk && secondBoxOk) {
  divideButtonDOOM.disabled = false
  multiplyButtonDOOM.disabled = false
 } else {
  divideButtonDOOM.disabled = true
  multiplyButtonDOOM.disabled = true
 }
}

)

let secondBoxOk = false;
boxNumberTwoDOOM.addEventListener("input", () => {
 isNumeric(boxNumberTwoDOOM.value) ? secondBoxOk = true : secondBoxOk = false

 if (firstBoxOk && secondBoxOk) {
  divideButtonDOOM.disabled = false
  multiplyButtonDOOM.disabled = false
 } else {
  divideButtonDOOM.disabled = true
  multiplyButtonDOOM.disabled = true
 }
})



console.log('firstBoxOk:', firstBoxOk)
console.log('secondBoxOk:', secondBoxOk)

let createTagToShowResult = document.createElement("p")
let theResult = "Here you will have your answer"
createTagToShowResult.textContent = theResult;
displayResultDOOM.appendChild(createTagToShowResult)


divideButtonDOOM.addEventListener("click", function () {
 theResult = `Your division with ${boxNumberOneDOOM.value}*${boxNumberTwoDOOM.value} is: ${((boxNumberOneDOOM.value / boxNumberTwoDOOM.value)).toFixed(2)}`
 createTagToShowResult.textContent = theResult;
 displayResultDOOM.appendChild(createTagToShowResult)
})

multiplyButtonDOOM.addEventListener("click", function () {
 theResult = `Your multiplication with ${boxNumberOneDOOM.value}*${boxNumberTwoDOOM.value} is: ${(boxNumberOneDOOM.value * boxNumberTwoDOOM.value)}`
 createTagToShowResult.textContent = theResult;
 displayResultDOOM.appendChild(createTagToShowResult)
})

