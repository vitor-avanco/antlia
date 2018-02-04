import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import MetaTags from 'react-meta-tags';


class QuemSomos extends Component {
    render() {
    	let page = DataStore.getPageBySlug('quem-somos');
        return (
            <div>
            	<MetaTags>
		            <title>Quem Somos</title>
		            <meta id="meta-description" name="description" content="Some description." />
		            <meta id="og-title" property="og:title" content="MyApp" />
		            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
	          	</MetaTags>
                <h1>{page.title.rendered}</h1>

            </div>
        );
    }
}
export default QuemSomos;