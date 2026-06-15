import React from 'react';
import './App.css';

const benefits = [
  {
    value: 'Fila menor',
    label: 'alunos fazem o pedido antes do intervalo e retiram com mais rapidez',
  },
  {
    value: 'Estoque visivel',
    label: 'a cantina acompanha produtos, saidas e risco de falta em tempo real',
  },
  {
    value: 'Menos desperdicio',
    label: 'a demanda prevista ajuda a preparar a quantidade certa de alimentos',
  },
];

const features = [
  {
    title: 'Pedido antecipado',
    text: 'O aluno monta o lanche, confirma o pedido e acompanha o status ate a retirada.',
  },
  {
    title: 'Painel da cantina',
    text: 'A equipe visualiza pedidos em fila, atualiza etapas e organiza a entrega.',
  },
  {
    title: 'Controle de estoque',
    text: 'Produtos, quantidades e movimentacoes ficam centralizados para evitar falta ou sobra.',
  },
  {
    title: 'Dados de demonstracao',
    text: 'A interface continua utilizavel mesmo sem Supabase configurado, usando dados locais.',
  },
];

const workflow = [
  'Aluno escolhe o produto e envia o pedido.',
  'Cantina recebe a fila FIFO e prepara na ordem correta.',
  'Estoque e historico registram a movimentacao do pedido.',
];

const stack = [
  'React',
  'Vite',
  'TypeScript',
  'Tailwind CSS',
  'Supabase Auth',
  'PostgreSQL',
  'Row Level Security',
  'Vercel',
  'Vitest',
  'Testing Library',
  'Playwright',
];

const logoPath = `${process.env.PUBLIC_URL}/rapidinha-logo.jpeg`;

function App() {
  return (
    <div className="home-container">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Rapidinha inicio">
          <img className="brand-logo" src={logoPath} alt="" />
        </a>
        <nav className="site-nav" aria-label="Navegacao principal">
          <a href="#sobre">Sobre</a>
          <a href="#fluxo">Fluxo</a>
          <a href="#tecnologia">Tecnologia</a>
          <a href="#impacto">Impacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <img
              className="hero-logo"
              src={logoPath}
              alt="Rapidinha - Pedidos Rapidos na Cantina"
            />
            <p className="eyebrow">Sistema de cantina digital</p>
            <h1>Pedidos antecipados para cantinas escolares.</h1>
            <p className="hero-text">
              O Rapidinha organiza pedidos, fila de preparo, estoque e retirada para reduzir
              espera no intervalo e ajudar a cantina a produzir com mais previsibilidade.
            </p>
            <div className="hero-actions" aria-label="Acoes principais">
              <a className="primary-action" href="#funcionalidades">
                Ver funcionalidades
              </a>
              <a className="secondary-action" href="#tecnologia">
                Conhecer stack
              </a>
              <a
                className="external-action"
                href="https://digital-flavor-k4qj9tdeg-luiz192512s-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Abrir sistema
              </a>
            </div>
          </div>

          <div className="app-preview" aria-label="Previa do painel de pedidos">
            <div className="preview-header">
              <span>Fila de pedidos</span>
              <strong>Ativo</strong>
            </div>
            <div className="order-card is-current">
              <div>
                <span className="muted-label">Pedido #022</span>
                <h2>Combo mito</h2>
              </div>
              <span className="status-badge">Preparando</span>
            </div>
            <div className="preview-grid">
              <div>
                <span className="muted-label">Aluno</span>
                <strong>Jair Messias Bolsonaro</strong>
              </div>
              <div>
                <span className="muted-label">Retirada</span>
                <strong>22:22</strong>
              </div>
              <div>
                <span className="muted-label">Estoque</span>
                <strong>22 un.</strong>
              </div>
              <div>
                <span className="muted-label">Total</span>
                <strong>R$ 22,00 </strong>
              </div>
            </div>
            <div className="queue-list" aria-label="Proximos pedidos">
              <span>Proximos</span>
              <p>Suco de uva</p>
              <p>Pao de queijo</p>
              <p>Salada de frutas</p>
            </div>
          </div>
        </section>

        <section className="benefit-strip" aria-label="Resultados esperados">
          {benefits.map((benefit) => (
            <article key={benefit.value}>
              <strong>{benefit.value}</strong>
              <p>{benefit.label}</p>
            </article>
          ))}
        </section>

        <section id="sobre" className="content-section two-column">
          <div>
            <p className="section-label">Sobre o projeto</p>
            <h2>Uma solucao para o intervalo escolar funcionar melhor.</h2>
          </div>
          <div className="section-copy">
            <p>
              O Rapidinha foi pensado para cantinas escolares que precisam atender muitos alunos
              em pouco tempo. A proposta combina compra antecipada, fila organizada e controle de
              produtos para deixar o atendimento mais rapido e previsivel.
            </p>
            <p>
              Para a escola, o sistema ajuda a enxergar a demanda. Para o aluno, evita perder o
              intervalo esperando. Para a cantina, melhora a rotina de preparo e reposicao.
            </p>
          </div>
        </section>

        <section id="funcionalidades" className="content-section">
          <div className="section-heading">
            <p className="section-label">Funcionalidades</p>
            <h2>O que entra na experiencia principal.</h2>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="fluxo" className="content-section workflow-section">
          <div className="section-heading">
            <p className="section-label">Fluxo</p>
            <h2>Da escolha do lanche ate o controle da cantina.</h2>
          </div>
          <ol className="workflow-list">
            {workflow.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="tecnologia" className="content-section tech-section">
          <div>
            <p className="section-label">Tecnologia</p>
            <h2>Base tecnica usada no projeto.</h2>
            <p>
              A aplicacao original foi estruturada com front-end responsivo, dominio em TypeScript,
              persistencia opcional no Supabase e validacao com testes unitarios e end-to-end.
            </p>
          </div>
          <div className="stack-list" aria-label="Stack tecnica">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="impacto" className="content-section impact-section">
          <div className="impact-copy">
            <p className="section-label">Impacto</p>
            <h2>Mais eficiencia para a cantina, menos desperdicio para a escola.</h2>
            <p>
              O projeto conversa com consumo responsavel ao usar previsao de pedidos e controle de
              estoque para reduzir sobra de alimentos. A home agora segue a prototipagem do
              documento: vermelho como cor principal, cinza claro para superficies, vinho para
              identidade e dourado como destaque de apoio.
            </p>
          </div>
          <div className="color-system" aria-label="Sistema de cores do produto">
            <span className="color-chip red">Vermelho principal</span>
            <span className="color-chip soft">Cinza claro</span>
            <span className="color-chip wine">Vinho do logo</span>
            <span className="color-chip gold">Dourado de apoio</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>Rapidinha</strong>
        <span>Projeto de cantina digital para pedidos antecipados e gestao de estoque.</span>
      </footer>
    </div>
  );
}

export default App;
