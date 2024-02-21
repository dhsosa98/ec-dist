import { Provider } from "@nestjs/common";
export declare class ScheduleParser {
    parse(schedule: string): {
        everyMinutes: any;
        everyHours?: undefined;
        everyDays?: undefined;
        atTime?: undefined;
        everyWeeks?: undefined;
        onDayOfWeek?: undefined;
        everyMonths?: undefined;
        onEach?: undefined;
        onThe?: undefined;
    } | {
        everyHours: any;
        everyMinutes?: undefined;
        everyDays?: undefined;
        atTime?: undefined;
        everyWeeks?: undefined;
        onDayOfWeek?: undefined;
        everyMonths?: undefined;
        onEach?: undefined;
        onThe?: undefined;
    } | {
        everyDays: any;
        atTime: {
            hour: any;
            minute: any;
        };
        everyMinutes?: undefined;
        everyHours?: undefined;
        everyWeeks?: undefined;
        onDayOfWeek?: undefined;
        everyMonths?: undefined;
        onEach?: undefined;
        onThe?: undefined;
    } | {
        everyWeeks: any;
        atTime: {
            hour: any;
            minute: any;
        };
        onDayOfWeek: any;
        everyMinutes?: undefined;
        everyHours?: undefined;
        everyDays?: undefined;
        everyMonths?: undefined;
        onEach?: undefined;
        onThe?: undefined;
    } | {
        everyMonths: any;
        atTime: {
            hour: any;
            minute: any;
        };
        onEach: {
            day: any;
        };
        everyMinutes?: undefined;
        everyHours?: undefined;
        everyDays?: undefined;
        everyWeeks?: undefined;
        onDayOfWeek?: undefined;
        onThe?: undefined;
    } | {
        everyMonths: any;
        atTime: {
            hour: any;
            minute: any;
        };
        onThe: {
            position: any;
            day: any;
        };
        everyMinutes?: undefined;
        everyHours?: undefined;
        everyDays?: undefined;
        everyWeeks?: undefined;
        onDayOfWeek?: undefined;
        onEach?: undefined;
    };
}
export declare const ScheduleParserProvider: Provider;
