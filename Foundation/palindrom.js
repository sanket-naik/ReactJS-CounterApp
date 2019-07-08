let input_str="racecar"
let stack=[]
let output_str=""

for(var i=0; i<input_str.length; i++){
    stack.push(input_str[i])
}

for(var i=0;i<input_str.length;i++){
    output_str+=stack.pop()
}

if(input_str===output_str){
    console.log("Given string is peloindrom")
}else{
    console.log("Given string is not a palindrom")
}
