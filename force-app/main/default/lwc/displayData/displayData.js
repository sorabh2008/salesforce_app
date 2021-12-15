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
    @track isLoadingComponent = false;
    // 1st in lifecycle
    constructor() {
        console.log("Hi! I am constructor of Display Data");
        this.isLoadingComponent = true;
    }
    
    // gets called just before rendering on DOM
    connectedCallback(){
        this.fetchNews();
        console.log("Hi! I am connectedCallback of Display Data.");
        if(result !== null) {
            this.isLoadingComponent = false;
        }
    }
    
    // gets called after rendering this and all child components.
    renderedCallback() {
        console.log("You can now see me and my (Display Data) child components on browser");   
    }
    
    // called when component is deleted from DOM
    disconnectedCallback() {
        console.log("Bye Bye from Display Data");   
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
