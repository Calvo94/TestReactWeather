import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';

class ErrorModal extends Component{


  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  }
  componentDidMount() {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDomServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render(){


    return(
      <div></div>
    );

  }

}

ErrorModal.defaultProps= {
    title:'Error'
};

module.exports = ErrorModal;
