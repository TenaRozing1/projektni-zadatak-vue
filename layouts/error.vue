<template>
    <div>
        vgfhbghnj
    </div>
</template>
    
<style>
.font-display {
    font-family: Jost, sans-serif;
}

.margin-right {
    margin-right: 200px;
}

.blue-background {
    background-color: #001a66;
}

.width-white {
    width: 600px;
}
</style>
    
<script>

export default {
    layout: 'error-layout',
    props: {
        error: {
            type: Object,
            default: null
        }
    },

    data() {
        return {
            menuOpen: false

        }
    },

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
    }
}
</script>

