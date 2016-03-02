var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScratch;
(function (GameFromScratch) {
    var titleScreenState = (function (_super) {
        __extends(titleScreenState, _super);
        function titleScreenState() {
            _super.call(this);
        }
        titleScreenState.prototype.create = function () {
            this.titleScreenImage = this.game.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height / this.titleScreenImage.height);
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 100;
            this.music.loop = true;
            this.music.play();
        };
        return titleScreenState;
    }(Phaser.State));
    GameFromScratch.titleScreenState = titleScreenState;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=TitleScreenState.js.map