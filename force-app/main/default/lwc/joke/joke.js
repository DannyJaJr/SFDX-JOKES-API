import { LightningElement, track } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import getJoke from '@salesforce/apex/AppJokes.getJoke';

export default class Joke extends NavigationMixin(LightningElement) {
    ampm = false;
    @track boolVisible = false;
    setupData; punchlineData;

    connectedCallback() {
        getJoke({}).then((response) => {
            var jokeData = JSON.parse(response);
            if (jokeData == '') {
                this.boolVisible = true;
            } else {
                this.boolVisible = false;
                this.setupData = jokeData[0].setup;
                this.punchlineData = jokeData[0].punchline;
            }

            // getJoke()
            //     .then(result => {
            //         this.joke = result;
            //     })
            //     .catch(error => {
            //         this.error = error;
            //     });
        }

}


// import { LightningElement, track } from 'lwc';
// import { NavigationMixin } from "lightning/navigation";
// import getJoke from '@salesforce/apex/AppJokes.getJoke';

// export default class Joke extends NavigationMixin(LightningElement) {
//     ampm = false;
//     @track boolVisible = false;
//     setupData; punchlineData;

//     connectedCallback(){
//         getJoke({}).then((response)=> {
//             var jokeData = JSON.parse(response);
//             if (jokeData == '') {
//                 this.boolVisible = true;
//             } else {
//                 this.boolVisible = false;
//                 this.setupData = jokeData[0].setup;
//                 this.punchlineData = jokeData[0].punchline;
//             }
//         }
//     }
// }