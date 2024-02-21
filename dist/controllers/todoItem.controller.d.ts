import { TodoItemService } from 'src/services/todoItem.service';
import { TodoItemDto, UpdateToDoItemOrderDto } from 'src/dtos/todoItem.dto';
export declare class TodoItemController {
    private todoItemService;
    constructor(todoItemService: TodoItemService);
    getTodoItems(req: any): Promise<import("../entities/todoItem.entity").TodoItem[]>;
    getTodoItem(req: any, id: number): Promise<import("../entities/todoItem.entity").TodoItem>;
    createTodoItem(req: any, todoItem: TodoItemDto): Promise<import("../entities/todoItem.entity").TodoItem>;
    deleteTodoItem(req: any, id: number): Promise<any>;
    updateTodoItem(req: any, id: number, todoItem: TodoItemDto): Promise<import("../entities/todoItem.entity").TodoItem>;
    updateOrder(req: any, todoItems: UpdateToDoItemOrderDto[]): Promise<import("../entities/todoItem.entity").TodoItem[]>;
}
