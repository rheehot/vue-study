<template>
<div>
    <div>{{result}}</div>    
    <form v-on:submit="onSubmitForm">
        <input ref="ansert" maxlength="4" v-model="value"/>
        <button>입력</button>
        <div>시도: {{}}</div>
    </form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                
            }
        }
    };
</script>

<style>

</style>