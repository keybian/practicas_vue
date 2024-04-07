<template>
    <login >
        <template v-slot:header-icon-primary>
            <i class="demo-icon icon-user-circle-o ">&#xf2be;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-icon-secondary>
            <i class="demo-icon icon-key">&#xe80b;</i> <span class="i-name"></span><span class="i-code"></span>
        </template>
        <template v-slot:header-title>
            <p>forgot</p>
        </template>
       

        <template v-slot:main>
            <div class="item1 position" id="div_userName">
                <label class="lbl-label" id="lbl_userName" for="txt_userName">Email</label>
                <input type="text" id="txt_userName" class="text-input" placeholder="Enter your email" />
            </div>
            <div class="item2 position" id="div_userPassword">
                <label class="lbl-label" id="lbl_Name" for="txt_Name">New Password</label>
                <input type="text" id="txt_Name" class="text-input" placeholder="Enter Password" />
                
            </div>
            <div class="item9 position" id="div_userPassword">
                <label class="lbl-label" id="lbl_userPassword" for="txt_userPassword">Confirm Password</label>
                <input type="text" id="txt_userPassword" class="text-input" placeholder="Confirm your Password" />
            </div>
            <div class="item10 position" id="div_userPassword">
                <button class="button" style="vertical-align:middle" ><span>Ok </span></button>
                
            </div>
            <div class="item11 position" id="div_userPassword">
                <button class="button" style="vertical-align:middle" @click.prevent="cancel"><span>Cancel </span></button>    
                
            </div>
        </template>
    </login>
</template>

<script lang="ts" setup>
    import { router } from '@/router';
    import Login from '../layouts/LoginMain.vue'

    const cancel = ()=>{
        router.push('login')
    }
</script>