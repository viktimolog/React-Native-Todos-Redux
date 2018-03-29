import {DEL_TODO, ADD_TODO, TOOGLE_TODO, EDIT_TODO_SAVE, EDIT_TODO_MODE} from '../actions/actionTypes';
import realm from '../realm/RealmSchemas';

const initialState = {
    todos: realm.objects('Task').sorted('id')
        ? realm.objects('Task').sorted('id')
        : []
};

export default (state = initialState, action) => {
    switch (action.type) {

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

                let date = new Date();
                let dd = date.getDate();
                if (dd < 10) dd = '0' + dd;

                let mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;

                let yy = date.getFullYear() % 100;
                if (yy < 10) yy = '0' + yy;

                realm.create('Task', {
                    id: Math.floor(Date.now() / 1000),
                    text: dd + '.' + mm + '.' + yy
                    + ': ' + action.text,
                    completed: false,
                    editable: false
                })
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
            if (!realm.objectForPrimaryKey('Task', action.id).completed) {
                realm.write(() => {
                    realm.objectForPrimaryKey('Task', action.id).editable =
                        !realm.objectForPrimaryKey('Task', action.id).editable
                });
            }
            return {
                ...state,
                todos: realm.objects('Task').sorted('id')
            }
        }

        case EDIT_TODO_SAVE: {
            realm.write(() => {
                realm.objectForPrimaryKey('Task', action.id).text = action.text;
                realm.objectForPrimaryKey('Task', action.id).editable =
                    !realm.objectForPrimaryKey('Task', action.id).editable
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
