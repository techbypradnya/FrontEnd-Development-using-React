let container = document.getElementById('container')

let heading2 = document.createElement('h2')
heading2.textContent = "World"

let paragraph = document.getElementById('text')

container.insertBefore(heading2, paragraph)