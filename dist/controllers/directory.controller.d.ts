import { DirectoryDto } from 'src/dtos/directory.dto';
import { DirectoryService } from 'src/services/directory.service';
export declare class DirectoryController {
    private directoriesService;
    constructor(directoriesService: DirectoryService);
    getDirectories(req: any): Promise<import("../entities/directory.entity").Directory[]>;
    getTree(req: any, id: number): Promise<any>;
    getDirectory(req: any, id: number): Promise<import("../entities/directory.entity").Directory>;
    getTodoItems(req: any, id: number, search: string): Promise<import("../entities/todoItem.entity").TodoItem[]>;
    deleteDirectory(req: any, id: number): Promise<import("../entities/directory.entity").Directory>;
    createDirectory(req: any, directory: DirectoryDto): Promise<import("../entities/directory.entity").Directory>;
}
