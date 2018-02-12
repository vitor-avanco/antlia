import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import Tabs from 'react-responsive-tabs';
import MetaTags from 'react-meta-tags';

class Servico extends Component {
    componentDidMount(){ 
        window.scrollTo(0,0);
    }
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
            <div className="pagina-institucional pagina-de-servico">
                <MetaTags>
                    <title>{page.title.rendered}</title>
                    <meta id="meta-description" name="description" content={page.content.rendered} />
                    <meta id="og-title" property="og:title" content={page.title.rendered} />
                </MetaTags>
                <div className="header-azul">
                </div>
                
                <div className="border-radius-top container">
                    <div className="row">
                        <div className="offset-sm-1 col-sm-10 text-center">
                            <h1><img src={page.acf.icone} className="icone" width="70px" /> {page.title.rendered}</h1>
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