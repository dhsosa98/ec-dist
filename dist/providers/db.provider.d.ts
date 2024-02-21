import { Sequelize } from 'sequelize-typescript';
export declare const DatabaseProviders: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
