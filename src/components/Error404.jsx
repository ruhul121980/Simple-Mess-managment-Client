import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div>
      <div className="font-bold text-5xl text-center flex justify-center">404 - Not Found</div>

      <Link to='/'><button>Go Back to Home</button></Link>
      
    </div>
  );
};

export default Error404;
