<template>
    <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
</template>

<script>
    import VueGridLayout from 'vue-grid-layout';

    let testLayout = [];
    let numberStack = [];

    const mapSize = 5;

    for(let i = 1; i <= mapSize*mapSize; i++) {
        numberStack.push(i);
    }
    numberStack = numberStack.sort(function(){return 0.5-Math.random()});

    for(let i = 1; i <= mapSize; i ++) {
        for(let j = 1; j <= mapSize; j ++) {
            testLayout.push({"x": (j-1), "y": (i-1), "w": 1, "h": 2, "i": numberStack[((i-1) * mapSize + j)-1]})
        }
    }

    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
        data () {
            return {
                layout: testLayout,
            }
        },
        name: 'VueGridLayoutDemo'
    }
</script>

<style lang="scss" scoped>
    .vue-grid-item {
        background-color:lightgray;
    }
</style>