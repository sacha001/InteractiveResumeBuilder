const STR_MAP = " !*+,-./0123\"456789:;<=#>?@ABCDEFG$HIJKLMNOPQ%RSTUVWXY2[&\\]^_`'(){|}~";

export function addText() {
    if (this.hero.initialEducationLen - this.itemPickupCount < this.hero.educationText.length) {
        let text = this.hero.educationText.shift();
        this.textFont = this.game.add.retroFont('font:boxy_bold', 18, 16, STR_MAP, 9);

        let textScoreImg = this.game.make.image(0, 19 + (this.itemPickupCount - 1) * (16 + 10), this.textFont);
        textScoreImg.anchor.set(0, 0.5);

        this.textFont.text = text;

        this.hud.add(textScoreImg);
        this.hud.position.set(10, 10);
    }
}