import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import Servicos from '../componentes/Servicos';
import Produtos from '../componentes/Produtos';
import MetaTags from 'react-meta-tags';


class ProdutoServico extends Component {
    componentDidMount(){ 
        window.scrollTo(0,0);
    }
    render() {
    	let paginaSlug = this.props.match.path;
    		paginaSlug = paginaSlug.replace('/','');
    	let page = DataStore.getPageBySlug(paginaSlug);
        
       
        

        return (
            <div className="pagina-institucional pagina-produtos-servicos">
                <MetaTags>
                    <title>{page.title.rendered}</title>
                    <meta id="meta-description" name="description" content={page.acf.texto_de_introducao} />
                    <meta id="og-title" property="og:title" content="{page.title.rendered}" />
                </MetaTags>
                <div className="header-azul">
                    <div className="text-center">
                        <h1>{page.title.rendered}</h1>
                    </div>
                </div>
                <div className="border-radius-top container">
                    <div className="row">
                        <div className="offset-sm-1 col-sm-10 text-center text-introducao" dangerouslySetInnerHTML={{__html:page.acf.texto_de_introducao}}></div>
                    </div>
                </div>
                <div className="bg-cinza">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6" dangerouslySetInnerHTML={{__html:page.acf.conheca_nossos_produtos}}></div>
                            <div className="col-sm-6" style={{paddingLeft: 0+'px'}} >
                                <Produtos />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center" dangerouslySetInnerHTML={{__html:page.acf.conheca_nossos_servicos}}></div>
                            <div className="col-sm-12">
                                <Servicos />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ProdutoServico;