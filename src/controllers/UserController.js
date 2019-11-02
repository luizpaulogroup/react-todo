class User {

    static save = function (user) {

        localStorage.setItem('name',`${user.name}`);        
        localStorage.setItem('email',`${user.email}`);        
        localStorage.setItem('language',`${user.language}`);        

        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('language'));
    }

}

export default User;