import User from './User.js';

class Docente extends User {
  constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaAluno(nomeDoAluno, nota) {
    if (nota > 5) {
      return `O aluno ${nomeDoAluno} foi aprovado pois obteve a nota ${nota}.`;
    } else {
      return `O aluno ${nomeDoAluno} foi reprovado pois não atingiu a nota necessária.`;
    }
  }
}

const novoDocente = new Docente('Ronaldo', 'ronaldo.com', '01/01/2000');

console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaAluno('Ricardo', 8));
