
import '../css/componentes.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {

    console.log('creando una etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `hola, ${nombre}..`;

    document.body.append(h1);
    //img
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img)
}