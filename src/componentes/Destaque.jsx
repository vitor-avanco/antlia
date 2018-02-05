import React, { Component } from 'react';
import DataStore from '../flux/stores/DataStore';
import {Link} from 'react-router-dom';

export default class Destaque extends Component{
	render() {
		let page = DataStore.getPageBySlug('home');
		
		return(
			<div className="lista-de-servicos lista-de-servicos-produtos">
				<div className="container">
					<div className="row">
						{
							page.acf.lista_de_servicos_e_produtos.map(function(item,key){
								return(
									<div className="col-md-3"> 
										<div className="item" key={key}>
											<Link to={item.produto_ou_servico.post_name}>
												<img src={item.icone} alt={item.produto_ou_servico.post_title} />
												<h3>{item.produto_ou_servico.post_title}</h3>
												<p>{item.produto_ou_servico.post_excerpt}</p>

												<span>saiba mais</span>
											</Link>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}