import axios from "axios";

// [POST] https://api.escuelajs.co/api/v1/auth/login
// # Body
// {
//   "email": "john@mail.com",
//   "password": "changeme"
// }

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        "email": username,
        "password": password,
      }
    );
    if(response.data.access_token){
      localStorage.setItem("user",JSON.stringify(response.data))
    }
    console.log(response);
    return response.data
  },


  logout: () => {
    localStorage.removeItem("user")
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"))
  }
};

export default AuthService


// This is a mock authentication service

// const AuthService = {
//     isAuthenticated: false,

//     login(username,password){
//         // In a real app, you'd have API calls here.
//         // This is just mockup, so we'll simulate async behavior with a promise
//         return new Promise((resolve,reject)=> {
//             setTimeout(() => {
//                 if(username === 'admin' && password === 'password'){
//                     this.isAuthenticated = true
//                     resolve()
//                 }
//                 else{
//                     reject()
//                 }
//             },2000);
//         })
//     },

//     logout(){
//         this.isAuthenticated = false;
//     }
// }

// export default AuthService
