import { LightningElement, track } from 'lwc';
import getJoke from '@salesforce/apex/AppJokes.getJoke';



export default class Joke extends LightningElement {
    @track joke;
    @track error;

    connectedCallback() {
        getJoke()
            .then(result => {
                this.joke = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}