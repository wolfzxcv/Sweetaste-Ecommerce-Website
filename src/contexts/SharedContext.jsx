import React, { useState, createContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const SharedContext = createContext();

export default props => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [product, setProduct] = useState([]);

  const handleLogin = user => {
    axios
      .post(`${process.env.REACT_APP_API}/admin/signin`, user)
      .then(result => {
        if (result.data.message === '登入成功') setIsLogin(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleLogout = user => {
    axios
      .post(`${process.env.REACT_APP_API}/logout`, user)
      .then(setIsLogin(false));
  };

  const checkIfLogin = () => {
    axios
      .post(`${process.env.REACT_APP_API}/api/user/check`)
      .then(result => {
        if (result.data.success === true) setIsLogin(true);
      })
      .catch(error => {
        console.log(error.message);
      });
    if (!isLogin) {
      return <Redirect to='/login' />;
    }
  };

  const getProductList = () => {};

  const value = {
    user,
    setUser,
    product,
    setProduct,
    isLogin,
    setIsLogin,
    handleLogin,
    handleLogout,
    checkIfLogin,
    getProductList,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
