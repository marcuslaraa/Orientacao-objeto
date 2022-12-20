import User from './User.js';

export default class Docente extends User {
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
