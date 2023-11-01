import React, { Component } from 'react'
import './Destination.css'


export class DestinationData extends Component {
  render(props) {
    return (
      <>
          <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.para}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="England" />
                    <img src={this.props.img2} alt="England" />
                </div>
            </div>
      </>
    )
  }
}

export default DestinationData
