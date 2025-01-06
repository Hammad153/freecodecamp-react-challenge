
function Button({ fetch }) {
    return (
      <button onClick={() => fetch()}
        className="p-3 text-white rounded-md"
    >
        New Quote
    </button>
    );
  }
  
 export default Button;