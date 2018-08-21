import React, {Component} from 'react'
import Clock from './Clock'
function Name(props) {
    return <h1>名字： {props.name}</h1>
}
function Age(props) {
    return <div>{props.age}</div>
}
function Speach(props) {
    return <h6>{props.speach}</h6>
}
class Hello extends Component {
    render() {
            return (
                <div>
                    <Clock>
                        <li>test</li>
                        <li>haha</li>
                    </Clock>

                    <h2>Hello world!</h2>
                    <Name name="李文康"/>
                    <Age age='14'/>
                    <Speach speach='hello when i understand'/>
                </div>
            )
    }
}
export default Hello