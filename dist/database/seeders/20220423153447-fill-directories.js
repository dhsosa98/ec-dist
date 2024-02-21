'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('directory', [
            {
                id: 1,
                name: 'Work',
                userId: 1,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('directory', null, {});
    },
};
//# sourceMappingURL=20220423153447-fill-directories.js.map