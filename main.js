const postForm = document.querySelector('#postForm');
const postagensDiv = document.querySelector('#postagens');

postForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const conteudo = document.querySelector('#conteudo').value;

    const data = {
        title: titulo,
        body: conteudo,
        userId: 1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        const postData = await response.json();

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${postData.title}</h2>
            <textarea id= "renderizadorConteudo">${postData.body}</textarea>
            <button class="ocultarConteudo">Ocultar Conteudo</button>
        `;
        postagensDiv.appendChild(postDiv);

        postDiv.querySelector('.ocultarConteudo').addEventListener('click', () => {
            postDiv.style.display = 'none';
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

// Event listener para ocultar el contenido de las publicaciones existentes
postagensDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('ocultarConteudo')) {
        const postDiv = event.target.closest('.post');
        postDiv.style.display = 'none';
    }
});

