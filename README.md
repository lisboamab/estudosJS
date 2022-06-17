# JavaScript

JavaScript é uma linguagem de programação criada e voltada para o desenvolvimento web. É uma linguagem que foi projetada para ser orientada a protótipos mas, se rendeu a orientação a objetos. Então muitos conceitos do paradigma POO é um pouco confuso na linguagem.

## Variáveis

Existem três formas de declarar uma variável em JavaScript são a `let`,`var`  e `const`. Com as duas primeiras formas, a variável é mutável e é declarada em `camelCase`. Já com o `const` o valor é imutável e normalmente, são variáveis declaradas em `SNAKE_CASE`.

Variáveis podem ser sobrescritas porém, não podem ser redeclaradas. E nem podem usar palavras reservadas, como vemos nos exemplos abaixo.

```jsx
let name = 'Marcos' ;
name = 'Marcos Antonio' ;

let name = 'João' //SyntaxError redeclarando uma variavel

let let = 'Lucas' //Error utilizanção de palavras reservadas
```

Outras regras importantes na declaração de variáveis em JavaScript é:

- Variáveis não pode começar com número;
- Variáveis não podem conter espaços ou traços nos seus nomes;
- Variáveis são case sensitive, ou seja, diferenciam maiúsculas de minusculas;
- SEMPRE UTILIZE `let`  ou `const` ,  NUNCA USAR `var` ;
- Não é possível declarar uma constante sem inicializar ela;
- NÃO DECLARAR SEM USAR O PREFIXO

### Var x Let

Declarar variáveis com `var` pode ser problemático por diversos motivos. Variaveis declaradas com `var` podem ser redeclaradas. Como o código abaixo.

```jsx
var nome = "Marcos";
var nome = "Antonio";

//Este é um comportamento indesejado
```

### Operadores aritméticos

[Operadores](https://www.notion.so/Operadores-f5e7649b9106471386703ba000e42626)

### alert, confirm e prompt

Essa três funções/metodos fazem parte do objeto Window. Sendo `alert` e `prompt` não retornam nada, similar a função print em Python. Já `confirm` retorna um booleano.

### Converter strings numéricas em tipos numéricos

A conversão de uma string numérica para um tipo numérico é possível com o uso de 3 funções.

`parseInt`, `parseFloat` ou `Number`.

### A função `document`.
