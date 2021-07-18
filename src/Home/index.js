import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import abajur from './../images/abajur.jpg'
import quadro_decorativo from './../images/quadro_paisagem.png'
import vaso_flores from './../images/vaso_flor.jpg'

function App(props) {
  const history = useHistory();
  const [email, setemail] = useState('');
  const [erro, setErro] = useState(false);
  const [sucesso, setSucesso] = useState(false);

    function handleCadastraNewsLetter() {
        if (email.indexOf('@') > -1 && email.indexOf('.') > -1) {
            localStorage.setItem('emailNewsLetter', JSON.stringify(email));
            setErro(false);
            setSucesso(true);
        } else {
            localStorage.clear();
            setErro(true);
            setSucesso(false);
        }
  }

  return (
    <>
        <S.Head>Super Black Friday</S.Head>
        <S.SubHead>Aqui você encontra as melhores ofertas</S.SubHead>
          
        <S.HomeOffers>
              <S.ContentOffers>
                  Abajur
                  <S.Foto src={abajur}></S.Foto>
                  R$ 50,00
                  <S.ButtonComprar>Comprar</S.ButtonComprar>
              </S.ContentOffers>
              <S.ContentOffers>
                  Quadro decorativo
                  <S.Foto src={quadro_decorativo}></S.Foto>
                  R$ 60,00
                  <S.ButtonComprar>Comprar</S.ButtonComprar>
              </S.ContentOffers>
              <S.ContentOffers>
                  Vaso de Flores
                  <S.Foto src={vaso_flores}></S.Foto>
                  R$ 35,00
                  <S.ButtonComprar>Comprar</S.ButtonComprar>
              </S.ContentOffers>
              
        </S.HomeOffers>
  
        <S.HomeNewsLetter>
            <S.TitleContent>Cadastre-se em nossa newsletter.</S.TitleContent>  
            <S.SubTitleContent>Vamos enviar todas as ofertas para você.</S.SubTitleContent>  
            <S.Content>
            <S.Input className="emailInput" placeholder="Digite seu e-mail" value={email} onChange={e => setemail(e.target.value)} />
            <S.Button type="button" onClick={handleCadastraNewsLetter}>Cadastrar</S.Button>
            </S.Content>
            { erro ? <S.ErrorMsg>E-mail inválido. Por favor, tente novamente.</S.ErrorMsg> : '' }
            { sucesso ? <S.SuccessMsg>Obrigado por se cadastrar em nossa newsletter.</S.SuccessMsg> : '' }
        </S.HomeNewsLetter>
    </>
  );
}

export default App;
