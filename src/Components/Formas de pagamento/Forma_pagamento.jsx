import pagamento from '../../assets/img/pagamentos.png';


export default () => {
    return (
        <header>


            <h3> formas de pagamento</h3>

            <div class="alert alert-success" role="alert">
                Confira nossas formas de pagamento!
            </div>

            <div class="text-center">
                <img src={pagamento} class="rounded" alt="formas de pagamentos" />
            </div>



        </header>
    );
}