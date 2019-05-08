import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState(() => ({ friends: res.data }));
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    console.log(this.state.friends);
    return (
      this.state.friends.map(friend => {
        return (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>

          </div>
        )
      })
    )
  }
};

export default FriendsList;