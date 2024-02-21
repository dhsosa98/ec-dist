import { Model } from 'sequelize-typescript';
import { Directory } from './directory.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class TodoItem extends Model {
    static eventEmitter: EventEmitter2;
    id: number;
    description: string;
    selected: boolean;
    order: number;
    directoryId: number;
    userId: number;
    directory: Directory;
    get notification(): any;
    set notification(value: any);
    static emitTaskCreatedEvent(instance: TodoItem): void;
    static emitTaskUpdatedEvent(instance: TodoItem): void;
    static emitTaskDeletedEvent(instance: TodoItem): void;
}
