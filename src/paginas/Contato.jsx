import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import iconeMapa from '../img/icone-mapa.png'; 
import iconeTelefone from '../img/icone-telefone.png'; 
import iconeEmail from '../img/icone-email.png'; 
const coords = {
    lat: -23.5611385,
    lng: -46.65822149999997
  };   
const params = {v: '3.exp', key: 'AIzaSyBmWSZTQayBQ_RCzVaTmgaTC6Qzw3s9yHs'};

class Mapa extends Component {
 
    onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: true
      });
    }
   
    onDragEnd(e) {
      console.log('onDragEnd', e);
    }
   
    onCloseClick() {
      console.log('onCloseClick');
    }
   
    onClick(e) {
      console.log('onClick', e);
    }
   
    render() {
      return (
        <Gmaps
          width={'100%'}
          height={'300px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={16}
          loadingMessage={'Carregando'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'Alameda Santos, 1800 - 1º andar. São Paulo'}
            onCloseClick={this.onCloseClick} />
        </Gmaps>
      );
    }
   
  };

  class Chatbot extends Component {
    render(){
        return(
            <div id="chatbot">
                <h2>Precisa de ajuda? <strong>Use nosso chatbot!</strong></h2>

                <div>CHATBOT VAI AQUI</div>
            </div>
        )
    }

  }

class Contato extends Component {
    componentDidMount(){ 
        window.scrollTo(0,0);
    }
    render() {
        let page = DataStore.getPageBySlug('contato');
        
        return (
            <div className="pagina-institucional pagina-contato">
                <MetaTags>
		            <title>{page.title.rendered}</title>
		            <meta id="meta-description" name="description" content="Entre em contato conosco!" />
		            <meta id="og-title" property="og:title" content={page.title.rendered} />
	          	</MetaTags>
                <div className="header-azul header-mapa">
                    <Mapa />
                </div>
                <div className="border-radius-top container">
                    <div className="row">                    
                        <div className="col-sm-offset-2 col-sm-8 text-center text-introducao" >
                            <h1>{page.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html:page.acf.texto_de_introducao}}></div>
                            <div className="endereco-contato text-center">
                                <div className="endereco">
                                    <img src={iconeMapa} alt="Endereço"/> <strong>Endereço:</strong> {page.acf.endereco}
                                </div>
                                <div className="telefones">
                                    <img src={iconeTelefone} alt="Telefone"/> <strong>Telefones:</strong> {page.acf.telefone}
                                </div>
                                <div className="email">
                                    <img src={iconeEmail} alt="E-mail"/> <strong>E-mail:</strong> {page.acf.email}
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contato;