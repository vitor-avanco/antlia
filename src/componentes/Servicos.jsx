import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';


class Servicos extends Component {   
    

    constructor() {
        super();    
        this.state = {listaServicos : []};    
    }

      
    componentDidMount(){  
        $.ajax({
            url:"http://server.bioage.com.br/app/wordpress/wp-json/wp/v2/servicos/",
            dataType: 'json',
            success:function(resposta){    
              this.setState({listaServicos:resposta});
            }.bind(this)
          } 
        );          
    } 

    render(){
        return (
             <div className="lista-de-servicos-produtos lista-de-servicos">
                <div className="container">
                {this.state.listaServicos.length > 0?
                    <OwlCarousel className="owl-theme" margin={15} items={4} nav loop dots={false}>
                        {this.state.listaServicos.map(function(item,key){
                                console.log(item.slug)
                                console.log("=====")
                                return(
                                    <div className="item" key={key}>
                                        <Link to={item.slug}>
                                            <img src={item.acf.icone} alt={item.title.rendered} />
                                            <h3>{item.title.rendered}</h3>
                                            <div className="resumo" dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></div>
                                            <span>saiba mais</span>
                                        </Link>
                                    </div>
                                )
                            })
                            }
                        </OwlCarousel>
                    :""}
                    
                </div>
                
            </div>
        );
    }
}

export default Servicos;