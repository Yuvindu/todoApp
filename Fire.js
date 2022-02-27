/*import * as firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuiroanpKGS2IqtCSjeybfvSXWwz7FeQA",
    authDomain: "todoapp-db1f2.firebaseapp.com",
    projectId: "todoapp-db1f2",
    storageBucket: "todoapp-db1f2.appspot.com",
    messagingSenderId: "119823486274",
    appId: "1:119823486274:web:49a199a79ef4a17bbc8cdb"
}

class Fire { 
    init(){
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            }else {
                firebase
                  .auth()
                  .signInAnonymously()
                  .catch(error => {

                })
            }
        })
    }
}

export default Fire;*/