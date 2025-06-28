let person={
    FirstName:"abin",
    LastName:"jils",
    age:20,
    getfullname:function(){

        return `${this.FirstName} ${this.LastName}`
    },

    birthday:function(){

        return `you are ${this.age+1} old "happy birthday "`

    }


   
}

console.log( person.getfullname(),person.birthday())
