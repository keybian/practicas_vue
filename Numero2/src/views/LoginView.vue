<template>
   
    <Login>
        <template v-slot:header-icon-primary>
            <i class="demo-icon icon-user-circle-o ">&#xf2be;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-icon-secondary>
            <i class="demo-icon icon-lock-4">&#xf512;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-title>
            <p>login</p>
        </template>
       

        <template v-slot:main>
            <div class="item1 position" id="div_userName">
            <label class="lbl-label" id="lbl_userName" for="txt_userName">User</label>
            <input type="text" id="txt_userName" class="text-input" placeholder="Enter your email" />
        </div>
        <div class="item2 position" id="div_userPassword">
            <label class="lbl-label" id="lbl_userPassword" for="txt_userPassword">Password</label>
            <input type="text" id="txt_userPassword" class="text-input" placeholder="Enter your Password" />
        </div>
        <div class="item3 position" id="div_userPassword">
            <button class="button" style="vertical-align:middle"  @click.prevent="authUser"><span>Sing in </span></button>
        </div>
        <div class="item4 position" id="div_userPassword">
            <button class="button" style="vertical-align:middle"  @click.prevent="register"><span>Register </span></button>
            
        </div>
        <div class="item5 position" id="div_userPassword">
            <p class="lbl-label" id="lbl_forgotPassword">Forgot password? <router-link to="forgot" class="btn btn-link">Start here</router-link></p><span class="i-code"></span>
            
        </div>
        </template>
        
        <template  v-slot:footer>
            <div class="item6 position" id="div_userPassword">
                <i class="demo-icon icon-facebook-1">&#xf052;</i> <span class="i-name"></span><span class="i-code"></span>
            </div>
            <div class="item7 position" id="div_userPassword">
                <i class="demo-icon icon-google">&#xf1a0;</i> <span class="i-name"></span><span class="i-code"></span>
            </div>
            <div class="item8 position" id="div_userPassword">
                <i class="demo-icon icon-instagram">&#xf16d;</i> <span class="i-name"></span><span class="i-code"></span>        
            </div>
        </template>  
    </Login>
</template>

<script lang="ts" setup>
import { router } from '@/router';
import { useAuthStore } from '@/store/authLogin';
import {ref,Ref} from 'vue'
import Login from '../layouts/LoginMain.vue'

    let email = ref("")
    let password = ref("")

    const authUser = async ()=>{
        const auth =useAuthStore()
        const  sucess= await auth.login(email.value,password.value)
        console.log(sucess)
        if(sucess){
            alert("Exito!")
            router.push('dashboard');
        }else{
            alert("Login Incorrecto")
        }
    }
    const register=()=>{
        router.push('register')
    }
    
</script>

<style scoped>
   :root {
    --dark-primary-color: #512da8;
    --light-primary-color: #d1c4e9;
    --primary-color: #673ab7;
    --text-icons: #ffffff;
    --accent-color: #607d8b;
    --primary-text: #212121;
    --secondary-color: #757575;
    --divider-color: #bdbdbd;
    --font-text: Arial, Helvetica, sans-serif;
}
body {
    background-color: #673ab7;
  
}

</style>