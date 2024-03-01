const posts = [
    {
        title: "Google Chrome",
        content: "O Google Chrome é um navegador de internet desenvolvido pela Google. Foi lançado pela primeira vez no dia 2 de setembro de 2008, para o Microsoft Windows, e mais tarde foi portado para Linux, Mac, iOS e Android. Compilado com base em componentes de código licenciado como o motor de renderização WebKit. O Google Chrome também é o principal componente do Chrome OS onde funciona como uma plataforma para executar aplicativos da web e sua estrutura de desenvolvimento de aplicações (framework).[8]"
    },
    {
        title:"Mozilla FireFox",
        content:"Mozilla Firefox é um navegador livre e multiplataforma desenvolvido pela Mozilla Foundation com ajuda de centenas de colaboradores.[23] A intenção da fundação é desenvolver um navegador leve, seguro, intuitivo e altamente extensível. Baseado no componente de navegação da Mozilla Application Suite, o Firefox tornou-se o objetivo principal da Mozilla Foundation.[24] Cerca de 40% do código do programa foi totalmente escrito por voluntários.[1]"
    },
    {
        title:"Opera GX",
        content:"Opera GX é um navegador de internet, anunciado em 11 de junho na feira E3 2019, uma versão do navegador Opera feita para jogadores (gamers), desenvolvida pela empresa Opera Software AS. O navegador possui versão para os sistemas computacionais Microsoft Windows e macOS e para os sistemas móveis Android e iOS. "
    }

];

const wrapper= document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i]

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h2");
    title.classList.add("article-title");
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement("p")
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    
    wrapper.appendChild(article);
}