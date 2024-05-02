const textInput = document.getElementById('textInput')
const submitButton = document.getElementById('create-note')
const containerList = document.querySelector('.result')


submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (textInput.value === ''){
        alert('Please put a text first')
        return
    }

    //Initialize DOM Elements
    const final_result = document.createElement('div')
    const textResult = document.createElement('p')
    const removeButton = document.createElement('span')

    //Date and Time
    const newDate = new Date()
    let day = `${newDate.getDate() < 10 ? "0":""}${newDate.getDate()}`
    let month = `${newDate.getMonth() < 10 ? "0":""}${newDate.getMonth()}`
    let year = newDate.getFullYear()
    let hours = `${newDate.getHours() < 10 ? "0":""}${newDate.getHours()}`
    let minutes = `${newDate.getMinutes() < 10 ? "0":""}${newDate.getMinutes()}`
    let seconds = `${newDate.getSeconds() < 10 ? "0":""}${newDate.getSeconds()}`
    let merid = `${newDate.getHours() < 12 ? "AM":"PM"}`
    let final_date = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${merid}`
    
    //Append and Display result
    final_result.innerHTML = final_date
    containerList.appendChild(final_result)
    removeButton.innerHTML = "\u00d7" 
    final_result.appendChild(removeButton)
    textResult.innerHTML = textInput.value
    final_result.appendChild(textResult)
    document.getElementById('no-note').style.display = "none";
    textInput.value = ''
})

containerList.addEventListener('click', function(e){
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
})