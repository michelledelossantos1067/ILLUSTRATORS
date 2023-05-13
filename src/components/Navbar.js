import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../asset/letra-d.png'

export default function Navbar() {
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-white bg-black border-bottom-white shadow-lg p-3 mb-5">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={bootstrap} width="50" height="40" className="d-inline-block align-top" alt="" />
                    </a>
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler  d-lg-none bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page">Descubrir <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Creadores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Iniciar sesion</a>
                            </li>

                        </ul>
                        <button className='border border-none rounded btn-outline-success float-md-end btn btn-lg '>Empezar</button>
                    </div>
                </div>
            </nav>
            <div className='container'>


            </div>
            <div className='bost container-fluid text-white text-center'>
                <img src={bootstrap} className='img' style={{ width: '200px' }} />
                <h1 className='display '>ILLUSTRATORS AGENCY.</h1>
                <p className='h4 text-secondary'>
                    HERE YOU WILL FIND THE ARTISTS ON WHICH OUR LOOK HAS STOPPED.
                    <br/>The illustrator is in charge of creating faithful visual representations or transformations of the reality of ideas, concepts, characters and situations that will be a central part of different supports.</p>
                <input type='text' placeholder='Buscar....' className='w-50 p-2 rounded border border-none gap-2 ' />
                <input type='submit' className='p-2 rounded border border-none btn btn-outline-primary btn-lg col-2' />

            </div>



            <div className='fondo'>

            </div>




        </div>
    );
}