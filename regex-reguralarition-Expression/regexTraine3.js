// FLAG: G
// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

// Procura: Todo a
const regexp = /a/g;

'JavaScript'.replace(regexp, 'i');
// JiviScript