const Button = ({ name, link, isBeam, containerClass }) => {
  return (
    <button
      onClick={() => window.open(link, '_blank')}
      className={`btn ${containerClass}`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

  
  export default Button;