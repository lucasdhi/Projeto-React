export default () => {
   return (

      <header>


         <table width="100%" bgcolor="#F4A460" />



         <h2>contato</h2>

         <div class="box">

            <form action="">
               <fieldset>

                  <legend><b>contato de clientes</b></legend>
                  <br />
                  <div class="inputbox">

                     <input type="text" name="nome" id="nome" class="inputuser" required />
                     <label for="nome">nome completo</label>
                  </div>
                  <br />
                  <div class="inputbox">
                     <input type="email" name="email" id="email" class="inputuser" required />
                     <label for="email">email</label>
                  </div>
                  <br />
                  <div class="inputbox">
                     <input type="tel" name="telefone" id="telefone" class="inputuser" required />
                     <label for="telefone">telefone</label>
                  </div>

                  <p>sexo:</p>
                  <input type="radio" name="femino" value="feminino" required />
                  <label for="feminino">Feminino</label>

                  <input type="radio" name="masculino" value="feminino" required />
                  <label for="feminino">Masculino</label>

                  <input type="radio" name="outro" value="feminino" required />
                  <label for="outro">Outro</label>
                  <br />
                  <div class="inputbox">
                     <input type="date" name="data_nascimento" id="data_nascimento" class="inputuser" required />
                     <label for="data_nascimento">Ano de Nascimento:</label>
                  </div>
                  <br />
                  <div class="inputbox">
                     <input type="tetx" name="cidade" id="cidade" class="inputuser" required />
                     <label for="cidade">Cidade</label>
                  </div>
                  <br />
                  <div class="inputbox">
                     <input type="text" name="estado" id="estado" class="inputuser" required />
                     <label for="estado">Estado</label>
                  </div>
                  <br />
                  <div class="inputbox">
                     <input type="text" name="endere??o" id="endere??o" class="inputuser" required />
                     <label for="endere??o">Endere??o</label>
                  </div>
                  <br />
                  <input type="submit" name="submit" id="submit" />



               </fieldset>


            </form>
         </div>



      </header>

   );
}