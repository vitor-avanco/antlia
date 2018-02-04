import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {Link} from 'react-router-dom';

class Social extends Component {   
    
    render() {
        let page = DataStore.getPageBySlug('rodape');
        return (
            <span className="icones-social">
            <li className="item-social">
                    <Link to={page.acf.redes_sociais.linkedin} className="linkedin" target="_blank">Linkedin</Link>
                </li>
                <li className="item-social">
                    <Link to={page.acf.redes_sociais.facebook} className="facebook" target="_blank">Facebook</Link>
                </li>
            </span>
        );
    }
}

export default Social;