class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 350;
        this.bodyY = 350;
        this.rightHandX = this.bodyX + 90;
        this.rightHandY = this.bodyY + 50;

        this.leftHandX = this.bodyX - 90;
        this.leftHandY = this.bodyY + 50;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;
        
        this.eyebrowX = this.bodyX;
        this.eyebrowY = this.bodyY - 90;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 10;
            
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 60;

        this.rightlegX = this.bodyX + 50;
        this.rightlegY = this.bodyY + 140;

        this.leftlegX = this.bodyX - 50;
        this.leftlegY = this.bodyY + 140;

        this.AKey = null;
        this.DKey = null;

        this.speed = 1;
        
    }
        

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueB.png");
        
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_blue.png");
        my.sprite.eyebrow = this.add.sprite(this.eyebrowX, this.eyebrowY, "monsterParts", "eyebrowB.png");
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_brown.png");
        
        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.mouthFang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFang.visible = false;
        
        my.sprite.leftarm = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_blueA.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.rightarm = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_blueA.png");
        my.sprite.rightleg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_blueA.png");
        my.sprite.leftleg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_blueA.png");
        my.sprite.leftleg.flipX = true;

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFang.visible = false;
        });

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFang.visible = true;
        });

        my.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (my.AKey.isDown) {
            my.sprite.body.x -= this.speed;
        
            my.sprite.eye.x -= this.speed;
            my.sprite.eyebrow.x -= this.speed;
            my.sprite.nose.x -= this.speed;
        
            my.sprite.mouthSmile.x -= this.speed;
            my.sprite.mouthFang.x -= this.speed;
        
            my.sprite.leftarm.x -= this.speed;
            my.sprite.rightarm.x -= this.speed;
            my.sprite.rightleg.x -= this.speed;
            my.sprite.leftleg.x -= this.speed;
        }
        if (my.DKey.isDown) {
            my.sprite.body.x += this.speed;
        
            my.sprite.eye.x += this.speed;
            my.sprite.eyebrow.x += this.speed;
            my.sprite.nose.x += this.speed;
        
            my.sprite.mouthSmile.x += this.speed;
            my.sprite.mouthFang.x += this.speed;
        
            my.sprite.leftarm.x += this.speed;
            my.sprite.rightarm.x += this.speed;
            my.sprite.rightleg.x += this.speed;
            my.sprite.leftleg.x += this.speed;
        }
       
    }
}