const user = {
  nome: 'Marcus',
  email: 'marcus.lara@hotmail.com',
  nascimento: '06/10/1994',
  role: 'estudante',
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: 'Adriana',
  email: 'Adriana@gmail',
  role: 'admin',
  criarCurso: function () {
    console.log('Curso criado!');
  },
};

//                    herdeiro, quem promove a herança
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
