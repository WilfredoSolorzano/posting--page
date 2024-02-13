Foi criada uma página web que contém iput de entrada para colocar ou postar informações que aparecerão na input de saída, 
usando funções javascrit que renderizam a página web junto com css e html. Alem disso fas  uma comunicação com uma API aberta.
conta com os seguintes aspetos: 
 estrutura do objeto  enviará na  chamada de API post, é  a seguinte:

const data = {
        title: titulo.value,
        body: conteudo.value, 
        userId:1
    }


Para o  fetch, tem as onfigurações:

url: https://jsonplaceholder.typicode.com/posts
method: "POST"
body: JSON.stringify(data)
headers: {"Content-type": "application/json; charset=UTF-8"}

// renderização 
tituloRenderizar.innerHTML = data.title

![page-pst](https://github.com/WilfredoSolorzano/posting--page/assets/122184939/d1f72168-2331-4f72-bf32-f9b7ae461278)


