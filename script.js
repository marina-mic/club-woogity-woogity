// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5rBl90b7_kw_o8hq3OaaA1sqxnuNCa1I",
    authDomain: "clubwoogitywoogity.firebaseapp.com",
    projectId: "clubwoogitywoogity",
    storageBucket: "clubwoogitywoogity.appspot.com",
    messagingSenderId: "760884858982",
    appId: "1:760884858982:web:d378fd62ccfd463ed41da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the message in the database
const messageRef = ref(database, 'dailyMessage');

// Display the current message
onValue(messageRef, (snapshot) => {
    const message = snapshot.val();
    document.getElementById('currentMessage').textContent = message;
});

// Function to update the message
export function updateMessage() {
    const newMessage = document.getElementById('newMessage').value;
    if (newMessage.trim()) {
        set(messageRef, newMessage);
        document.getElementById('newMessage').value = '';  // Clear input field
    }
}

// Make the updateMessage function accessible from the HTML file
window.updateMessage = updateMessage;