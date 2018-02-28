import axios from 'axios';
import alt   from '../alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://www.antlia.com.br/wordpress'; // Wordpress installation url

        this.pagesEndPoint = appUrl + '/wp-json/wp/v2/pages';
        this.postsEndPoint = appUrl + '/wp-json/wp/v2/posts';
        this.produtosEndPoint = appUrl + '/wp-json/wp/v2/produtos';
        this.servicosEndPoint = appUrl + '/wp-json/wp/v2/servicos';
        this.vagasEndPoint = appUrl + '/wp-json/wp/v2/vagas';


    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);


            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb);
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){

        
            
            this.api(this.produtosEndPoint).then((response)=>{
                const produtos     = response

                this.api(this.servicosEndPoint).then((response)=>{
                    const servicos     = response
                    
                    this.api(this.vagasEndPoint).then((response)=>{
                        const vagas     = response
                        const payload   = { pages, produtos, servicos, vagas };

                        this.getSuccess(payload); // Pass returned data to the store
                        cb(payload); // This callback will be used for dynamic rout building
                    });
                });
            });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);