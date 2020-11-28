import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  render() {
    if (!this.props.isOpened) {
      return null;
    }
    const children = this.props.children;
    return ReactDOM.createPortal(
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {children}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;
