
export default class UserService {

    getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res
            })
            .catch(err => {
                throw Error(err)
            })
    }
}