import { LightningElement, track } from 'lwc';
	
export default class HelloWebComponent extends LightningElement {
    // This declares and initializes a greeting property
    //whenever the value of greeting changes, the component’s HTML template is automatically refreshed.
    @track greeting = 'Trailblazer';
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
    // These getter functions are called expressions. 
    // They are used to display values just like @track properties, 
    // but expression values can be calculated based on some logic written in a function.
    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
}