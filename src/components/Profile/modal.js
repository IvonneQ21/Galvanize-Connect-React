import React, { Component } from 'react';
import './profile.css';
import ReactDOM from 'react-dom';
import {store} from ''


export class Modal extends Component {
  componentDidMount(){
    this.modalTarget = document.createElement('div');
    this.modalTarget.className ='modal';
    document.body.appendChild(this.modalTarget);
    this._render();

  }

componentwillUpdate() {
  this.render();
}

componentWillUnmount(){
  ReactDOM.unmountComponentAtNode(this.modalTarget);
  document.body.removeChild(this.modalTarget);
}

  _render(){
    ReactDOM.render(
      // <Provider>
        <div>{this.props.children}</div>,
        this.modalTarget
      // </Provider>,
    )
  }
  render(){
    return <noscript />;
  }
    // return (
    //   <div>
    //
    //   </div>
    // )
    // <Provider>
    //   <div>{this.props.children}</div>,
    //   this.modalTarget
    // </Provider>,
  // }

}
