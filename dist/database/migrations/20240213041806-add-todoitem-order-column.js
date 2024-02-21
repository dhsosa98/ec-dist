'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('todoitem', 'order', {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        });
    },
    async down(queryInterface, Sequelize) {
        queryInterface.removeColumn('todoitem', 'order');
    }
};
//# sourceMappingURL=20240213041806-add-todoitem-order-column.js.map