import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleCounter = flag => {
        const {count} = this.state;

        if (flag === "add") {
            this.setState(prevProp => {
                debugger;
                return {count: prevProp.count + 1}
            })
        } else if (flag === "subtract") {
            this.setState(prevProp => {
                return {count: prevProp.count - 1}
            })
        } else {
            this.setState({count: 0})
        }
    };

    render() {
        const {count} = this.state;

        return (
            <div className="App">
                <h3>Counter</h3>
                <div className="container">
                    <h2>{count}</h2>
                    <button onClick={() => this.handleCounter("add")}>+</button>
                    <button onClick={() => this.handleCounter("subtract")}>-</button>
                    <div>
                        <button onClick={() => this.handleCounter("reset")}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
