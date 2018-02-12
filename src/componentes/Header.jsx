import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
import Social from '../componentes/Social';
import MenuIcone from "../menu.svg";
import $ from "jquery"; 




class Header extends Component {  
    componentDidMount(){
        $('body').on("click", ".container-menu-mobile .menu ul li a", function(){
            $(".container-menu-mobile .menu").css("margin-right", "" );
            $(".container-menu-mobile").fadeOut();
        })
    } 
    abreMenu(){
        $(".container-menu-mobile").fadeIn();
        $(".container-menu-mobile .menu").animate({
            marginRight : 0
        },500);
    }
    fechaMenu(){
        $(".container-menu-mobile .menu").css("margin-right", "" );
        $(".container-menu-mobile").fadeOut();
        
    }
    render() {
        let page = DataStore.getPageBySlug('rodape');
        let menu = page.acf.menu;


        return (
            <div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-sm-3">
                            <span className="logotipo">
                                <Link to="/" >Antlia</Link>
                            </span>
                        </div> 
                        <div className="offset-7 col-xs-2 menu-mobile">
                            <a href="#" onClick={this.abreMenu}>
                                <img src={MenuIcone} />
                            </a> 
                        </div> 
                        <div className="col-sm-9 hidden-xs">
                            <ul className="menu-topo">
                            <li><Link to="/" >Home</Link></li>
                                {
                                    menu.map(function(item,key){
                                        return(
                                            
                                            <li key={key}>
                                                <Link to={item.link.post_name}>
                                                    {item.texto}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <Social />
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-menu-mobile">
                <div className="fechar" onClick={this.fechaMenu}></div>
                <div className="menu">
                    <ul>
                    <li><Link to="/" onClick={this.fechaMenu.bind(this)} >Home</Link></li>
                    {
                        menu.map(function(item,key){
                            return(
                                
                                <li key={key}>
                                    <Link to={item.link.post_name} >
                                        {item.texto}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div> 
            </div>
        );
    }
}

export default Header;