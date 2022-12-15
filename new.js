function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${nome}, ${email}`;
  };
}

//const newUser = new User('Marcus', 'marcus.lara@hotmail.com');

//console.log(newUser.exibirInfos());

function Admin(role) {
  User.call(this, 'Marcus', 'marcus.lara@hotmail.com');
  this.role = role || 'Estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.role);
