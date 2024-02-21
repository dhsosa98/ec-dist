import { DirectoryDto } from 'src/dtos/directory.dto';
import { Directory } from 'src/entities/directory.entity';
import { TodoItem } from 'src/entities/todoItem.entity';
import { TodoItemService } from './todoItem.service';
export declare class DirectoryService {
    private directoryRepository;
    private todoitemsService;
    constructor(directoryRepository: typeof Directory, todoitemsService: TodoItemService);
    findAll(userId: number): Promise<Directory[]>;
    findOne(userId: number, id: number): Promise<Directory>;
    getTree(userId: number, id: number): Promise<any>;
    findAllTodoItems(userId: number, directoryId: number, search: string): Promise<TodoItem[]>;
    delete(userId: number, id: number): Promise<Directory>;
    create(userId: number, directory: DirectoryDto): Promise<Directory>;
}
