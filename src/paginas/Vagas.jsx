import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import iconeUpload from '../img/icone-upload.png'; 

class ListaVagas extends Component {   
    

    constructor() {
        super();    
        this.state = {listaVagas : []};
    }

   
      
    componentDidMount(){  
        $.ajax({
            url:"http://server.bioage.com.br/app/wordpress/wp-json/wp/v2/vagas/",
            dataType: 'json',
            success:function(resposta){    
              this.setState({listaVagas:resposta});
            }.bind(this)
          } 
        );
        $('body').on('click','.lista-de-vagas .item h3', function(){
            $('.descricao-vaga, .lista-de-vagas .item h3').removeClass('ativo');
            $(this).addClass('ativo');
            $(this).parent().find('.descricao-vaga').addClass('ativo');
        });

        $(".formulario-vaga .fechar").click(function(){
            $('.faixa-form').animate({
                'bottom' : '-100%'
            },500)
            $('.formulario-vaga').fadeOut();
        })
        $("body").on("click",'.quero-candidatar', function(){
            let vaga = $(this).attr("data-vaga");
            $('.formulario-vaga input.nome-da-vaga').val(vaga);
            $('.faixa-form .nome-vaga').text(vaga);
            $('.formulario-vaga').fadeIn();
            $('.faixa-form').animate({
                'bottom' : '0px'
            },500)
        
        })

        var drop = $("input.cv");
        drop.on('dragenter', function (e) {
            $(".drop").css({
                "border": "4px dashed #09f",
                "background": "rgba(0, 153, 255, .05)"
            });
            
            $(".cont").css({
                "color": "#09f"
            });
        }).on('dragleave dragend mouseout drop', function (e) {
            $(".drop").css({
                "border": "3px dashed #DADFE3",
                "background": "transparent"
            });
            $(".cont").css({
                "color": "#8E99A5"
            });
        });



        function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = [escape(theFile.name)].join('');
                $('#list').html(span);
            };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
        }

        $('#files').change(handleFileSelect);
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
                                        <span className='quero-candidatar' data-vaga={item.title.rendered}>Quero me candidatar</span>
                                </div>
                            )
                        })
                    }
                    <div className="divisor"></div>
                       
                    
                </div>
                
            </div>
        );
    }
}


class Vagas extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    componentDidMount(){ 
        window.scrollTo(0,0);
    }
    handleSubmit(event){        
        event.preventDefault();
        
        const form = event.target;
        const data = new FormData(form);
        $('.botao-candidatar').addClass('carregando');
        fetch('http://server.bioage.com.br/app/wordpress/envia-cv.php', {
            method: 'POST',
            body: data,
            cache: false,
            contentType: false,
            processData: false

          }).then(function(retorno) {
            $('.botao-candidatar').removeClass('carregando');
            alert("Inscrição realizada com sucesso. Boa sorte!");
            $('.faixa-form').animate({
                'bottom' : '-100%'
            },500)
            $('.formulario-vaga').fadeOut();
            $('#list').html("");
            $('.formulario-vaga input').val("");
          });;
    }

    render() {
    	let page = DataStore.getPageBySlug('vagas');
        return (
            <div>
            	 <MetaTags>
                    <title>{page.title.rendered}</title>
                    <meta id="meta-description" name="description" content={page.content.rendered} />
                    <meta id="og-title" property="og:title" content={page.title.rendered} />
                </MetaTags>
                <div className="pagina-institucional pagina-vagas">
                    <div className="header-azul">
                        <div className="text-center">
                            <h1>{page.title.rendered}</h1>
                        </div>
                    </div>
                    <div className="border-radius-top container">
                        <div className="row">
                            <div className="offset-sm-1 col-sm-10 text-center text-introducao" dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>
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
                <div className="formulario-vaga">
                    <div className="faixa-form">
                        <div className="container"> 
                        <form onSubmit={this.handleSubmit} className="formulario"  encType="multipart/form-data" >
                                <div className="fechar">X</div>
                                <h3>
                                    Envie seu currículo para a vaga: <span className="nome-vaga">Vaga de Teste</span>
                                </h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input type="hidden" name="vaga" className="nome-da-vaga" required  />
                                                        <input type="text" name="nome" placeholder="Digite seu nome" className="form-input"  required="required" />   
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="email" name="email" placeholder="Digite seu e-mail" className="form-input" required/>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input type="text" name="celular" placeholder="Digite seu celular" className="form-input mascara-celular"  required/>   
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="text" name="pretensao" placeholder="Pretensão salarial" className="form-input" required/>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                        </div> 
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="drop">
                                        <div className="cont">
                                        <img src={iconeUpload} alt="Upload CV"/>
                                        <div className="tit">
                                           Envie seu currículo
                                        </div>
                                        <div className="desc">
                                            Selecione ou arraste seu arquivo para essa área
                                        </div>
                                        </div>
                                        <output id="list">
                                            Nenhum arquivo selecionado
                                        </output>
                                        <input id="files" className="cv" name="files" type="file"/>
                                    </div>
                                    </div> 
                                    <div className="col-sm-12 text-center">
                                        <button className="botao-candidatar">Quero me candidatar</button>  
                                    </div>
                                </div> 
                            </form>
                        </div> 
                    </div>
                </div> 
            </div>
        );
    }
}
export default Vagas;