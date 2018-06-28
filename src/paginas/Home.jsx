import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';
import Destaque from '../componentes/Destaque';
import Typist from 'react-typist';
class Linguagens extends Component{
	render() {
		let page = DataStore.getPageBySlug('home');
		return(
			<div className="lista-de-linguagens">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h3>{page.acf.lista_de_linguagens.texto}</h3>
						</div>
						<div className="col-sm-6">
							<div className="blocos-de-linguagens">
								{
									page.acf.lista_de_linguagens.linguagens.map(function(item,key){
										return(
											<div className="item" key={key} style={{backgroundImage: 'url('+item.imagem+')'}}></div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Clientes extends Component{
	render() {
		let page = DataStore.getPageBySlug('home');
		return(
			<div className="lista-de-clientes">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="blocos-de-clientes">
								{
									page.acf.lista_de_clientes.clientes.map(function(item,key){
										return(
											<div className="item" key={key} style={{backgroundImage: 'url('+item.imagem+')'}}></div>
										)
									})
								}
							</div>
						</div>
						<div className="col-sm-6">
							<h3>{page.acf.lista_de_clientes.texto}</h3>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
}

class FraseFinal extends Component{
	render() {
		let page = DataStore.getPageBySlug('home');
		function createMarkup(html) {
	        return {
	            __html: html
	        }
	    }
		return(
			<div className="frase-final-home">
				<div className="container">
					<div className="row">
						<div className="col-sm-12" dangerouslySetInnerHTML={createMarkup(page.acf.texto_proximo_ao_rodape)}></div>
					</div>
				</div>
			</div>
		)
	}
}

class BannerPrincipal extends Component{
	render() {
		let page = DataStore.getPageBySlug('home');
		function createMarkup(html) {
	        return {
	            __html: html
	        }
	    }
		return(
			<div className="banner-principal">
				<video id="background-video" loop autoPlay>
					<source src="//antlia.byethost12.com/video.mp4" type="video/mp4" />
				</video>
				<div>
					<Typist>
						<h2 className="text-center">
							{page.acf.slideshow.texto}
						</h2>
					</Typist>
				</div>
			</div>
		)
	}
}

class Home extends React.Component {
	componentDidMount(){ 
        window.scrollTo(0,0);
    }
    render() {
        
        return (
            <div>
            	<MetaTags>
		            <title>Antlia</title>
		            <meta id="meta-description" name="description" content="Empresa especializada no desenvolvimento de softwares e serviços de TI, buscando constantemente a excelência de qualidade em seus serviços" />
		          </MetaTags>

            	<BannerPrincipal />
                <Destaque />
                <Linguagens />
                <Clientes />
                <FraseFinal />

            </div>
        );
    }
}

export default Home;