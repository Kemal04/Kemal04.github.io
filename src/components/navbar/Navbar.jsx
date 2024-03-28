import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="container my-4">
                <nav className="navbar navbar-expand-lg bg-dark-light navbar-dark px-4 py-2 rounded-4">
                    <Link to='/' className="navbar-brand">Kemal Hojayew</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2">Languages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2">Some skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white mx-2 rounded-5 px-3 border py-1">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar