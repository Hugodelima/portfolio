import html from "../src/assets/img/html.png";
import css from "../src/assets/img/css.png";
import java_script from "../src/assets/img/java_script.png";
import bootstrap from "../src/assets/img/bootstrap.png";

import cold_mart_logo from "../src/assets/img/cold_mart.jpeg";
import shoping_logo from "../src/assets/img/shoping.png";
import meteora_logo from "../src/assets/img/meteora.png";

let timelineElements = [
    {
        id: 1,
        type: "frontend",
        data: {
            pt: "Junho 9, 2023",
            en: "June 9, 2023"
        },
        imagem_projeto: cold_mart_logo, 
        titulo: {
            pt: "Cold Mart",
            en: "Cold Mart"
        },
        descricao: {
            pt: "Site de cursos com design moderno e experiência visual agradável. Desenvolvido com HTML, CSS, Bootstrap e JavaScript para validação de formulários.",
            en: "Course website with modern design and pleasant visual experience. Developed with HTML, CSS, Bootstrap and JavaScript for form validation."
        },
        imagem_tecnologias: [html, css, java_script, bootstrap],
        link_site: "https://cold-mart.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/Cold-Mart"
    },
    {
        id: 2,
        type: "frontend",
        data: {
            pt: "Maio 8, 2023",
            en: "May 8, 2023"
        },
        imagem_projeto: shoping_logo,
        titulo: {
            pt: "Shoping Fast",
            en: "Shoping Fast"
        },
        descricao: {
            pt: "E-commerce desenvolvido com HTML, CSS e Bootstrap, focado em proporcionar uma experiência de compra online intuitiva.",
            en: "E-commerce developed with HTML, CSS and Bootstrap, focused on providing an intuitive online shopping experience."
        },
        imagem_tecnologias: [html, css, java_script, bootstrap],
        link_site: "https://shoping-kzvl.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/shoping_"
    },
    {
        id: 3,
        type: "frontend",
        data: {
            pt: "Maio 8, 2023",
            en: "May 8, 2023"
        },
        imagem_projeto: meteora_logo,
        titulo: {
            pt: "Meteora",
            en: "Meteora"
        },
        descricao: {
            pt: "Plataforma de e-commerce com interfaces modernas e responsivas usando HTML, CSS e Bootstrap.",
            en: "E-commerce platform with modern and responsive interfaces using HTML, CSS and Bootstrap."
        },
        imagem_tecnologias: [html, css, bootstrap],
        link_site: "https://boot-strap-beta.vercel.app/",
        link_codigo: "https://github.com/Hugodelima/BootStrap"
    },
    {
        id: 4,
        type: "backend",
        data: {
            pt: "Junho 13, 2025",
            en: "June 13, 2025"
        },
        imagem_projeto: null,
        titulo: {
            pt: "API de Catálogo de Receitas",
            en: "Recipe Catalog API"
        },
        descricao: {
            pt: "API RESTful desenvolvida com NestJS, TypeScript e Clean Architecture para gerenciamento de receitas culinárias. Implementa CRUD completo com validações e padrão Presenter.",
            en: "RESTful API developed with NestJS, TypeScript and Clean Architecture for culinary recipe management. Implements complete CRUD with validations and Presenter pattern."
        },
        imagem_tecnologias: [
            "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nestjs/nestjs-line.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        ],
        link_site: "https://desafio-tecnico-back-end-na-biox.onrender.com",
        link_codigo: "https://github.com/Hugodelima/Desafio_Tecnico_Back-end_na_Biox"
    },        
    {
        id: 5,
        type: "backend",
        data: {
            pt: "Junho 26, 2025",
            en: "June 26, 2025"
        },
        imagem_projeto: null,
        titulo: {
            pt: "API de Gerenciamento de Consultas Médicas",
            en: "Medical Appointments Management API"
        },
        descricao: {
            pt: "API RESTful desenvolvida com Django REST Framework e PostgreSQL para a Lacrei Saúde. Gerencia profissionais de saúde e consultas médicas com CRUD completo e testes automatizados.",
            en: "RESTful API developed with Django REST Framework and PostgreSQL for Lacrei Saúde. Manages healthcare professionals and medical appointments with complete CRUD and automated tests."
        },
        imagem_tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        ],
        link_site: "https://lacrei-api.onrender.com/api",
        link_codigo: "https://github.com/Hugodelima/Desafio_Tecnico_Back-end_na_Lacrei_Saude"
    },
];

export default timelineElements;