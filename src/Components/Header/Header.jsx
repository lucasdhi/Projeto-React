
import { Link } from 'react-router-dom';
import '../Style.css';

export default () => {
    return (
        <header>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="home"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">


                        <Link to='/'>
                            <li class="nav-item"><a class="nav-link active">Home</a>
                            </li>
                        </Link>

                        <Link to='/Destinoo'>
                            <li class="nav-item">
                                <a class="nav-link active">Destinoo</a>
                            </li>
                        </Link>

                        <Link to='/Promocao'>
                            <li class="nav-item">
                                <a class="nav-link active" >Promocao</a>
                            </li>
                        </Link>


                        <Link to='/Contato'>
                            <li class="nav-item">
                                <a class="nav-link active" >Contato</a>
                            </li>
                        </Link>


                        <Link to='/Pagamentos'>
                            <li class="nav-item">
                                <a class="nav-link active" >Pagamento</a>
                            </li>
                        </Link>


                    </ul>

                </div>
            </nav>


        </header>

    );
}