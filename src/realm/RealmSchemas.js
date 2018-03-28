import Realm from 'realm';

const TaskSchema = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
        id: 'int',
        text: {type: 'string', indexed: true},
        completed: {type: 'bool', default: false},
        editable: {type: 'bool', default: false}
    }
};

export const databaseOptions = {
    path: 'todosReactNative.realm',
    schema: [TaskSchema],
    schemaVersion: 0,
};

export default new Realm(databaseOptions);