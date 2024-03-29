"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = exports.firebaseProvider = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const firebase_service_1 = require("../services/firebase.service");
exports.firebaseProvider = {
    provide: 'FIREBASE_APP',
    useFactory: () => {
        const serviceAccount = {
            "type": "service_account",
            "project_id": "todo-list-59f9d",
            "private_key_id": "ca9a0f31f725973af6bad4f1aa0ce2d3bb63a3da",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYYhp/AA8Wnhkw\n4MMbNRTBKPbaoQ5JaWSgmmbuNdz7VJyuwsSWAnO/JJKYOe4NYyf5Lgawi8DL7H0+\n0EO9PdCljJtS4g7DM1iHSpjWGwOxFRf7NIJ6hF+dKrWp/kgdbMoDHDwWIpaah29N\n82lcDPrtms2Tu3Bc/WrHIyMTex3YgHHsKT1LPfuL6aWU2uf9v8a1DPpXoQCFHXx7\n15KmWCySieZWdkqA2J44Y+rJ/GWi04bKgUzDjCzu4mtJ36G5xyi/8GbEf0hBEK/N\n4GEW+b0lDtcPbW9bU1yNg1ykEUwbAWvwCG8RSFD1/H4VDOjj4ZcnS4hgI+1pE50g\nEICOY3aBAgMBAAECggEAGOgWtuxeYE7Yr42v239qaYSrDc1mRZHVkeSQGgkGxLOt\n5RNOSMs/ekiy3JvCBkEklEy1aN98KeNOY1kXa/6HCbq429a5cqaupnUHFHPCP4xC\n6QXKT9aEFERvVfOLJk1qRWY03KoBngywoM0+IClk+Dd7DisEW3FLpcnfSVIFwlBC\nNIFdBc9AB0BeLXng4Eigd2UkEWVUxcn+MCp1KUyUUcGT0Rgk2dyzUSTYk0jR3fMy\nGKkzJab5ekQunTBU5i1v2ZcUf9Q7b7SV4XiQNflmVQiwIAu0IJ/wg+cDaLpHQ+ij\nNjUxainsZH+E5B/WAwBOrwT7Q5MiduMAJXAISFPBEwKBgQDR5jAKcxkHDFJC7kJq\nWAlizOcijNX5CU+vWoDrPSeKR7O2shsG+TlAZ7gMxJKNiqUCk9Wtcj+syBbL7/+M\n0/UuHwxhPAwBotPbL+1Z3gLiJNisGf6/jsextUfILaNzJnISMzb9z2rWCJ17xLUz\noV52Mw7nZNlO50fKFDDoISFyUwKBgQC52gSV8c0ZVp+Rgxe4OTAb3gpArdysqlAG\nwytz+XsxAAAB3BjwHWYqFPhhy8iz69DpZYRVU5D5vCSnAHSL/0jKkDgPQxINm+gu\n0llKc/OscIgQsTy77H0cEas5RV5LI6q1MrB2jus0aGBbpOYsbFLSIs2+WhWjeTWa\njA7wCwyBWwKBgHSOBg9HapZnWSahd2/mAxBCB/c/jXIEoaMV9pCqHNLEjh7dN/Tf\nX9NLxQASB+9hFdAgl38A+irP0Rjd5GInMPazdwRne6NM76e/LWXByogZPdgTd0qX\n1nvv1jRqY2EF8EH6/oZiL0k673hS+uv4p6OrJpOHhMQz2cF1BNNh0ljRAoGAGNMo\nXacI0GOjuNob5v2skWxdTjprCZ1ORzj2qu0eKXNojNcLdbdXmDNo4hdIXdAX/bUT\nshoReWpKMwx6hOC6pmQROOiqlqrGnsp2Jt3KJLR7WE90X129cGxjxKihacP/32g/\n7fY1MLDofhVOsYxem7cOaGi8DzP3lwcyT5oKN5UCgYEAiDUxFgWsi7iQLEOv58Ih\nCKdC3TdutvsQHaKaEZEqEWP1z/THJdeB9u3CzbOmJVyRCpkK9+ausyTAn/nFCdHi\nXkF7xt4Da0RBnaTioWoYfHGeeqQ04Daly3NPbuC+N/jx3ByqVnexGavGBjXdrlDG\nUfs+gLInNtA7gNf/PllT948=\n-----END PRIVATE KEY-----\n",
            "client_email": "todo-backend@todo-list-59f9d.iam.gserviceaccount.com",
            "client_id": "115159930332024841578",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/todo-backend%40todo-list-59f9d.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        };
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        return admin;
    },
};
let FirebaseModule = class FirebaseModule {
};
FirebaseModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [exports.firebaseProvider, firebase_service_1.FirebaseService],
        exports: [firebase_service_1.FirebaseService, exports.firebaseProvider]
    })
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=firebase.module.js.map