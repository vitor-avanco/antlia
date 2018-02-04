import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
import Social from '../componentes/Social';

class Footer extends Component {   
    
    render() {
        let page = DataStore.getPageBySlug('rodape');
        function createMarkup(html) {
            return {
                __html: html
            }
        }

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="logotipo">
                                <Link to="/" >Antlia</Link>
                            </span>
                        </div>
                        <div className="col-sm-8">
                            <span className="texto-footer" dangerouslySetInnerHTML={createMarkup(page.acf.rodape_texto_de_apoio)}></span>
                        </div>
                        <div className="col-sm-2">
                            <span className="social-footer">
                                SIGA-NOS: 
                                <Social />
                            </span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="copyright">
                                Antlia - Todos os direitos reservados. 2018
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <span className="certificacoes"></span>
                        </div>
                    </div>
                </div>
                
            </footer>
        );
    }
}

export default Footer;