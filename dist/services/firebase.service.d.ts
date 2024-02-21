import * as firebase from "firebase-admin";
export declare class FirebaseService {
    private firebaseApp;
    constructor(firebaseApp: firebase.app.App);
    sendNotification(token: string, title: string, body: string): Promise<void>;
}
