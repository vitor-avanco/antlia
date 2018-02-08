import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
import Social from '../componentes/Social';


class Header extends Component {   
    
    render() {
        let page = DataStore.getPageBySlug('rodape');
        let menu = page.acf.menu;


        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <span className="logotipo">
                                <Link to="/" >Antlia</Link>
                            </span>
                        </div>
                        <div className="col-sm-9">
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
        );
    }
}

export default Header;