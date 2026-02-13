const Card = ({ title, children, className = "" }) => {
  return (
    <div 
      className={`cyber-card ${className}`}
      style={{
        background: 'rgba(10, 10, 10, 0.6)',
        backdropFilter: 'blur(4px)',
        border: '1px solid var(--verde-terminal-hacker)',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 0 10px rgba(34, 197, 94, 0.2)',
        color: 'var(--cinza-claro)'
      }}
    >
      {title && (
        <h3 style={{ 
          borderBottom: '1px solid var(--vermelho-sangue)', 
          paddingBottom: '10px', 
          marginTop: 0,
          color: 'var(--vermelho-sangue)',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {title}
        </h3>
      )}

      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;