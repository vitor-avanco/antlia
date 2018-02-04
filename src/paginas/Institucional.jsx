import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';


class Institucional extends Component {
    render() {
    	let paginaSlug = this.props.match.path;
    		paginaSlug = paginaSlug.replace('/','');
    		
    	let page = DataStore.getPageBySlug(paginaSlug);

        return (
            <div>
                <h1>{page.title.rendered}</h1>
                SAHUUHAS
            </div>
        );
    }
}
export default Institucional;