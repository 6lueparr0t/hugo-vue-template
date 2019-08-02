<template>
    <div>
        {{ this.$store.state.message }} <br/>
        Parent counter : {{ this.$store.state.counter }} <br/>
        <button @click="reverseMessage">메시지 뒤집기</button>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <button @click.stop="greet">Greet</button>

        <p v-bind:title="message"> {{ message }} </p>
        <input v-model="message" >

        <p v-if="this.$store.state.seen"> if 테스트</p>

        <ol>
            <li v-for="(todo, index) in todos">
                {{ todo.text }} {{ index }}
            </li>
        </ol>

        <ol>
            <li v-for="(value, key) in object">
                {{ key }} : {{ value }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message : '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.',
                todos: [
                    {text:'테'},
                    {text:'스'},
                    {text:'트'},
                ],
                object: {
                    one: '하나',
                    two: '둘',
                    three: '셋'
                },
                name : 'vue.js',
            }
        },
        methods: {
            addCounter() {
                this.$store.state.counter++;
            },
            subCounter() {
                this.$store.state.counter--;
            },
            reverseMessage() {
                this.message = this.message.split('').reverse().join('');
            },
            greet() {
                alert('이벤트 수식어 테스트');
            }
        },
        name: 'Playground'
    }
</script>

<style lang="scss" scoped>

</style>