

function User (nome, email){

    this.nome = nome
    this.email = email

    this.exibirInfos = function (){
        return `${this.nome}, ${this.email}`
    }
}


/*

EXEMPLO 1
const novoUser = new User('Lucas', 'l@l.com')
console.log(novoUser.exibirInfos());
*/

/*
EXEMPLO 2
function Admin (role) {
    User.call(this, 'Lucas', 'l@l.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos());
console.log(novoUser.role);
*/



/* EXEMPLO 3

const user = {
    
    exibirInfos: function(nome){
        return nome
    }
}

const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('Lucas'));
*/


// EXEMPLO 4 
const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },   
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Lucas', 'l@l.com')
console.log(novoUser.exibirInfos());



