import User from './User.js';

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} Criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin('Adriana', 'adriana.com', '21-09-1969');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('js', 20));
