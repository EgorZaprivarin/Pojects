class Users {

   static async getUsers() {
      const response = await fetch('http://localhost:3000/api/users');

      return await response.json();
   }

   static async getUserStatus() {
      const response = await fetch('http://localhost:3000/api/user/status');

      return await response.json();
   }

   static async addUser(newUser) {
      const response = await fetch('http://localhost:3000/api/user', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newUser)
      });

      return await response.json();
   }

   static async getUser(user) {
      const response = await fetch(`http://localhost:3000/api/user/${user.name}/${user.password}`);

      return await response.json();
   }

   static async changeStatus() {
      await fetch('http://localhost:3000/api/users/status', {
         method: 'PUT'
      });
   }

   static async changeResults(newResults) {
      await fetch('http://localhost:3000/api/user/results', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newResults)
      });
   }
}

export default Users;