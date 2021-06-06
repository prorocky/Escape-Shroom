class Puzzle3 extends Phaser.Scene {
    constructor() {
        super("puzScene3");
    }

    preload() {
        // load images/sprites
        this.load.image('main_room3', 'assets/img/puzzle_room3.png');
        this.load.image('door', 'assets/img/Door01.png');

        this.load.image('tile', 'assets/img/square.png');
        // this.load.image()


        // load audio

        this.load.audio('correct', 'assets/aud/WinCondition.wav');
        this.load.audio('wrong', 'assets/aud/LoseCondition.wav');
    }

    create() {
        // background for room
        this.background = this.add.tileSprite(0, 0, 1080, 1080, 'main_room3').setOrigin(0, 0);

        this.tile0 = this.physics.add.sprite(75, 300, 'tile');
        this.tile1 = this.physics.add.sprite(75, 300, 'tile');
        this.tile2 = this.physics.add.sprite(75, 300, 'tile');
        this.tile3 = this.physics.add.sprite(75, 300, 'tile');
        this.tile4 = this.physics.add.sprite(75, 300, 'tile');
        this.tile5 = this.physics.add.sprite(75, 300, 'tile');
        this.tile6 = this.physics.add.sprite(75, 300, 'tile');
        this.tile7 = this.physics.add.sprite(75, 300, 'tile');
        this.tile8 = this.physics.add.sprite(75, 300, 'tile');
        this.tile9 = this.physics.add.sprite(75, 300, 'tile');
        this.tile10 = this.physics.add.sprite(75, 300, 'tile');
        this.tile11 = this.physics.add.sprite(75, 300, 'tile');
        this.tile12 = this.physics.add.sprite(75, 300, 'tile');
        this.tile13 = this.physics.add.sprite(75, 300, 'tile');
        this.tile15 = this.physics.add.sprite(75, 300, 'tile');

        this.tilesArray = [this.tile0, this.tile1, this.tile2, this.tile3, this.tile4, this.tile5, this.tile6, this.tile7, this.tile8, this.tile9, this.tile10, this.tile11, this.tile12, this.tile13, this.tile14, this.tile15];

        // keys for map are each tile, values for map are tiles adjacent
        this.tiles = new Map([
            [this.tile0, [this.tile1, this.tile4]],
            [this.tile1, [this.tile0, this.tile2, this.tile5]],
            [this.tile2, [this.tile1, this.tile3, this.tile6]],
            [this.tile3, [this.tile2, this.tile7]],
            [this.tile4, [this.tile5, this.tile8]],
            [this.tile5, [this.tile4, this.tile6, this.tile9]],
            [this.tile6, [this.tile5, this.tile7, this.tile10]],
            [this.tile7, [this.tile6, this.tile11]],
            [this.tile8, [this.tile9, this.tile12]],
            [this.tile9, [this.tile8, this.tile10, this.tile13]],
            [this.tile10, [this.tile9, this.tile11, this.tile14]],
            [this.tile11, [this.tile10, this.tile15]],
            [this.tile12, [this.tile13, 'end']],
            [this.tile13, [this.tile12, this.tile14, 'end']],
            [this.tile14, [this.tile13, this.tile15, 'end']],
            [this.tile15, [this.tile14, 'end']],

        ]);

        this.createPath();


    }

    createPath() {
        this.path = [];
        let rng = Math.floor(Math.random() * 3);
        let currentTile = this.tilesArray[rng];
        this.path.push(currentTile);

        while (currentTile != 'end') {
            this.updateAdjacency(currentTile);
            // random number up to length of adjacent tiles
            rng = Math.floor(Math.random() * this.tiles.get(currentTile).length);
            // select tile from adjacent list
            currentTile = this.tiles.get(currentTile)[rng];
            // push to this.path
            this.path.push(currentTile);
            // console.log('infinite?');
        }

        // print path
        this.path.forEach(element => this.printPath(element));

    }
    printPath(tile) {
        switch(tile) {
            case this.tile0:
                console.log("tile0");
                break;
            case this.tile1:
                console.log("tile1");
                break;
            case this.tile2:
                console.log("tile2");
                break;
            case this.tile3:
                console.log("tile3");
                break;
            case this.tile4:
                console.log("tile4");
                break;
            case this.tile5:
                console.log("tile5");
                break;
            case this.tile6:
                console.log("tile6");
                break;
            case this.tile7:
                console.log("tile7");
                break;
            case this.tile8:
                console.log("tile8");
                break;
            case this.tile9:
                console.log("tile9");
                break;
            case this.tile10:
                console.log("tile10");
                break;
            case this.tile11:
                console.log("tile11");
                break;
            case this.tile12:
                console.log("tile12");
                break;
            case this.tile13:
                console.log("tile13");
                break;
            case this.tile14:
                console.log("tile14");
                break;
            case this.tile15:
                console.log("tile15");
                break;
            case 'end':
                console.log("end");
                break;
            default:
                console.log("something else");
        }

    }

    updateAdjacency(tile) {
        // console.log(tile);
        if (tile != 'end') {
            for (let i = 0; i < 16; i++) {
                // console.log(this.tiles.get());
                let idx = this.tiles.get(this.tilesArray[i]).indexOf(tile);
                if (idx != -1) {
                    this.tiles.get(this.tilesArray[i]).splice(idx, 1);
                }
            }
        }
    }
}
