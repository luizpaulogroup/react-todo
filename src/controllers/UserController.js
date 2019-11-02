import Storage from './StorageController';

class User {

    static save = function (user) {

        // Storage.delete('todo');
        // Storage.clear('todo', [{ name: null, email: null, language: null }]);

        var todos = Storage.get('todo');

        var add = [...todos, user];

        Storage.add('todo', add);
    }

}

export default User;