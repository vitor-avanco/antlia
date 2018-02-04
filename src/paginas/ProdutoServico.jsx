import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import Servicos from '../componentes/Servicos';
import Produtos from '../componentes/Produtos';

class ProdutoServico extends Component {

    render() {
    	let paginaSlug = this.props.match.path;
    		paginaSlug = paginaSlug.replace('/','');
    	let page = DataStore.getPageBySlug(paginaSlug);
        
       
        

        return (
            <div className="pagina-institucional pagina-produtos-servicos">
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
                <div className="bg-cinza">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5" dangerouslySetInnerHTML={{__html:page.acf.conheca_nossos_produtos}}></div>
                            <div className="col-sm-7">
                                <Servicos />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                        <div className="row">
                            <div className="col-sm-12" dangerouslySetInnerHTML={{__html:page.acf.conheca_nossos_servicos}}></div>
                            <div className="col-sm-12">
                                <Produtos />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ProdutoServico;