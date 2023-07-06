// CHARACTER CLASS E ESPECIAIS
// Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

// Procura: - ou .
const regexp = /[-.]/g;

'111.222-333-44'.replace(regexp, '');
// 11122233344