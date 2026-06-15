import React from 'react';
import './App.css';

function App() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">Rapidinha</div>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bem-vindo ao Projeto Rapidinha</h1>
          <p>A solução ágil, prática e direta ao ponto para facilitar o seu dia a dia.</p>
          <button className="cta-button" onClick={() => 
            window.open('https://digital-flavor-v2.vercel.app/login', '_blank')}>
            Conheça o Projeto
          </button>
        </section>

        <section id="funcionalidades" className="features">
          <h2>Por que escolher o Rapidinha?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Velocidade</h3>
              <p>Otimizado para entregar resultados em poucos cliques, sem enrolação.</p>
            </div>
            <div className="feature-card">
              <h3>Praticidade</h3>
              <p>Uma interface limpa e intuitiva, pensada para a melhor experiência de usuário.</p>
            </div>
            <div className="feature-card">
              <h3>Inovação</h3>
              <p>Tecnologia moderna para resolver problemas do cotidiano de forma inteligente.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Projeto Rapidinha. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;