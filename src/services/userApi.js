export default class UserApi {

    static async getUsers() {

        const header = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        const init = {
            method: 'GET',
            headers: header
        };

        try {
            const response = await fetch('http://192.168.1.23:8000/api/users', init);
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }
}