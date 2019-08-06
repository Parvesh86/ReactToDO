import React,{Component} from 'react'

class Card extends Component{
    render(){
        console.log(this.props)
        return (
        <div className="col-lg-3 col-xs-12 col-sm-3">
            <div className="card">
                <img className="card-img-top" src={require('./../images/react.png')} alt="286X180" />
                <div className="card-body">
                <h5 className="card-title">{this.props.Name}</h5>
                <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        </div>
       
        )
    }

}
export default Card