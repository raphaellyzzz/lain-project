import Card from '../components/Card';
import lainHero from '../assets/the-lain.gif'; 

function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      
      <h1 style={{ 
        fontSize: '4rem', 
        color: 'var(--cinza-claro)',
        textShadow: '3px 3px var(--vermelho-sangue)',
        marginBottom: '10px',
        letterSpacing: '5px',
        fontFamily: 'VT323, monospace'
      }}>
        SERIAL EXPERIMENTS LAIN
      </h1>

      <p style={{ color: 'var(--verde-terminal-hacker)', marginBottom: '2rem' }}>
        PROTOCOL: NAVI 2.0 // CONNECTED
      </p>

      <img 
        src={lainHero} 
        alt="Lain Iwakura" 
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '50%',
          border: '2px solid var(--verde-terminal-hacker)',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)', 
          marginBottom: '2rem'
        }}
      />

      <div style={{ textAlign: 'left' }}> 
        
        <Card title="Layer 01: A Premissa">
          <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
              Serial Experiments Lain é um anime clássico lançado em 1998 se enquadrando nas categorias de cyberpunk, mistério, ficção científica e terror psicológico. É uma experiência de entretenimento que desafia os espectadores a se envolverem profundamente na história. Essa obra nos faz sentar no sofá e refletir sobre como foi revolucionário para sua época, onde a internet estava nos seus primórdios. O anime é conhecido por ser visionário e tratar de temas que anos depois se provaram reais.
          </p>
          <p style={{ textAlign: 'justify' }}>
              Lain é uma estudante tímida cuja jornada começa quando uma colega de escola, Chisa Yomoda, comete suicídio. No entanto, de forma misteriosa, Chisa envia um e-mail para todos os alunos da escola antes de sua morte. Quando Lain chega em casa e lê a mensagem, ela descobre que, enquanto recebe a mensagem em tempo real, Chisa não morreu, mas apenas abandonou sua existência física. Este evento desencadeia uma série de eventos complexos e perturbadores que levam Lain a explorar os limites entre a realidade, a consciência e a existência.
          </p>
        </Card>

        <Card title="Layer 02: Anime vs. Jogo">
          <p style={{ textAlign: 'justify' }}>
              No início, o anime estava destinado a ser uma adaptação mais tranquila do jogo. No entanto, devido aos atrasos no desenvolvimento do jogo, o anime foi lançado primeiro, alterando drasticamente a perspectiva que temos de Lain no jogo em comparação com o anime. 
          </p>
          <p style={{ textAlign: 'justify' }}>
              Embora as personagens sejam as mesmas, elas possuem personalidades muito diferentes: a Lain do anime é mais reflexiva, enquanto a Lain do jogo é muito mais explosiva. Além disso, após o lançamento do jogo, também tivemos uma one shot que foi lançada posteriormente.
          </p>
        </Card>

      </div>
    </div>
  );
}

export default Home;