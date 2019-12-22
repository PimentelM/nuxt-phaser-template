<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1>This is a NuxtJS application running a Phaser Game!</h1>
        <v-row justify="center" class="mt-12">
          <v-col cols="12" md="8" lg="6">
            <game :config="config"></game>
          </v-col>

        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">

    import Game from "../components/Game.vue";

    let scene : Phaser.Scene = ({
        create : function(){
            this.add.text(50,50,"Hello World!")
            this.add.text(50,80,"I am a phaser game!")
        }
    })

    let config : Phaser.Types.Core.GameConfig = {
        width: 600,
        scene,
        backgroundColor: "#000000"
    }

    export default {
        name: 'IndexPage',
        components: {Game},
        data(){
            return {
                config
            }
        }
    }
</script>
