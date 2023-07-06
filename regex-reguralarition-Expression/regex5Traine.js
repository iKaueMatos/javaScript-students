// CHARACTER CLASS
// Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

// Procura: Todo a, A, i, I
const regexp = /[ai]/gi;

'JavaScript'.replace(regexp, 'u');
// JuvuScrupt