import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import Tabs from 'react-responsive-tabs';








class Servico extends Component {

    render() {
    	let paginaSlug = this.props.match.path;
    		paginaSlug = paginaSlug.replace('/','');
    	let page = DataStore.getServicoBySlug(paginaSlug);

        let abas = page.acf.abas_de_explicacao;
        
        function getTabs() {
            if(abas === false){
                console.log('errou');
            }else{
                return abas.map(item => ({
                    tabClassName: 'tab', // Optional
                    panelClassName: 'panel', // Optional
                    title: item.titulo,
                    getContent: () => item.conteudo,
                }));
            }
          
        }
        

        return (
            <div className="pagina-de-servico">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-offset-2 col-sm-8 text-center">
                            <h1>{page.title.rendered}</h1>
                            <div className="conteudo" dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>    
                        </div>
                    </div>
                    <div className="row">
                        <Tabs items={getTabs()} />
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="conteudo" dangerouslySetInnerHTML={{__html:page.acf.conteudo_pos_abas}}></div>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Servico;