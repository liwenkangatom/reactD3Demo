import React, {Component} from 'react'

class Clock extends Component {
    constructor (props) {
        super(props)
        this.state = {date: new Date()}
    }
    componentWillMount () {
        React.Children.map(this.props.children,
        function (child) {
            return <a>{child}</a>
        })
    }
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount () {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>hello, clock!</h1>
                <h2>It is :{this.state.date.toLocaleTimeString()}}</h2>
            </div>
        )
    }
}
export default Clock