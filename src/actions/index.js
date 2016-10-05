import firebase from 'firebase';
import {
  FETCH_STOCKS
} from '../actions/types';

  var config = {
    apiKey: "AIzaSyBFJgGDIKh1fP5CFpgAL0TOf0NgLsbibx8",
    authDomain: "fcc-stockmarket.firebaseapp.com",
    databaseURL: "https://fcc-stockmarket.firebaseio.com",
    storageBucket: "fcc-stockmarket.appspot.com",
    messagingSenderId: "813878251631"
  };
  firebase.initializeApp(config);

  export function fetchStocks() {
    const stocksRef = firebase.database().ref('stocks');
    return dispatch => {
        stocksRef.on('value', snapshot => {
        dispatch({
          type: FETCH_STOCKS,
          payload: snapshot.val()
        });
      });
    };
  }

  export function createStock(stock) {
    const stocksRef = firebase.database().ref('stocks');
    return dispatch => stocksRef.push(stock);
  }