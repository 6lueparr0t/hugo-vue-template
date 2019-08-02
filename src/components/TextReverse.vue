<template>
    <div>
        <p v-bind:title="message"> {{ message }} </p>
        <input v-model="message" >

        <button @click="reverseMessage">뒤집</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message : '기러기 토마토 스위스',
            }
        },
        methods: {
            reverseMessage() {
                this.message = this.message.split('').reverse().join('')
            }
        },
        name: 'TextReverse'
    }
</script>

<style lang="scss" scoped>

</style>