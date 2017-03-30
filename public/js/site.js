var K = {
    SERVA: window.location.protocol + '//' + window.location.hostname+':3000',
    LOGIN: '/autenticar/',
    BOOK: {
        CRIAR: '/books',
        LISTAR: '/books',
        RECUPERAR: '/books/',
        REMOVER: '/books/',
        ATUALIZAR: '/books'
    },
    HTML: '.html'
};

function criarLivro() {

  var dados = {
    isbn: cidv('isbn'),
    titulo:cidv('titulo'),
    autor:cidv('autor'),
    preco:cidv('preco')
  };

  _post(K.SERVA + K.BOOK.CRIAR, JSON.stringify(dados), function (tok) {

    console.log(tok)
    //mostraMsg('info', 'Nível criado com sucesso', null, 3000);
  //  $(location).attr('href', K.SERVA);

  });

  console.log("criei um livro")
}