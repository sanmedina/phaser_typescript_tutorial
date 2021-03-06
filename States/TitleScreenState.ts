module GameFromScratch {
    export class titleScreenState extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreenImage: Phaser.Sprite;
        
        constructor() {
            super();
        }
        
        create() {
            this.titleScreenImage = this.game.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(
                    this.game.width / this.titleScreenImage.width,
                    this.game.height / this.titleScreenImage.height);
            
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 20;
            this.music.loop = true;
            this.music.play();
            
            this.input.onTap.addOnce(this.titleClicked, this);
        }
        
        titleClicked() {
            this.music.stop();
            this.game.state.start("GamePlayState");
        }
    }
}