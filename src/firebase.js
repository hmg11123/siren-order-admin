import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBPj3LR8sudsArRe6cFHX_eaz_KsvkeFw0',
    authDomain: 'siren-order-2f4ea.firebaseapp.com',
    databaseURL: 'https://siren-order-2f4ea.firebaseio.com',
    projectId: 'siren-order-2f4ea',
    storageBucket: 'siren-order-2f4ea.appspot.com',
    messagingSenderId: '554453738405',
    appId: '1:554453738405:web:9150b8a162efa2842d3e4c',
    measurementId: 'G-GVDXTCV0TE',
};

firebase.initializeApp(config);
const firestore = new firebase.firestore();
export { firestore };
