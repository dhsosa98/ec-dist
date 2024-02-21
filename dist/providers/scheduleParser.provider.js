"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleParserProvider = exports.ScheduleParser = void 0;
const common_1 = require("@nestjs/common");
let ScheduleParser = class ScheduleParser {
    parse(schedule) {
        const everyMinutePattern = /^Every (\d+) minutes$/gi;
        const everyHourPattern = /^Every (\d+) hours$/gi;
        const everyDayPattern = /^Every (\d+) days at (\d{1,2}:\d{2})$/gi;
        const everyWeekPattern = /^Every (\d+) weeks at (\d{1,2}:\d{2}) on (Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/gi;
        const everyMonthOnEachDayPattern = /^Every (\d+) months at (\d{1,2}:\d{2}) on each (\d{1,2}) day$/gi;
        const everyMonthOnSpecificDayPattern = /^Every (\d+) months at (\d{1,2}:\d{2}) on the (first|second|third|fourth|fifth|last) (Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/gi;
        let match;
        if (match = everyMinutePattern.exec(schedule)) {
            return { everyMinutes: match[1] };
        }
        if (match = everyHourPattern.exec(schedule)) {
            return { everyHours: match[1] };
        }
        if (match = everyDayPattern.exec(schedule)) {
            return { everyDays: match[1], atTime: {
                    hour: match[2].split(':')[0],
                    minute: match[2].split(':')[1],
                } };
        }
        if (match = everyWeekPattern.exec(schedule)) {
            return { everyWeeks: match[1], atTime: {
                    hour: match[2].split(':')[0],
                    minute: match[2].split(':')[1],
                }, onDayOfWeek: match[3] };
        }
        if (match = everyMonthOnEachDayPattern.exec(schedule)) {
            return {
                everyMonths: match[1],
                atTime: {
                    hour: match[2].split(':')[0],
                    minute: match[2].split(':')[1],
                },
                onEach: {
                    day: match[3],
                },
            };
        }
        ;
        if (match = everyMonthOnSpecificDayPattern.exec(schedule)) {
            return {
                everyMonths: match[1],
                atTime: {
                    hour: match[2].split(':')[0],
                    minute: match[2].split(':')[1],
                },
                onThe: {
                    position: match[3],
                    day: match[4],
                },
            };
        }
        throw new Error('Invalid schedule format');
    }
};
ScheduleParser = __decorate([
    (0, common_1.Injectable)()
], ScheduleParser);
exports.ScheduleParser = ScheduleParser;
exports.ScheduleParserProvider = {
    provide: 'SCHEDULE_PARSER',
    useClass: ScheduleParser,
};
//# sourceMappingURL=scheduleParser.provider.js.map