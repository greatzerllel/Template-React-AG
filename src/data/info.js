export let navbar = {
    logo: 'test react', //propiedad objeto logo
    options: [
        {id: 1, links: '/#', label: 'Home'},
        {id: 2, links: '/#', label: 'About'},
        {id: 3, links: '/#', label: 'Services'},
        {id: 4, links: '/#', label: 'Contact'},
    ] //propiedad de cta
}

export let header = {
    title: 'titulo',
    subtittle: 'texto de subtitulo',
    button: {
        link: '/#',
        label: 'learn more'
    }
}  // objeto dentro de objeto con propiedades y info del header jumbotron

export let cards = [
    { id: 1, photo: 'http://via.placeholder.com/500x325', title: 'Card title', descriptiom: 'Lorem ipsum dolor sit amet, consectetur', btn: 'boton'},
    { id: 2, photo: 'http://via.placeholder.com/500x325', title: 'Card title', descriptiom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', btn: 'boton'},
    { id: 3, photo: 'http://via.placeholder.com/500x325', title: 'Card title', descriptiom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ', btn: 'boton'},
    { id: 4, photo: 'http://via.placeholder.com/500x325', title: 'Card title', descriptiom: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ', btn: 'boton'}
] //propiedad objeto dentro de array de cards

export let footer = {
    text: 'HELLO WORLD!!, ITS WORKING'
} //propiedad objeto de footer