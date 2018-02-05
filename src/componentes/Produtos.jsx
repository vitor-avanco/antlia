import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';



class Produtos extends Component {   
    

    constructor() {
        super();    
        this.state = {listaProdutos : []};    
    }

      
    componentDidMount(){  
        $.ajax({
            url:"http://server.bioage.com.br/app/wordpress/wp-json/wp/v2/produtos/",
            dataType: 'json',
            success:function(resposta){    
              this.setState({listaProdutos:resposta});
            }.bind(this)
          } 
        );          
    } 

    render(){
        return (
             <div className="lista-de-servicos">
                <div className="container">
                    {
                        this.state.listaProdutos.map(function(item,key){
                            return(
                                <div className="item" key={key}>
                                    <Link to={item.slug}>
                                        <img src={item.acf.icone} alt={item.title.rendered} />
                                        <h3>{item.title.rendered}</h3>
                                        <p>{item.acf.resumo}</p>

                                        <span>saiba mais</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default Produtos;