const inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
    const suffix = this.dataset.sizing || '' // dataset takes everything that have "data-" on the element and put it into an object in this case = data-sizing or nothing (if the element doesn't have it)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))