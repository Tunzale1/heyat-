import React, { Component } from "react";

class App extends Component {
    state = {
        from: "",
        to: "",
        amount: "",
        lastkey: null,
        className: "esas"
    }
   
    getData = () => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
            .then(r => r.json())
            .then(data => this.setState({ from: data[1].from, to: data[1].to, amount: data[1].amount }))
    }

    onKeypress = (e) => {
        this.setState({ lastkey: e.key })
        if (e.key === "1") {
            this.state.className = "duyme1";
        } else if (e.key === "2") {
            this.state.className = "duyme2";
        } else {
            this.state.className = "esas";
        }
    }

    componentDidMount() {
        this.getData()
        window.addEventListener("keypress", this.onKeypress)
    }
    render() {
        const { className } = this.state
        return (
          <div>
            <h3>1 reqemini basdiqda goy, 2 reqemini basdiqda ise qirmizi olacaq, diger hallarda default veziyyet </h3>
            <div className={className}>
              
                <p>Göndərən:{this.state.from}</p>
                <p>Alan:{this.state.to}</p>
                <p>Məbləğ:{this.state.amount}</p>
            </div>
            </div>
        )
    }
}
export default App