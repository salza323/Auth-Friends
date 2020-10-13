import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../Utils/AxiosWithAuth';

class GetFriends extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const token = window.localStorage.getItem('token');
    axiosWithAuth()
      .get('/api/data')
      .then((res) => {
        this.setState(res.friends);
      });
  };
}
