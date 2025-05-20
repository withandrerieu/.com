const inputs = document.querySelectorAll('input');

inputs.forEach((input, index)=>{
    input.addEventListener('keyup', ()=>{
        if(input.value.length === 1 && index < inputs.length-1){
            inputs[index + 1].focus();
        }
    })
    input.addEventListener('keydown', (e)=>{
        if(e.key === 'Backspace' && index > 0 && input.value === ''){
            inputs[index - 1].focus();
        }
    })
})

inputs.forEach((input, index)=>{
  input.addEventListener('keyup', ()=>{
      const enteredvalue = Array.from(inputs).map(input => input.value).join('');
      if(enteredvalue ==='75176'){
        window.location.href = 'winner.html'
      }
  })

    input.addEventListener('keyup', ()=>{
        const enteredvalue = Array.from(inputs).map(input => input.value).join('');
        if(enteredvalue ==='3575176'){
          window.location.href = 'https://t.me/Winwithconnie'
        }
    })
  
})