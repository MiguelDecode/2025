"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        setTimeout(() => {
            callback(`User not found with id: ${id}`);
        }, 1500);
        return;
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
