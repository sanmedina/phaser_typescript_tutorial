module GameFromScratch {
    export class MyScene extends Phaser.Sprite {
        game: Phaser.Game;
        nextFrame: Phaser.Sprite;
        
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "scene", 0);
            this.game = game;
            this.nextFrame = new Phaser.Sprite(this.game, this.width, 0, "scene");
            this.game.add.existing(this.nextFrame);
        }
    }
}