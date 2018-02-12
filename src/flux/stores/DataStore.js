import alt          from '../alt/alt.js';
import DataActions  from '../actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,

            getAllVagas:    this.getAllVagas,
            getAllServicos:    this.getAllServicos,
            getAllProdutos:    this.getAllProdutos,

            getPageBySlug:  this.getPageBySlug,

            getServicoBySlug:  this.getServicoBySlug,
            getProdutoBySlug: this.getProdutoBySlug
            
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() { 
        return this.getState().data.pages; 
    }

    // Returns all Posts
    getAllPosts() { 
        return this.getState().data.posts; 
    }

    getAllServicos() { 
        return this.getState().data.servicos; 
    }

    getAllProdutos() { 
        return this.getState().data.produtos; 
    }

    getAllVagas() { 
        return this.getState().data.vagas; 
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    getServicoBySlug(slug){
        const pages = this.getState().data.servicos;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    getProdutoBySlug(slug){
        const pages = this.getState().data.produtos;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore')