import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return(
        <>
                <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">Ecommerciante</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div class="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="btnradio1">Poleras</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="btnradio2">Gorros</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="btnradio3">Polerones</label>
                    </div>
                    <div class="d-flex">
                        <div class=" me-2">
                            <CartWidget />
                        </div>
                    </div>
                    </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        </>

    )
}

export default NavBar