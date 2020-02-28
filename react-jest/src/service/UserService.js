
export default class UserService {

    getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    }
}