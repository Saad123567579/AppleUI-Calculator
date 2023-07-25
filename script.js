first_num = ""
second_num = ""
operation =""
flag=0
equal = document.getElementById("equal")
clear = document.getElementById("clear")
display =  document.getElementById("inp")
clear.onclick = () =>{
  flag=0
  first_num = ""
  second_num = ""
  operation = ""
  display.value = ""
}
ope = document.querySelectorAll('.op')
ope.forEach(oButton => {
  oButton.onclick = () =>{
    flag=1
    operation = String(oButton.value)
    display.value = String(operation) 
  }
})

n = document.querySelectorAll('.n')
  n.forEach(nButton => {
    nButton.onclick = () => {
      if(flag==0){
     first_num = first_num + String(nButton.value) 
     display.value = String(first_num) 
      }
      else if(flag==1){
        second_num = second_num + String(nButton.value)
        display.value = String(second_num) 
      }
    }
  })

equal.onclick = () => {
  if(operation=="+")
    result = Number(first_num) + Number(second_num)
  else if(operation=="-")
    result = Number(first_num) - Number(second_num)
  else if(operation=="×")
    result = Number(first_num) * Number(second_num)
  else if(operation=="÷")
    result = Number(first_num) / Number(second_num)
  first_num = result
  second_num = ""
  operation = ""
  display.value = String(result) 
}





