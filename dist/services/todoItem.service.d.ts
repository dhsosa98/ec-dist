import { TodoItemDto, UpdateToDoItemOrderDto } from 'src/dtos/todoItem.dto';
import { Notification } from 'src/entities/notification.entity';
import { TodoItem } from 'src/entities/todoItem.entity';
export declare class TodoItemService {
    private todoItemRepository;
    private notificationRepository;
    constructor(todoItemRepository: typeof TodoItem, notificationRepository: typeof Notification);
    findAll(userId: number): Promise<TodoItem[]>;
    findAllByRepositoryId(directoryId: number, userId: number, search: string): Promise<TodoItem[]>;
    updateOrder(userId: number, todoItems: UpdateToDoItemOrderDto[]): Promise<TodoItem[]>;
    findOne(userId: number, id: number): Promise<TodoItem>;
    create(userId: number, todoItem: TodoItemDto): Promise<TodoItem>;
    delete(userId: number, id: number): Promise<number | any>;
    update(userId: number, id: number, todoItem: TodoItemDto): Promise<TodoItem>;
}
