module GameFromScratch {
    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        player: GameFromScratch.Player;
        
        create() {
            this.player = new Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);
        }
    }
}
