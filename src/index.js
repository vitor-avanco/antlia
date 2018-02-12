import React from 'react';
import {render} from 'react-dom';
import DataActions from './flux/actions/DataActions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Institucional from './paginas/Institucional';
import QuemSomos from './paginas/QuemSomos';
import Contato from './paginas/Contato';

import ProdutoServico from './paginas/ProdutoServico';
import Produto from './paginas/Produto';
import Servico from './paginas/Servico';

import Vagas from './paginas/Vagas';

import registerServiceWorker from './registerServiceWorker';

import './css/font.css';
import './css/style.css';

class AppInitializer {
	templates = {
        'page-quemsomos.php' : QuemSomos,
        'page-contato.php': Contato,
        'page-institucional.php': Institucional,
        'page-produtos-servicos.php' : ProdutoServico,
        'page-vagas.php' : Vagas,
        '': Institucional
    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.template]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })
    }
    buildRoutesServicos(data){
        return data.servicos.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={Servico}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })
    }

    buildRoutesProdutos(data){
        return data.produtos.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={Produto}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" component={ Home } exact />

                            {this.buildRoutes(response)}
                            {this.buildRoutesServicos(response)}
                            {this.buildRoutesProdutos(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                        <Footer />
                    </div>
                </Router>

                , document.getElementById('root')
            );
        });
    }
}

new AppInitializer().run();
registerServiceWorker();
