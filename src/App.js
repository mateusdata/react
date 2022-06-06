import "./App.css";
/*
function App(){
  return (
    <div>
      <h1>Hellow word</h1>
      <p>Com o React JS</p>
      <p class="bemvindo">Seja Bem-vindo</p>
    </div>
  );
}*/

function App(){
  return (
    <div className="container">
      <header>
        <p>React JS</p>
      </header>

      <main>
        <section className="box-titulo">
          <h1>React JS</h1>
          <p>Biblioteca JavaScript para criar SPAs</p>
          <a href="https://reactjs.org/" target="_blank" >Site Oficial</a>
        </section>

        <section className="box-requisitos">
        <h1>Requesitos</h1>
        <p>Veja abaixo os requisitos mínimos para aprender React JS</p>
        
        <div className="box-cards">
          <div className="card">
          <h3>HTML</h3>
          <p>Aprenda a estruturar os elementos da página com HTML</p>
          </div>
          <div className="card"> 
          <h3>CSS</h3>
          <p>Aprenda a estlizar os elementos da pagina com o CSS</p>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
            <p>Aprenda a linguagem utilizada pelo react, o JavaScript</p>
          </div>
        </div>

        </section>
      </main>

      <footer>
        <p className="autor">Curso de Indrodução ao React JS</p>
      </footer>
    </div>
  );
}

export default App;