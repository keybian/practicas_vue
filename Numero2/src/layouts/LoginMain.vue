<template>
   <div id="containerCenter" class="parent">
            <div id="account_circle" class="card-icon-primary position">
                <slot name="header-icon-primary"></slot>
            </div>

            <div class="card-icon-secondary position">
                <slot name="header-icon-secondary"></slot>
                
            </div>
            <div class="card-title position">
                
                <slot name="header-title"></slot>
            </div>
           
            <slot name="main"></slot>

       <slot name="footer"></slot>
        
    </div> 
</template>

<style >


</style>