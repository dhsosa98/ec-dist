'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('todoitem', 'createdAt', {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        });
        await queryInterface.addColumn('todoitem', 'updatedAt', {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('todoitem', 'createdAt');
        await queryInterface.removeColumn('todoitem', 'updatedAt');
    }
};
//# sourceMappingURL=20240219144224-todoitem-add-timestamp-columns.js.map