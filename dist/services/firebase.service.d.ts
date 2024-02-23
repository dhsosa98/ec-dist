import * as firebase from "firebase-admin";
import { NotificationProvider } from "./notification.provider.interface";
export declare class FirebaseService implements NotificationProvider {
    private firebaseApp;
    constructor(firebaseApp: firebase.app.App);
    sendNotification(token: string, title: string, body: string): Promise<void>;
}
