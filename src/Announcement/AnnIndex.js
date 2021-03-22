import React, { Component } from 'react'
import '../Button.css'
export default class AnnIndex extends Component {
    render() {
        return (
            <div>

                <div class="container">

                    <div class="card">
                        <div class="card-header">
                            <img src={this.props.annouPictrue} alt='' />
                            <div class="card-body">
                                <span class="tag tag-teal">{this.props.annouTitle}</span>
                                <h4>{this.props.annoulocation}</h4>
                                <p>{this.props.annouDescription}</p>
                                <p>{this.props.phoneNumber}</p>

                                <button className="button3" onClick={() => {
                                    this.props.deleteAnn(this.props.id);
                                }} >  Delete </button>
                                <button className="button3"
                                    onClick={() => {
                                        this.props.editView(this.props.id);
                                    }} >  Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
