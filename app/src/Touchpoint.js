import React, { Component } from 'react'

class Touchpoint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFollowText: 'Other Person'
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <h3 id="myModalLabel">Touch a User</h3>
          //   <form onSubmit={this.onHandleSubmit} className="form-group">
          //     <div className="col-xs-8">
          //       <input value={this.state.newFollowText} onChange={this.updateFollowText} type="text" className="form-control" id="followHandle" placeholder="@handle" />
          //     </div>
          //     <div className="col-xs-2">
          //       <button type="submit" id="submitFollow" className="btn btn-primary">follow</button>
          //     </div>
          //   </form>
          // </div>
          // <div className="row">
          //   <h3>Following</h3>
          //   <ul id="following">
          //     {this.props.following.map(user => {
          //       return (
          //         <li className='following-handle' key={user.userHash}>
          //           <span className='handle'>{user.handle || user.userHash}</span>
          //           <button type="button" className="close" aria-label="Close" onClick={() => this.props.unfollow(user.userHash)}>
          //             <span aria-hidden="true">&times;</span>
          //           </button>
          //         </li>
          //        )
          //       })}
          //   </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Touchpoint
