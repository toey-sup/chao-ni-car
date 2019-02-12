import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    uploading: false,
  };


  onChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    this.props.addFileToState(file)
    
  };
  // sendHandler = () => {
  //   let data = new FormData();
  //   data.append("file", this.state.file);
  //   console.log(data)
  //   axios({
  //       method: 'post',
  //       url: '/api/files',
  //       data: data,
  //       config: { headers: {'Content-Type': 'multipart/form-data' }}
  //       })
  //       .then(function (response) {
  //           //handle success
  //           console.log(response);
  //       })
  //       .catch(function (err) {
  //           //handle error
  //           console.log(err);
  //       })
  // }


  render() {

    return (
      <div>
        <div className="buttons">
        <input
              type="file"
              accept=".jpg, .png, .jpeg"
              name="file"
              onChange={this.onChange}
        />
        <button onClick={this.props.sendHandler}>Send</button>
        </div>
      </div>
    );
  }
}
