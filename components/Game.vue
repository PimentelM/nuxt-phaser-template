<template>
  <PhaserGame :createGame="createGame" v-if="createGame"></PhaserGame>
</template>

<script lang="ts">
    import PhaserGame from 'nuxtjs-phaser/dist/phaserGame.vue'

    const getGame = async (config = {}) => {
        const { default: createGame } = await import('../game/game')
        return createGame(config)
    }

    const setPhaserFocus = () => {
        const phaser = document.getElementById('phaser')
        if (phaser) phaser.focus()
    }

    declare interface IndexPageData {
        createGame?: () => Phaser.Game
    }


    export default {
        name: "Game",
        components: {PhaserGame},
        props:{
          config: {type: Object as () => Phaser.Types.Core.GameConfig, required: true }
        },
        data(): IndexPageData {
            return {
                createGame: undefined,
            }
        },
        async mounted() {
            this.createGame = await getGame(this.config)


            this.$nextTick(() => setPhaserFocus())
        },
    }
</script>

<style scoped>

</style>
