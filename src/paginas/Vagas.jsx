import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class ListaVagas extends Component {   
    

    constructor() {
        super();    
        this.state = {listaVagas : []};    
    }

      
    componentDidMount(){  
        $.ajax({
            url:"http://localhost:8080/wordpress/wp-json/wp/v2/vagas/",
            dataType: 'json',
            success:function(resposta){    
              this.setState({listaVagas:resposta});
            }.bind(this)
          } 
        );          
    } 

    render(){
        return (
             <div className="lista-de-vagas">
                <div className="container">
                    {
                        this.state.listaVagas.map(function(item,key){
                            return(
                                <div className="item" key={key}>
                                        <h3>{item.title.rendered}</h3>
                                        <div className="descricao-vaga" dangerouslySetInnerHTML={{__html:item.acf.descricao_da_vaga}}></div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}


class Vagas extends Component {
    render() {
    	let page = DataStore.getPageBySlug('vagas');
        return (
            <div>
            	<MetaTags>
		            <title>{page.title.rendered}</title>
		            <meta id="meta-description" name="description" content="Some description." />
		            <meta id="og-title" property="og:title" content={page.title.rendered} />
		            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
	          	</MetaTags>
                <div className="pagina-institucional pagina-vagas">
                    <div className="header-azul">
                        <div className="text-center">
                            <h1>{page.title.rendered}</h1>
                        </div>
                    </div>
                    <div className="border-radius-top container">
                        <div className="row">
                            <div className="col-sm-offset-2 col-sm-8 text-center text-introducao" dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>
                        </div>
                    </div>
                    <ListaVagas/>
                    <div className="box-lead">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3>{page.acf.call_to_action.chamada}</h3>
                                    <Link to={page.acf.call_to_action.link_do_botao.post_name}>{page.acf.call_to_action.texto_do_botao}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Vagas;