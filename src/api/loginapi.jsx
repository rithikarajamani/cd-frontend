import axios from 'axios';

async function postApi(user) {
    try {
        const response = await axios.post('http://localhost:8090/login', {
            email: user.username,
            password: user.password
        });

        if (response.status === 200) {
            console.log(response)
            return true;
        } else {
            console.log('Incorrect password');
            return false;
        }
    } catch (error) {
        console.error('Error occurred:', error);
        return false;
    }
}

export default postApi;
