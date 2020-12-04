import axios from 'axios';

export const mainService = {
    getUsers,
};

function getUsers(){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users`,
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error(error);
                reject();
            })
    })
}
