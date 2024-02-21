"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleValidator = void 0;
const class_validator_1 = require("class-validator");
let ScheduleValidator = class ScheduleValidator {
    validate(schedule, args) {
        console.log(schedule);
        const everyMinutePattern = /^Every (\d+) minutes$/gi;
        const everyHourPattern = /^Every (\d+) hours$/gi;
        const everyDayPattern = /^Every (\d+) days at (\d{1,2}:\d{2})$/gi;
        const everyWeekPattern = /^Every (\d+) weeks at (\d{1,2}:\d{2}) on (\w+)$/gi;
        const everyMonthPattern = /^Every (\d+) months at (\d{1,2}:\d{2}) on (each (\d{1,2}) day|the (first|second|third|fourth|fifth|last) (Mon|Tue|Wed|Thu|Fri|Sat|Sun))$/gi;
        if (everyMinutePattern.exec(schedule)) {
            return true;
        }
        if (everyHourPattern.exec(schedule)) {
            return true;
        }
        if (everyDayPattern.exec(schedule)) {
            return true;
        }
        if (everyWeekPattern.exec(schedule)) {
            return true;
        }
        if (everyMonthPattern.exec(schedule)) {
            return true;
        }
        return false;
    }
    defaultMessage(args) {
        return 'Schedule is not valid!';
    }
};
ScheduleValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'scheduleValidator', async: false })
], ScheduleValidator);
exports.ScheduleValidator = ScheduleValidator;
//# sourceMappingURL=Schedule.js.map