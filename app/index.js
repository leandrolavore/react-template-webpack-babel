import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 

export default class App extends Component {

    constructor(){
        super();

        this.state = {

        };
        
    };
    render() {
        return (
            <div>
                <h1>Hello from React Stripped</h1>
                <p>Webserver working!</p>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('App'))