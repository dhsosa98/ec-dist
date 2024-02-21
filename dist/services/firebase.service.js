"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const firebase = require("firebase-admin");
let FirebaseService = class FirebaseService {
    constructor(firebaseApp) {
        this.firebaseApp = firebaseApp;
    }
    async sendNotification(token, title, body) {
        const message = {
            notification: {
                title,
                body
            },
            token,
        };
        try {
            await this.firebaseApp.messaging().send(message);
            console.log("Notification sent successfully");
        }
        catch (error) {
            console.error("Error sending notification: ", error);
        }
    }
};
FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FIREBASE_APP')),
    __metadata("design:paramtypes", [Object])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map