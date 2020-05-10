<template>
<div>
    <div>{{result}}</div>    
    <form @submit.prevent="onSubmitForm">
        <input ref="ansert" minlength="4" maxlength="4" v-model="value"/>
        <button type='submit'>입력</button>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>    
            </li>
        </ul>
    </form>
</div>
</template>

<script>
    
    export default {
        data() {
            return {
                tries: [],
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitForm() {
                this.tries.push({
                    try: this.value,
                    result: '홈런',
                });
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    };
</script>

<style>

</style>