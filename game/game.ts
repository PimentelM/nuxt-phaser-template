export default (config: Phaser.Types.Core.GameConfig = {}) =>
  ()=> new Phaser.Game({
    parent: 'phaser',
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    backgroundColor: '#fffff',
    scene:{
      preload: ()=>undefined,
      create: ()=> undefined,
      update: ()=>undefined
    },
    render: {
      pixelArt: true
    },
    ...config,
  })
