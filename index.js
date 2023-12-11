let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function transformToCesar(){
  let input = document.getElementById('input').value
  let response = '';
  input = input.toUpperCase()
  let array = input.split('')
  for(i = 0; i < array.length; i++){
    let index = alphabet.indexOf(array[i])
    if(index < 22){
      array[i] = alphabet[index + 4]
    } else {
      array[i] = alphabet[(index + 3) - 25]
    }    
    response = response + array[i]
  }

  let display = document.createElement('li')
  display.textContent = input + " => " + response
  let list = document.getElementById('responses')
  list.appendChild(display)
}

