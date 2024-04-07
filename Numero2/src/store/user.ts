import { defineStore } from "pinia";

export const useUserStore=defineStore('user',{

    state:()=>{
        return{
            name:'',
            userName:'',
            password:'',
            error:''
            
        }
        
    },
    actions:{
        async register(name:string,userName:string,password:string):Promise<boolean>{
            try {
                alert(name)
                alert(userName)
                const res = await fetch('http://127.0.0.1:8000/api/auth/register',{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name:name,
                        email:userName,
                        password:password
                    })
                })
                const response = await res.json()
                console.log(response)
                if('errors' in response){
                    this.error='Error en Registro'
                    return false
                }
                alert(this.error)
                return true
            } catch (error) {
                console.log(error)
                this.error = "Error en Registro"
                return false
            }
        }
    }
})