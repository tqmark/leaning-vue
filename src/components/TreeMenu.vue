<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: '',
    },
    nodes: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <div class="tree-menu">
        <div class="label-wrapper" @click="toggleChildren">
            <div :style="indent" :class="labelClasses">
                <i v-if="nodes" class="fa" :class="iconClasses"></i>
                {{ label }}
            </div>
        </div>
        <tree-menu
            v-if="showChildren"
            v-for="node in nodes"
            :nodes="node.nodes"
            :label="node.label"
            :depth="depth + 1"
        >
        </tree-menu>
    </div>
</template>

<style scoped>

</style>
