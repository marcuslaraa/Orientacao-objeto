import User from './User.js';
import Docente from './docente.js';
import Admin from './admin.js';

const novoAdmin = new Admin('Marcus', 'marcus.lara@hotmail.com', '06-10-1994');

console.log(novoAdmin.nome);
novoAdmin.nome = '';
console.log(novoAdmin.nome);
