import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import $ from "jquery";
import MetaTags from 'react-meta-tags';




class FormularioContato extends Component{
    handleSubmit(event){        
        event.preventDefault();
        
        const form = event.target;
        const data = new FormData(form);
        $('.botao-enviar').addClass('carregando');
        $('.interesse').val(document.getElementsByTagName("title")[0].innerHTML);
        fetch('http://server.bioage.com.br/app/wordpress/envia-contato.php', {
            method: 'POST',
            body: data,
            cache: false,
            contentType: false,
            processData: false

          }).then(function(retorno) {
            $('.botao-enviar').removeClass('carregando');
            alert("Mensagem enviada com sucesso");
            $('.formulario-vaga input, .formulario-vaga textarea').val("");
          });;
    }
    render(){

        return(
            <div className="formulario-vaga show-form">
                <div className="faixa-form">
                    <div className="container"> 
                    <form onSubmit={this.handleSubmit} className="formulario"  encType="multipart/form-data" >
                            <div className="fechar">X</div>
                            <h3>
                                Ficou interessado? Entre em contato conosco:
                            </h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input type="hidden" className="interesse"/>  
                                                    <input type="text" name="nome" placeholder="Digite seu nome" className="form-input"  required="required" />   
                                                </div>
                                                <div className="col-sm-12">
                                                    <input type="email" name="email" placeholder="Digite seu e-mail" className="form-input" required/>
                                                </div> 
                                                <div className="col-sm-12">
                                                    <input type="text" name="celular" placeholder="Digite seu Telefone" className="form-input mascara-celular"  required/>   
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <textarea name="mensagem" placeholder="Digite sua mensagem" className="form-input form-textarea" required></textarea>  
                                        </div>
                                        <div className="col-sm-12">
                                        <button className="botao-enviar">Enviar Mensagem</button>
                                        </div>
                                    </div>  
                                </div>
                            </div> 
                        </form>
                    </div> 
                </div>
            </div>
        )
    }

}

class Produto extends Component {
    componentDidMount(){ 
        window.scrollTo(0,0);
    }
    render() {
    	let paginaSlug = this.props.match.path;
    		paginaSlug = paginaSlug.replace('/','');
    	let page = DataStore.getProdutoBySlug(paginaSlug);

     
        
        

        return (
            <div className="pagina-institucional pagina-de-produto">
                <MetaTags>
                    <title>{page.title.rendered}</title>
                    <meta id="meta-description" name="description" content={page.content.rendered} />
                    <meta id="og-title" property="og:title" content={page.title.rendered} />
                </MetaTags>
                <div dangerouslySetInnerHTML={{__html:page.content.rendered}}>
                </div>
                <style>{page.acf.css}</style>
                <script type="text/javascript">{page.acf.js}</script>
                <FormularioContato />
            </div>
        );
    }
}
export default Produto;