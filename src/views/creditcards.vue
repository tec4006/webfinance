<template>
    <div>
        <h2>Cartões de credito</h2>
        <v-btn to="/">home</v-btn>
    </div>
</template>

<script setup>
import { useStore } from '@/store/index'


const storeId = useStore()
console.log(storeId.name);
</script>

<style  scoped>

</style>