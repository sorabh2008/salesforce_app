import { LightningElement, track } from 'lwc';
const COLS = [
    { label: 'State', fieldName: 'state', editable: true },
    { label: 'Active', fieldName: 'active', editable: true },
    { label: 'Confirmed', fieldName: 'confirmed' }
];
import retriveNews from "@salesforce/apex/newsController1.retriveNews";
export default class DisplayData extends LightningElement {
    @track result = []
    @track columns = COLS;
    
    connectedCallback(){
        this.fetchNews();
    }
    fetchNews(){
        
        retriveNews().then(response=>{
            console.log(response);
            this.formatNewsData(response.statewise)
        }).catch(error=>{
           this.formatNewsData(error || null)
        });
    }
    formatNewsData(res){
        
        this.result = res;
        }

    }