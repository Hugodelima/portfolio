import html from "../src/assets/img/html.png";
import css from "../src/assets/img/css.png";
import java_script from "../src/assets/img/java_script.png";
import bootstrap from "../src/assets/img/bootstrap.png";

import cold_mart_logo from "../src/assets/img/cold_mart.jpeg";
import shoping_logo from "../src/assets/img/shoping.png";
import meteora_logo from "../src/assets/img/meteora.png";
import cronometro_logo from "../src/assets/img/cronometro.png";
import imc_logo from "../src/assets/img/imc.png";

let timelineElements = [
    {
        id: 1,
        data: "Junho 9, 2023",
        imagem_projeto: cold_mart_logo, 
        titulo: "Cold Mart",
        descricao: "Este é um site de cursos que destaca-se pelo design moderno e pela experiência visual agradável que proporciona. Utilizei HTML, CSS, Bootstrap e um pouco de JavaScript para criar validação dos formulários, garantindo uma interação mais fluida e segura para os usuários. Este é um dos meus projetos favoritos devido à combinação de estética e funcionalidade que consegui alcançar.",    
        tecnologias: "Tecnologias usadas no projeto:",
        imagem_tecnologias: [
            html,
            css,
            java_script,
            bootstrap
        ],
        link_site: "https://cold-mart.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/Cold-Mart"
    },
    {
        id: 2,
        data: "Maio 8, 2023",
        imagem_projeto: shoping_logo,
        titulo: "Shoping Fast",
        descricao: "Neste site de shopping utilizei HTML, CSS e Bootstrap, focando exclusivamente no desenvolvimento das interfaces. Este projeto visa proporcionar uma experiência de compra online intuitiva e agradável.",    
        tecnologias: "Tecnologias usadas no projeto:",
        imagem_tecnologias: [
            html,
            css,
            java_script,
            bootstrap
        ],
        link_site: "https://shoping-kzvl.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/shoping_"
    },
    {
        id: 3,
        data: "Maio 8, 2023",
        imagem_projeto: meteora_logo,
        titulo: "Meteora",
        descricao: "Meteora é um site de compras online que desenvolvi como um dos meus projetos utilizando Bootstrap. Este projeto tem como objetivo oferecer uma plataforma de e-commerce intuitiva e visualmente atraente. Utilizando HTML, CSS e Bootstrap, criei interfaces modernas e responsivas, garantindo que os usuários possam navegar e fazer compras com facilidade em qualquer dispositivo. ",    
        tecnologias: "Tecnologias usadas no projeto:",
        imagem_tecnologias: [
            html,
            css,
            bootstrap
        ],
        link_site: "https://boot-strap-beta.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/BootStrap"
    },
];

export default timelineElements;