import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  let { categorias } = dadosIniciais;
  let { videos } = categorias[0];

  return (
    <div>
      <Menu />

      <BannerMain videoTitle={videos[0].titulo} url={videos[0].url} videoDescription="Teste Inicio" />

      <Carousel ignoreFirstVideo category={categorias[0]} />
      <Carousel ignoreFirstVideo category={categorias[1]} />
      <Carousel ignoreFirstVideo category={categorias[2]} />
      <Carousel ignoreFirstVideo category={categorias[3]} />
      <Carousel ignoreFirstVideo category={categorias[4]} />
      <Carousel ignoreFirstVideo category={categorias[5]} />
    </div>
  );
}

export default App;
