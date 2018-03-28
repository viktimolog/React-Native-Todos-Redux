import {SET_MODE, DEL_TODO, ADD_TODO, TOOGLE_TODO, EDIT_TODO_SAVE, EDIT_TODO_MODE} from '../actions/actionTypes';
import realm from '../realm/RealmSchemas';

export default (state = [], action) => {
    switch (action.type) {

        case SET_MODE: {
            return {
                ...state,
                mode: action.mode
            }
        }

        case DEL_TODO: {
            realm.write(() => {
                const deletingTodo = realm.objectForPrimaryKey('Task', action.id);
                realm.delete(deletingTodo);
            });
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        case ADD_TODO: {
            realm.write(() => {
                realm.create('Task', {
                    id: Math.floor(Date.now() / 1000),
                    text: action.text,
                    completed: false,
                    editable: false
                });
            });
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        case TOOGLE_TODO: {
            realm.write(() => {
                realm.objectForPrimaryKey('Task', action.id).completed =
                    !realm.objectForPrimaryKey('Task', action.id).completed
            });
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        case EDIT_TODO_MODE: {
            realm.write(() => {
                realm.objectForPrimaryKey('Task', action.id).editable =
                    !realm.objectForPrimaryKey('Task', action.id).editable
            });
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        case EDIT_TODO_SAVE: {
            realm.write(() => {
                realm.objectForPrimaryKey('Task', action.id).text = action.text
            });
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        default:
            return state
    }
};
