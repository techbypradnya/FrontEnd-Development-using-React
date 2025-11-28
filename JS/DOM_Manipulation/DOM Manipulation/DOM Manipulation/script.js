// 1. createElement()

let heading = document.createElement('h1')
heading.innerText = 'Hello'

// 2. appendChild()
let container = document.getElementById('container')

container.appendChild(heading)

let para = document.createElement('p')
para.textContent = 'Paragraph'

container.appendChild(para)





