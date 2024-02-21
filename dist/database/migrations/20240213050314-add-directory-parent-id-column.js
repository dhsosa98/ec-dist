'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('directory', 'parentId', {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        });
    },
    async down(queryInterface, Sequelize) {
        queryInterface.removeColumn('directory', 'parentId');
    }
};
//# sourceMappingURL=20240213050314-add-directory-parent-id-column.js.map