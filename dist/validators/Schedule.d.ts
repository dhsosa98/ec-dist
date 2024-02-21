import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ScheduleValidator implements ValidatorConstraintInterface {
    validate(schedule: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
