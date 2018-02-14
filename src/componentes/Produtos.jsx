import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';


class Produtos extends Component {   
    

    constructor() {
        super();    
        this.state = {listaProdutos : []};    
    }

      
    componentDidMount(){  
        $.ajax({
            url:"http://www.antlia.com.br/wordpress/wp-json/wp/v2/produtos/",
            dataType: 'json',
            success:function(resposta){    
              this.setState({listaProdutos:resposta});
            }.bind(this)
          } 
        );          
    } 

    render(){
        return (
             <div className="lista-de-servicos-produtos lista-de-servicos">
                
                {this.state.listaProdutos.length > 0?
                    <OwlCarousel className="owl-theme" margin={15} items={2} nav loop dots={false} responsiveClass={true} responsive={ { 0:{ items:2} } }>
                    {
                        this.state.listaProdutos.map(function(item,key){
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
        );
    }
}

export default Produtos;