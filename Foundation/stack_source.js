var Stack=function(){
    this.count=0
    this.storage={}

    this.push=function(val){
        this.storage[this.count]=val;
        this.count++;
    }
    this.pop=function(){
        if(this.count==0){
            return undefined
        }
        this.count--;
        var result=this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.peek=function(){
        var result=this.storage[this.count-1]
        return result
    }

    this.size=function(){
        return this.count
    }
}

var mystack=new Stack()
mystack.push(10)
mystack.push(20)
console.log(mystack.pop())
console.log(mystack.peek())
console.log(mystack.size())