import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

const TestPage = () => {
  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyB7wBgunSQLX2ZEwT19DdIhhdRB_M7RLwE",
        authDomain: "guardiankindl-b1613.firebaseapp.com",
        projectId: "guardiankindl-b1613",
        storageBucket: "guardiankindl-b1613.appspot.com",
        messagingSenderId: "969381684736",
        appId: "1:969381684736:web:d2b7684746609ed900dae5",
        measurementId: "G-PVM2PLGGKG"
    };

    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    // Get the device token for the current user
    messaging
      .getToken({
        vapidKey: 'BMVwz9kCTYv5CikzPFWP1XFIXfOiSF5F6yYrkRhuVG2ej2IFh0jcRnzqVckDNMXIA1H9eok_DpbyzXl_QyqQBc4' // Replace with your VAPID key
      })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server or handle it as needed
          console.log('Token:', currentToken);
        } else {
          console.log('No registration token available.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token:', err);
      });

    // Handle incoming messages
    messaging.onMessage((payload) => {
      console.log('Message received:', payload);
      // Handle displaying the notification in your app
    });

    // Optionally, request permission to receive notifications
    messaging
      .requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        // You can now send notifications
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }, []);

  return (
    // Your component JSX
    <div>Your Firebase-integrated React component</div>
  );
};

export default TestPage;
