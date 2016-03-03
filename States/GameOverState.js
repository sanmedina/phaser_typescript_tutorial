var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    var GameOverState = (function (_super) {
        __extends(GameOverState, _super);
        function GameOverState() {
            _super.apply(this, arguments);
        }
        GameOverState.prototype.create = function () {
            var _this = this;
            this.gameOverSprite = this.add.sprite(0, 0, "gameover", 0);
            this.gameOverSprite.scale.setTo(this.game.width / this.gameOverSprite.width, this.game.height / this.gameOverSprite.height);
            this.input.onDown.add(function () {
                _this.game.state.start("titleScreenstate", true);
            });
        };
        return GameOverState;
    })(Phaser.State);
    GameFromScratch.GameOverState = GameOverState;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=GameOverState.js.map