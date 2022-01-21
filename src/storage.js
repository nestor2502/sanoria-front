export default {

    setStorage(key, value){
        if(value instanceof Object){
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    getStorage(key){
        let item = localStorage.getItem(key);
        if(item){
            return JSON.parse(item);
        }
        return null;
    },
    removeStorage(key){
        localStorage.removeItem(key);
    }
}
