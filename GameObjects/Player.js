var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["WALKING"] = 1] = "WALKING";
    })(GameFromScratch.PlayerState || (GameFromScratch.PlayerState = {}));
    var PlayerState = GameFromScratch.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, "HERO_WALKING", 0);
            this.game = game;
            this.walkingSpeed = 0;
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT_ARROW.onDown.add(Player.prototype.MoveRight, this);
            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT_ARROW.onDown.add(Player.prototype.MoveLessRight, this);
            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Player.prototype.GameOver, this);
            this.anchor.set(0.0, 1.0);
            this.StartIdle();
        }
        Player.prototype.update = function () {
            if (this.playerState == PlayerState.WALKING) {
                this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsed);
            }
        };
        Player.prototype.MoveRight = function () {
            if (this.playerState == PlayerState.IDLE) {
                this.StartWalking();
            }
            else {
                if (this.walkingSpeed < Player.MAX_SPEED) {
                    ++this.walkingSpeed;
                    this.animations.currentAnim.speed = this.walkingSpeed;
                }
            }
        };
        Player.prototype.MoveLessRight = function () {
            if (this.playerState != PlayerState.IDLE) {
                --this.walkingSpeed;
                if (this.walkingSpeed > 0) {
                    this.animations.currentAnim.speed = this.walkingSpeed;
                }
                else {
                    this.StartIdle();
                }
            }
        };
        Player.prototype.StartWalking = function () {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = 5;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.walkingSpeed, true);
        };
        Player.prototype.StartIdle = function () {
            this.playerState = PlayerState.IDLE;
            this.walkingSpeed = 0;
            this.loadTexture("HERO_IDLE", 0);
            this.animations.add("Idle");
            this.animations.play("Idle", 15, true);
        };
        Player.prototype.GameOver = function () { };
        Player.MAX_SPEED = 30;
        return Player;
    })(Phaser.Sprite);
    GameFromScratch.Player = Player;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=Player.js.map