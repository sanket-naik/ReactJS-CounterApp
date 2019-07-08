let stack=[]

function push(val){
    stack.push(val)
}

function peek(){
    console.log(stack[stack.length-1])
}

function display(){
    for(var i=stack.length-1;i>=0;i--){
        console.log('|'+stack[i]+'|')
    }
}

function pop(){
    if(stack.length!=0){
    stack.pop()
    }
    else{
        console.log('Stack is empty')
    }
}

push(10)
push(20)
push(30)
push(40)
peek()
display()