import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../Utils/AxiosWithAuth';

const initialValues = {
  id: 0,
  name: '',
  age: 0,
  email: '',
};

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  const getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        setFriends(res.data);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', formValues)
      .then((res) => {
        getFriends();
      });
  };

  return (
    <>
      <div className='friend-form'>
        <form onSubmit={onSubmit}>
          <label>
            ID
            <input
              placeholder='ID'
              type='number'
              name='id'
              value={formValues.id}
              onChange={onChange}
            />
          </label>
          <label>
            Name
            <input
              placeholder='Name'
              type='text'
              name='name'
              value={formValues.name}
              onChange={onChange}
            />
          </label>
          <label>
            Age
            <input
              placeholder='Age'
              type='number'
              name='age'
              value={formValues.age}
              onChange={onChange}
            />
          </label>
          <label>
            Email
            <input
              placeholder='Email'
              type='text'
              name='email'
              value={formValues.email}
              onChange={onChange}
            />
          </label>
          <button>Add A Friend</button>
        </form>
      </div>

      {friends.map((friend) => (
        <div className='current-friends' key={friend.id}>
          <h2>{`Name: ${friend.name}`}</h2>
          <h5>{`Age: ${friend.age}`}</h5>
          <h5>{`Email: ${friend.email}`}</h5>
        </div>
      ))}
    </>
  );
};

export default FriendsList;
