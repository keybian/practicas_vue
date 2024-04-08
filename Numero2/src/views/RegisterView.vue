<template>
  
  <Login>
        <template v-slot:header-icon-primary>
            <i class="demo-icon icon-user-circle-o ">&#xf2be;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-icon-secondary>
            <i class="demo-icon icon-vcard">&#xe802;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-title>
            <p>register</p>
        </template>
       

        <template v-slot:main>
            <div class="item1 position" id="div_userName">
            <label class="lbl-label" id="lbl_Name" for="txt_Name">Name</label>
            <input type="text" id="txt_Name" class="text-input" placeholder="Enter your name" v-model="name"/>
        </div>
        <div class="item2 position" id="div_userPassword">
            <label class="lbl-label" id="lbl_userName" for="txt_userName">User</label>
            <input type="text" id="txt_userName" class="text-input" placeholder="Enter your email" v-model="email"/>
        </div>
        <div class="item9 position" id="div_userPassword">
            <label class="lbl-label" id="lbl_userPassword" for="txt_userPassword">Password</label>
            <input type="text" id="txt_userPassword" class="text-input" placeholder="Enter your Password" v-model="password"/>
        </div>
        <div class="item10 position" id="div_userPassword">
            <button class="button" style="vertical-align:middle" @click.prevent="userStore"><span>Ok </span></button>
            
        </div>
        <div class="item11 position" id="div_userPassword">
            <button class="button" style="vertical-align:middle" @click.prevent="cancel"><span>Cancel </span></button>    
            
        </div>
        </template>
        
         
    </Login>

</template>

<script lang="ts" setup>
    import { router } from '@/router';
    import { useUserStore } from '@/store/user';
    import {ref,Ref} from 'vue'
    import Login from '../layouts/LoginMain.vue'


    let email = ref("")
    let password = ref("")
    let name = ref("")
    const userStore = async ()=>{
        const user =useUserStore()
        const  sucess= await user.register(name.value,email.value,password.value)
        if(sucess){
            alert("Exito!")
            router.push('login');
        }else{
            alert("Registro Incompleto,intente de Nuevo")
        }
    }
    const cancel = ()=>{
        router.push('login')
    }
    



</script>