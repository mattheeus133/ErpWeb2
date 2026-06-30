import { Link } from "react-router-dom";

function HomePag(){
    return(
        <div>
            <h1>HomePag</h1>

            <button><Link to={"/app"}  className="block w-full h-full flex items-center justify-center">Home</Link></button>

            <div>
                <Link to={"/teste"}  className="block w-full h-full flex items-center justify-center">Teste</Link>
            </div>
        </div>
    )
}

export default HomePag;