import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-evenly bg-sky-100 h-10">
            <Link to="/">Home</Link>
            <Link to="/chart">Chart</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Navbar;