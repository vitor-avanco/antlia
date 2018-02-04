import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';


class Contato extends Component {
    render() {
    	let page = DataStore.getPageBySlug('contato');
        return (
            <div>
                <h1>{page.title.rendered}</h1>

            </div>
        );
    }
}
export default Contato;