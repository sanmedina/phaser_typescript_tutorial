module Game {
    export class ExtremeWalkingSimulator {
        game: Phaser.Game;
        
        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        
        preload() {
            // Graphics
            this.game.load.image("title", "Graphics/TitleScreen.png");
            this.game.load.image("scene", "Graphics/scene720p.png");
            this.game.load.image("gameover", "Graphics/GameOver.png");
            // Spritesheets
            this.game.load.atlasXML("HERO_WALKING", "Graphics/Hero_Walking.xml");
            this.game.load.atlasXML("HERO_IDLE", "Graphics/Hero_Idle.xml");
            // Audio
            this.game.load.audio("TitleSong", ["Sounds/TitleSong.mp3", "Sounds/TitleSong.ogg", "Sounds/TitleSong.wav"]);
        }
        
        create() {
            this.game.state.add("titleScreenstate", GameFromScratch.titleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
    }
}

window.onload = () => {
    var game = new Game.ExtremeWalkingSimulator();
};
