<template>
    <div>

    </div>
</template>

<script>
import Remote from '../../libs/microgears.js'
export default {
    props: {
        id: String
    },
    methods: {
        openTheBox: function() {
            Remote.openbox(this.id)
        }
    }
}
</script>

<style scoped>

</style>
