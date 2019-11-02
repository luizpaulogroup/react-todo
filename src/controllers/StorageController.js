class Storage {

    static get = (item) => {
        return JSON.parse(localStorage.getItem(item));
    }

    static clear = (item, params) => {
        localStorage.setItem(item, JSON.stringify(params));
    }

    static delete = (param) => {
        localStorage.removeItem(param);
    }

    static add = (item, params) => {
        localStorage.setItem(item, JSON.stringify(params));
    }

}

export default Storage;