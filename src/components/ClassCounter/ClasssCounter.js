import components  from "react";

class ClassCounter extends components {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <p>0</p>
                <button onClick={this.increment}>+</button>  
            </div>
        )
    }
}

export default ClassCounter;