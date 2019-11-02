import Storage from './StorageController';

class UserController {

    static save = function (todo) {

        // Storage.delete('todo');
        // Storage.clear('todo', [{ name: null, email: null, language: null }]);

        var todos = Storage.get('todo');

        var add = [...todos, todo];

        Storage.add('todo', add);
    }

}

export default UserController;