import { defineStore } from "pinia";

export const useAuthStore=defineStore('authLogin',{
    //STATE
    state:()=>{
        return{
            jwt:'',
            error:''            
        }
    },

    //GETTERS


    //ACTIONS
    actions:{
        async login(email:string,password:string): Promise<boolean> {
            try{
    
                const res = await fetch('http://127.0.0.1:8000/api/auth/login',{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email:email,
                        password:password
                    })
    
                })

                const response = await res.json()
                console.log(response)
                if('errors' in response){
                    this.error = "Login Failed"
                    this.jwt=""
                    return false
                }
                console.log("TRUE")
                this.jwt=response.token
                console.log(this.jwt)
                this.error=""
                return true
    
            }catch(error){
                console.log(error)
                this.error = "Login Failed"
                return false
    
            }
        }
    
    }

})