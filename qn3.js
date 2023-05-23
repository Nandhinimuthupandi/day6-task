class Person{
    constructor(name,age,email,address,contactnumber){
        this.personname = name;
        this.personage = age;
        this.personemail = email;
        this.personaddress = address;
        this.personcontactnumber = name;
    }
    
    getPersonDetails(){
        console.log(`name : ${this.personname}`)
        console.log(`age : ${this.personage}`)
        console.log(`email : ${this.personemail}`)
        console.log(`address : ${this.personaddress}`)
        console.log(`contactnumber : ${this.personcontactnumber}`)
    }
}

var personObj = new Person("thiru",26,"thiru@gmail.com","pallikaranai,chennai",9123456789);
personObj.getPersonDetails();
