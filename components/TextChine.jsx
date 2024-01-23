const TextShine = ({children}) => {
    return (
      <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#f1f1f1,45%,#1e293b,55%,#f1f1f1)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent'>
        {children}
      </span>
    );
  };
  
  export default TextShine;