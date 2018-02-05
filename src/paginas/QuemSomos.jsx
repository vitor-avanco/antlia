import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';
import Destaque from '../componentes/Destaque';


class QuemSomos extends Component {
    render() {
    	let page = DataStore.getPageBySlug('quem-somos');
        return (
            <div className="pagina-institucional pagina-quem-somos">
                <MetaTags>
		            <title>{page.title.rendered}</title>
		            <meta id="meta-description" name="description" content="Some description." />
		            <meta id="og-title" property="og:title" content={page.title.rendered} />
		            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
	          	</MetaTags>
                <div className="header-azul">
                    <div className="text-center">
                        <h1>{page.title.rendered}</h1>
                    </div>
                </div>
                <div className="border-radius-top container">
                    <div className="row">
                        <div className="col-sm-offset-2 col-sm-8 text-center text-introducao" dangerouslySetInnerHTML={{__html:page.acf.texto_de_introducao}}></div>
                    </div>
                </div>

                <div className="missao-visao-valores">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <h2>Missão</h2>
                                            <div className="texto" dangerouslySetInnerHTML={{__html:page.acf.missao}}></div> 
                                        </div> 
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card">
                                            <h2>Visão</h2>
                                            <div className="texto" dangerouslySetInnerHTML={{__html:page.acf.visao}}></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card valores">
                                    <h2>Valores</h2>
                                    <div className="texto" dangerouslySetInnerHTML={{__html:page.acf.valores}}></div> 
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="pagina-texto-final">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" dangerouslySetInnerHTML={{__html:page.acf.texto_final}}></div>
                        </div>
                    </div>
                </div>
                <Destaque/>
            </div>
        );
    }
}
export default QuemSomos;