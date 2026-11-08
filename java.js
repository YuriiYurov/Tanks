const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";

// ========================================
// IMAGES
// ========================================

const menuBackground = new Image();
menuBackground.src = "Krita1/background.png";

const button1 = new Image();
button1.src = "Krita1/button1.png";

const hangarPlatform = new Image();
hangarPlatform.src = "Krita1/platform.png";

const menuButton =
    document.getElementById("menuButton");

const dropdownMenu =
    document.getElementById("dropdownMenu");

const hangarMenu =
    document.getElementById("hangarMenu");

const researchScreen =
    document.getElementById("researchScreen");

const researchButton =
    document.getElementById("researchButton");

const researchBack =
    document.getElementById("researchBack");

const nationUp =
    document.getElementById("nationUp");

const nationDown =
    document.getElementById("nationDown");

const nationName =
    document.getElementById("nationName");

const researchTankImage =
    document.getElementById("researchTankImage");

const tankName =
    document.getElementById("tankName");

const tankType =
    document.getElementById("tankType");

const tankLevel =
    document.getElementById("tankLevel");

const nextTankName =
    document.querySelector(".nextTankName");

const tankStats =
    document.querySelectorAll("#tankStats b");

const buyTankButton =
    document.getElementById("buyTankButton");

const tankRibbon =
    document.getElementById("hangarTankRibbon");

const hangarBattleButton =
    document.getElementById("hangarBattleButton");

const battleButton =
    document.getElementById("battleButton");

const battleScreen =
    document.getElementById(
        "battleScreen"
    );

const battleInfoPanel =
    document.createElement("div");

battleInfoPanel.id =
    "battleInfoPanel";

battleInfoPanel.innerHTML = `
    <div class="battleInfoBlock">
        <span class="battleInfoLabel">
            ФАЗА
        </span>

        <span
            id="battlePhaseValue"
            class="battleInfoValue"
        >
            1 / 5
        </span>
    </div>

    <div class="battleInfoDivider"></div>

    <div class="battleInfoBlock">
        <span class="battleInfoLabel">
            ВОЛНА
        </span>

        <span
            id="battleWaveValue"
            class="battleInfoValue"
        >
            1 / 3
        </span>
    </div>

    <div class="battleInfoDivider"></div>

    <div class="battleInfoBlock enemiesInfo">
        <span class="battleInfoLabel">
            ПРОТИВНИКИ
        </span>

        <span
            id="battleEnemiesValue"
            class="battleInfoValue"
        >
            0
        </span>
    </div>
`;

document.body.appendChild(
    battleInfoPanel
);

const battleInfoStyle =
    document.createElement("style");

battleInfoStyle.textContent = `

#battleInfoPanel {

    display: none;

    position: fixed;

    top: 0;
    left: 50%;

    transform:
        translateX(-50%);

    width: 430px;
    height: 72px;

    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            to bottom,
            rgba(18, 21, 22, 0.96),
            rgba(10, 12, 13, 0.92)
        );

    border-left:
        2px solid rgba(180, 180, 170, 0.55);

    border-right:
        2px solid rgba(180, 180, 170, 0.55);

    border-bottom:
        2px solid rgba(180, 180, 170, 0.75);

    box-shadow:
        0 4px 12px
        rgba(0, 0, 0, 0.55);

    z-index: 10000;

    color: white;

    font-family:
        Arial,
        sans-serif;

    pointer-events: none;

    box-sizing: border-box;
}


.battleInfoBlock {

    width: 33%;

    height: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 5px;
}


.battleInfoLabel {

    font-size: 11px;

    font-weight: bold;

    letter-spacing: 2px;

    opacity: 0.65;
}


.battleInfoValue {

    font-size: 22px;

    font-weight: bold;

    letter-spacing: 1px;

    text-shadow:
        0 2px 3px
        rgba(0, 0, 0, 0.8);
}


.battleInfoDivider {

    width: 1px;

    height: 44px;

    background:
        rgba(255, 255, 255, 0.18);
}


.enemiesInfo
.battleInfoValue {

    font-size: 24px;
}

`;

document.head.appendChild(
    battleInfoStyle
);

const battleCanvas =
    document.getElementById(
        "battleCanvas"
    );

const minimapCanvas =
    document.getElementById(
        "minimapCanvas"
    );

const minimapCtx =
    minimapCanvas.getContext("2d");

const MINIMAP_SIZE = 240;

minimapCanvas.width = MINIMAP_SIZE;
minimapCanvas.height = MINIMAP_SIZE;

const battleCtx =
    battleCanvas.getContext("2d");

battleCtx.imageSmoothingEnabled = true;
battleCtx.imageSmoothingQuality = "high";

const map1Image =
    new Image();

map1Image.src =
    "Krita1/map1.png";

const map1RoadImage = new Image();

map1RoadImage.src =
    "Krita1/map1_roads.png";

const map2Image =
    new Image();

map2Image.src =
    "Krita1/map2.png";

const map2RoadImage = new Image();

map2RoadImage.src =
    "Krita1/map2_roads.png";


const map3Image =
    new Image();

map3Image.src =
    "Krita1/map3.png";

const map3RoadImage = new Image();
map3RoadImage.src = "Krita1/map3_roads.png";


const map4Image =
    new Image();

map4Image.src =
    "Krita1/map4.png";

const map4RoadImage = new Image();
map4RoadImage.src = "Krita1/map4_roads.png";

const t26HullImage =
    new Image();

t26HullImage.src =
    "Krita1/t26hull.png";


const t26TurretImage =
    new Image();

t26TurretImage.src =
    "Krita1/t26turred.png";

const t26GunImage =
    new Image();

t26GunImage.src = "Krita1/t26gun.png";

const pz3HullImage = new Image();
pz3HullImage.src = "Krita1/pz3hull.png";

const pz3TurretImage = new Image();
pz3TurretImage.src = "Krita1/pz3turret.png";

const pz3GunImage = new Image();
pz3GunImage.src = "Krita1/pz3gun.png";

const m5HullImage = new Image();
m5HullImage.src = "Krita1/m5hull.png";

const m5TurretImage = new Image();
m5TurretImage.src = "Krita1/m5turret.png";

const m5GunImage = new Image();
m5GunImage.src = "Krita1/m5gun.png";

const dst26HullImage = new Image();
dst26HullImage.src = "Krita1/dst26hull.png";

const dst26TurretImage = new Image();
dst26TurretImage.src = "Krita1/dst26turret.png";

const dst26GunImage = new Image();
dst26GunImage.src = "Krita1/dst26gun.png";

const dspz3HullImage = new Image();
dspz3HullImage.src = "Krita1/dspz3hull.png";

const dspz3TurretImage = new Image();
dspz3TurretImage.src = "Krita1/dspz3turret.png";

const dspz3GunImage = new Image();
dspz3GunImage.src = "Krita1/dspz3gun.png";

const dsM5HullImage = new Image();
dsM5HullImage.src = "Krita1/dsM5hull.png";
const dsM5TurretImage = new Image();
dsM5TurretImage.src = "Krita1/dsM5turret.png";

const dsM5GunImage = new Image();
dsM5GunImage.src = "Krita1/dsM5gun.png";

const bt5HullImage = new Image();
bt5HullImage.src = "Krita1/BT5hull.png";

const bt5TurretImage = new Image();
bt5TurretImage.src = "Krita1/BT5turret.png";

const bt5GunImage = new Image();
bt5GunImage.src = "Krita1/BT5gun.png";

const t34Image = new Image();
t34Image.src = "Krita1/T34.png";

const t34HullImage = new Image();
t34HullImage.src = "Krita1/T34hull.png";

const t34TurretImage = new Image();
t34TurretImage.src = "Krita1/T34turret.png";

const t34GunImage = new Image();
t34GunImage.src = "Krita1/T34gun.png";

const kv85Image = new Image();
kv85Image.src = "Krita1/KV85.png";

const kv85HullImage = new Image();
kv85HullImage.src = "Krita1/KV85hull.png";

const kv85TurretImage = new Image();
kv85TurretImage.src = "Krita1/KV85turret.png";

const kv85GunImage = new Image();
kv85GunImage.src = "Krita1/KV85gun.png";

const pz4hHullImage = new Image();
pz4hHullImage.src = "Krita1/pz4hHull.png";

const pz4hTurretImage = new Image();
pz4hTurretImage.src = "Krita1/pz4hTurret.png";

const pz4hGunImage = new Image();
pz4hGunImage.src = "Krita1/pz4hGun.png";

const panteraImage = new Image();
panteraImage.src = "Krita1/pantera.png";

const panteraHullImage = new Image();
panteraHullImage.src = "Krita1/panteraHull.png";

const panteraTurretImage = new Image();
panteraTurretImage.src = "Krita1/panteraTurret.png";

const panteraGunImage = new Image();
panteraGunImage.src = "Krita1/panteraGun.png";

const tiger1Image = new Image();
tiger1Image.src = "Krita1/TigerI.png";

const tiger1HullImage = new Image();
tiger1HullImage.src = "Krita1/TigerHull.png";

const tiger1TurretImage = new Image();
tiger1TurretImage.src = "Krita1/TigerTurret.png";

const tiger1GunImage = new Image();
tiger1GunImage.src = "Krita1/TigerGun.png";

const m24HullImage = new Image();
m24HullImage.src = "Krita1/M24hull.png";

const m24TurretImage = new Image();
m24TurretImage.src = "Krita1/M24turret.png";

const m24GunImage = new Image();
m24GunImage.src = "Krita1/M24gun.png";

const m41Image = new Image();
m41Image.src = "Krita1/m41.png";

const m41HullImage = new Image();
m41HullImage.src = "Krita1/m41_hull.png";

const m41TurretImage = new Image();
m41TurretImage.src = "Krita1/m41_turret.png";

const m41GunImage = new Image();
m41GunImage.src = "Krita1/m41_gun.png";

const jamboImage = new Image();
jamboImage.src = "Krita1/jambo.png";

const jamboHullImage = new Image();
jamboHullImage.src = "Krita1/jamboHull.png";

const jamboTurretImage = new Image();
jamboTurretImage.src = "Krita1/jamboTurret.png";

const jamboGunImage = new Image();
jamboGunImage.src = "Krita1/jamboGun.png";

const operationScreen =
    document.getElementById("operationScreen");

const startOperationButton =
    document.getElementById("startOperationButton");

const smoke1Image = new Image();
smoke1Image.src = "Krita1/smoke1.png";

const smoke2Image = new Image();
smoke2Image.src = "Krita1/smoke2.png";

const smoke3Image = new Image();
smoke3Image.src = "Krita1/smoke3.png";

const smoke4Image = new Image();
smoke4Image.src = "Krita1/smoke4.png";

const smoke5Image = new Image();
smoke5Image.src = "Krita1/smoke5.png";

const treeImage = new Image();
treeImage.src = "Krita1/tree.PNG";

const pineImage = new Image();
pineImage.src = "Krita1/pine.PNG";

const cactus1Image = new Image();
cactus1Image.src = "Krita1/cactus1.PNG";

const cactus2Image = new Image();
cactus2Image.src = "Krita1/cactus2.PNG";

const cactus3Image = new Image();
cactus3Image.src = "Krita1/cactus3.PNG";

const cactus4Image = new Image();
cactus4Image.src = "Krita1/cactus4.PNG";

const houseImage = new Image();

houseImage.src =
    "Krita1/house.PNG";

const house2Image = new Image();

house2Image.src =
    "Krita1/house2.PNG";

const hedgehogImage = new Image();

hedgehogImage.src =
    "Krita1/hedgehog.png";

let currentScreen = "menu";


let buttonScale = 1;
let targetButtonScale = 1;

let buttonBrightness = 1;
let targetButtonBrightness = 1;

let hangarRotation = 0;

let targetHangarRotation = 0;

let hangarZoom = 1;

let targetHangarZoom = 1;

let isDraggingHangar = false;

let lastMouseX = 0;

let currentNation = 0;

let playerMoney = 100000;

let selectedHangarTank = null;

const mapTrees = [];

const mapHouses = [];

const wreckSmoke = [];

const hangarTankImage = new Image();

const smokeImages = [
    smoke1Image,
    smoke2Image,
    smoke3Image,
    smoke4Image,
    smoke5Image
];

const cactusImages = [
    cactus1Image,
    cactus2Image,
    cactus3Image,
    cactus4Image
];

const researchPrices = {

    2: 100,
    3: 250,
    4: 500

};

const nations = [

    {
        name: "СССР",

        tank: {

            id: "t26",

            name: "T-26",
            type: "ЛЁГКИЙ ТАНК",
            level: "УРОВЕНЬ I",

            hp: 100,
            speed: 45,
            damage: 35,

            image: "Krita1/t26.png",

            price: 300,
            owned: false,
            research: {

                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        },

        nextTank: {

            id: "bt5",
            name: "BT-5",
            type: "ЛЁГКИЙ ТАНК",
            level: "УРОВЕНЬ II",

            hp: 230,
            speed: 65,
            damage: 55,

            image: "Krita1/BT5.png",

            price: 1050,
            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        },

        // ========================================
        // ТАНК III УРОВНЯ — T-34
        // ========================================
        thirdTank: {

            id: "t34",
            name: "T-34",
            type: "СРЕДНИЙ ТАНК",
            level: "УРОВЕНЬ III",

            hp: 350,
            speed: 50,
            damage: 90,

            image: "Krita1/T34.png",

            price: 1800,
            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        },

        // ========================================
        // ТАНК IV УРОВНЯ — KV-85
        // ========================================
        fourthTank: {

            id: "kv85",
            name: "KV-85",
            type: "ТЯЖЁЛЫЙ ТАНК",
            level: "УРОВЕНЬ IV",

            hp: 550,
            speed: 55,
            damage: 140,

            image: "Krita1/KV85.png",

            price: 3500,
            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        }
    },

    {
        name: "ГЕРМАНИЯ",

        tank: {

            id: "pz3e",

            name: "Pz III E",
            type: "СРЕДНИЙ ТАНК",
            level: "УРОВЕНЬ I",

            hp: 140,
            speed: 40,
            damage: 40,

            image: "Krita1/PZIIIE.png",

            price: 300,
            owned: false,
            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1

            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        },

        nextTank: {

            id: "pz4F",

            name: "Pz IV F",

            type: "СРЕДНИЙ ТАНК",

            level: "УРОВЕНЬ II",

            hp: 280,

            speed: 38,

            damage: 75,

            image: "Krita1/pz4h.png",

            price: 1200,

            owned: false,

            unlocked: false,


            research: {

                gun: 1,

                turret: 1,

                engine: 1,

                tracks: 1

            },


            installed: {

                gun: 1,

                turret: 1,

                engine: 1,

                tracks: 1

            }

        },

        // ========================================
        // ТАНК III УРОВНЯ — PANTHER
        // ========================================

        thirdTank: {

            id: "pantera",

            name: "Panther",

            type: "СРЕДНИЙ ТАНК",

            level: "УРОВЕНЬ III",

            hp: 340,

            speed: 62,

            damage: 120,

            image: "Krita1/pantera.png",

            price: 2000,

            owned: false,

            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }

        },

        fourthTank: {
            id: "tiger1",
            name: "Tiger I",
            type: "ТЯЖЁЛЫЙ ТАНК",
            level: "УРОВЕНЬ IV",

            hp: 650,
            speed: 48,
            damage: 150,

            image: "Krita1/TigerI.png",

            price: 3500,
            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        }
    },

    {
        name: "США",

        tank: {

            id: "m5stuart",

            name: "M5 Stuart",
            type: "ЛЁГКИЙ ТАНК",
            level: "УРОВЕНЬ I",

            hp: 120,
            speed: 58,
            damage: 35,

            image: "Krita1/M5Stuart.png",

            price: 300,
            owned: false,
            research: {

                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1,

                installed: {
                    gun: 1,
                    turret: 1,
                    engine: 1,
                    tracks: 1
                }
            }
        },

        nextTank: {

            id: "m24",

            name: "M24 Chaffee",

            type: "ЛЁГКИЙ ТАНК",

            level: "УРОВЕНЬ II",

            hp: 220,

            speed: 65,

            damage: 65,

            image: "Krita1/M24.png",

            price: 1100,

            owned: false,

            unlocked: false,


            research: {

                gun: 1,

                turret: 1,

                engine: 1,

                tracks: 1

            },


            installed: {

                gun: 1,

                turret: 1,

                engine: 1,

                tracks: 1

            }

        },

        // ========================================
        // ТАНК III УРОВНЯ — M41
        // ========================================

        thirdTank: {

            id: "m41",

            name: "M41",

            type: "ЛЁГКИЙ ТАНК",

            level: "УРОВЕНЬ III",

            hp: 320,
            speed: 72,
            damage: 85,

            image: "Krita1/m41.png",

            price: 1800,

            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        },

        fourthTank: {

            id: "jambo",
            name: "Jumbo",
            type: "ТЯЖЁЛЫЙ ТАНК",
            level: "УРОВЕНЬ IV",

            hp: 600,
            speed: 35,
            damage: 140,

            image: "Krita1/jambo.png",

            price: 3500,
            owned: false,
            unlocked: false,

            research: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            },

            installed: {
                gun: 1,
                turret: 1,
                engine: 1,
                tracks: 1
            }
        }
    }
];

function getResearchNextTank(nation) {

    if (!nation || !nation.tank)
        return null;

    // ========================================
    // СССР
    // ========================================

    if (
        nation.tank.id === "bt5" &&
        nation.thirdTank
    ) {
        return nation.thirdTank;
    }

    if (
        nation.tank.id === "t34" &&
        nation.fourthTank
    ) {
        return nation.fourthTank;
    }

    if (
        nation.tank.id === "kv85"
    ) {
        return null;
    }


    // ========================================
    // ГЕРМАНИЯ
    // ========================================

    if (
        nation.tank.id === "pz4F" &&
        nation.thirdTank
    ) {
        return nation.thirdTank;
    }

    if (
        nation.tank.id === "pantera" &&
        nation.fourthTank
    ) {
        return nation.fourthTank;
    }

    if (
        nation.tank.id === "tiger1"
    ) {
        return null;
    }

    if (
        nation.tank.id === "m24" &&
        nation.thirdTank
    ) {
        return nation.thirdTank;
    }

    if (
        nation.tank.id === "m41" &&
        nation.fourthTank
    ) {
        return nation.fourthTank;
    }

    if (
        nation.tank.id === "jambo"
    ) {
        return null;
    }

    // ========================================
    // ОБЫЧНЫЙ СЛЕДУЮЩИЙ ТАНК
    // ========================================

    return nation.nextTank || null;
}

// ========================================
// PLAYER TANK
// ========================================

// ========================================
// BATTLE WORLD
// ========================================

const MAP_WIDTH = 4000;
const MAP_HEIGHT = 4000;

const ROAD_MASK_SIZE = 1000;

let map1RoadMaskData = null;
let map2RoadMaskData = null;
let map3RoadMaskData = null;
let map4RoadMaskData = null;


// Создаём уменьшенную маску прозрачности дороги
function buildMap1RoadMask() {

    if (
        !map1RoadImage.complete ||
        !map1RoadImage.naturalWidth
    ) {
        return false;
    }

    const maskCanvas = document.createElement("canvas");

    maskCanvas.width = ROAD_MASK_SIZE;
    maskCanvas.height = ROAD_MASK_SIZE;

    const maskCtx = maskCanvas.getContext("2d", {
        willReadFrequently: true
    });

    maskCtx.clearRect(
        0,
        0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    );

    maskCtx.drawImage(
        map1RoadImage,
        0,
        0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    );

    map1RoadMaskData = maskCtx.getImageData(
        0,
        0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    ).data;

    return true;
}

function buildMap2RoadMask() {

    if (
        !map2RoadImage.complete ||
        !map2RoadImage.naturalWidth
    ) {
        return false;
    }

    const maskCanvas = document.createElement("canvas");

    maskCanvas.width = ROAD_MASK_SIZE;
    maskCanvas.height = ROAD_MASK_SIZE;

    const maskCtx = maskCanvas.getContext("2d", {
        willReadFrequently: true
    });

    maskCtx.clearRect(0, 0, ROAD_MASK_SIZE, ROAD_MASK_SIZE);

    maskCtx.drawImage(
        map2RoadImage,
        0,
        0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    );

    map2RoadMaskData = maskCtx.getImageData(
        0,
        0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    ).data;

    return true;
}

function buildMap3RoadMask() {

    if (!map3RoadImage.complete || !map3RoadImage.naturalWidth) {
        return false;
    }

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = ROAD_MASK_SIZE;
    maskCanvas.height = ROAD_MASK_SIZE;

    const maskCtx = maskCanvas.getContext("2d", {
        willReadFrequently: true
    });

    maskCtx.drawImage(
        map3RoadImage,
        0, 0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    );

    map3RoadMaskData = maskCtx.getImageData(
        0, 0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    ).data;

    return true;
}


function buildMap4RoadMask() {

    if (!map4RoadImage.complete || !map4RoadImage.naturalWidth) {
        return false;
    }

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = ROAD_MASK_SIZE;
    maskCanvas.height = ROAD_MASK_SIZE;

    const maskCtx = maskCanvas.getContext("2d", {
        willReadFrequently: true
    });

    maskCtx.drawImage(
        map4RoadImage,
        0, 0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    );

    map4RoadMaskData = maskCtx.getImageData(
        0, 0,
        ROAD_MASK_SIZE,
        ROAD_MASK_SIZE
    ).data;

    return true;
}

// Проверяем одну точку
function isRoadAt(x, y) {

    if (!map1RoadMaskData)
        return false;

    const mx = Math.floor(
        x / MAP_WIDTH * ROAD_MASK_SIZE
    );

    const my = Math.floor(
        y / MAP_HEIGHT * ROAD_MASK_SIZE
    );

    if (
        mx < 0 ||
        my < 0 ||
        mx >= ROAD_MASK_SIZE ||
        my >= ROAD_MASK_SIZE
    ) {
        return false;
    }

    const index =
        (my * ROAD_MASK_SIZE + mx) * 4;

    const alpha =
        map1RoadMaskData[index + 3];

    return alpha > 20;
}


// Проверяем всю область вокруг дерева
function isRoadArea(x, y, radius) {

    const step = 8;

    for (
        let dy = -radius;
        dy <= radius;
        dy += step
    ) {

        for (
            let dx = -radius;
            dx <= radius;
            dx += step
        ) {

            if (
                dx * dx + dy * dy >
                radius * radius
            ) {
                continue;
            }

            if (
                isRoadAt(
                    x + dx,
                    y + dy
                )
            ) {
                return true;
            }

        }

    }

    return false;
}

function isMap2RoadAt(x, y) {

    if (!map2RoadMaskData) return false;

    const mx = Math.floor(x / MAP_WIDTH * ROAD_MASK_SIZE);
    const my = Math.floor(y / MAP_HEIGHT * ROAD_MASK_SIZE);

    if (
        mx < 0 ||
        my < 0 ||
        mx >= ROAD_MASK_SIZE ||
        my >= ROAD_MASK_SIZE
    ) {
        return false;
    }

    const index = (my * ROAD_MASK_SIZE + mx) * 4;

    return map2RoadMaskData[index + 3] > 20;
}


function isMap2RoadArea(x, y, radius) {

    const step = 8;

    for (let dy = -radius; dy <= radius; dy += step) {
        for (let dx = -radius; dx <= radius; dx += step) {

            if (dx * dx + dy * dy > radius * radius) continue;

            if (isMap2RoadAt(x + dx, y + dy)) {
                return true;
            }
        }
    }

    return false;
}

function isMap3RoadAt(x, y) {

    if (!map3RoadMaskData) return false;

    const mx = Math.floor(x / MAP_WIDTH * ROAD_MASK_SIZE);
    const my = Math.floor(y / MAP_HEIGHT * ROAD_MASK_SIZE);

    if (
        mx < 0 || my < 0 ||
        mx >= ROAD_MASK_SIZE || my >= ROAD_MASK_SIZE
    ) {
        return false;
    }

    const index = (my * ROAD_MASK_SIZE + mx) * 4;

    return map3RoadMaskData[index + 3] > 20;
}


function isMap3RoadArea(x, y, radius) {

    const step = 8;

    for (let dy = -radius; dy <= radius; dy += step) {
        for (let dx = -radius; dx <= radius; dx += step) {

            if (dx * dx + dy * dy > radius * radius) continue;

            if (isMap3RoadAt(x + dx, y + dy)) {
                return true;
            }
        }
    }

    return false;
}


function isMap4RoadAt(x, y) {

    if (!map4RoadMaskData) return false;

    const mx = Math.floor(x / MAP_WIDTH * ROAD_MASK_SIZE);
    const my = Math.floor(y / MAP_HEIGHT * ROAD_MASK_SIZE);

    if (
        mx < 0 || my < 0 ||
        mx >= ROAD_MASK_SIZE || my >= ROAD_MASK_SIZE
    ) {
        return false;
    }

    const index = (my * ROAD_MASK_SIZE + mx) * 4;

    return map4RoadMaskData[index + 3] > 20;
}


function isMap4RoadArea(x, y, radius) {

    const step = 8;

    for (let dy = -radius; dy <= radius; dy += step) {
        for (let dx = -radius; dx <= radius; dx += step) {

            if (dx * dx + dy * dy > radius * radius) continue;

            if (isMap4RoadAt(x + dx, y + dy)) {
                return true;
            }
        }
    }

    return false;
}

// Когда дорога загрузится — создаём маску
map1RoadImage.addEventListener("load", () => {

    buildMap1RoadMask();

    // Если бой уже начался, создаём деревья повторно
    if (
        currentBattleMap &&
        currentBattleMap.id === "map1" &&
        currentScreen === "battle" &&
        mapTrees.length === 0
    ) {
        generateMapNature();
    }

});

map2RoadImage.addEventListener("load", () => {

    buildMap2RoadMask();

    if (
        typeof currentBattleMap !== "undefined" &&
        currentBattleMap &&
        currentBattleMap.id === "map2" &&
        currentScreen === "battle" &&
        mapTrees.length === 0
    ) {
        generateMapNature();
    }

});

map3RoadImage.addEventListener("load", () => {

    buildMap3RoadMask();

    if (
        currentBattleMap &&
        currentBattleMap.id === "map3" &&
        currentScreen === "battle" &&
        mapTrees.length === 0
    ) {
        generateMapNature();
    }

});


map4RoadImage.addEventListener("load", () => {

    buildMap4RoadMask();

    if (
        currentBattleMap &&
        currentBattleMap.id === "map4" &&
        currentScreen === "battle" &&
        mapTrees.length === 0
    ) {
        generateMapNature();
    }

});

function getBattleViewport() {

    let right = 0;
    let bottom = 0;


    // ========================================
    // ПРАВАЯ ПАНЕЛЬ
    // ========================================

    const constructionPanel =
        document.getElementById(
            "constructionPanel"
        );

    if (
        constructionPanel &&
        getComputedStyle(
            constructionPanel
        ).display !== "none"
    ) {

        right =
            constructionPanel
                .getBoundingClientRect()
                .width;

    }


    // ========================================
    // НИЖНЯЯ ПАНЕЛЬ СОЮЗНИКОВ
    // ========================================

    if (
        allyPanel &&
        getComputedStyle(
            allyPanel
        ).display !== "none"
    ) {

        bottom =
            allyPanel
                .getBoundingClientRect()
                .height;

    }


    // ========================================
    // ИГРОВАЯ ОБЛАСТЬ
    // ========================================

    return {

        left: 0,

        top: 0,

        right:
            battleCanvas.width -
            right,

        bottom:
            battleCanvas.height -
            bottom,

        width:
            Math.max(
                1,
                battleCanvas.width -
                right
            ),

        height:
            Math.max(
                1,
                battleCanvas.height -
                bottom
            )

    };
}
// ========================================
// CAMERA
// ========================================

const camera = {

    x: 0,
    y: 0,

    // Начальный масштаб
    zoom: 1

};

let cameraShake = 0;
let cameraShakeTime = 0;

let playerCameraZoom = 1;
// ========================================
// PLAYER TANK
// ========================================

let playerTank = null;
let enemyTanks = [];
let allyTanks = [];

let playerSwitchMode = false;
let selectedSwitchAllyIndex = 0;
let switchableAllies = [];

const BATTLE_PHASES = [

    // ФАЗА 1
    [
        { level1: 3, level2: 0 },
        { level1: 4, level2: 0 },
        { level1: 5, level2: 0 }
    ],

    // ФАЗА 2
    [
        { level1: 3, level2: 1 },
        { level1: 3, level2: 2 },
        { level1: 3, level2: 3 }
    ],

    // ФАЗА 3
    [
        { level1: 3, level2: 3 },
        { level1: 2, level2: 4 },
        { level1: 2, level2: 5 }
    ],

    // ФАЗА 4
    [
        { level1: 2, level2: 5 },
        { level1: 1, level2: 6 },
        { level1: 1, level2: 7 }
    ],

    // ФАЗА 5
    [
        { level1: 1, level2: 6 },
        { level1: 1, level2: 8 },
        { level1: 0, level2: 10 }
    ]

];

let currentBattlePhase = 0;
let currentBattleWave = -1;

let battleWaveState = "idle";

let battleWaveTimer = 0;

let battleVillageX =
    MAP_WIDTH / 2;

let battleVillageY =
    MAP_HEIGHT / 2;

const battleTanks = [

    // ========================================
    // T-26
    // ========================================

    {
        id: "t26",

        name: "T-26",

        hull: t26HullImage,
        turret: t26TurretImage,
        gun: t26GunImage,

        destroyedHull: dst26HullImage,
        destroyedTurret: dst26TurretImage,
        destroyedGun: dst26GunImage,

        scale: 0.41,

        turretOffsetX: 0,
        turretOffsetY: 0,

        gunOffsetX: -40,
        gunOffsetY: -1,

        imageRotation: Math.PI / 2,

        hitbox: {
            width: 100,
            length: 55
        },

        armor: {
            front: 15,
            rear: 15,
            left: 15,
            right: 15
        },

        penetration: 45,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 10,

        trackSpacing: 44,

        trackWidth: 7,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 80,

        reloadTime: 1500,

        accelerationTime: 3.0,

        brakingTime: 0.5,

        hullTurnSpeed: 2.2,

        turretTurnSpeed: 2.5,

        turretAccelerationTime: 0.25,

        turretBrakingTime: 0.15
    },


    // ========================================
    // Pz III E
    // ========================================

    {
        id: "pz3e",

        name: "Pz III E",

        hull: pz3HullImage,
        turret: pz3TurretImage,
        gun: pz3GunImage,

        destroyedHull: dspz3HullImage,
        destroyedTurret: dspz3TurretImage,
        destroyedGun: dspz3GunImage,

        scale: 0.32,

        turretOffsetX: -6,
        turretOffsetY: 0,

        gunOffsetX: -45,
        gunOffsetY: -1,

        imageRotation: 0,

        hitbox: {
            width: 125,
            length: 65
        },

        armor: {
            front: 30,
            rear: 20,
            left: 30,
            right: 30
        },

        penetration: 47,

        mass: 16,

        trackSpacing: 64,

        trackWidth: 10,

        smokeOffsetX: 0,

        smokeOffsetY: 30,

        maxSpeed: 65,

        reloadTime: 2000,

        accelerationTime: 3.5,

        brakingTime: 0.4,

        hullTurnSpeed: 1.9,

        turretTurnSpeed: 2.2,

        turretAccelerationTime: 0.3,

        turretBrakingTime: 0.18
    },


    // ========================================
    // M5 Stuart
    // ========================================

    {
        id: "m5stuart",

        name: "M5 Stuart",

        hull: m5HullImage,
        turret: m5TurretImage,
        gun: m5GunImage,

        destroyedHull: dsM5HullImage,
        destroyedTurret: dsM5TurretImage,
        destroyedGun: dsM5GunImage,

        scale: 0.35,

        turretOffsetX: -6,
        turretOffsetY: -4,

        turretPivotX: -1,
        turretPivotY: 4,

        gunOffsetX: -32,
        gunOffsetY: 2,

        imageRotation: 0,

        hitbox: {
            width: 110,
            length: 65
        },

        armor: {
            front: 30,
            rear: 25,
            left: 30,
            right: 30
        },

        penetration: 57,

        mass: 12,

        trackSpacing: 45,

        trackWidth: 8,

        smokeOffsetX: 0,

        smokeOffsetY: 30,

        maxSpeed: 85,

        reloadTime: 1500,

        accelerationTime: 3.0,

        brakingTime: 0.5,

        hullTurnSpeed: 2.5,

        turretTurnSpeed: 2.8,

        turretAccelerationTime: 0.2,

        turretBrakingTime: 0.12
    },

    {
        id: "bt5",

        name: "BT-5",

        hull: bt5HullImage,
        turret: bt5TurretImage,
        gun: bt5GunImage,

        scale: 0.35,

        turretOffsetX: -18,
        turretOffsetY: 0,

        gunOffsetX: -40,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 110,
            length: 55
        },

        armor: {
            front: 40,
            rear: 13,
            left: 15,
            right: 15
        },

        penetration: 70,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 11,

        trackSpacing: 46,
        trackWidth: 8,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 95,

        reloadTime: 1200,

        accelerationTime: 2.8,

        brakingTime: 0.5,

        hullTurnSpeed: 2.4,

        turretTurnSpeed: 2.6,

        turretAccelerationTime: 0.22,

        turretBrakingTime: 0.14
    },

    {
        id: "t34",
        name: "T-34",

        hull: t34HullImage,
        turret: t34TurretImage,
        gun: t34GunImage,

        scale: 0.40,

        turretOffsetX: -10,
        turretOffsetY: 0,

        gunOffsetX: -48,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 110,
            length: 55
        },

        armor: {
            front: 90,
            rear: 55,
            left: 75,
            right: 75
        },

        penetration: 85,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 26,

        trackSpacing: 55,
        trackWidth: 11,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 82,

        reloadTime: 2200,

        accelerationTime: 2.5,
        brakingTime: 0.4,

        hullTurnSpeed: 2.0,
        turretTurnSpeed: 2.3,

        turretAccelerationTime: 0.28,
        turretBrakingTime: 0.16
    },


    {
        id: "kv85",
        name: "KV-85",

        hull: kv85HullImage,
        turret: kv85TurretImage,
        gun: kv85GunImage,

        scale: 0.28,

        turretOffsetX: -5,
        turretOffsetY: 0,

        gunOffsetX: -65,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 140,
            length: 65
        },

        armor: {
            front: 100,
            rear: 60,
            left: 75,
            right: 75
        },

        penetration: 175,

        // ФИЗИКА

        mass: 46,

        trackSpacing: 62,
        trackWidth: 13,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 60,

        reloadTime: 3000,

        accelerationTime: 1.5,
        brakingTime: 0.6,

        hullTurnSpeed: 1.4,
        turretTurnSpeed: 1.7,

        turretAccelerationTime: 0.4,
        turretBrakingTime: 0.25
    },

    {
        id: "pantera",
        name: "Panther",

        hull: panteraHullImage,
        turret: panteraTurretImage,
        gun: panteraGunImage,

        scale: 0.45,

        turretOffsetX: -3,
        turretOffsetY: 0,

        gunOffsetX: -76,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 140,
            length: 65
        },

        armor: {
            front: 85,
            rear: 40,
            left: 50,
            right: 50
        },

        penetration: 138,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 45,

        trackSpacing: 61,
        trackWidth: 15,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 62,

        reloadTime: 2500,

        accelerationTime: 2.8,
        brakingTime: 0.5,

        hullTurnSpeed: 1.6,
        turretTurnSpeed: 2.0,

        turretAccelerationTime: 0.32,
        turretBrakingTime: 0.18
    },

    {
        id: "pz4F",

        name: "Pz IV F",

        hull: pz4hHullImage,
        turret: pz4hTurretImage,
        gun: pz4hGunImage,

        scale: 0.06,

        turretOffsetX: 11,
        turretOffsetY: 0,

        turretPivotX: -10,
        turretPivotY: 0,

        gunOffsetX: -60,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 120,
            length: 65
        },

        armor: {
            front: 50,
            rear: 20,
            left: 30,
            right: 30
        },

        penetration: 110,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 18,

        trackSpacing: 54,
        trackWidth: 8,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 72,

        reloadTime: 2500,

        accelerationTime: 1.6,
        brakingTime: 0.3,

        hullTurnSpeed: 1.7,

        turretTurnSpeed: 2.0,

        turretAccelerationTime: 0.32,
        turretBrakingTime: 0.20
    },

    {
        id: "tiger1",
        name: "Tiger I",

        hull: tiger1HullImage,
        turret: tiger1TurretImage,
        gun: tiger1GunImage,

        scale: 0.22,

        turretOffsetX: 0,
        turretOffsetY: 0,

        gunOffsetX: -82,
        gunOffsetY: 0,

        imageRotation: Math.PI / 2,

        hitbox: {
            width: 150,
            length: 75
        },

        armor: {
            front: 100,
            rear: 60,
            left: 80,
            right: 80
        },

        penetration: 120,

        mass: 57,
        trackSpacing: 68,
        trackWidth: 16,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 45,
        reloadTime: 3500,

        accelerationTime: 3.5,
        brakingTime: 0.7,

        hullTurnSpeed: 1.2,
        turretTurnSpeed: 1.4,

        turretAccelerationTime: 0.5,
        turretBrakingTime: 0.3
    },

    {
        id: "m41",
        name: "M41",

        hull: m41HullImage,
        turret: m41TurretImage,
        gun: m41GunImage,

        scale: 0.24,

        turretOffsetX: 0,
        turretOffsetY: 0,

        turretPivotX: -10,
        turretPivotY: 0,

        gunOffsetX: -78,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 120,
            length: 65
        },

        armor: {
            front: 40,
            rear: 15,
            left: 20,
            right: 20
        },

        penetration: 175,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 24,

        trackSpacing: 58,
        trackWidth: 12,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 100,

        reloadTime: 1800,

        accelerationTime: 1.7,
        brakingTime: 0.6,

        hullTurnSpeed: 2.3,
        turretTurnSpeed: 2.7,

        turretAccelerationTime: 0.22,
        turretBrakingTime: 0.14
    },

    {
        id: "m24",
        name: "M24 Chaffee",

        hull: m24HullImage,
        turret: m24TurretImage,
        gun: m24GunImage,

        scale: 0.3,

        turretOffsetX: 5,
        turretOffsetY: 0,

        turretPivotX: -12,
        turretPivotY: 0,

        gunOffsetX: -53,
        gunOffsetY: 0,

        imageRotation: 0,

        hitbox: {
            width: 100,
            length: 65
        },

        armor: {
            front: 25,
            rear: 20,
            left: 20,
            right: 20
        },

        penetration: 80,

        // ========================================
        // ФИЗИКА
        // ========================================

        mass: 13,

        trackSpacing: 58,
        trackWidth: 10,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 95,

        reloadTime: 1500,

        accelerationTime: 1.8,
        brakingTime: 0.6,

        hullTurnSpeed: 2.4,

        turretTurnSpeed: 2.7,
        turretAccelerationTime: 0.22,
        turretBrakingTime: 0.14
    },

    {
        id: "jambo",
        name: "Jumbo",

        hull: jamboHullImage,
        turret: jamboTurretImage,
        gun: jamboGunImage,

        scale: 0.46,

        turretOffsetX: 0,
        turretOffsetY: 0,

        gunOffsetX: -55,
        gunOffsetY: 0,

        imageRotation: Math.PI / 2,

        hitbox: {
            width: 145,
            length: 65
        },

        armor: {
            front: 150,
            rear: 38,
            left: 76,
            right: 76
        },

        penetration: 80,

        mass: 37,
        trackSpacing: 56,
        trackWidth: 14,

        smokeOffsetX: 0,
        smokeOffsetY: 30,

        maxSpeed: 90,
        reloadTime: 3000,

        accelerationTime: 3,
        brakingTime: 0.6,

        hullTurnSpeed: 1.4,
        turretTurnSpeed: 1.7,

        turretAccelerationTime: 0.4,
        turretBrakingTime: 0.25
    },
];

const battleMaps = [

    {
        id: "map1",
        name: "Равнина",
        image: map1Image,
        roadImage: map1RoadImage
    },

    {
        id: "map2",
        name: "Лес",
        image: map2Image,
        roadImage: map2RoadImage
    },

    {
        id: "map3",
        name: "Север",
        image: map3Image,
        roadImage: map3RoadImage
    },

    {
        id: "map4",
        name: "Пустыня",
        image: map4Image,
        roadImage: map4RoadImage
    }

];

const battleMouse = {
    x: 0,
    y: 0
};

let villageBuildMode = false;

let selectedBuildObject = null;

let allyPlacementMode = false;
let selectedAllyTank = null;

let allyGhostX = 0;
let allyGhostY = 0;

let housesToBuild = 6;

let hedgehogsToBuild = 16;


// ========================================
// ПЕРЕТАСКИВАНИЕ КАМЕРЫ
// ========================================

let isDraggingBattleCamera = false;

let battleDragStartX = 0;
let battleDragStartY = 0;

let battleDragMoved = false;


// ========================================
// ПОЗИЦИЯ ПРИЗРАКА ДОМА
// ========================================

let buildGhostX = MAP_WIDTH / 2;
let buildGhostY = MAP_HEIGHT / 2;

function addMoney(amount) {

    playerMoney += amount;

    saveTankProgress();

    updateMoneyUI();
}

function updateMoneyUI() {

    const moneyElement =
        document.getElementById(
            "moneyValue"
        );

    if (!moneyElement)
        return;

    moneyElement.textContent =
        playerMoney;
}

battleCanvas.addEventListener(
    "mousemove",
    function (event) {

        const rect =
            battleCanvas.getBoundingClientRect();


        battleMouse.x =
            event.clientX -
            rect.left;


        battleMouse.y =
            event.clientY -
            rect.top;


        // ========================================
        // СТРОИТЕЛЬСТВО
        // ========================================

        if (villageBuildMode) {

            const world =
                battleScreenToWorld(
                    event.clientX,
                    event.clientY
                );


            buildGhostX =
                Math.max(
                    150,
                    Math.min(
                        MAP_WIDTH - 150,
                        world.x
                    )
                );


            buildGhostY =
                Math.max(
                    150,
                    Math.min(
                        MAP_HEIGHT - 150,
                        world.y
                    )
                );
        }

        if (
            allyPlacementMode &&
            selectedAllyTank
        ) {

            const world =
                battleScreenToWorld(
                    event.clientX,
                    event.clientY
                );

            allyGhostX =
                Math.max(
                    150,
                    Math.min(
                        MAP_WIDTH - 150,
                        world.x
                    )
                );

            allyGhostY =
                Math.max(
                    150,
                    Math.min(
                        MAP_HEIGHT - 150,
                        world.y
                    )
                );
        }

        // ========================================
        // ПЕРЕТАСКИВАНИЕ КАМЕРЫ
        // ========================================

        if (
            villageBuildMode &&
            isDraggingBattleCamera
        ) {

            const dx =
                event.clientX -
                battleDragStartX;

            const dy =
                event.clientY -
                battleDragStartY;


            if (
                Math.abs(dx) > 3 ||
                Math.abs(dy) > 3
            ) {

                battleDragMoved = true;

            }


            camera.x -=
                dx /
                camera.zoom;

            camera.y -=
                dy /
                camera.zoom;


            battleDragStartX =
                event.clientX;

            battleDragStartY =
                event.clientY;


            const viewWidth =
                battleCanvas.width /
                camera.zoom;

            const viewHeight =
                battleCanvas.height /
                camera.zoom;


            const halfWidth =
                viewWidth / 2;

            const halfHeight =
                viewHeight / 2;


            camera.x =
                Math.max(
                    halfWidth,
                    Math.min(
                        MAP_WIDTH -
                        halfWidth,
                        camera.x
                    )
                );


            camera.y =
                Math.max(
                    halfHeight,
                    Math.min(
                        MAP_HEIGHT -
                        halfHeight,
                        camera.y
                    )
                );

        }

    }
);

startOperationButton.addEventListener(
    "click",
    function () {

        // ========================================
        // ПРОВЕРЯЕМ ТАНК
        // ========================================

        if (!selectedHangarTank) {

            alert(
                "Сначала выберите танк!"
            );

            return;
        }


        // ========================================
        // ОЧИЩАЕМ СТАРУЮ ДЕРЕВНЮ
        // ========================================

        mapHouses.length = 0;
        mapHedgehogs.length = 0;

        // ========================================
        // ДЕРЕВЬЯ ОСТАЮТСЯ
        // ========================================

        generateMapNature();


        // ========================================
        // СОЗДАЁМ ИГРОКА
        // ========================================

        playerTank =
            createPlayerTank(
                selectedHangarTank
            );

        camera.zoom =
            playerCameraZoom;
        // ========================================
        // ВРАГОВ ПОКА НЕТ
        // ========================================

        enemyTanks.length = 0;


        // ========================================
        // ОЧИЩАЕМ СНАРЯДЫ
        // ========================================

        shells.length = 0;


        // ========================================
        // СБРАСЫВАЕМ СТРОИТЕЛЬСТВО
        // ========================================

        villageBuildMode = true;

        selectedBuildObject = null;

        housesToBuild = 6;


        // ========================================
        // КАМЕРА В ЦЕНТР
        // ========================================

        camera.x =
            MAP_WIDTH / 2;

        camera.y =
            MAP_HEIGHT / 2;


        // ========================================
        // ПЕРЕХОД НА КАРТУ
        // ========================================

        currentScreen =
            "battle";


        // ========================================
        // ПОКАЗЫВАЕМ ПАНЕЛЬ
        // ========================================

        updateConstructionUI();

    }
);

// ========================================
// ЭЛЕМЕНТЫ СТРОИТЕЛЬСТВА
// ========================================

const constructionPanel =
    document.getElementById(
        "constructionPanel"
    );

const allyPanel =
    document.getElementById(
        "allyPanel"
    );

const buildHouseButton =
    document.getElementById(
        "buildHouseButton"
    );

const houseCountElement =
    document.getElementById(
        "houseCount"
    );

const finishConstructionButton =
    document.getElementById(
        "finishConstructionButton"
    );

const buildHedgehogButton =
    document.getElementById(
        "buildHedgehogButton"
    );

const hedgehogCountElement =
    document.getElementById(
        "hedgehogCount"
    );

const returnToHangarButton =
    document.createElement("button");

returnToHangarButton.id =
    "returnToHangarButton";

returnToHangarButton.textContent =
    "В АНГАР";

document.body.appendChild(
    returnToHangarButton
);

returnToHangarButton.addEventListener("click", function () {
    returnToHangarButton.style.display = "none";

    // ========================================
    // ОЧИЩАЕМ ОБЪЕКТЫ ПРЕДЫДУЩЕЙ ОПЕРАЦИИ
    // ========================================

    mapHouses.length = 0;
    mapHedgehogs.length = 0;
    allyTanks.length = 0;

    // ========================================
    // ВОЗВРАЩАЕМ КОЛИЧЕСТВО ДЛЯ НОВОЙ РАССТАНОВКИ
    // ========================================

    housesToBuild = 6;
    hedgehogsToBuild = 16;

    // ========================================
    // ВЫХОД В АНГАР
    // ========================================

    currentScreen = "hangar";
    villageBuildMode = false;

    selectedBuildObject = null;
    allyPlacementMode = false;
    selectedAllyTank = null;

    updateHangarUI();
});

// ========================================
// ОБНОВЛЕНИЕ ПАНЕЛИ
// ========================================

function updateConstructionUI() {

    if (!constructionPanel)
        return;


    if (villageBuildMode) {

        constructionPanel.style.display =
            "flex";

        constructionPanel.style.visibility =
            "visible";

        constructionPanel.style.pointerEvents =
            "auto";


        // ====================================
        // ПОКАЗЫВАЕМ ПАНЕЛЬ СОЮЗНИКОВ
        // ====================================

        if (allyPanel) {

            allyPanel.style.display =
                "flex";

        }

    } else {

        constructionPanel.style.display =
            "none";

        constructionPanel.style.visibility =
            "hidden";

        constructionPanel.style.pointerEvents =
            "none";


        if (allyPanel) {

            allyPanel.style.display =
                "none";

        }

    }


    houseCountElement.textContent =
        "×" + housesToBuild;

    hedgehogCountElement.textContent =
        "×" + hedgehogsToBuild;


    if (
        selectedBuildObject ===
        "house"
    ) {

        buildHouseButton.classList.add(
            "selected"
        );

    } else {

        buildHouseButton.classList.remove(
            "selected"
        );

    }

    if (
        selectedBuildObject ===
        "hedgehog"
    ) {

        buildHedgehogButton.classList.add(
            "selected"
        );

    } else {

        buildHedgehogButton.classList.remove(
            "selected"
        );

    }

    resizeCanvas();

}

function createWaveEnemyTank(level) {

    const nation =
        nations[
        Math.floor(
            Math.random() *
            nations.length
        )
        ];

    let tank;

    if (level === 1) {

        tank =
            nation.tank;

    }

    else if (
        level === 2 &&
        nation.nextTank
    ) {

        tank =
            nation.nextTank;

    }

    else {

        tank =
            nation.tank;

    }

    return createEnemyTank(
        tank
    );
}

function updateSwitchableAllies() {

    switchableAllies =
        allyTanks.filter(
            ally =>
                ally &&
                !ally.destroyed &&
                ally.hp > 0
        );

}

function showDefeatScreen() {

    playerSwitchMode = false;

    const switchPanel =
        document.getElementById(
            "tankSwitchPanel"
        );

    if (switchPanel) {

        switchPanel.style.display =
            "none";

    }


    const defeatScreen =
        document.getElementById(
            "defeatScreen"
        );

    if (defeatScreen) {

        defeatScreen.style.display =
            "flex";

    }

}

document
    .getElementById("defeatHangarButton")
    .addEventListener(
        "click",
        function () {

            // ====================================
            // ПРЯЧЕМ МЕНЮ ПОРАЖЕНИЯ
            // ====================================

            const defeatScreen =
                document.getElementById(
                    "defeatScreen"
                );

            if (defeatScreen) {

                defeatScreen.style.display =
                    "none";

            }


            // ====================================
            // СБРАСЫВАЕМ РЕЖИМЫ
            // ====================================

            currentScreen =
                "hangar";

            villageBuildMode =
                false;

            playerSwitchMode =
                false;

            allyPlacementMode =
                false;

            selectedBuildObject =
                null;

            selectedAllyTank =
                null;


            // ====================================
            // ПРЯЧЕМ ПАНЕЛЬ ПЕРЕСАДКИ
            // ====================================

            const switchPanel =
                document.getElementById(
                    "tankSwitchPanel"
                );

            if (switchPanel) {

                switchPanel.style.display =
                    "none";

            }


            // ====================================
            // ПРЯЧЕМ СТРОИТЕЛЬСТВО
            // ====================================

            if (constructionPanel) {

                constructionPanel.style.display =
                    "none";

            }


            // ====================================
            // ПРЯЧЕМ ПАНЕЛЬ СОЮЗНИКОВ
            // ====================================

            if (allyPanel) {

                allyPanel.style.display =
                    "none";

            }


            // ====================================
            // ПРЯЧЕМ ИНФОРМАЦИОННУЮ ПАНЕЛЬ БОЯ
            // ====================================

            if (battleInfoPanel) {

                battleInfoPanel.style.display =
                    "none";

            }


            // ====================================
            // СБРАСЫВАЕМ БОЕВЫЕ ОБЪЕКТЫ
            // ====================================

            enemyTanks = [];

            allyTanks = [];

            shells = [];

            explosions = [];

            smokeParticles = [];

            trackMarks = [];

            switchableAllies = [];


            // ====================================
            // СБРАСЫВАЕМ СОСТОЯНИЕ ВОЛН
            // ====================================

            currentBattlePhase =
                0;

            currentBattleWave =
                -1;

            battleWaveState =
                "idle";

            battleWaveTimer =
                0;


            // ====================================
            // СБРАСЫВАЕМ КАМЕРУ
            // ====================================

            camera.x =
                MAP_WIDTH / 2;

            camera.y =
                MAP_HEIGHT / 2;

            camera.zoom =
                1;


            // ====================================
            // СБРАСЫВАЕМ КЛАВИШИ
            // ====================================

            keys["KeyW"] = false;
            keys["KeyS"] = false;
            keys["KeyA"] = false;
            keys["KeyD"] = false;


            // ====================================
            // ОБНОВЛЯЕМ АНГАР
            // ====================================

            updateHangarUI();

        }
    );

function startPlayerTankSwitch() {

    updateSwitchableAllies();

    if (
        switchableAllies.length === 0
    ) {

        console.log(
            "Живых союзников не осталось — ПОРАЖЕНИЕ"
        );

        showDefeatScreen();

        return;
    }
    playerSwitchMode = true;

    selectedSwitchAllyIndex = 0;

    updateTankSwitchUI();

    const panel =
        document.getElementById(
            "tankSwitchPanel"
        );

    if (panel) {

        panel.style.display =
            "block";

    }

    updateSwitchCamera();
}

function updateTankSwitchUI() {

    updateSwitchableAllies();

    if (
        switchableAllies.length === 0
    ) {

        return;
    }

    if (
        selectedSwitchAllyIndex >=
        switchableAllies.length
    ) {

        selectedSwitchAllyIndex = 0;

    }

    const ally =
        switchableAllies[
        selectedSwitchAllyIndex
        ];

    const nameElement =
        document.getElementById(
            "tankSwitchName"
        );

    const hpElement =
        document.getElementById(
            "tankSwitchHp"
        );

    if (nameElement) {

        nameElement.textContent =
            ally.battleData?.name ||
            ally.name ||
            "СОЮЗНЫЙ ТАНК";

    }

    if (hpElement) {

        const hpPercent =
            Math.round(
                (
                    ally.hp /
                    ally.maxHp
                ) * 100
            );

        hpElement.textContent =
            `HP: ${hpPercent}%`;

    }

    updateSwitchCamera();
}

document
    .getElementById("tankSwitchLeft")
    .addEventListener(
        "click",
        function () {

            updateSwitchableAllies();

            if (
                switchableAllies.length === 0
            )
                return;

            selectedSwitchAllyIndex--;

            if (
                selectedSwitchAllyIndex < 0
            ) {

                selectedSwitchAllyIndex =
                    switchableAllies.length - 1;

            }

            updateTankSwitchUI();

        }
    );

document
    .getElementById("tankSwitchRight")
    .addEventListener(
        "click",
        function () {

            updateSwitchableAllies();

            if (
                switchableAllies.length === 0
            )
                return;

            selectedSwitchAllyIndex++;

            if (
                selectedSwitchAllyIndex >=
                switchableAllies.length
            ) {

                selectedSwitchAllyIndex = 0;

            }

            updateTankSwitchUI();

        }
    );

document
    .getElementById("takeControlButton")
    .addEventListener(
        "click",
        function () {

            updateSwitchableAllies();

            if (
                switchableAllies.length === 0
            )
                return;

            const selectedAlly =
                switchableAllies[
                selectedSwitchAllyIndex
                ];

            if (
                !selectedAlly ||
                selectedAlly.destroyed ||
                selectedAlly.hp <= 0
            ) {

                return;

            }

            // ====================================
            // СТАРЫЙ ТАНК БОЛЬШЕ НЕ УПРАВЛЯЕМЫЙ
            // ====================================

            if (playerTank) {

                playerTank.isPlayerControlled =
                    false;

                playerTank.speed = 0;

            }

            // ====================================
            // НОВЫЙ ТАНК — ИГРОК
            // ====================================

            selectedAlly.isPlayerControlled =
                true;

            selectedAlly.aiTarget = null;

            selectedAlly.aiEngaged = false;

            selectedAlly.speed = 0;

            playerTank =
                selectedAlly;

            camera.zoom = 1;
            // ====================================
            // СБРАСЫВАЕМ РЕЖИМ ПЕРЕСАДКИ
            // ====================================

            playerSwitchMode = false;

            // ====================================
            // ПРЯЧЕМ ПАНЕЛЬ
            // ====================================

            const panel =
                document.getElementById(
                    "tankSwitchPanel"
                );

            if (panel) {

                panel.style.display =
                    "none";

            }

            // ====================================
            // КАМЕРА НА НОВОМ ИГРОКЕ
            // ====================================

            camera.x =
                playerTank.x;

            camera.y =
                playerTank.y;

            // ====================================
            // СБРАСЫВАЕМ ЗАЖАТЫЕ КЛАВИШИ
            // ====================================

            keys["KeyW"] = false;
            keys["KeyS"] = false;
            keys["KeyA"] = false;
            keys["KeyD"] = false;

            console.log(
                "Игрок пересел в союзный танк"
            );

        }
    );

function getWaveEnemySpawnPosition(
    index,
    total
) {

    // ====================================
    // НАСТРОЙКИ СПАВНА
    // ====================================

    const MIN_DISTANCE = 1500;
    const MAX_DISTANCE = 2000;

    const MAP_MARGIN = 120;

    // Минимальное расстояние между врагами
    const MIN_ENEMY_DISTANCE = 180;

    // ====================================
    // ПРОВЕРКА ТОЧКИ
    // ====================================

    function isValidSpawnPoint(x, y, checkVillageDistance = true) {

        // --------------------------------
        // ГРАНИЦЫ КАРТЫ
        // --------------------------------

        if (
            x < MAP_MARGIN ||
            x > MAP_WIDTH - MAP_MARGIN ||
            y < MAP_MARGIN ||
            y > MAP_HEIGHT - MAP_MARGIN
        ) {
            return false;
        }


        // --------------------------------
        // НЕ В ДОМАХ
        // --------------------------------

        if (
            houseCollision(
                x,
                y,
                55
            )
        ) {
            return false;
        }


        // --------------------------------
        // НЕ В ДРУГОМ ВРАГЕ
        // --------------------------------

        for (
            const enemy of enemyTanks
        ) {

            if (
                !enemy ||
                enemy.destroyed ||
                enemy.hp <= 0
            ) {
                continue;
            }

            const dx =
                x - enemy.x;

            const dy =
                y - enemy.y;

            const distance =
                Math.hypot(
                    dx,
                    dy
                );

            if (
                distance <
                MIN_ENEMY_DISTANCE
            ) {
                return false;
            }
        }


        // --------------------------------
        // ПРОВЕРЯЕМ ДИСТАНЦИЮ ДО ДЕРЕВНИ
        // --------------------------------

        if (checkVillageDistance) {

            const dx =
                x - battleVillageX;

            const dy =
                y - battleVillageY;

            const distance =
                Math.hypot(
                    dx,
                    dy
                );

            if (
                distance < MIN_DISTANCE ||
                distance > MAX_DISTANCE
            ) {
                return false;
            }
        }


        return true;
    }


    // ====================================
    // ОСНОВНОЙ ПОИСК
    // ====================================

    const baseAngle =
        (
            index / total
        ) *
        Math.PI * 2;


    // Сначала пытаемся найти точку
    // возле своего сектора

    for (
        let attempt = 0;
        attempt < 300;
        attempt++
    ) {

        const angle =
            baseAngle +
            (
                Math.random() - 0.5
            ) *
            Math.PI * 0.9;


        const distance =
            MIN_DISTANCE +
            Math.random() *
            (
                MAX_DISTANCE -
                MIN_DISTANCE
            );


        const x =
            battleVillageX +
            Math.cos(angle) *
            distance;

        const y =
            battleVillageY +
            Math.sin(angle) *
            distance;


        if (
            isValidSpawnPoint(
                x,
                y,
                true
            )
        ) {

            return {
                x: x,
                y: y
            };

        }

    }


    // ====================================
    // ВТОРОЙ ПОИСК
    // ====================================
    // Если из-за угла карты нормальная
    // окружность стала слишком маленькой,
    // проверяем ВСЮ окружность более
    // тщательно.
    // ====================================

    for (
        let radius = MIN_DISTANCE;
        radius <= MAX_DISTANCE;
        radius += 50
    ) {

        for (
            let i = 0;
            i < 360;
            i++
        ) {

            const angle =
                i *
                Math.PI /
                180;


            const x =
                battleVillageX +
                Math.cos(angle) *
                radius;

            const y =
                battleVillageY +
                Math.sin(angle) *
                radius;


            if (
                isValidSpawnPoint(
                    x,
                    y,
                    true
                )
            ) {

                return {
                    x: x,
                    y: y
                };

            }

        }

    }


    // ====================================
    // ТРЕТИЙ ПОИСК
    // ====================================
    // Если возле деревни уже слишком мало
    // свободного места, главное —
    // НЕ ПОСТАВИТЬ ТАНК В ДРУГОГО ТАНКА.
    //
    // Поэтому теперь разрешаем точку
    // дальше/ближе от деревни, но всё ещё
    // обязательно соблюдаем дистанцию
    // между врагами.
    // ====================================

    for (
        let attempt = 0;
        attempt < 1000;
        attempt++
    ) {

        const x =
            MAP_MARGIN +
            Math.random() *
            (
                MAP_WIDTH -
                MAP_MARGIN * 2
            );

        const y =
            MAP_MARGIN +
            Math.random() *
            (
                MAP_HEIGHT -
                MAP_MARGIN * 2
            );


        if (
            isValidSpawnPoint(
                x,
                y,
                false
            )
        ) {

            return {
                x: x,
                y: y
            };

        }

    }


    // ====================================
    // КРАЙНИЙ ВАРИАНТ
    // ====================================
    // Даже если вся карта забита,
    // ищем точку максимально далеко
    // от остальных врагов.
    // ====================================

    let bestPoint = null;
    let bestDistance = 0;


    for (
        let i = 0;
        i < 360;
        i++
    ) {

        const angle =
            i *
            Math.PI /
            180;


        const radius =
            Math.min(
                MAX_DISTANCE,
                Math.max(
                    MIN_DISTANCE,
                    1750
                )
            );


        const x =
            battleVillageX +
            Math.cos(angle) *
            radius;

        const y =
            battleVillageY +
            Math.sin(angle) *
            radius;


        if (
            x < MAP_MARGIN ||
            x > MAP_WIDTH - MAP_MARGIN ||
            y < MAP_MARGIN ||
            y > MAP_HEIGHT - MAP_MARGIN
        ) {
            continue;
        }


        if (
            houseCollision(
                x,
                y,
                55
            )
        ) {
            continue;
        }


        let closestEnemyDistance =
            Infinity;


        for (
            const enemy of enemyTanks
        ) {

            if (
                !enemy ||
                enemy.destroyed ||
                enemy.hp <= 0
            ) {
                continue;
            }


            const distance =
                Math.hypot(
                    x - enemy.x,
                    y - enemy.y
                );


            closestEnemyDistance =
                Math.min(
                    closestEnemyDistance,
                    distance
                );

        }


        if (
            closestEnemyDistance >
            bestDistance
        ) {

            bestDistance =
                closestEnemyDistance;

            bestPoint = {
                x: x,
                y: y
            };

        }

    }


    // ====================================
    // ВОЗВРАЩАЕМ ЛУЧШУЮ НАЙДЕННУЮ ТОЧКУ
    // ====================================

    if (bestPoint) {

        return bestPoint;

    }


    // ====================================
    // ЭТОГО В НОРМАЛЬНОМ БОЮ БЫТЬ НЕ ДОЛЖНО
    // ====================================

    return {
        x: MAP_WIDTH / 2,
        y: MAP_HEIGHT / 2
    };

}

function spawnBattleWave(
    phaseIndex,
    waveIndex
) {

    const wave =
        BATTLE_PHASES[
        phaseIndex
        ][
        waveIndex
        ];

    const total =
        wave.level1 +
        wave.level2;

    document.getElementById(
        "battlePhaseValue"
    ).textContent =
        `${phaseIndex + 1} / ${BATTLE_PHASES.length}`;

    document.getElementById(
        "battleWaveValue"
    ).textContent =
        `${waveIndex + 1} / ${BATTLE_PHASES[phaseIndex].length
        }`;

    document.getElementById(
        "battleEnemiesValue"
    ).textContent =
        total;

    let spawnIndex = 0;

    // ====================================
    // ТАНКИ I УРОВНЯ
    // ====================================

    for (
        let i = 0;
        i < wave.level1;
        i++
    ) {

        const enemy =
            createWaveEnemyTank(1);

        const spawn =
            getWaveEnemySpawnPosition(
                spawnIndex,
                total
            );

        enemy.x =
            spawn.x;

        enemy.y =
            spawn.y;

        enemy.aiEngaged =
            true;

        enemyTanks.push(
            enemy
        );

        spawnIndex++;
    }

    // ====================================
    // ТАНКИ II УРОВНЯ
    // ====================================

    for (
        let i = 0;
        i < wave.level2;
        i++
    ) {

        const enemy =
            createWaveEnemyTank(2);

        const spawn =
            getWaveEnemySpawnPosition(
                spawnIndex,
                total
            );

        enemy.x =
            spawn.x;

        enemy.y =
            spawn.y;

        enemy.aiEngaged =
            true;

        enemyTanks.push(
            enemy
        );

        spawnIndex++;
    }

    console.log(
        "ВОЛНА ЗАПУЩЕНА:",
        phaseIndex + 1,
        waveIndex + 1,
        "I:",
        wave.level1,
        "II:",
        wave.level2
    );
}

function startNextBattleWave() {

    currentBattleWave++;

    // ====================================
    // ЕСЛИ В ФАЗЕ ЕЩЁ ЕСТЬ ВОЛНЫ
    // ====================================

    if (
        currentBattleWave <
        BATTLE_PHASES[
            currentBattlePhase
        ].length
    ) {

        spawnBattleWave(
            currentBattlePhase,
            currentBattleWave
        );

        battleWaveState =
            "active";

        return;
    }

    // ====================================
    // ВСЕ 3 ВОЛНЫ ФАЗЫ ЗАКОНЧЕНЫ
    // ====================================

    completeBattlePhase();
}

function completeBattlePhase() {

    console.log(
        "ФАЗА ЗАВЕРШЕНА:",
        currentBattlePhase + 1
    );

    // ====================================
    // ВОССТАНАВЛИВАЕМ HP ИГРОКА
    // ====================================

    if (
        playerTank &&
        !playerTank.destroyed
    ) {

        playerTank.hp =
            playerTank.maxHp;
    }

    // ====================================
    // ВОССТАНАВЛИВАЕМ HP СОЮЗНИКОВ
    // ====================================

    for (
        const ally of allyTanks
    ) {

        if (
            ally &&
            !ally.destroyed
        ) {

            ally.hp =
                ally.maxHp;
        }
    }

    // ====================================
    // ПОСЛЕДНЯЯ ФАЗА
    // ====================================

    if (
        currentBattlePhase >=
        BATTLE_PHASES.length - 1
    ) {

        battleWaveState =
            "completed";

        console.log(
            "ВСЕ ФАЗЫ ПРОЙДЕНЫ!"
        );

        return;
    }

    // ====================================
    // ПЕРЕХОД К СЛЕДУЮЩЕЙ ФАЗЕ
    // ====================================

    currentBattlePhase++;

    currentBattleWave = -1;

    battleWaveTimer = 3000;

    battleWaveState =
        "phaseDelay";
}

function updateBattleWaves(
    deltaTime
) {

    if (
        battleWaveState ===
        "completed"
    ) {

        return;
    }

    // ====================================
    // ЖДЁМ ПЕРЕД СЛЕДУЮЩЕЙ ВОЛНОЙ
    // ====================================

    if (
        battleWaveState ===
        "waveDelay"
    ) {

        battleWaveTimer -=
            deltaTime;

        if (
            battleWaveTimer <= 0
        ) {

            startNextBattleWave();
        }

        return;
    }

    // ====================================
    // ЖДЁМ ПЕРЕД СЛЕДУЮЩЕЙ ФАЗОЙ
    // ====================================

    if (
        battleWaveState ===
        "phaseDelay"
    ) {

        battleWaveTimer -=
            deltaTime;

        if (
            battleWaveTimer <= 0
        ) {

            startNextBattleWave();
        }

        return;
    }

    // ====================================
    // ТЕКУЩАЯ ВОЛНА
    // ====================================

    if (
        battleWaveState !==
        "active"
    ) {

        return;
    }

    // ====================================
    // ПРОВЕРЯЕМ ЖИВЫХ ВРАГОВ
    // ====================================

    const aliveEnemies =
        enemyTanks.some(
            enemy =>
                enemy &&
                !enemy.destroyed &&
                enemy.hp > 0
        );

    if (
        aliveEnemies
    ) {

        return;
    }

    // ====================================
    // ВОЛНА ПОЛНОСТЬЮ УНИЧТОЖЕНА
    // ====================================

    const pointsElement =
        document.getElementById(
            "allyPoints"
        );

    if (pointsElement) {

        let currentPoints =
            parseInt(
                pointsElement.textContent
            ) || 0;

        currentPoints += 1;

        pointsElement.textContent =
            currentPoints;

        localStorage.setItem(
            "allyPoints",
            currentPoints
        );

        console.log(
            "ВОЛНА ПРОЙДЕНА — +1 ОЧКО ПОДКРЕПЛЕНИЯ",
            "Всего:",
            currentPoints
        );
    }

    // Если это была последняя волна
    // текущей фазы
    if (
        currentBattleWave >=
        BATTLE_PHASES[
            currentBattlePhase
        ].length - 1
    ) {

        battleWaveState =
            "phaseDelay";

        battleWaveTimer =
            3000;

        completeBattlePhase();

        return;
    }

    // ====================================
    // ЕСТЬ ЕЩЁ ВОЛНЫ
    // ====================================

    battleWaveState =
        "waveDelay";

    battleWaveTimer =
        2000;
}

buildHedgehogButton.addEventListener(
    "click",
    function () {

        if (
            !villageBuildMode
        )
            return;

        if (
            hedgehogsToBuild <= 0
        )
            return;

        // ========================================
        // ОТКЛЮЧАЕМ СОЮЗНИКА
        // ========================================

        selectedAllyTank = null;
        allyPlacementMode = false;

        // ========================================
        // ВЫБИРАЕМ ЕЖА
        // ========================================

        selectedBuildObject =
            "hedgehog";

        updateConstructionUI();
    }
);

buildHouseButton.addEventListener(
    "click",
    function () {

        if (!villageBuildMode)
            return;

        if (housesToBuild <= 0)
            return;

        // ========================================
        // ОТКЛЮЧАЕМ СОЮЗНИКА
        // ========================================

        selectedAllyTank = null;
        allyPlacementMode = false;

        // ========================================
        // ВЫБИРАЕМ ДОМ
        // ========================================

        selectedBuildObject =
            "house";

        updateConstructionUI();
    }
);

function battleScreenToWorld(
    screenX,
    screenY
) {

    const rect =
        battleCanvas.getBoundingClientRect();


    const canvasX =
        screenX -
        rect.left;


    const canvasY =
        screenY -
        rect.top;


    const viewport =
        getBattleViewport();

    const worldX =
        camera.x +
        (
            canvasX -
            viewport.width / 2
        ) /
        camera.zoom;

    const worldY =
        camera.y +
        (
            canvasY -
            viewport.height / 2
        ) /
        camera.zoom;

    return {
        x: worldX,
        y: worldY
    };

}

function createWreckSmoke(tank) {

    if (!tank)
        return;

    // ========================================
    // БОЛЬШОЙ ВЫБРОС ДЫМА ПРИ ВЗРЫВЕ
    // ========================================

    for (let i = 0; i < 40; i++) {

        const angle =
            Math.random() *
            Math.PI * 2;

        const speed =
            40 +
            Math.random() * 100;

        wreckSmoke.push({

            x:
                tank.x +
                (Math.random() - 0.5) * 20,

            y:
                tank.y +
                (Math.random() - 0.5) * 20,

            vx:
                Math.cos(angle) * speed,

            vy:
                Math.sin(angle) * speed - 15,

            frame:
                Math.floor(
                    Math.random() *
                    smokeImages.length
                ),

            size:
                25 +
                Math.random() * 15,

            maxSize:
                90 +
                Math.random() * 50,

            alpha:
                0.85 +
                Math.random() * 0.15,

            life: 0,

            maxLife:
                1800 +
                Math.random() * 1400
        });
    }
}

function updateSwitchCamera() {

    if (!playerSwitchMode)
        return;

    const ally =
        switchableAllies[
        selectedSwitchAllyIndex
        ];

    if (!ally)
        return;


    // ====================================
    // РАЗМЕР ОБЛАСТИ, КОТОРУЮ ВИДИТ КАМЕРА
    // ====================================

    const viewport =
        getBattleViewport();

    const viewWidth =
        viewport.width /
        camera.zoom;

    const viewHeight =
        viewport.height /
        camera.zoom;


    // ====================================
    // ПОЛОВИНА ОБЛАСТИ ВИДИМОСТИ
    // ====================================

    const halfWidth =
        viewWidth / 2;

    const halfHeight =
        viewHeight / 2;


    // ====================================
    // КАМЕРА СМОТРИТ НА СОЮЗНИКА
    // ====================================

    camera.x =
        ally.x;

    camera.y =
        ally.y;


    // ====================================
    // НЕ ВЫХОДИМ ЗА ГРАНИЦЫ КАРТЫ
    // ====================================

    camera.x =
        Math.max(
            halfWidth,
            Math.min(
                MAP_WIDTH - halfWidth,
                camera.x
            )
        );

    camera.y =
        Math.max(
            halfHeight,
            Math.min(
                MAP_HEIGHT - halfHeight,
                camera.y
            )
        );

}

function generateMapNature() {

    mapTrees.length = 0;


    // ========================================
    // КАРТА 1 — ЛЕС
    // ========================================

    if (currentBattleMap.id === "map1") {

        // Пока маска дороги не готова,
        // не создаём деревья
        if (!map1RoadMaskData) {

            if (
                !buildMap1RoadMask()
            ) {
                return;
            }

        }

        for (let i = 0; i < 120; i++) {

            let placed = false;

            // Несколько попыток найти свободное место
            for (let attempt = 0; attempt < 150; attempt++) {

                const x =
                    100 +
                    Math.random() * (MAP_WIDTH - 200);

                const y =
                    100 +
                    Math.random() * (MAP_HEIGHT - 200);

                const image =
                    Math.random() < 0.95
                        ? treeImage
                        : pineImage;

                const scale =
                    0.8 + Math.random() * 0.4;

                // Радиус свободной зоны вокруг дерева
                const radius = 110 * scale;

                // Если дерево попадает на дорогу —
                // пробуем другую позицию
                if (
                    isRoadArea(
                        x,
                        y,
                        radius
                    )
                ) {
                    continue;
                }

                mapTrees.push({

                    x: x,
                    y: y,

                    image: image,

                    scale: scale

                });

                placed = true;

                break;

            }

        }

    }


    // ========================================
    // КАРТА 2
    // ========================================

    if (currentBattleMap.id === "map2") {

        if (!map2RoadMaskData) {
            if (!buildMap2RoadMask()) {
                return;
            }
        }

        for (let i = 0; i < 80; i++) {

            let placed = false;

            for (let attempt = 0; attempt < 150; attempt++) {

                const x = 100 + Math.random() * (MAP_WIDTH - 200);
                const y = 100 + Math.random() * (MAP_HEIGHT - 200);

                const image = Math.random() < 0.35 ? treeImage : pineImage;
                const scale = 0.8 + Math.random() * 0.4;
                const radius = 110 * scale;

                if (isMap2RoadArea(x, y, radius)) {
                    continue;
                }

                mapTrees.push({
                    x: x,
                    y: y,
                    image: image,
                    scale: scale
                });

                placed = true;
                break;
            }
        }
    }


    // ========================================
    // КАРТА 3 — ХВОЙНЫЙ ЛЕС
    // ========================================

    if (currentBattleMap.id === "map3") {

        if (!map3RoadMaskData) {
            if (!buildMap3RoadMask()) {
                return;
            }
        }

        for (let i = 0; i < 150; i++) {

            for (let attempt = 0; attempt < 150; attempt++) {

                const x = 100 + Math.random() * (MAP_WIDTH - 200);
                const y = 100 + Math.random() * (MAP_HEIGHT - 200);

                const scale = 0.8 + Math.random() * 0.4;
                const radius = 110 * scale;

                if (isMap3RoadArea(x, y, radius)) {
                    continue;
                }

                mapTrees.push({
                    x: x,
                    y: y,
                    image: pineImage,
                    scale: scale
                });

                break;
            }
        }
    }


    // ========================================
    // КАРТА 4 — ПУСТЫНЯ
    // ========================================

    if (currentBattleMap.id === "map4") {

        if (!map4RoadMaskData) {
            if (!buildMap4RoadMask()) {
                return;
            }
        }

        for (let i = 0; i < 40; i++) {

            for (let attempt = 0; attempt < 150; attempt++) {

                const x = 100 + Math.random() * (MAP_WIDTH - 200);
                const y = 100 + Math.random() * (MAP_HEIGHT - 200);

                const scale = 0.8 + Math.random() * 0.6;
                const radius = 110 * scale;

                if (isMap4RoadArea(x, y, radius)) {
                    continue;
                }

                mapTrees.push({
                    x: x,
                    y: y,

                    image: cactusImages[
                        Math.floor(Math.random() * cactusImages.length)
                    ],

                    scale: scale
                });

                break;
            }
        }
    }

}

function getBattleTank(tankId) {

    return battleTanks.find(
        tank => tank.id === tankId
    );

}

function getPlayerUpgradeBonuses(tank) {

    if (!tank || !tank.installed) {
        return {
            gunMultiplier: 1,
            turretMultiplier: 1,
            engineMultiplier: 1,
            tracksMultiplier: 1
        };
    }

    // Каждый уровень выше I = +5%
    const gunBonus =
        1 + (tank.installed.gun - 1) * 0.05;

    const turretBonus =
        1 + (tank.installed.turret - 1) * 0.05;

    const engineBonus =
        1 + (tank.installed.engine - 1) * 0.05;

    const tracksBonus =
        1 + (tank.installed.tracks - 1) * 0.05;

    return {

        gunMultiplier:
            gunBonus,

        turretMultiplier:
            turretBonus,

        engineMultiplier:
            engineBonus,

        tracksMultiplier:
            tracksBonus

    };
}

function createPlayerTank(tank) {

    const battleData =
        getBattleTank(tank.id);

    // ========================================
    // ПРОКАЧКА ТАНКА ИГРОКА
    // ========================================

    const upgrade =
        getPlayerUpgradeBonuses(tank);

    playerCameraZoom =
        1 / upgrade.turretMultiplier;
    // ========================================
    // ЭФФЕКТИВНЫЕ ХАРАКТЕРИСТИКИ
    // ========================================

    const playerDamage =
        tank.damage *
        upgrade.gunMultiplier;

    const playerPenetration =
        battleData.penetration *
        upgrade.gunMultiplier;

    const playerShellSpeed =
        SHELL_SPEED *
        upgrade.gunMultiplier;

    const playerMaxSpeed =
        battleData.maxSpeed *
        upgrade.engineMultiplier;

    const playerHullTurnSpeed =
        battleData.hullTurnSpeed *
        upgrade.tracksMultiplier;

    const playerTurretTurnSpeed =
        battleData.turretTurnSpeed *
        upgrade.turretMultiplier;

    return {

        x: MAP_WIDTH / 2,
        y: MAP_HEIGHT - 250,

        destroyed: false,

        hull: {

            angle: 0,

            scale:
                battleData.scale

        },

        turret: {

            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.turretOffsetX,

            offsetY:
                battleData.turretOffsetY,

            pivotX:
                battleData.turretPivotX || 0,

            pivotY:
                battleData.turretPivotY || 0

        },

        gun: {

            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.gunOffsetX,

            offsetY:
                battleData.gunOffsetY

        },

        battleData: battleData,

        hp: tank.hp,

        maxHp: tank.hp,

        speed: 0,

        maxSpeed:
            playerMaxSpeed,

        reloadTime:
            battleData.reloadTime,

        reverseSpeed:
            playerMaxSpeed * 0.5,

        accelerationTime:
            battleData.accelerationTime,

        brakingTime:
            battleData.brakingTime,

        hullTurnSpeed:
            playerHullTurnSpeed,

        turretTurnSpeed:
            playerTurretTurnSpeed,

        turretAccelerationTime:
            battleData.turretAccelerationTime,

        turretBrakingTime:
            battleData.turretBrakingTime,

        trackSpacing:
            battleData.trackSpacing,

        trackWidth:
            battleData.trackWidth,

        smokeOffsetX:
            battleData.smokeOffsetX,

        smokeOffsetY:
            battleData.smokeOffsetY,


        turretAngularSpeed: 0,

        damage:
            playerDamage,

        penetration:
            playerPenetration,

        shellSpeed:
            playerShellSpeed
    };

}

function createEnemyTargetPoint() {

    return {
        x: battleVillageX,
        y: battleVillageY
    };
}

function createEnemyTank(tank) {

    const battleData =
        getBattleTank(tank.id);


    return {

        x: 0,
        y: 0,

        hull: {

            angle:
                Math.random() *
                Math.PI * 2,

            scale:
                battleData.scale

        },

        turret: {

            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.turretOffsetX,

            offsetY:
                battleData.turretOffsetY,
            pivotX:
                battleData.turretPivotX || 0,

            pivotY:
                battleData.turretPivotY || 0,
        },

        gun: {

            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.gunOffsetX,

            offsetY:
                battleData.gunOffsetY

        },

        battleData:
            battleData,

        hp:
            tank.hp,

        maxHp:
            tank.hp,

        speed: 0,

        maxSpeed:
            battleData.maxSpeed,

        reloadTime:
            battleData.reloadTime,

        reverseSpeed:
            battleData.maxSpeed * 0.5,

        accelerationTime:
            battleData.accelerationTime,

        brakingTime:
            battleData.brakingTime,

        hullTurnSpeed:
            battleData.hullTurnSpeed,

        turretTurnSpeed:
            battleData.turretTurnSpeed,

        turretAccelerationTime:
            battleData.turretAccelerationTime,

        turretBrakingTime:
            battleData.turretBrakingTime,

        trackSpacing:
            battleData.trackSpacing,

        trackWidth:
            battleData.trackWidth,

        smokeOffsetX:
            battleData.smokeOffsetX,

        smokeOffsetY:
            battleData.smokeOffsetY,

        turretAngularSpeed: 0,

        damage:
            tank.damage,

        penetration:
            battleData.penetration,

        level:
            tank.level,

        aiAvoidingHouse: false,

        aiAvoidAngle: 0,

        aiAvoidHouse: null,

        aiAvoidDirection: 0,

        aiAvoidPhase: "none",

        aiTargetPoint:
            createEnemyTargetPoint(),

        aiAvoidingTank: false,

        aiAvoidTankAngle: 0,

        aiAvoidTankTimer: 0,

        aiAvoidTank: null,

        aiAvoidTankDirection: 0,

        aiAvoidTankPhase: "none",

        aiEngaged: false,

        lastShotTime: 0,

        aiTarget: null,

        isEnemy: true

    };

}

function createAllyTank(tank) {

    const battleData =
        getBattleTank(tank.id);

    return {

        x: 0,
        y: 0,

        hull: {
            angle:
                Math.random() *
                Math.PI * 2,

            scale:
                battleData.scale
        },

        turret: {
            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.turretOffsetX,

            offsetY:
                battleData.turretOffsetY,

            pivotX:
                battleData.turretPivotX || 0,

            pivotY:
                battleData.turretPivotY || 0
        },

        gun: {
            angle: 0,

            scale:
                battleData.scale,

            offsetX:
                battleData.gunOffsetX,

            offsetY:
                battleData.gunOffsetY
        },

        battleData:
            battleData,

        hp:
            tank.hp,

        maxHp:
            tank.hp,

        speed: 0,

        maxSpeed:
            battleData.maxSpeed,

        reloadTime:
            battleData.reloadTime,

        reverseSpeed:
            battleData.maxSpeed * 0.5,

        shellSpeed:
            SHELL_SPEED,

        accelerationTime:
            battleData.accelerationTime,

        brakingTime:
            battleData.brakingTime,

        hullTurnSpeed:
            battleData.hullTurnSpeed,

        turretTurnSpeed:
            battleData.turretTurnSpeed,

        turretAccelerationTime:
            battleData.turretAccelerationTime,

        turretBrakingTime:
            battleData.turretBrakingTime,

        trackSpacing:
            battleData.trackSpacing,

        trackWidth:
            battleData.trackWidth,

        smokeOffsetX:
            battleData.smokeOffsetX,

        smokeOffsetY:
            battleData.smokeOffsetY,

        turretAngularSpeed: 0,

        damage:
            tank.damage,

        penetration:
            battleData.penetration,

        level:
            tank.level,

        destroyed: false,

        isAlly: true,
        isEnemy: false,
        isPlayerControlled: false,
        aiTarget: null,
        aiEngaged: false,
        aiAvoidingHouse: false,
        aiAvoidAngle: 0,
        aiAvoidHouse: null,
        aiAvoidDirection: 0,
        aiAvoidPhase: "none",
        aiAvoidingTank: false,
        aiAvoidTank: null,
        aiAvoidTankAngle: 0,
        aiAvoidTankTimer: 0,
        aiAvoidTankDirection: 0,
        aiAvoidTankPhase: "none",
        patrolPoints: [],
        patrolIndex: 0,
        patrolInitialized: false,
        lastShotTime: 0

    };
}

function updateAllyAI(
    ally,
    deltaTime
) {

    if (!ally)
        return;

    if (ally.destroyed)
        return;

    if (ally.isPlayerControlled)
        return;


    const dt =
        deltaTime / 1000;


    // ========================================
    // ИЩЕМ БЛИЖАЙШЕГО ЖИВОГО ВРАГА
    // ========================================

    let nearestEnemy = null;

    let nearestDistance =
        Infinity;


    for (
        const enemy of enemyTanks
    ) {

        if (!enemy)
            continue;

        if (enemy.destroyed)
            continue;


        const dx =
            enemy.x -
            ally.x;

        const dy =
            enemy.y -
            ally.y;


        const distance =
            Math.hypot(
                dx,
                dy
            );


        if (
            distance <
            nearestDistance
        ) {

            nearestDistance =
                distance;

            nearestEnemy =
                enemy;
        }
    }


    // ========================================
    // ДИСТАНЦИИ ОБНАРУЖЕНИЯ
    // ========================================

    const DETECT_DISTANCE =
        700;

    const LOSE_DISTANCE =
        800;

    const ATTACK_DISTANCE =
        180;


    // ========================================
    // НАЧИНАЕМ БОЙ
    // ========================================

    if (
        !ally.aiEngaged &&
        nearestEnemy &&
        nearestDistance <=
        DETECT_DISTANCE
    ) {

        ally.aiEngaged =
            true;

        ally.aiTarget =
            nearestEnemy;
    }


    // ========================================
    // ПРОВЕРЯЕМ ТЕКУЩУЮ ЦЕЛЬ
    // ========================================

    if (
        ally.aiEngaged
    ) {

        if (
            !ally.aiTarget ||
            ally.aiTarget.destroyed
        ) {

            ally.aiEngaged =
                false;

            ally.aiTarget =
                null;

            // После уничтожения цели
            // танк просто остаётся на месте.

            applyTankMovement(
                ally,
                0,
                deltaTime
            );

            return;
        }


        const target =
            ally.aiTarget;


        const dx =
            target.x -
            ally.x;

        const dy =
            target.y -
            ally.y;


        const distance =
            Math.hypot(
                dx,
                dy
            );


        // ====================================
        // ВРАГ СЛИШКОМ ДАЛЕКО
        // ====================================

        if (
            distance >
            LOSE_DISTANCE
        ) {

            ally.aiEngaged =
                false;

            ally.aiTarget =
                null;

            applyTankMovement(
                ally,
                0,
                deltaTime
            );

            return;
        }
    }


    // ========================================
    // ЕСЛИ ВРАГА НЕТ — СТОИМ
    // ========================================

    if (
        !ally.aiEngaged ||
        !ally.aiTarget
    ) {

        applyTankMovement(
            ally,
            0,
            deltaTime
        );

        return;
    }


    // ========================================
    // ТЕКУЩАЯ ЦЕЛЬ
    // ========================================

    const target =
        ally.aiTarget;


    const dx =
        target.x -
        ally.x;

    const dy =
        target.y -
        ally.y;


    const distance =
        Math.hypot(
            dx,
            dy
        );


    // ========================================
    // УГОЛ К ВРАГУ
    // ========================================

    const targetAngle =
        Math.atan2(
            dx,
            -dy
        );


    // ========================================
    // ЕСЛИ МЫ УЖЕ НА ДИСТАНЦИИ
    // ========================================

    if (
        distance <=
        ATTACK_DISTANCE
    ) {

        applyTankMovement(
            ally,
            0,
            deltaTime
        );

        return;
    }


    // ========================================
    // ОБЪЕЗД ДРУГОГО ТАНКА
    // ========================================

    if (
        !ally.aiAvoidingTank &&
        !ally.aiAvoidingHouse
    ) {

        const tankSensorDistance =
            180;

        const tankSensorAngle =
            0.7;


        let detectedTank =
            null;

        let closestDistance =
            Infinity;


        const allTanks = [
            playerTank,
            ...enemyTanks,
            ...allyTanks
        ];


        for (
            const other of allTanks
        ) {

            if (!other)
                continue;

            if (other === ally)
                continue;

            if (other === ally.aiTarget)
                continue;

            if (other.destroyed)
                continue;


            const otherDx =
                other.x -
                ally.x;

            const otherDy =
                other.y -
                ally.y;


            const otherDistance =
                Math.hypot(
                    otherDx,
                    otherDy
                );


            if (
                otherDistance >
                tankSensorDistance
            )
                continue;


            const angleToTank =
                Math.atan2(
                    otherDx,
                    -otherDy
                );


            let angleDifference =
                angleToTank -
                ally.hull.angle;


            while (
                angleDifference >
                Math.PI
            ) {

                angleDifference -=
                    Math.PI * 2;
            }


            while (
                angleDifference <
                -Math.PI
            ) {

                angleDifference +=
                    Math.PI * 2;
            }


            // Танков впереди учитываем,
            // а тех, кто сбоку/сзади — нет.

            if (
                Math.abs(
                    angleDifference
                ) >
                tankSensorAngle
            )
                continue;


            if (
                otherDistance <
                closestDistance
            ) {

                closestDistance =
                    otherDistance;

                detectedTank =
                    other;
            }
        }


        // ====================================
        // НАШЛИ ТАНК
        // ====================================

        if (
            detectedTank
        ) {

            const leftAngle =
                ally.hull.angle -
                Math.PI / 2;

            const rightAngle =
                ally.hull.angle +
                Math.PI / 2;


            const checkDistance =
                120;


            // =================================
            // ПРОВЕРЯЕМ ЛЕВО
            // =================================

            const leftX =
                ally.x +
                Math.sin(
                    leftAngle
                ) *
                checkDistance;

            const leftY =
                ally.y -
                Math.cos(
                    leftAngle
                ) *
                checkDistance;


            const leftBlocked =
                tankCollision(
                    leftX,
                    leftY,
                    ally
                );


            // =================================
            // ПРОВЕРЯЕМ ПРАВО
            // =================================

            const rightX =
                ally.x +
                Math.sin(
                    rightAngle
                ) *
                checkDistance;

            const rightY =
                ally.y -
                Math.cos(
                    rightAngle
                ) *
                checkDistance;


            const rightBlocked =
                tankCollision(
                    rightX,
                    rightY,
                    ally
                );


            // =================================
            // ВЫБИРАЕМ СТОРОНУ
            // =================================

            if (
                !leftBlocked &&
                rightBlocked
            ) {

                ally.aiAvoidTankDirection =
                    -1;
            }

            else if (
                leftBlocked &&
                !rightBlocked
            ) {

                ally.aiAvoidTankDirection =
                    1;
            }

            else {

                const leftDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                leftAngle -
                                targetAngle
                            ),
                            Math.cos(
                                leftAngle -
                                targetAngle
                            )
                        )
                    );


                const rightDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                rightAngle -
                                targetAngle
                            ),
                            Math.cos(
                                rightAngle -
                                targetAngle
                            )
                        )
                    );


                ally.aiAvoidTankDirection =
                    leftDifference <
                        rightDifference
                        ? -1
                        : 1;
            }


            // =================================
            // ЗАПОМИНАЕМ ТАНК
            // =================================

            ally.aiAvoidTank =
                detectedTank;


            ally.aiAvoidTankAngle =
                ally.hull.angle +
                ally.aiAvoidTankDirection *
                Math.PI / 2;


            ally.aiAvoidTankPhase =
                "turn";

            ally.aiAvoidingTank =
                true;
        }
    }


    // ========================================
    // ОБХОД ТАНКА
    // ========================================

    if (
        ally.aiAvoidingTank
    ) {

        // ====================================
        // ФАЗА 1 — ПОВОРОТ
        // ====================================

        if (
            ally.aiAvoidTankPhase ===
            "turn"
        ) {

            rotateTankTowards(
                ally,
                ally.aiAvoidTankAngle,
                deltaTime
            );


            let difference =
                ally.aiAvoidTankAngle -
                ally.hull.angle;


            while (
                difference >
                Math.PI
            ) {

                difference -=
                    Math.PI * 2;
            }


            while (
                difference <
                -Math.PI
            ) {

                difference +=
                    Math.PI * 2;
            }


            if (
                Math.abs(
                    difference
                ) <
                0.05
            ) {

                ally.hull.angle =
                    ally.aiAvoidTankAngle;

                ally.aiAvoidTankPhase =
                    "drive";
            }
        }


        // ====================================
        // ФАЗА 2 — ЕДЕМ В СТОРОНУ
        // ====================================

        else {

            ally.hull.angle =
                ally.aiAvoidTankAngle;


            applyTankMovement(
                ally,
                ally.maxSpeed,
                deltaTime
            );


            const nextX =
                ally.x +
                Math.sin(
                    ally.hull.angle
                ) *
                ally.speed *
                dt;


            const nextY =
                ally.y -
                Math.cos(
                    ally.hull.angle
                ) *
                ally.speed *
                dt;


            const collision =
                tankCollision(
                    nextX,
                    nextY,
                    ally
                );


            if (
                !collision
            ) {

                ally.x =
                    nextX;

                ally.y =
                    nextY;
            }

            else {

                ally.aiAvoidTankPhase =
                    "turn";

                ally.aiAvoidTankAngle +=
                    ally.aiAvoidTankDirection *
                    Math.PI / 2;

                applyTankMovement(
                    ally,
                    0,
                    deltaTime
                );
            }


            // =================================
            // ПРОВЕРЯЕМ, РАЗОШЛИСЬ ЛИ
            // =================================

            const other =
                ally.aiAvoidTank;


            if (
                !other ||
                other.destroyed
            ) {

                ally.aiAvoidingTank =
                    false;

                ally.aiAvoidTank =
                    null;

                ally.aiAvoidTankPhase =
                    "none";
            }

            else {

                const distanceToOther =
                    Math.hypot(
                        other.x -
                        ally.x,

                        other.y -
                        ally.y
                    );


                if (
                    distanceToOther >
                    180
                ) {

                    ally.aiAvoidingTank =
                        false;

                    ally.aiAvoidTank =
                        null;

                    ally.aiAvoidTankPhase =
                        "none";
                }
            }
        }


        // Пока объезжаем танк,
        // обычное движение не выполняем.

        return;
    }


    // ========================================
    // ОБЪЕЗД ДОМА
    // ========================================

    if (
        !ally.aiAvoidingHouse
    ) {

        const sensorDistance =
            120;


        const sensorX =
            ally.x +
            Math.sin(
                ally.hull.angle
            ) *
            sensorDistance;


        const sensorY =
            ally.y -
            Math.cos(
                ally.hull.angle
            ) *
            sensorDistance;


        let detectedHouse =
            null;


        // Проверяем точку прямо
        // перед танком.

        for (
            const house of mapHouses
        ) {

            if (!house)
                continue;


            if (
                houseCollision(
                    sensorX,
                    sensorY,
                    40
                )
            ) {

                detectedHouse =
                    house;

                break;
            }
        }


        // ====================================
        // НАШЛИ ДОМ
        // ====================================

        if (
            detectedHouse
        ) {

            const leftAngle =
                ally.hull.angle -
                Math.PI / 2;

            const rightAngle =
                ally.hull.angle +
                Math.PI / 2;


            const checkDistance =
                120;


            const leftX =
                ally.x +
                Math.sin(
                    leftAngle
                ) *
                checkDistance;


            const leftY =
                ally.y -
                Math.cos(
                    leftAngle
                ) *
                checkDistance;


            const rightX =
                ally.x +
                Math.sin(
                    rightAngle
                ) *
                checkDistance;


            const rightY =
                ally.y -
                Math.cos(
                    rightAngle
                ) *
                checkDistance;


            const leftBlocked =
                houseCollision(
                    leftX,
                    leftY,
                    40
                );


            const rightBlocked =
                houseCollision(
                    rightX,
                    rightY,
                    40
                );


            // =================================
            // ВЫБИРАЕМ СТОРОНУ
            // =================================

            if (
                !leftBlocked &&
                rightBlocked
            ) {

                ally.aiAvoidDirection =
                    -1;
            }

            else if (
                leftBlocked &&
                !rightBlocked
            ) {

                ally.aiAvoidDirection =
                    1;
            }

            else {

                const leftDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                leftAngle -
                                targetAngle
                            ),
                            Math.cos(
                                leftAngle -
                                targetAngle
                            )
                        )
                    );


                const rightDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                rightAngle -
                                targetAngle
                            ),
                            Math.cos(
                                rightAngle -
                                targetAngle
                            )
                        )
                    );


                ally.aiAvoidDirection =
                    leftDifference <
                        rightDifference
                        ? -1
                        : 1;
            }


            // =================================
            // ЗАПОМИНАЕМ ДОМ
            // =================================

            ally.aiAvoidHouse =
                detectedHouse;


            ally.aiAvoidAngle =
                ally.hull.angle +
                ally.aiAvoidDirection *
                Math.PI / 2;


            ally.aiAvoidPhase =
                "turn";

            ally.aiAvoidingHouse =
                true;
        }
    }


    // ========================================
    // ОБХОД ДОМА
    // ========================================

    if (
        ally.aiAvoidingHouse &&
        !ally.aiAvoidingTank
    ) {

        // ====================================
        // ФАЗА 1 — ПОВОРОТ НА 90°
        // ====================================

        if (
            ally.aiAvoidPhase ===
            "turn"
        ) {

            rotateTankTowards(
                ally,
                ally.aiAvoidAngle,
                deltaTime
            );


            let difference =
                ally.aiAvoidAngle -
                ally.hull.angle;


            while (
                difference >
                Math.PI
            ) {

                difference -=
                    Math.PI * 2;
            }


            while (
                difference <
                -Math.PI
            ) {

                difference +=
                    Math.PI * 2;
            }


            if (
                Math.abs(
                    difference
                ) <
                0.05
            ) {

                ally.hull.angle =
                    ally.aiAvoidAngle;

                ally.aiAvoidPhase =
                    "drive";
            }
        }


        // ====================================
        // ФАЗА 2 — ЕДЕМ ВДОЛЬ ДОМА
        // ====================================

        else {

            ally.hull.angle =
                ally.aiAvoidAngle;


            applyTankMovement(
                ally,
                ally.maxSpeed,
                deltaTime
            );


            const nextX =
                ally.x +
                Math.sin(
                    ally.hull.angle
                ) *
                ally.speed *
                dt;


            const nextY =
                ally.y -
                Math.cos(
                    ally.hull.angle
                ) *
                ally.speed *
                dt;


            const collision =
                houseCollision(
                    nextX,
                    nextY,
                    40
                );


            if (
                !collision
            ) {

                ally.x =
                    nextX;

                ally.y =
                    nextY;
            }

            else {

                ally.aiAvoidAngle +=
                    ally.aiAvoidDirection *
                    Math.PI / 2;

                ally.aiAvoidPhase =
                    "turn";

                applyTankMovement(
                    ally,
                    0,
                    deltaTime
                );
            }


            // =================================
            // ПРОВЕРЯЕМ,
            // ВЫШЛИ ЛИ ИЗ ЗОНЫ ДОМА
            // =================================

            const house =
                ally.aiAvoidHouse;


            if (
                house
            ) {

                const width =
                    140 *
                    house.scale;


                const height =
                    width *
                    (
                        house.image.height /
                        house.image.width
                    );


                const ZONE =
                    50;


                const left =
                    house.x -
                    width / 2 -
                    46 -
                    ZONE;


                const right =
                    house.x +
                    width / 2 +
                    46 +
                    ZONE;


                const top =
                    house.y -
                    height / 2 -
                    30 -
                    ZONE;


                const bottom =
                    house.y +
                    height / 2 +
                    30 +
                    ZONE;


                const nearHouse =
                    ally.x > left &&
                    ally.x < right &&
                    ally.y > top &&
                    ally.y < bottom;


                if (
                    !nearHouse
                ) {

                    ally.aiAvoidingHouse =
                        false;

                    ally.aiAvoidHouse =
                        null;

                    ally.aiAvoidPhase =
                        "none";
                }
            }
        }


        // Пока объезжаем дом —
        // обычное движение не выполняем.

        return;
    }


    // ========================================
    // ОБЫЧНОЕ ДВИЖЕНИЕ К ВРАГУ
    // ========================================

    rotateTankTowards(
        ally,
        targetAngle,
        deltaTime
    );


    applyTankMovement(
        ally,
        ally.maxSpeed,
        deltaTime
    );


    // ========================================
    // СЛЕДУЮЩАЯ ПОЗИЦИЯ
    // ========================================

    const nextX =
        ally.x +
        Math.sin(
            ally.hull.angle
        ) *
        ally.speed *
        dt;


    const nextY =
        ally.y -
        Math.cos(
            ally.hull.angle
        ) *
        ally.speed *
        dt;


    // ========================================
    // ФИНАЛЬНАЯ ПРОВЕРКА КОЛЛИЗИЙ
    // ========================================

    const tankHit =
        tankCollision(
            nextX,
            nextY,
            ally
        );


    const houseHit =
        houseCollision(
            nextX,
            nextY,
            40
        );


    if (
        !tankHit &&
        !houseHit
    ) {

        ally.x =
            nextX;

        ally.y =
            nextY;
    }

    else {

        applyTankMovement(
            ally,
            0,
            deltaTime
        );
    }

}

function updateAllyTurret(
    ally,
    deltaTime
) {

    if (!ally)
        return;

    if (ally.destroyed)
        return;

    if (ally.isPlayerControlled)
        return;

    const enemy =
        ally.aiTarget;

    if (
        !enemy ||
        enemy.destroyed
    ) {

        ally.aiTarget = null;

        return;
    }

    const dt =
        deltaTime / 1000;

    // ========================================
    // НАПРАВЛЕНИЕ НА ВРАГА
    // ========================================

    const dx =
        enemy.x -
        ally.x;

    const dy =
        enemy.y -
        ally.y;

    const worldAngle =
        Math.atan2(
            dx,
            -dy
        );

    // ========================================
    // УГОЛ БАШНИ
    // ========================================

    const targetAngle =
        worldAngle -
        ally.hull.angle;

    let angleDifference =
        targetAngle -
        ally.turret.angle;

    while (
        angleDifference >
        Math.PI
    ) {

        angleDifference -=
            Math.PI * 2;
    }

    while (
        angleDifference <
        -Math.PI
    ) {

        angleDifference +=
            Math.PI * 2;
    }

    // ========================================
    // УСКОРЕНИЕ БАШНИ
    // ========================================

    const angularAcceleration =
        ally.turretTurnSpeed /
        ally.turretAccelerationTime;

    if (
        Math.abs(angleDifference) >
        0.02
    ) {

        const direction =
            Math.sign(
                angleDifference
            );

        ally.turretAngularSpeed +=
            direction *
            angularAcceleration *
            dt;
    }

    // ========================================
    // ОГРАНИЧЕНИЕ
    // ========================================

    ally.turretAngularSpeed =
        Math.max(
            -ally.turretTurnSpeed,

            Math.min(
                ally.turretTurnSpeed,
                ally.turretAngularSpeed
            )
        );

    // ========================================
    // ТОРМОЖЕНИЕ
    // ========================================

    const slowDownDistance =
        0.25;

    if (
        Math.abs(angleDifference) <
        slowDownDistance
    ) {

        const desiredSpeed =
            ally.turretTurnSpeed *
            (
                Math.abs(angleDifference) /
                slowDownDistance
            );

        if (
            Math.abs(
                ally.turretAngularSpeed
            ) >
            desiredSpeed
        ) {

            ally.turretAngularSpeed *=
                0.85;
        }
    }

    // ========================================
    // НАВЕЛИСЬ
    // ========================================

    if (
        Math.abs(angleDifference) <
        0.02
    ) {

        ally.turret.angle =
            targetAngle;

        ally.turretAngularSpeed =
            0;

        return;
    }

    // ========================================
    // ДВИЖЕНИЕ БАШНИ
    // ========================================

    ally.turret.angle +=
        ally.turretAngularSpeed *
        dt;
}

function shootAllyTank(
    ally
) {

    if (!ally)
        return;

    if (ally.destroyed)
        return;

    if (ally.isPlayerControlled)
        return;

    const enemy =
        ally.aiTarget;

    if (
        !enemy ||
        enemy.destroyed
    )
        return;

    const now =
        performance.now();

    // Используем ту же перезарядку,
    // что и общая система игры

    if (
        now -
        ally.lastShotTime <
        ally.reloadTime
    ) {

        return;
    }
    // ========================================
    // УГОЛ ПУШКИ В МИРЕ
    // ========================================

    const gunAngle =
        ally.hull.angle +
        ally.turret.angle +
        ally.gun.angle;

    // ========================================
    // УГОЛ НА ВРАГА
    // ========================================

    const dx =
        enemy.x -
        ally.x;

    const dy =
        enemy.y -
        ally.y;

    const targetAngle =
        Math.atan2(
            dx,
            -dy
        );

    let difference =
        targetAngle -
        gunAngle;

    while (
        difference >
        Math.PI
    ) {

        difference -=
            Math.PI * 2;
    }

    while (
        difference <
        -Math.PI
    ) {

        difference +=
            Math.PI * 2;
    }

    // ========================================
    // ПУШКА ДОЛЖНА БЫТЬ НАВЕДЕНА
    // ========================================

    if (
        Math.abs(difference) >
        0.08
    ) {

        return;
    }

    // ========================================
    // ТОЧКА ВЫЛЕТА СНАРЯДА
    // ========================================

    const barrelLength =
        60;

    const shellX =
        ally.x +
        Math.sin(gunAngle) *
        barrelLength;

    const shellY =
        ally.y -
        Math.cos(gunAngle) *
        barrelLength;

    // ========================================
    // СОЗДАЁМ СНАРЯД
    // ========================================

    shells.push({

        x: shellX,
        y: shellY,

        angle: gunAngle,

        speed:
            ally.shellSpeed,

        life: 0,

        owner: ally
    });

    ally.lastShotTime =
        now;
}

function placeAllyTank(x, y) {

    if (
        !allyPlacementMode ||
        !selectedAllyTank
    )
        return;


    // ========================================
    // СТОИМОСТЬ СОЮЗНИКА
    // ========================================

    let points = 1;

    if (
        selectedAllyTank.level.includes("II")
    )
        points = 2;

    if (
        selectedAllyTank.level.includes("III")
    )
        points = 3;

    if (
        selectedAllyTank.level.includes("IV")
    )
        points = 4;


    // ========================================
    // ОЧКИ ПОДКРЕПЛЕНИЯ
    // ========================================

    const pointsElement =
        document.getElementById(
            "allyPoints"
        );

    if (!pointsElement)
        return;


    let currentPoints =
        parseInt(
            pointsElement.textContent
        ) || 0;


    if (
        currentPoints < points
    ) {

        console.log(
            "Недостаточно очков подкрепления"
        );

        return;
    }


    // ========================================
    // СОЗДАЁМ СОЮЗНИКА
    // ========================================

    const ally =
        createAllyTank(
            selectedAllyTank
        );


    if (!ally)
        return;


    ally.x = x;
    ally.y = y;

    ally.hull.angle = allyGhostAngle;

    // ========================================
    // ТРЕУГОЛЬНИК ПАТРУЛИРОВАНИЯ
    // ========================================

    const patrolSize = 300;

    // Направление от первой точки
    const patrolAngle =
        ally.hull.angle;

    // Вектор первой стороны
    const dx1 =
        Math.sin(patrolAngle) * patrolSize;

    const dy1 =
        -Math.cos(patrolAngle) * patrolSize;

    // Вектор второй стороны
    const angle2 =
        patrolAngle + Math.PI / 3;

    const dx2 =
        Math.sin(angle2) * patrolSize;

    const dy2 =
        -Math.cos(angle2) * patrolSize;

    // Первая точка — место установки
    const point1 = {
        x: ally.x,
        y: ally.y
    };

    // Вторая точка
    const point2 = {
        x: ally.x + dx1,
        y: ally.y + dy1
    };

    // Третья точка
    const point3 = {
        x: ally.x + dx2,
        y: ally.y + dy2
    };

    ally.patrolPoints = [
        point1,
        point2,
        point3
    ];

    ally.patrolIndex = 0;
    ally.patrolInitialized = true;


    // ========================================
    // ДОБАВЛЯЕМ НА КАРТУ
    // ========================================

    allyTanks.push(
        ally
    );


    // ========================================
    // СПИСЫВАЕМ ОЧКИ
    // ========================================

    currentPoints -= points;

    pointsElement.textContent =
        currentPoints;

    localStorage.setItem(
        "allyPoints",
        currentPoints
    );

    // ========================================
    // СБРАСЫВАЕМ ВЫБОР
    // ========================================

    selectedAllyTank = null;

    allyPlacementMode = false;

    allyGhostAngle = 0;

    console.log(
        "Союзник установлен:",
        ally.name ||
        selectedAllyTank?.name
    );

}

function createRandomEnemyTank() {

    // Берём случайный танк
    // из всех доступных танков

    const randomTank =
        nations[
            Math.floor(
                Math.random() *
                nations.length
            )
        ].tank;


    return createEnemyTank(
        randomTank
    );

}

function findNearestEnemyTarget(enemy) {

    if (!enemy)
        return null;


    const targets = [];


    // ========================================
    // ИГРОК
    // ========================================

    if (
        playerTank &&
        !playerTank.destroyed &&
        playerTank.hp > 0
    ) {
        targets.push(playerTank);
    }


    // ========================================
    // СОЮЗНИКИ
    // ========================================

    for (
        const ally of allyTanks
    ) {

        if (!ally)
            continue;

        if (ally.destroyed)
            continue;

        if (ally.hp <= 0)
            continue;

        targets.push(ally);
    }


    // ========================================
    // ИЩЕМ БЛИЖАЙШЕГО
    // ========================================

    let nearestTarget = null;

    let nearestDistance =
        Infinity;


    for (
        const target of targets
    ) {

        const dx =
            target.x -
            enemy.x;

        const dy =
            target.y -
            enemy.y;

        const distance =
            Math.hypot(
                dx,
                dy
            );


        if (
            distance <
            nearestDistance
        ) {

            nearestDistance =
                distance;

            nearestTarget =
                target;
        }
    }


    return nearestTarget;
}

function updateEnemyAI(
    enemy,
    deltaTime
) {

    if (!enemy)
        return;

    if (enemy.destroyed)
        return;

    const dt =
        deltaTime / 1000;


    // ========================================
    // ИЩЕМ БЛИЖАЙШУЮ ЦЕЛЬ
    // ИГРОК + СОЮЗНИКИ
    // ========================================

    const targets = [];

    if (
        playerTank &&
        !playerTank.destroyed &&
        playerTank.hp > 0
    ) {

        targets.push(
            playerTank
        );

    }


    for (
        const ally of allyTanks
    ) {

        if (!ally)
            continue;

        if (ally.destroyed)
            continue;

        if (ally.hp <= 0)
            continue;

        targets.push(
            ally
        );

    }


    let nearestTarget =
        null;

    let nearestDistance =
        Infinity;


    for (
        const target of targets
    ) {

        const dx =
            target.x -
            enemy.x;

        const dy =
            target.y -
            enemy.y;

        const distance =
            Math.hypot(
                dx,
                dy
            );


        if (
            distance <
            nearestDistance
        ) {

            nearestDistance =
                distance;

            nearestTarget =
                target;

        }

    }


    // ========================================
    // ЗАПОМИНАЕМ БЛИЖАЙШУЮ ЦЕЛЬ
    // ========================================

    const DETECT_DISTANCE =
        600;

    const LOSE_DISTANCE =
        800;


    if (
        !enemy.aiEngaged &&
        nearestTarget &&
        nearestDistance <=
        DETECT_DISTANCE
    ) {

        enemy.aiEngaged =
            true;

        enemy.aiTarget =
            nearestTarget;

    }


    // ========================================
    // ЕСЛИ ПОЯВИЛАСЬ БОЛЕЕ БЛИЗКАЯ ЦЕЛЬ
    // ПЕРЕКЛЮЧАЕМСЯ НА НЕЁ
    // ========================================

    if (
        enemy.aiEngaged &&
        nearestTarget
    ) {

        if (
            !enemy.aiTarget ||
            enemy.aiTarget.destroyed ||
            enemy.aiTarget.hp <= 0
        ) {

            enemy.aiTarget =
                nearestTarget;

        }
        else {

            const currentDx =
                enemy.aiTarget.x -
                enemy.x;

            const currentDy =
                enemy.aiTarget.y -
                enemy.y;

            const currentDistance =
                Math.hypot(
                    currentDx,
                    currentDy
                );


            if (
                nearestDistance <
                currentDistance
            ) {

                enemy.aiTarget =
                    nearestTarget;

            }

        }

    }


    // ========================================
    // ТЕРЯЕМ ЦЕЛЬ
    // ========================================

    if (
        enemy.aiEngaged &&
        (
            !enemy.aiTarget ||
            enemy.aiTarget.destroyed ||
            enemy.aiTarget.hp <= 0
        )
    ) {

        enemy.aiEngaged =
            false;

        enemy.aiTarget =
            null;

    }


    if (
        enemy.aiEngaged &&
        enemy.aiTarget
    ) {

        const dx =
            enemy.aiTarget.x -
            enemy.x;

        const dy =
            enemy.aiTarget.y -
            enemy.y;

        const distanceToTarget =
            Math.hypot(
                dx,
                dy
            );


        if (
            distanceToTarget >=
            LOSE_DISTANCE
        ) {

            enemy.aiEngaged =
                false;

            enemy.aiTarget =
                null;

        }

    }


    // ========================================
    // ВЫБИРАЕМ ЦЕЛЬ
    // ========================================

    let targetX;
    let targetY;


    if (
        enemy.aiEngaged &&
        enemy.aiTarget
    ) {

        targetX =
            enemy.aiTarget.x;

        targetY =
            enemy.aiTarget.y;

    }

    else {

        targetX =
            enemy.aiTargetPoint.x;

        targetY =
            enemy.aiTargetPoint.y;

    }


    // ========================================
    // УГОЛ К ЦЕЛИ
    // ========================================

    const targetDx =
        targetX -
        enemy.x;

    const targetDy =
        targetY -
        enemy.y;


    const targetAngle =
        Math.atan2(
            targetDx,
            -targetDy
        );


    // ========================================
    // ДОЕХАЛИ ДО ТОЧКИ
    // ========================================

    if (
        !enemy.aiEngaged
    ) {

        const distanceToTarget =
            Math.hypot(
                targetDx,
                targetDy
            );


        if (
            distanceToTarget <
            120
        ) {

            enemy.aiTargetPoint =
                createEnemyTargetPoint();

            return;

        }

    }

    // ========================================
    // ОБЪЕЗД ДРУГОГО ТАНКА
    // ========================================

    if (
        !enemy.aiAvoidingHouse &&
        !enemy.aiAvoidingTank
    ) {

        const tankSensorDistance =
            180;

        const tankSensorAngle =
            0.7;

        let detectedTank =
            null;

        let closestDistance =
            Infinity;


        // ====================================
        // ИЩЕМ ТАНК ВПЕРЕДИ
        // ====================================

        for (
            const other of enemyTanks
        ) {

            if (!other)
                continue;

            if (
                other === enemy
            )
                continue;

            if (
                other.destroyed
            )
                continue;


            const dx =
                other.x -
                enemy.x;

            const dy =
                other.y -
                enemy.y;


            const distance =
                Math.hypot(
                    dx,
                    dy
                );


            if (
                distance >
                tankSensorDistance
            )
                continue;


            // ====================================
            // УГОЛ ДО ТАНКА
            // ====================================

            const angleToTank =
                Math.atan2(
                    dx,
                    -dy
                );


            let angleDifference =
                angleToTank -
                enemy.hull.angle;


            while (
                angleDifference >
                Math.PI
            ) {

                angleDifference -=
                    Math.PI * 2;
            }


            while (
                angleDifference <
                -Math.PI
            ) {

                angleDifference +=
                    Math.PI * 2;
            }


            // Танк должен находиться
            // перед нами

            if (
                Math.abs(
                    angleDifference
                ) >
                tankSensorAngle
            )
                continue;


            if (
                distance <
                closestDistance
            ) {

                closestDistance =
                    distance;

                detectedTank =
                    other;
            }
        }


        // ====================================
        // НАЧИНАЕМ ОБЪЕЗД
        // ====================================

        if (
            detectedTank
        ) {

            const leftAngle =
                enemy.hull.angle -
                Math.PI / 2;


            const rightAngle =
                enemy.hull.angle +
                Math.PI / 2;


            const checkDistance =
                120;


            // ====================================
            // ПРОВЕРЯЕМ ЛЕВУЮ СТОРОНУ
            // ====================================

            const leftX =
                enemy.x +
                Math.sin(
                    leftAngle
                ) *
                checkDistance;


            const leftY =
                enemy.y -
                Math.cos(
                    leftAngle
                ) *
                checkDistance;


            const leftBlocked =
                tankCollision(
                    leftX,
                    leftY,
                    enemy
                );


            // ====================================
            // ПРОВЕРЯЕМ ПРАВУЮ СТОРОНУ
            // ====================================

            const rightX =
                enemy.x +
                Math.sin(
                    rightAngle
                ) *
                checkDistance;


            const rightY =
                enemy.y -
                Math.cos(
                    rightAngle
                ) *
                checkDistance;


            const rightBlocked =
                tankCollision(
                    rightX,
                    rightY,
                    enemy
                );


            // ====================================
            // ВЫБИРАЕМ СТОРОНУ
            // ====================================

            if (
                !leftBlocked &&
                rightBlocked
            ) {

                enemy.aiAvoidTankDirection =
                    -1;
            }


            else if (
                leftBlocked &&
                !rightBlocked
            ) {

                enemy.aiAvoidTankDirection =
                    1;
            }


            else {

                // Обе стороны свободны.
                // Выбираем сторону,
                // которая ближе к нашей цели.

                const leftDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                leftAngle -
                                targetAngle
                            ),
                            Math.cos(
                                leftAngle -
                                targetAngle
                            )
                        )
                    );


                const rightDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                rightAngle -
                                targetAngle
                            ),
                            Math.cos(
                                rightAngle -
                                targetAngle
                            )
                        )
                    );


                enemy.aiAvoidTankDirection =
                    leftDifference <
                        rightDifference
                        ? -1
                        : 1;
            }


            // ====================================
            // ЗАПОМИНАЕМ ТАНК
            // ====================================

            enemy.aiAvoidTank =
                detectedTank;


            // ====================================
            // ФИКСИРУЕМ ПОВОРОТ НА 90°
            // ====================================

            enemy.aiAvoidTankAngle =
                enemy.hull.angle +
                enemy.aiAvoidTankDirection *
                Math.PI / 2;


            enemy.aiAvoidTankPhase =
                "turn";


            enemy.aiAvoidingTank =
                true;
        }
    }

    // ========================================
    // ЕСЛИ НЕ ОБХОДИМ ДОМ
    // ИЩЕМ ПРЕПЯТСТВИЕ
    // ========================================

    if (
        !enemy.aiAvoidingHouse
    ) {

        const sensorDistance =
            120;


        const sensorX =
            enemy.x +
            Math.sin(
                enemy.hull.angle
            ) *
            sensorDistance;


        const sensorY =
            enemy.y -
            Math.cos(
                enemy.hull.angle
            ) *
            sensorDistance;


        let detectedHouse =
            null;


        for (
            const house of mapHouses
        ) {

            if (
                !house.image
            )
                continue;


            const width =
                140 *
                house.scale;


            const height =
                width *
                (
                    house.image.height /
                    house.image.width
                );


            const left =
                house.x -
                width / 2 -
                46;


            const right =
                house.x +
                width / 2 +
                46;


            const top =
                house.y -
                height / 2 -
                30;


            const bottom =
                house.y +
                height / 2 +
                30;


            if (
                sensorX + 40 > left &&
                sensorX - 40 < right &&
                sensorY + 40 > top &&
                sensorY - 40 < bottom
            ) {

                detectedHouse =
                    house;

                break;

            }

        }

        if (!detectedHouse) {

            for (
                const hedgehog of mapHedgehogs
            ) {

                if (
                    !hedgehog ||
                    !hedgehog.image
                )
                    continue;

                const width =
                    80 *
                    hedgehog.scale;

                const height =
                    width *
                    (
                        hedgehog.image.height /
                        hedgehog.image.width
                    );

                // Запас вокруг ежа
                const margin =
                    35;

                const left =
                    hedgehog.x -
                    width / 2 -
                    margin;

                const right =
                    hedgehog.x +
                    width / 2 +
                    margin;

                const top =
                    hedgehog.y -
                    height / 2 -
                    margin;

                const bottom =
                    hedgehog.y +
                    height / 2 +
                    margin;

                if (
                    sensorX + 40 > left &&
                    sensorX - 40 < right &&
                    sensorY + 40 > top &&
                    sensorY - 40 < bottom
                ) {

                    detectedHouse =
                        hedgehog;

                    break;
                }
            }
        }

        // ====================================
        // НАЧИНАЕМ ОБХОД
        // ====================================

        if (
            detectedHouse
        ) {

            const leftAngle =
                enemy.hull.angle -
                Math.PI / 2;


            const rightAngle =
                enemy.hull.angle +
                Math.PI / 2;


            const checkDistance =
                120;


            const leftX =
                enemy.x +
                Math.sin(
                    leftAngle
                ) *
                checkDistance;


            const leftY =
                enemy.y -
                Math.cos(
                    leftAngle
                ) *
                checkDistance;


            const rightX =
                enemy.x +
                Math.sin(
                    rightAngle
                ) *
                checkDistance;


            const rightY =
                enemy.y -
                Math.cos(
                    rightAngle
                ) *
                checkDistance;


            const leftBlocked =
                houseCollision(
                    leftX,
                    leftY,
                    40
                );


            const rightBlocked =
                houseCollision(
                    rightX,
                    rightY,
                    40
                );


            // ====================================
            // ВЫБИРАЕМ СТОРОНУ
            // ====================================

            if (
                !leftBlocked &&
                rightBlocked
            ) {

                enemy.aiAvoidDirection =
                    -1;

            }

            else if (
                leftBlocked &&
                !rightBlocked
            ) {

                enemy.aiAvoidDirection =
                    1;

            }

            else {

                // Обе стороны свободны.
                // Выбираем более близкую к цели.

                const leftDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                leftAngle -
                                targetAngle
                            ),
                            Math.cos(
                                leftAngle -
                                targetAngle
                            )
                        )
                    );


                const rightDifference =
                    Math.abs(
                        Math.atan2(
                            Math.sin(
                                rightAngle -
                                targetAngle
                            ),
                            Math.cos(
                                rightAngle -
                                targetAngle
                            )
                        )
                    );


                enemy.aiAvoidDirection =
                    leftDifference <
                        rightDifference
                        ? -1
                        : 1;

            }


            // ====================================
            // ЗАПОМИНАЕМ ДОМ
            // ====================================

            enemy.aiAvoidHouse =
                detectedHouse;


            // ====================================
            // ФИКСИРУЕМ ПЕРВЫЙ ПОВОРОТ
            // ====================================

            enemy.aiAvoidAngle =
                enemy.hull.angle +
                enemy.aiAvoidDirection *
                Math.PI / 2;


            enemy.aiAvoidingHouse =
                true;


            enemy.aiAvoidPhase =
                "turn";

        }

    }


    // ========================================
    // ОБХОД ДОМА
    // ========================================

    if (
        enemy.aiAvoidingHouse
    ) {

        // ====================================
        // ФАЗА 1 — ПОВОРОТ НА 90°
        // ====================================

        if (
            enemy.aiAvoidPhase ===
            "turn"
        ) {

            rotateTankTowards(
                enemy,
                enemy.aiAvoidAngle,
                deltaTime
            );


            // Проверяем, закончен ли поворот

            let difference =
                enemy.aiAvoidAngle -
                enemy.hull.angle;


            while (
                difference > Math.PI
            ) {

                difference -=
                    Math.PI * 2;

            }


            while (
                difference < -Math.PI
            ) {

                difference +=
                    Math.PI * 2;

            }


            if (
                Math.abs(difference) <
                0.05
            ) {

                enemy.hull.angle =
                    enemy.aiAvoidAngle;


                enemy.aiAvoidPhase =
                    "drive";

            }

        }


        // ====================================
        // ФАЗА 2 — ЕДЕМ ПРЯМО
        // ====================================

        else {

            // Держим зафиксированный угол

            enemy.hull.angle =
                enemy.aiAvoidAngle;


            applyTankMovement(
                enemy,
                enemy.maxSpeed,
                deltaTime
            );


            // ====================================
            // ПРОВЕРЯЕМ ВЫХОД ИЗ ЗОНЫ ДОМА
            // ====================================

            const house =
                enemy.aiAvoidHouse;


            let nearHouse =
                false;


            if (house) {

                let width;

                if (
                    house.isHedgehog
                ) {

                    width =
                        80 *
                        house.scale;

                } else {

                    width =
                        140 *
                        house.scale;
                }

                const height =
                    width *
                    (
                        house.image.height /
                        house.image.width
                    );


                const ZONE =
                    50;


                const left =
                    house.x -
                    width / 2 -
                    46 -
                    ZONE;


                const right =
                    house.x +
                    width / 2 +
                    46 +
                    ZONE;


                const top =
                    house.y -
                    height / 2 -
                    30 -
                    ZONE;


                const bottom =
                    house.y +
                    height / 2 +
                    30 +
                    ZONE;


                nearHouse =
                    enemy.x > left &&
                    enemy.x < right &&
                    enemy.y > top &&
                    enemy.y < bottom;

            }


            // ====================================
            // ВЫШЛИ ИЗ ЗОНЫ
            // ====================================

            if (
                !nearHouse
            ) {

                enemy.aiAvoidingHouse =
                    false;

                enemy.aiAvoidHouse =
                    null;

                enemy.aiAvoidPhase =
                    "none";

            }

        }

    }


    // ========================================
    // ДВИЖЕНИЕ
    // ========================================

    if (
        enemy.aiAvoidingTank
    ) {

        // ====================================
        // ФАЗА 1 — ПОВОРОТ НА 90°
        // ====================================

        if (
            enemy.aiAvoidTankPhase ===
            "turn"
        ) {

            rotateTankTowards(
                enemy,
                enemy.aiAvoidTankAngle,
                deltaTime
            );


            let difference =
                enemy.aiAvoidTankAngle -
                enemy.hull.angle;


            while (
                difference >
                Math.PI
            ) {

                difference -=
                    Math.PI * 2;
            }


            while (
                difference <
                -Math.PI
            ) {

                difference +=
                    Math.PI * 2;
            }


            if (
                Math.abs(
                    difference
                ) <
                0.05
            ) {

                enemy.hull.angle =
                    enemy.aiAvoidTankAngle;

                enemy.aiAvoidTankPhase =
                    "drive";
            }

        }


        // ====================================
        // ФАЗА 2 — ЕДЕМ ПРЯМО
        // ====================================

        else {

            // Держим угол 90° от старого
            // направления

            enemy.hull.angle =
                enemy.aiAvoidTankAngle;


            applyTankMovement(
                enemy,
                enemy.maxSpeed,
                deltaTime
            );


            // ====================================
            // ПРОВЕРЯЕМ, РАЗОШЛИСЬ ЛИ ТАНКИ
            // ====================================

            const other =
                enemy.aiAvoidTank;


            if (
                !other ||
                other.destroyed
            ) {

                enemy.aiAvoidingTank =
                    false;

                enemy.aiAvoidTank =
                    null;

                enemy.aiAvoidTankPhase =
                    "none";
            }


            else {

                const dx =
                    other.x -
                    enemy.x;

                const dy =
                    other.y -
                    enemy.y;


                const distance =
                    Math.hypot(
                        dx,
                        dy
                    );


                // Другой танк уже сбоку
                // или сзади — можно возвращаться
                // к обычному движению.

                const angleToOther =
                    Math.atan2(
                        dx,
                        -dy
                    );


                let difference =
                    angleToOther -
                    enemy.hull.angle;


                while (
                    difference >
                    Math.PI
                ) {

                    difference -=
                        Math.PI * 2;
                }


                while (
                    difference <
                    -Math.PI
                ) {

                    difference +=
                        Math.PI * 2;
                }


                if (
                    distance >
                    180 ||
                    Math.abs(
                        difference
                    ) >
                    1.7
                ) {

                    enemy.aiAvoidingTank =
                        false;

                    enemy.aiAvoidTank =
                        null;

                    enemy.aiAvoidTankPhase =
                        "none";
                }
            }
        }
    }


    else if (
        !enemy.aiAvoidingHouse
    ) {

        // ====================================
        // ОБЫЧНОЕ ДВИЖЕНИЕ
        // ====================================

        rotateTankTowards(
            enemy,
            targetAngle,
            deltaTime
        );


        applyTankMovement(
            enemy,
            enemy.maxSpeed,
            deltaTime
        );
    }


    // ========================================
    // СЛЕДУЮЩАЯ ПОЗИЦИЯ
    // ========================================

    const nextX =
        enemy.x +
        Math.sin(
            enemy.hull.angle
        ) *
        enemy.speed *
        dt;


    const nextY =
        enemy.y -
        Math.cos(
            enemy.hull.angle
        ) *
        enemy.speed *
        dt;


    // ========================================
    // КОЛЛИЗИИ
    // ========================================

    const enemyRadius =
        40;


    const tankHit =
        tankCollision(
            nextX,
            nextY,
            enemy
        );


    const houseHit =
        houseCollision(
            nextX,
            nextY,
            enemyRadius
        );


    // ========================================
    // МОЖНО ЕХАТЬ
    // ========================================

    if (
        !houseHit &&
        !tankHit
    ) {

        enemy.x =
            nextX;

        enemy.y =
            nextY;

    }


    // ========================================
    // УПЁРСЯ В ПРЕПЯТСТВИЕ
    // ========================================

    else {

        // ========================================
        // ЕСЛИ МЫ ОБХОДИМ ДОМ
        // И УПЁРЛИСЬ В НОВЫЙ
        // ========================================

        if (
            enemy.aiAvoidingHouse &&
            enemy.aiAvoidPhase === "drive"
        ) {

            // Поворачиваем ещё на 90°
            // в ту же сторону обхода

            enemy.aiAvoidAngle +=
                enemy.aiAvoidDirection *
                Math.PI / 2;


            // Переводим ИИ обратно
            // в фазу поворота

            enemy.aiAvoidPhase =
                "turn";


            // Небольшое торможение

            applyTankMovement(
                enemy,
                0,
                deltaTime
            );

        }

        else {

            // Обычное столкновение —
            // просто тормозим

            applyTankMovement(
                enemy,
                0,
                deltaTime
            );

        }

    }

}

function updateEnemyTurret(
    enemy,
    deltaTime
) {

    if (!enemy)
        return;

    if (
        !enemy.aiTarget ||
        enemy.aiTarget.destroyed ||
        enemy.aiTarget.hp <= 0
    ) {
        return;
    }

    if (enemy.destroyed)
        return;

    if (!enemy.aiEngaged) {

        // Плавно останавливаем башню

        const dt =
            deltaTime / 1000;


        const braking =
            enemy.turretTurnSpeed /
            enemy.turretBrakingTime;


        if (
            enemy.turretAngularSpeed > 0
        ) {

            enemy.turretAngularSpeed -=
                braking * dt;


            if (
                enemy.turretAngularSpeed < 0
            ) {

                enemy.turretAngularSpeed = 0;

            }

        }


        else if (
            enemy.turretAngularSpeed < 0
        ) {

            enemy.turretAngularSpeed +=
                braking * dt;


            if (
                enemy.turretAngularSpeed > 0
            ) {

                enemy.turretAngularSpeed = 0;

            }

        }


        return;

    }


    const dt =
        deltaTime / 1000;


    // ========================================
    // НАПРАВЛЕНИЕ НА ИГРОКА
    // ========================================

    const dx =
        enemy.aiTarget.x -
        enemy.x;

    const dy =
        enemy.aiTarget.y -
        enemy.y;


    const worldAngle =
        Math.atan2(
            dx,
            -dy
        );


    // ========================================
    // УГОЛ БАШНИ ОТНОСИТЕЛЬНО КОРПУСА
    // ========================================

    const targetAngle =
        worldAngle -
        enemy.hull.angle;


    let angleDifference =
        targetAngle -
        enemy.turret.angle;


    while (
        angleDifference > Math.PI
    ) {

        angleDifference -=
            Math.PI * 2;

    }


    while (
        angleDifference < -Math.PI
    ) {

        angleDifference +=
            Math.PI * 2;

    }


    // ========================================
    // УСКОРЕНИЕ БАШНИ
    // ========================================

    const angularAcceleration =
        enemy.turretTurnSpeed /
        enemy.turretAccelerationTime;


    if (
        Math.abs(angleDifference) > 0.02
    ) {

        const direction =
            Math.sign(
                angleDifference
            );


        enemy.turretAngularSpeed +=
            direction *
            angularAcceleration *
            dt;

    }


    // ========================================
    // ОГРАНИЧЕНИЕ СКОРОСТИ БАШНИ
    // ========================================

    enemy.turretAngularSpeed =
        Math.max(
            -enemy.turretTurnSpeed,
            Math.min(
                enemy.turretTurnSpeed,
                enemy.turretAngularSpeed
            )
        );


    // ========================================
    // ТОРМОЖЕНИЕ ПЕРЕД ЦЕЛЬЮ
    // ========================================

    const slowDownDistance =
        0.25;


    if (
        Math.abs(angleDifference) <
        slowDownDistance
    ) {

        const desiredSpeed =
            enemy.turretTurnSpeed *
            (
                Math.abs(angleDifference) /
                slowDownDistance
            );


        if (
            Math.abs(
                enemy.turretAngularSpeed
            ) > desiredSpeed
        ) {

            enemy.turretAngularSpeed *=
                0.85;

        }

    }


    // ========================================
    // ЕСЛИ ПОЧТИ ДОКРУТИЛИ
    // ========================================

    if (
        Math.abs(angleDifference) <
        0.02
    ) {

        enemy.turret.angle =
            targetAngle;

        enemy.turretAngularSpeed =
            0;

        return;

    }


    // ========================================
    // ДВИЖЕНИЕ БАШНИ
    // ========================================

    enemy.turret.angle +=
        enemy.turretAngularSpeed *
        dt;

}

function shootEnemyTank(
    enemy
) {

    if (!enemy)
        return;

    if (enemy.destroyed)
        return;

    if (!enemy.aiEngaged)
        return;

    const now =
        performance.now();


    // ========================================
    // ПЕРЕЗАРЯДКА
    // ========================================

    if (
        now -
        enemy.lastShotTime <
        enemy.reloadTime
    ) {
        return;
    }


    // ========================================
    // УГОЛ ПУШКИ В МИРЕ
    // ========================================

    const gunAngle =
        enemy.hull.angle +
        enemy.turret.angle +
        enemy.gun.angle;


    // ========================================
    // УГОЛ НА ИГРОКА
    // ========================================

    if (
        !enemy.aiTarget ||
        enemy.aiTarget.destroyed ||
        enemy.aiTarget.hp <= 0
    ) {
        return;
    }


    const dx =
        enemy.aiTarget.x -
        enemy.x;

    const dy =
        enemy.aiTarget.y -
        enemy.y;

    const targetAngle =
        Math.atan2(
            dx,
            -dy
        );


    let difference =
        targetAngle -
        gunAngle;


    while (
        difference >
        Math.PI
    ) {

        difference -=
            Math.PI * 2;
    }


    while (
        difference <
        -Math.PI
    ) {

        difference +=
            Math.PI * 2;
    }


    // ========================================
    // ПУШКА ДОЛЖНА БЫТЬ НАВЕДЕНА
    // ========================================

    if (
        Math.abs(difference) >
        0.08
    ) {
        return;
    }


    // ========================================
    // ТОЧКА ВЫЛЕТА СНАРЯДА
    // ========================================

    const barrelLength =
        60;

    const shellX =
        enemy.x +
        Math.sin(gunAngle) *
        barrelLength;

    const shellY =
        enemy.y -
        Math.cos(gunAngle) *
        barrelLength;


    // ========================================
    // СОЗДАЁМ СНАРЯД
    // ========================================

    shells.push({

        x: shellX,

        y: shellY,

        angle: gunAngle,

        speed:
            SHELL_SPEED,

        life: 0,

        owner: enemy

    });


    enemy.lastShotTime =
        now;

}

// ========================================
// CAMERA UPDATE
// ========================================

function updateBattleCamera() {

    if (villageBuildMode) {
        return;
    }

    const viewport =
        getBattleViewport();

    const viewWidth =
        viewport.width /
        camera.zoom;

    const viewHeight =
        viewport.height /
        camera.zoom;

    // Камера смотрит на игрока

    camera.x =
        playerTank.x;

    camera.y =
        playerTank.y;


    // ====================================
    // ГРАНИЦЫ КАРТЫ
    // ====================================

    const halfWidth =
        viewWidth / 2;

    const halfHeight =
        viewHeight / 2;


    camera.x =
        Math.max(
            halfWidth,
            Math.min(
                MAP_WIDTH - halfWidth,
                camera.x
            )
        );


    camera.y =
        Math.max(
            halfHeight,
            Math.min(
                MAP_HEIGHT - halfHeight,
                camera.y
            )
        );

}

// ========================================
// DRAW PLAYER TANK
// ========================================
// DRAW TANK HULL
// ========================================

function drawTankHull(tank) {

    battleCtx.save();

    const image =
        tank.destroyed &&
            tank.battleData.destroyedHull
            ? tank.battleData.destroyedHull
            : tank.battleData.hull;

    const width =
        image.width *
        tank.hull.scale;

    const height =
        image.height *
        tank.hull.scale;

    battleCtx.drawImage(

        image,

        -width / 2,
        -height / 2,

        width,
        height

    );

    battleCtx.restore();

}


// ========================================
// DRAW TANK TURRET
// ========================================

function drawTankTurret(tank) {

    battleCtx.save();

    const image =
        tank.destroyed &&
            tank.battleData.destroyedTurret
            ? tank.battleData.destroyedTurret
            : tank.battleData.turret;

    const width =
        image.width *
        tank.turret.scale;

    const height =
        image.height *
        tank.turret.scale;


    // ========================================
    // ПОЗИЦИЯ БАШНИ НА КОРПУСЕ
    // ========================================

    battleCtx.translate(
        tank.turret.offsetX,
        tank.turret.offsetY
    );


    // ========================================
    // ПЕРЕХОД К ТОЧКЕ ВРАЩЕНИЯ
    // ========================================

    battleCtx.translate(
        tank.turret.pivotX,
        tank.turret.pivotY
    );


    // ========================================
    // ВРАЩАЕМ ВОКРУГ ЭТОЙ ТОЧКИ
    // ========================================

    battleCtx.rotate(
        tank.turret.angle
    );


    // ========================================
    // ВОЗВРАЩАЕМСЯ ОТ ТОЧКИ ВРАЩЕНИЯ
    // ========================================

    battleCtx.translate(
        -tank.turret.pivotX,
        -tank.turret.pivotY
    );


    // ========================================
    // РИСУЕМ БАШНЮ
    // ========================================

    battleCtx.drawImage(
        image,
        -width / 2,
        -height / 2,
        width,
        height
    );


    battleCtx.restore();
}

// ========================================
// DRAW TANK GUN
// ========================================

function drawTankGun(tank) {

    battleCtx.save();


    // ========================================
    // ПОЗИЦИЯ БАШНИ НА КОРПУСЕ
    // ========================================

    battleCtx.translate(
        tank.turret.offsetX,
        tank.turret.offsetY
    );


    // ========================================
    // ПЕРЕХОД К ОСИ ВРАЩЕНИЯ БАШНИ
    // ========================================

    battleCtx.translate(
        tank.turret.pivotX,
        tank.turret.pivotY
    );


    // ========================================
    // ВРАЩАЕМ ВСЮ БАШЕННУЮ СИСТЕМУ
    // ========================================

    battleCtx.rotate(
        tank.turret.angle
    );


    // ========================================
    // ВОЗВРАЩАЕМСЯ В СИСТЕМУ КООРДИНАТ БАШНИ
    // ========================================

    battleCtx.translate(
        -tank.turret.pivotX,
        -tank.turret.pivotY
    );


    // ========================================
    // ПОЗИЦИЯ ПУШКИ ОТНОСИТЕЛЬНО БАШНИ
    // ========================================

    battleCtx.translate(
        tank.gun.offsetX,
        tank.gun.offsetY
    );


    battleCtx.rotate(
        tank.gun.angle
    );


    const image =
        tank.destroyed &&
            tank.battleData.destroyedGun
            ? tank.battleData.destroyedGun
            : tank.battleData.gun;


    const width =
        image.width *
        tank.gun.scale;

    const height =
        image.height *
        tank.gun.scale;


    battleCtx.drawImage(
        image,
        -width / 2,
        -height / 2,
        width,
        height
    );


    battleCtx.restore();
}

// ========================================
// DRAW COMPLETE TANK
// ========================================

function drawTankHitbox(tank) {
    if (tank.battleData.id !== "jambo") {
        return;
    }

    const hitbox = tank.battleData.hitbox;

    if (!hitbox) {
        return;
    }

    battleCtx.save();

    battleCtx.strokeStyle = "#ff3030";
    battleCtx.lineWidth = 2;
    battleCtx.strokeRect(
        -hitbox.width / 2,
        -hitbox.length / 2,
        hitbox.width,
        hitbox.length
    );

    battleCtx.restore();
}

function drawTank(tank) {

    battleCtx.save();

    battleCtx.translate(
        tank.x,
        tank.y
    );

    battleCtx.rotate(
        tank.hull.angle +
        Math.PI / 2
    );

    if (tank.recoil > 0) {
        battleCtx.translate(0, tank.recoil);
        tank.recoil *= 0.75;

        if (tank.recoil < 0.2) {
            tank.recoil = 0;
        }
    }
    // Корпус
    drawTankHull(tank);

    // Башня
    drawTankTurret(tank);

    // Пушка — ПОСЛЕ башни
    drawTankGun(tank);

    battleCtx.restore();
}

function drawTankHP(tank) {

    if (!tank)
        return;

    if (tank.destroyed)
        return;
    // ========================================
    // РАЗМЕРЫ ПОЛОСКИ
    // ========================================

    const width = 90;
    const height = 12;

    const yOffset = -65;

    const hpRatio =
        Math.max(
            0,
            Math.min(
                1,
                tank.hp / tank.maxHp
            )
        );


    // ========================================
    // ОПРЕДЕЛЯЕМ ЦВЕТ
    // ========================================

    const isEnemy =
        tank.isEnemy === true;


    const activeColor =
        isEnemy
            ? "#c62828"
            : "#35b84a";


    const darkColor =
        isEnemy
            ? "#4a1212"
            : "#163b1d";


    // ========================================
    // РИСУЕМ
    // ========================================

    battleCtx.save();


    battleCtx.translate(
        tank.x,
        tank.y + yOffset
    );


    // ========================================
    // ЧЁРНАЯ ОБВОДКА
    // ========================================

    battleCtx.fillStyle =
        "#111111";


    battleCtx.fillRect(
        -width / 2 - 2,
        -2,
        width + 4,
        height + 4
    );


    // ========================================
    // ТЁМНАЯ ОСНОВА
    // ========================================

    battleCtx.fillStyle =
        darkColor;


    battleCtx.fillRect(
        -width / 2,
        0,
        width,
        height
    );


    // ========================================
    // ТЕКУЩЕЕ HP
    // ========================================

    battleCtx.fillStyle =
        activeColor;


    battleCtx.fillRect(
        -width / 2,
        0,
        width * hpRatio,
        height
    );


    // ========================================
    // ЦИФРЫ HP
    // ========================================

    battleCtx.fillStyle =
        "#ffffff";


    battleCtx.font =
        "bold 10px Arial";


    battleCtx.textAlign =
        "center";


    battleCtx.textBaseline =
        "middle";


    battleCtx.fillText(
        Math.ceil(tank.hp) +
        " / " +
        Math.ceil(tank.maxHp),
        0,
        height / 2
    );


    battleCtx.restore();

}

// ========================================
// UPDATE TURRET
// ========================================

function updatePlayerTurret(deltaTime) {

    const dt =
        deltaTime / 1000;


    // ========================================
    // ПОЗИЦИЯ ТАНКА НА ЭКРАНЕ
    // ========================================

    const tankScreenX =
        (playerTank.x - camera.x) *
        camera.zoom +
        battleCanvas.width / 2;


    const tankScreenY =
        (playerTank.y - camera.y) *
        camera.zoom +
        battleCanvas.height / 2;


    // ========================================
    // НАПРАВЛЕНИЕ НА МЫШЬ
    // ========================================

    const dx =
        battleMouse.x -
        tankScreenX;

    const dy =
        battleMouse.y -
        tankScreenY;


    const worldAngle =
        Math.atan2(
            dx,
            -dy
        );


    // ========================================
    // ЦЕЛЕВОЙ УГОЛ БАШНИ
    // ========================================

    const targetAngle =
        worldAngle -
        playerTank.hull.angle;


    // ========================================
    // РАЗНИЦА УГЛОВ
    // ========================================

    let angleDifference =
        targetAngle -
        playerTank.turret.angle;


    while (
        angleDifference > Math.PI
    ) {

        angleDifference -=
            Math.PI * 2;

    }


    while (
        angleDifference < -Math.PI
    ) {

        angleDifference +=
            Math.PI * 2;

    }


    // ========================================
    // ЖЕЛАЕМОЕ НАПРАВЛЕНИЕ
    // ========================================

    let turnDirection = 0;


    if (
        Math.abs(angleDifference) > 0.01
    ) {

        turnDirection =
            Math.sign(
                angleDifference
            );

    }


    // ========================================
    // УГЛОВОЕ УСКОРЕНИЕ
    // ========================================

    if (turnDirection !== 0) {

        const angularAcceleration =
            playerTank.turretTurnSpeed /
            playerTank.turretAccelerationTime;


        // Если близко к цели —
        // начинаем заранее тормозить

        const slowDownDistance = 0.25;


        if (
            Math.abs(angleDifference) <
            slowDownDistance
        ) {

            const desiredSpeed =
                playerTank.turretTurnSpeed *
                (
                    Math.abs(angleDifference) /
                    slowDownDistance
                );


            if (
                Math.abs(
                    playerTank.turretAngularSpeed
                ) > desiredSpeed
            ) {

                playerTank.turretAngularSpeed *=
                    0.85;

            }

        }

        else {

            playerTank.turretAngularSpeed +=
                turnDirection *
                angularAcceleration *
                dt;

        }

    }


    // ========================================
    // ОГРАНИЧЕНИЕ МАКСИМАЛЬНОЙ СКОРОСТИ
    // ========================================

    playerTank.turretAngularSpeed =
        Math.max(
            -playerTank.turretTurnSpeed,
            Math.min(
                playerTank.turretTurnSpeed,
                playerTank.turretAngularSpeed
            )
        );


    // ========================================
    // ЕСЛИ МЫШЬ НЕ ДВИЖЕТСЯ
    // ТОРМОЗИМ БАШНЮ
    // ========================================

    if (turnDirection === 0) {

        const braking =
            playerTank.turretTurnSpeed /
            playerTank.turretBrakingTime;


        if (
            playerTank.turretAngularSpeed > 0
        ) {

            playerTank.turretAngularSpeed -=
                braking * dt;


            if (
                playerTank.turretAngularSpeed < 0
            ) {

                playerTank.turretAngularSpeed = 0;

            }

        }


        else if (
            playerTank.turretAngularSpeed < 0
        ) {

            playerTank.turretAngularSpeed +=
                braking * dt;


            if (
                playerTank.turretAngularSpeed > 0
            ) {

                playerTank.turretAngularSpeed = 0;

            }

        }

    }


    // ========================================
    // ДВИЖЕНИЕ БАШНИ
    // ========================================

    // Если до цели осталось совсем немного,
    // просто ставим башню точно на цель

    if (Math.abs(angleDifference) < 0.02) {

        playerTank.turret.angle =
            targetAngle;

        playerTank.turretAngularSpeed = 0;

    }

    // Иначе продолжаем плавное движение

    else {

        playerTank.turret.angle +=
            playerTank.turretAngularSpeed *
            dt;

    }

}
// ========================================
// DRAW BATTLE MAP
// ========================================

function drawBattleMap() {

    battleCtx.clearRect(
        0,
        0,
        battleCanvas.width,
        battleCanvas.height
    );


    battleCtx.save();

    const viewport =
        getBattleViewport();

    battleCtx.beginPath();

    battleCtx.rect(
        0,
        0,
        viewport.width,
        viewport.height
    );

    battleCtx.clip();


    // ====================================
    // ЦЕНТР ЭКРАНА
    // ====================================

    battleCtx.translate(
        viewport.width / 2,
        viewport.height / 2
    );


    // ====================================
    // ОТДАЛЕНИЕ КАМЕРЫ
    // ====================================

    battleCtx.scale(
        camera.zoom,
        camera.zoom
    );


    // ====================================
    // СМОТРИМ НА ИГРОКА
    // ====================================

    battleCtx.translate(
        -camera.x,
        -camera.y
    );

    if (cameraShakeTime > 0) {
        battleCtx.translate(
            (Math.random() - 0.5) * cameraShake * 2,
            (Math.random() - 0.5) * cameraShake * 2
        );
    }

    // ====================================
    // КАРТА
    // ====================================

    battleCtx.drawImage(
        currentBattleMap.image,
        0,
        0,
        MAP_WIDTH,
        MAP_HEIGHT
    );

    if (
        currentBattleMap.roadImage &&
        currentBattleMap.roadImage.complete &&
        currentBattleMap.roadImage.naturalWidth > 0
    ) {

        battleCtx.drawImage(
            currentBattleMap.roadImage,
            0,
            0,
            MAP_WIDTH,
            MAP_HEIGHT
        );

    }


    // ========================================
    // ДЫМ — ПОД ВСЕМИ ОБЪЕКТАМИ
    // ========================================

    drawSmoke(
        tankSmoke
    );

    drawSmoke(
        enemySmoke
    );

    const mapObjects = [];

    drawTankTracks();
    // ========================================
    // ДОБАВЛЯЕМ ДЕРЕВЬЯ
    // ========================================

    for (const tree of mapTrees) {

        if (!tree.image)
            continue;


        const baseWidth =
            tree.image === pineImage
                ? 170
                : 200;

        const width =
            baseWidth * tree.scale;

        const height =
            width *
            (
                tree.image.height /
                tree.image.width
            );


        mapObjects.push({

            type: "tree",

            object: tree,

            width: width,

            height: height,

            // НИЖНЯЯ ТОЧКА ДЕРЕВА
            depthY:
                tree.y +
                height / 2

        });

    }


    for (const house of mapHouses) {

        if (!house.image)
            continue;


        const width =
            260 * house.scale;

        const height =
            width *
            (
                house.image.height /
                house.image.width
            );


        mapObjects.push({

            type: "house",

            object: house,

            width: width,

            height: height,

            // НИЖНЯЯ ТОЧКА ДОМА
            depthY:
                house.y +
                height / 2

        });

    }


    for (const hedgehog of mapHedgehogs) {

        if (!hedgehog.image)
            continue;

        const width =
            80 * hedgehog.scale;

        const height =
            width *
            (
                hedgehog.image.height /
                hedgehog.image.width
            );

        mapObjects.push({

            type: "hedgehog",

            object: hedgehog,

            width: width,

            height: height,

            depthY:
                hedgehog.y +
                height / 2

        });

    }

    // ========================================
    // ДОБАВЛЯЕМ ТАНКИ В ОБЩУЮ СИСТЕМУ ГЛУБИНЫ
    // ========================================

    mapObjects.push({

        type: "tank",

        object: playerTank,

        // Нижняя точка танка
        depthY:
            playerTank.y + 35

    });


    for (const enemy of enemyTanks) {

        if (!enemy)
            continue;

        mapObjects.push({

            type: "tank",

            object: enemy,

            depthY:
                enemy.y + 35

        });

    }


    for (const ally of allyTanks) {

        if (!ally)
            continue;

        mapObjects.push({

            type: "tank",

            object: ally,

            depthY:
                ally.y + 35

        });

    }


    // ========================================
    // СОРТИРУЕМ ВСЁ ВМЕСТЕ
    // ========================================

    mapObjects.sort(
        (a, b) =>
            a.depthY - b.depthY
    );


    // ========================================
    // ОТРИСОВКА ВСЕХ ОБЪЕКТОВ
    // ========================================

    for (const obj of mapObjects) {

        const object =
            obj.object;


        // ====================================
        // ТЕНЬ
        // ====================================

        if (
            obj.type !== "tank" &&
            obj.type !== "tree" &&
            obj.type !== "pine"
        ) {

            battleCtx.save();

            battleCtx.fillStyle =
                "rgba(0, 0, 0, 0.25)";

            battleCtx.beginPath();

            battleCtx.ellipse(

                object.x,

                object.y +
                obj.height * 0.35,

                obj.width * 0.30,

                obj.height * 0.08,

                0,

                0,

                Math.PI * 2

            );

            battleCtx.fill();

            battleCtx.restore();

        }


        // ====================================
        // ТАНК
        // ====================================

        if (
            obj.type === "tank"
        ) {

            drawTank(
                object
            );

            continue;
        }


        // ====================================
        // ЁЖ
        // ====================================

        if (
            obj.type === "hedgehog"
        ) {

            battleCtx.save();

            battleCtx.translate(
                object.x,
                object.y
            );

            battleCtx.rotate(
                object.rotation || 0
            );

            battleCtx.drawImage(

                object.image,

                -obj.width / 2,
                -obj.height / 2,

                obj.width,
                obj.height

            );

            battleCtx.restore();

        }


        // ====================================
        // ДЕРЕВО / ДОМ / КАКТУС
        // ====================================

        else {

            battleCtx.drawImage(

                object.image,

                object.x -
                obj.width / 2,

                object.y -
                obj.height / 2 +
                (object.imageOffsetY || 0),

                obj.width,
                obj.height

            );

        }

    }


    drawSmoke(
        wreckSmoke
    );

    // ========================================
    // HP ТАНКОВ
    // ========================================

    drawTankHP(
        playerTank
    );


    for (const enemy of enemyTanks) {

        drawTankHP(
            enemy
        );

    }


    for (const ally of allyTanks) {

        drawTankHP(
            ally
        );

    }


    // ========================================
    // СНАРЯДЫ
    // ========================================

    drawShells();


    // ========================================
    // ВЗРЫВЫ
    // ========================================

    drawExplosions();

    if (
        villageBuildMode &&
        (
            selectedBuildObject === "house" ||
            selectedBuildObject === "hedgehog"
        )
    ) {

        let ghostImage;
        let ghostScale;


        // ========================================
        // ДОМИК
        // ========================================

        if (
            selectedBuildObject === "house"
        ) {

            ghostImage =
                currentBattleMap.id === "map4"
                    ? house2Image
                    : houseImage;

            ghostScale =
                1.05;

        }


        // ========================================
        // ПРОТИВОТАНКОВЫЙ ЁЖ
        // ========================================

        if (
            selectedBuildObject === "hedgehog"
        ) {

            ghostImage =
                hedgehogImage;

            ghostScale =
                0.9;

        }


        // ========================================
        // РАЗМЕР ПРИЗРАКА
        // ========================================

        let ghostWidth;

        if (selectedBuildObject === "house") {
            ghostWidth = 260 * ghostScale;
        }

        if (selectedBuildObject === "hedgehog") {
            ghostWidth = 120; // ← размер фантома ежа
        }

        const ghostHeight =
            ghostWidth *
            (
                ghostImage.height /
                ghostImage.width
            );


        // ========================================
        // РИСУЕМ
        // ========================================

        battleCtx.save();

        battleCtx.globalAlpha =
            0.45;


        battleCtx.drawImage(
            ghostImage,

            buildGhostX -
            ghostWidth / 2,

            buildGhostY -
            ghostHeight / 2,

            ghostWidth,
            ghostHeight
        );


        battleCtx.restore();

    }

    if (
        allyPlacementMode &&
        selectedAllyTank
    ) {

        const ghostTank =
            createAllyTank(
                selectedAllyTank
            );

        if (ghostTank) {

            ghostTank.x =
                allyGhostX;

            ghostTank.y =
                allyGhostY;

            ghostTank.hull.angle =
                allyGhostAngle;

            ghostTank.turret.angle =
                0;

            ghostTank.gun.angle =
                0;

            battleCtx.save();

            battleCtx.globalAlpha =
                0.45;

            drawTank(
                ghostTank
            );

            battleCtx.restore();

        }

    }

    battleCtx.restore();
}

const minimapBaseCanvas = document.createElement("canvas");
minimapBaseCanvas.width = MINIMAP_SIZE;
minimapBaseCanvas.height = MINIMAP_SIZE;

const minimapBaseCtx = minimapBaseCanvas.getContext("2d");
minimapBaseCtx.imageSmoothingEnabled = true;
minimapBaseCtx.imageSmoothingQuality = "high";

let cachedMinimapMap = null;

function drawMinimapBase() {
    if (!currentBattleMap || !currentBattleMap.image)
        return false;

    const mapImage = currentBattleMap.image;
    const roadImage = currentBattleMap.roadImage;

    if (!mapImage.complete || mapImage.naturalWidth === 0)
        return false;

    if (roadImage && (!roadImage.complete || roadImage.naturalWidth === 0))
        return false;

    if (cachedMinimapMap !== currentBattleMap) {
        minimapBaseCtx.clearRect(0, 0, MINIMAP_SIZE, MINIMAP_SIZE);

        minimapBaseCtx.drawImage(
            mapImage, 0, 0, MINIMAP_SIZE, MINIMAP_SIZE
        );

        if (roadImage) {
            minimapBaseCtx.drawImage(
                roadImage, 0, 0, MINIMAP_SIZE, MINIMAP_SIZE
            );
        }

        cachedMinimapMap = currentBattleMap;
    }

    minimapCtx.drawImage(minimapBaseCanvas, 0, 0);

    return true;
}

function drawMinimap() {

    if (!currentBattleMap)
        return;

    // ========================================
    // МАСШТАБ МИНИ-КАРТЫ
    // ========================================

    const scaleX =
        MINIMAP_SIZE / MAP_WIDTH;

    const scaleY =
        MINIMAP_SIZE / MAP_HEIGHT;


    // ========================================
    // ФОН
    // ========================================

    minimapCtx.clearRect(
        0,
        0,
        MINIMAP_SIZE,
        MINIMAP_SIZE
    );
    drawMinimapBase();


    // ========================================
    // САМА КАРТА
    // ========================================

    if (
        currentBattleMap.image &&
        currentBattleMap.image.complete
    ) {

        minimapCtx.drawImage(
            currentBattleMap.image,

            0,
            0,
            MINIMAP_SIZE,
            MINIMAP_SIZE
        );

    }

    if (
        currentBattleMap.roadImage &&
        currentBattleMap.roadImage.complete
    ) {

        minimapCtx.drawImage(
            currentBattleMap.roadImage,
            0,
            0,
            MINIMAP_SIZE,
            MINIMAP_SIZE
        );

    }


    // ========================================
    // ДОМА
    // ========================================

    for (
        const house of mapHouses
    ) {

        if (!house)
            continue;

        const x =
            house.x * scaleX;

        const y =
            house.y * scaleY;

        const size =
            6 * house.scale;


        minimapCtx.fillStyle =
            "rgba(94, 94, 94, 0.9)";

        minimapCtx.fillRect(
            x - size / 2,
            y - size / 2,
            size,
            size
        );
    }


    // ========================================
    // ДЕРЕВЬЯ
    // ========================================

    for (
        const tree of mapTrees
    ) {

        if (!tree)
            continue;

        const x =
            tree.x * scaleX;

        const y =
            tree.y * scaleY;


        minimapCtx.fillStyle =
            "rgba(35, 90, 35, 0.8)";

        minimapCtx.beginPath();

        minimapCtx.arc(
            x,
            y,
            2.5,
            0,
            Math.PI * 2
        );

        minimapCtx.fill();
    }

    // ========================================
    // СОЮЗНИКИ
    // ========================================

    for (
        const ally of allyTanks
    ) {

        if (!ally)
            continue;

        if (ally.destroyed)
            continue;

        const x =
            ally.x * scaleX;

        const y =
            ally.y * scaleY;

        // Основная точка союзника
        minimapCtx.fillStyle =
            "#38a8ff";

        minimapCtx.beginPath();

        minimapCtx.arc(
            x,
            y,
            4,
            0,
            Math.PI * 2
        );

        minimapCtx.fill();

        // ====================================
        // НАПРАВЛЕНИЕ СОЮЗНИКА
        // ====================================

        const angle =
            ally.hull.angle;

        const directionLength =
            8;

        minimapCtx.strokeStyle =
            "#ffffff";

        minimapCtx.lineWidth = 1.5;

        minimapCtx.beginPath();

        minimapCtx.moveTo(
            x,
            y
        );

        minimapCtx.lineTo(
            x +
            Math.sin(angle) *
            directionLength,

            y -
            Math.cos(angle) *
            directionLength
        );

        minimapCtx.stroke();
    }

    // ========================================
    // ВРАГИ
    // ========================================

    for (
        const enemy of enemyTanks
    ) {

        if (!enemy)
            continue;

        if (enemy.destroyed)
            continue;

        const x =
            enemy.x * scaleX;

        const y =
            enemy.y * scaleY;


        minimapCtx.fillStyle =
            "#ff3030";

        minimapCtx.beginPath();

        minimapCtx.arc(
            x,
            y,
            4,
            0,
            Math.PI * 2
        );

        minimapCtx.fill();
    }


    // ========================================
    // ИГРОК
    // ========================================

    if (
        playerTank &&
        !playerTank.destroyed
    ) {

        const x =
            playerTank.x * scaleX;

        const y =
            playerTank.y * scaleY;


        minimapCtx.fillStyle =
            "#30ff50";

        minimapCtx.beginPath();

        minimapCtx.arc(
            x,
            y,
            5,
            0,
            Math.PI * 2
        );

        minimapCtx.fill();


        // ====================================
        // НАПРАВЛЕНИЕ ТАНКА
        // ====================================

        const angle =
            playerTank.hull.angle;


        const directionLength =
            10;


        minimapCtx.strokeStyle =
            "#ffffff";

        minimapCtx.lineWidth = 2;

        minimapCtx.beginPath();

        minimapCtx.moveTo(
            x,
            y
        );

        minimapCtx.lineTo(
            x +
            Math.sin(angle) *
            directionLength,

            y -
            Math.cos(angle) *
            directionLength
        );

        minimapCtx.stroke();
    }


    // ========================================
    // РАМКА КАМЕРЫ
    // ========================================

    drawMinimapCamera();
}

function drawMinimapCamera() {

    if (!camera)
        return;

    const scaleX =
        MINIMAP_SIZE / MAP_WIDTH;

    const scaleY =
        MINIMAP_SIZE / MAP_HEIGHT;


    // Реальный размер видимой области мира

    const viewport =
        getBattleViewport();

    const viewWidth =
        battleCanvas.width /
        camera.zoom;

    const viewHeight =
        battleCanvas.height /
        camera.zoom;


    // Левый верхний угол камеры
    // относительно мира

    const cameraLeft =
        camera.x -
        viewWidth / 2;

    const cameraTop =
        camera.y -
        viewHeight / 2;


    const x =
        cameraLeft * scaleX;

    const y =
        cameraTop * scaleY;


    const width =
        viewWidth * scaleX;

    const height =
        viewHeight * scaleY;


    minimapCtx.strokeStyle =
        "rgba(255,255,255,0.9)";

    minimapCtx.lineWidth = 2;


    minimapCtx.strokeRect(
        x,
        y,
        width,
        height
    );
}

// ========================================
// КОЛЛИЗИЯ С ДОМАМИ
// ========================================

function houseCollision(
    x,
    y,
    radius = 40
) {

    for (const house of mapHouses) {

        if (!house.image)
            continue;


        // Размер дома такой же,
        // как при его отрисовке

        const width =
            140 * house.scale;

        const height =
            width *
            (
                house.image.height /
                house.image.width
            );


        const COLLISION_HORIZONTAL = 46;

        const COLLISION_VERTICAL =
            currentBattleMap?.id === "map4"
                ? 15
                : 30;

        const left =
            house.x -
            width / 2 -
            COLLISION_HORIZONTAL;

        const right =
            house.x +
            width / 2 +
            COLLISION_HORIZONTAL;

        const collisionOffsetY =
            house.collisionOffsetY || 0;

        const top =
            house.y +
            collisionOffsetY -
            height / 2 -
            COLLISION_VERTICAL;

        const bottom =
            house.y +
            collisionOffsetY +
            height / 2 +
            COLLISION_VERTICAL;


        // Проверяем танк относительно дома

        if (

            x + radius > left &&

            x - radius < right &&

            y + radius > top &&

            y - radius < bottom

        ) {

            return true;

        }

    }

    for (const hedgehog of mapHedgehogs) {

        if (!hedgehog.image)
            continue;

        const width =
            80 * hedgehog.scale;

        const height =
            width *
            (
                hedgehog.image.height /
                hedgehog.image.width
            );

        const left =
            hedgehog.x -
            width / 2;

        const right =
            hedgehog.x +
            width / 2;

        const top =
            hedgehog.y -
            height / 2;

        const bottom =
            hedgehog.y +
            height / 2;

        if (
            x + radius > left &&
            x - radius < right &&
            y + radius > top &&
            y - radius < bottom
        ) {
            return true;
        }
    }

    return false;

}

// ========================================
// BATTLE LOOP
// ========================================

let lastBattleTime = performance.now();

const tankTrackMarks = [];

const tankSmoke = [];

const enemyTrackMarks = [];

const enemySmoke = [];

const explosions = [];

const wreckSmokeTimers = [];

let smokeTimer = 0;

let trackMarkTimer = 0;

let playerTrackTimer = {
    value: 0
};

let enemyTrackTimers = [];

const MAX_TRACK_MARKS = 1200;

function createExplosion(x, y) {

    const explosion = {

        x: x,
        y: y,

        time: 0,

        duration: 900,

        sparks: []

    };


    // ========================================
    // СОЗДАЁМ ИСКРЫ
    // ========================================

    for (let i = 0; i < 18; i++) {

        const angle =
            Math.random() *
            Math.PI * 2;

        const speed =
            80 +
            Math.random() * 180;

        explosion.sparks.push({

            x: 0,
            y: 0,

            vx:
                Math.cos(angle) *
                speed,

            vy:
                Math.sin(angle) *
                speed,

            life: 0,

            maxLife:
                300 +
                Math.random() * 400,

            size:
                2 +
                Math.random() * 4

        });

    }


    explosions.push(explosion);

}

function updateExplosions(deltaTime) {

    for (
        let i = explosions.length - 1;
        i >= 0;
        i--
    ) {

        const explosion =
            explosions[i];

        explosion.time +=
            deltaTime;


        for (const spark of explosion.sparks) {

            spark.life +=
                deltaTime;

            spark.x +=
                spark.vx *
                deltaTime /
                1000;

            spark.y +=
                spark.vy *
                deltaTime /
                1000;

            spark.vx *= 0.96;
            spark.vy *= 0.96;

        }


        if (
            explosion.time >=
            explosion.duration
        ) {

            explosions.splice(
                i,
                1
            );

        }

    }

}

function createArmorImpact(x, y) {

    const impact = {
        type: "armorImpact",
        x: x,
        y: y,
        time: 0,
        duration: 220,
        sparks: []
    };

    // Короткие искры от удара о броню
    for (let i = 0; i < 8; i++) {

        const angle =
            Math.random() * Math.PI * 2;

        const speed =
            35 + Math.random() * 100;

        impact.sparks.push({
            x: 0,
            y: 0,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            life: 0,
            maxLife: 120 + Math.random() * 100,

            size: 1.5 + Math.random() * 2.5
        });
    }

    explosions.push(impact);
}

function drawExplosions() {

    for (const explosion of explosions) {

        battleCtx.save();

        battleCtx.translate(
            explosion.x,
            explosion.y
        );

        if (explosion.type === "armorImpact") {

            const progress =
                explosion.time / explosion.duration;

            const alpha = 1 - progress;

            // Короткая белая вспышка
            battleCtx.globalAlpha = alpha;

            battleCtx.fillStyle = "#fff4cf";

            battleCtx.beginPath();

            battleCtx.arc(
                0,
                0,
                3 + progress * 5,
                0,
                Math.PI * 2
            );

            battleCtx.fill();

            // Тонкое кольцо удара
            battleCtx.strokeStyle = "#ffc85a";
            battleCtx.lineWidth = 1.5;

            battleCtx.beginPath();

            battleCtx.arc(
                0,
                0,
                4 + progress * 9,
                0,
                Math.PI * 2
            );

            battleCtx.stroke();

            // Разлетающиеся искры
            for (const spark of explosion.sparks) {

                if (spark.life >= spark.maxLife)
                    continue;

                const sparkAlpha =
                    1 - spark.life / spark.maxLife;

                battleCtx.globalAlpha = sparkAlpha;

                battleCtx.fillStyle = "#ffd36a";

                battleCtx.beginPath();

                battleCtx.arc(
                    spark.x,
                    spark.y,
                    spark.size,
                    0,
                    Math.PI * 2
                );

                battleCtx.fill();
            }

            battleCtx.restore();

            continue;
        }

        for (
            const spark of explosion.sparks
        ) {

            if (
                spark.life >=
                spark.maxLife
            )
                continue;


            const alpha =
                1 -
                spark.life /
                spark.maxLife;


            battleCtx.fillStyle =
                `rgba(255,180,40,${alpha})`;


            battleCtx.beginPath();

            battleCtx.arc(
                spark.x,
                spark.y,
                spark.size,
                0,
                Math.PI * 2
            );

            battleCtx.fill();

        }

        battleCtx.restore();

    }

}

function createTankSmoke(tank, smokeArray) {

    if (!tank)
        return;


    const angle =
        tank.hull.angle;


    const sin =
        Math.sin(angle);

    const cos =
        Math.cos(angle);


    // ====================================
    // ТОЧКА ВЫХЛОПА
    // ====================================

    const smokeX =
        tank.x
        + cos * tank.smokeOffsetX
        - sin * tank.smokeOffsetY;


    const smokeY =
        tank.y
        + sin * tank.smokeOffsetX
        + cos * tank.smokeOffsetY;


    // ====================================
    // НАПРАВЛЕНИЕ ДЫМА
    // ====================================

    const speed = 25;


    const count =
        2 +
        Math.floor(
            Math.random() * 2
        );


    for (
        let i = 0;
        i < count;
        i++
    ) {

        smokeArray.push({

            x:
                smokeX +
                (Math.random() - 0.5) * 6,

            y:
                smokeY +
                (Math.random() - 0.5) * 6,

            vx:
                -sin * speed,

            vy:
                cos * speed,

            frame:
                Math.floor(
                    Math.random() *
                    smokeImages.length
                ),

            size: 12,

            maxSize:
                45 +
                Math.random() * 20,

            alpha:
                0.80 +
                Math.random() * 0.15,

            life: 0,

            maxLife:
                1100 +
                Math.random() * 500

        });

    }

}

function updateSmoke(
    deltaTime,
    tank,
    smokeArray,
    timerObject
) {

    if (!tank)
        return;


    const dt =
        deltaTime / 1000;


    timerObject.value +=
        deltaTime;


    const speed =
        Math.abs(
            tank.speed || 0
        );


    const smokeInterval =
        550 -
        Math.min(
            speed / tank.maxSpeed,
            1
        ) * 430;


    if (
        timerObject.value >=
        smokeInterval
    ) {

        createTankSmoke(
            tank,
            smokeArray
        );


        timerObject.value = 0;

    }


    for (
        let i = smokeArray.length - 1;
        i >= 0;
        i--
    ) {

        const smoke =
            smokeArray[i];


        smoke.life +=
            deltaTime;


        smoke.x +=
            smoke.vx * dt;


        smoke.y +=
            smoke.vy * dt;


        const progress =
            smoke.life /
            smoke.maxLife;


        smoke.size =
            12 +
            (
                smoke.maxSize - 12
            ) *
            progress;


        smoke.alpha =
            0.55 *
            (1 - progress);


        if (
            smoke.life >=
            smoke.maxLife
        ) {

            smokeArray.splice(
                i,
                1
            );

        }

    }

}

let playerSmokeTimer = {
    value: 0
};

let enemySmokeTimers = [];

function updateTankSmoke(deltaTime) {

    updateSmoke(
        deltaTime,
        playerTank,
        tankSmoke,
        playerSmokeTimer
    );

}

function updateWreckSmoke(deltaTime) {

    const dt =
        deltaTime / 1000;

    for (
        let i = wreckSmoke.length - 1;
        i >= 0;
        i--
    ) {

        const smoke =
            wreckSmoke[i];

        smoke.life +=
            deltaTime;

        smoke.x +=
            smoke.vx * dt;

        smoke.y +=
            smoke.vy * dt;

        // Постепенно замедляем разлёт
        smoke.vx *= 0.97;
        smoke.vy *= 0.97;

        // Дым постепенно поднимается
        smoke.vy -=
            2 * dt;

        const progress =
            smoke.life /
            smoke.maxLife;

        smoke.size =
            18 +
            (
                smoke.maxSize - 18
            ) *
            progress;

        smoke.alpha =
            0.85 *
            (1 - progress);

        if (
            smoke.life >=
            smoke.maxLife
        ) {

            wreckSmoke.splice(
                i,
                1
            );
        }
    }
}

function updateWreckSmokeFromWrecks(deltaTime) {

    for (const tank of [
        playerTank,
        ...enemyTanks,
        ...allyTanks
    ]) {

        if (!tank || !tank.destroyed)
            continue;

        if (!tank.wreckSmokeTimer)
            tank.wreckSmokeTimer = 0;

        tank.wreckSmokeTimer +=
            deltaTime;

        // Новый дым каждые 250 мс
        if (tank.wreckSmokeTimer >= 250) {

            tank.wreckSmokeTimer = 0;

            for (let i = 0; i < 3; i++) {

                wreckSmoke.push({

                    x:
                        tank.x +
                        (Math.random() - 0.5) * 25,

                    y:
                        tank.y +
                        (Math.random() - 0.5) * 25,

                    vx:
                        33 +
                        (Math.random() - 0.5) * 10,

                    vy:
                        -35 -
                        Math.random() * 30,

                    frame:
                        Math.floor(
                            Math.random() *
                            smokeImages.length
                        ),

                    size:
                        18 +
                        Math.random() * 10,

                    maxSize:
                        55 +
                        Math.random() * 35,

                    alpha:
                        0.45 +
                        Math.random() * 0.25,

                    life: 0,

                    maxLife:
                        1800 +
                        Math.random() * 1200
                });
            }
        }
    }
}

function drawSmoke(smokeArray) {

    for (
        const smoke of smokeArray
    ) {

        const image =
            smokeImages[
            smoke.frame
            ];


        if (!image)
            continue;


        battleCtx.save();


        battleCtx.globalAlpha =
            smoke.alpha;


        battleCtx.drawImage(

            image,

            smoke.x -
            smoke.size / 2,

            smoke.y -
            smoke.size / 2,

            smoke.size,

            smoke.size

        );


        battleCtx.restore();

    }

}

function updateTankTracksForTank(
    deltaTime,
    tank,
    marksArray,
    timerObject
) {

    if (!tank)
        return;


    for (
        let i = marksArray.length - 1;
        i >= 0;
        i--
    ) {

        marksArray[i].life +=
            deltaTime;


        if (
            marksArray[i].life >=
            3000
        ) {

            marksArray.splice(
                i,
                1
            );

        }

    }


    if (
        Math.abs(
            tank.speed || 0
        ) < 8
    ) {

        return;

    }


    timerObject.value +=
        deltaTime;


    const markInterval = 70;


    if (
        timerObject.value <
        markInterval
    ) {

        return;

    }


    timerObject.value = 0;


    const angle =
        tank.hull.angle;


    const sin =
        Math.sin(angle);

    const cos =
        Math.cos(angle);


    const trackWidth =
        tank.trackSpacing / 2;


    const trackLength = 28;

    const rearOffset = 20;


    const leftX =
        tank.x
        + cos * trackWidth
        - sin * rearOffset;


    const leftY =
        tank.y
        + sin * trackWidth
        + cos * rearOffset;


    const rightX =
        tank.x
        - cos * trackWidth
        - sin * rearOffset;


    const rightY =
        tank.y
        - sin * trackWidth
        + cos * rearOffset;


    marksArray.push({

        x: leftX,
        y: leftY,

        angle: angle,

        length:
            trackLength,

        width:
            tank.trackWidth,

        life: 0

    });


    marksArray.push({

        x: rightX,
        y: rightY,

        angle: angle,

        length:
            trackLength,

        width:
            tank.trackWidth,

        life: 0

    });

}

function drawTrackMarks(
    marksArray
) {

    for (
        const mark of marksArray
    ) {

        battleCtx.save();


        battleCtx.translate(
            mark.x,
            mark.y
        );


        battleCtx.rotate(
            mark.angle
        );


        const alpha =
            0.38 *
            (
                1 -
                mark.life / 3000
            );


        battleCtx.fillStyle =
            `rgba(10, 10, 15, ${alpha})`;


        battleCtx.fillRect(

            -mark.width / 2,

            -mark.length / 2,

            mark.width,

            mark.length

        );


        battleCtx.restore();

    }

}

// ========================================
// СОЗДАНИЕ СЛЕДОВ ГУСЕНИЦ
// ========================================

function updateTankTracks(deltaTime) {

    if (!playerTank)
        return;

    for (let i = tankTrackMarks.length - 1; i >= 0; i--) {

        tankTrackMarks[i].life += deltaTime;

        if (tankTrackMarks[i].life >= 3000) {

            tankTrackMarks.splice(i, 1);

        }

    }

    // Если танк почти стоит —
    // следы не создаём

    if (
        Math.abs(playerTank.speed) < 8
    ) {

        return;

    }

    trackMarkTimer += deltaTime;


    // Расстояние между следами

    const markInterval = 70;


    if (
        trackMarkTimer < markInterval
    ) {

        return;

    }


    trackMarkTimer = 0;


    // ========================================
    // НАПРАВЛЕНИЕ КОРПУСА
    // ========================================

    const angle =
        playerTank.hull.angle;


    const sin =
        Math.sin(angle);

    const cos =
        Math.cos(angle);


    // ========================================
    // ПОЛОЖЕНИЕ ГУСЕНИЦ
    // ========================================

    const trackWidth =
        playerTank.trackSpacing / 2;

    const trackLength = 28;

    const rearOffset = 20;


    // Левая гусеница

    const leftX =
        playerTank.x
        + cos * trackWidth
        - sin * rearOffset;

    const leftY =
        playerTank.y
        + sin * trackWidth
        + cos * rearOffset;


    // Правая гусеница

    const rightX =
        playerTank.x
        - cos * trackWidth
        - sin * rearOffset;

    const rightY =
        playerTank.y
        - sin * trackWidth
        + cos * rearOffset;


    // ========================================
    // ДОБАВЛЯЕМ ДВЕ КОЛЕИ
    // ========================================

    tankTrackMarks.push({

        x: leftX,
        y: leftY,

        angle: angle,

        length: trackLength,

        width: playerTank.trackWidth,

        life: 0

    });


    tankTrackMarks.push({

        x: rightX,
        y: rightY,

        angle: angle,

        length: trackLength,

        width: playerTank.trackWidth,

        life: 0

    });


    // ========================================
    // ОГРАНИЧЕНИЕ КОЛИЧЕСТВА
    // ========================================

    while (
        tankTrackMarks.length >
        MAX_TRACK_MARKS
    ) {

        tankTrackMarks.shift();

    }

}

// ========================================
// РИСОВАНИЕ СЛЕДОВ ГУСЕНИЦ
// ========================================

function drawTankTracks() {

    for (
        const mark of tankTrackMarks
    ) {

        battleCtx.save();


        battleCtx.translate(
            mark.x,
            mark.y
        );


        battleCtx.rotate(
            mark.angle
        );


        const alpha =
            0.38 *
            (1 - mark.life / 3000);

        battleCtx.fillStyle =
            `rgba(10, 10, 15, ${alpha})`;


        battleCtx.fillRect(

            -mark.width / 2,

            -mark.length / 2,

            mark.width,

            mark.length

        );


        battleCtx.restore();

    }

}


// ========================================
// BATTLE MOUSE
// ========================================

battleCanvas.addEventListener(
    "mousedown",
    function (event) {

        if (
            currentScreen !==
            "battle"
        )
            return;


        if (
            allyPlacementMode &&
            selectedAllyTank &&
            event.button === 0
        ) {

            const world =
                battleScreenToWorld(
                    event.clientX,
                    event.clientY
                );

            placeAllyTank(
                world.x,
                world.y
            );

            return;
        }

        // ========================================
        // ПОВОРОТ ФАНТОМА СОЮЗНИКА ПКМ
        // ========================================

        if (
            allyPlacementMode &&
            selectedAllyTank &&
            event.button === 2
        ) {

            allyGhostAngle += Math.PI / 4;

            if (allyGhostAngle >= Math.PI * 2) {
                allyGhostAngle = 0;
            }

            return;
        }

        // ========================================
        // СТРОИТЕЛЬСТВО / ПЕРЕТАСКИВАНИЕ КАМЕРЫ
        // ========================================

        if (
            villageBuildMode &&
            event.button === 0
        ) {

            isDraggingBattleCamera =
                true;

            battleDragMoved =
                false;

            battleDragStartX =
                event.clientX;

            battleDragStartY =
                event.clientY;

            return;
        }


        // ========================================
        // ОБЫЧНЫЙ БОЙ
        // ========================================


        if (
            allyPlacementMode &&
            selectedAllyTank &&
            event.button === 0
        ) {

            const world =
                battleScreenToWorld(
                    event.clientX,
                    event.clientY
                );

            placeAllyTank(
                world.x,
                world.y
            );

            return;
        }

        if (
            event.button === 0
        ) {

            shootPlayerTank();

        }

    }
);

battleCanvas.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

window.addEventListener(
    "mouseup",
    function (event) {

        if (event.button !== 0)
            return;

        // ========================================
        // СТРОИТЕЛЬСТВО
        // ========================================

        if (
            !villageBuildMode ||
            !isDraggingBattleCamera
        ) {
            return;
        }


        // ========================================
        // ЕСЛИ НЕ ТАЩИЛИ КАРТУ —
        // ЗНАЧИТ ЭТО КЛИК
        // ========================================

        if (
            !battleDragMoved
        ) {

            if (
                selectedBuildObject ===
                "house"
            ) {

                placeBuildHouse(
                    buildGhostX,
                    buildGhostY
                );
            }


            if (
                selectedBuildObject ===
                "hedgehog"
            ) {

                placeBuildHedgehog(
                    buildGhostX,
                    buildGhostY
                );
            }
        }


        isDraggingBattleCamera =
            false;
    }
);

function placeBuildHedgehog(
    x,
    y
) {

    if (
        !villageBuildMode
    )
        return;


    if (
        selectedBuildObject !==
        "hedgehog"
    )
        return;


    if (
        hedgehogsToBuild <= 0
    )
        return;


    const hedgehog = {
        x: x,
        y: y,
        image:
            hedgehogImage,

        isHedgehog:
            true,

        scale:
            0.8 +
            Math.random() *
            0.2,

        rotation:
            Math.random() *
            Math.PI *
            2
    };


    // Отдельный массив ежей
    mapHedgehogs.push(
        hedgehog
    );


    hedgehogsToBuild--;


    if (
        hedgehogsToBuild <= 0
    ) {

        selectedBuildObject =
            null;

    }


    updateConstructionUI();

}

function placeBuildHouse(
    x,
    y
) {

    if (
        !villageBuildMode
    )
        return;


    if (
        selectedBuildObject !==
        "house"
    )
        return;


    if (
        housesToBuild <= 0
    )
        return;


    // ========================================
    // СОЗДАЁМ ДОМ
    // ========================================

    const house = {

        x: x,

        y: y,

        image:
            currentBattleMap.id ===
                "map4"
                ? house2Image
                : houseImage,

        imageOffsetY:
            currentBattleMap.id ===
                "map4"
                ? 50
                : 0,

        collisionOffsetY:
            currentBattleMap.id ===
                "map4"
                ? 50
                : 0,

        scale:
            1.0 +
            Math.random() *
            0.15

    };


    mapHouses.push(
        house
    );


    housesToBuild--;


    // ========================================
    // ЕСЛИ ДОМА ЗАКОНЧИЛИСЬ
    // ========================================

    if (
        housesToBuild <= 0
    ) {

        selectedBuildObject =
            null;

    }


    updateConstructionUI();

}

// ========================================
// BATTLE LOOP
// ========================================

function battleLoop(time) {

    const deltaTime =
        Math.min(
            time - lastBattleTime,
            50
        );

    lastBattleTime = time;

    cameraShakeTime = Math.max(
        0,
        cameraShakeTime - deltaTime
    );


    if (
        currentScreen ===
        "battle"
    ) {

        if (!villageBuildMode) {

            updateBattleWaves(
                deltaTime
            );

            updatePlayerTank(
                deltaTime
            );


            for (
                const enemy of enemyTanks
            ) {

                updateEnemyAI(
                    enemy,
                    deltaTime
                );

                updateEnemyTurret(
                    enemy,
                    deltaTime
                );

                shootEnemyTank(
                    enemy
                );

            }

            for (
                const ally of allyTanks
            ) {

                updateAllyAI(
                    ally,
                    deltaTime
                );

                updateAllyTurret(
                    ally,
                    deltaTime
                );

                shootAllyTank(
                    ally
                );
            }
        }


        updateTankSmoke(
            deltaTime
        );

        updatePlayerTurret(
            deltaTime
        );

        updateWreckSmoke(
            deltaTime
        );

        updateWreckSmokeFromWrecks(
            deltaTime
        );

        updateTankTracks(
            deltaTime
        );

        updateShells(
            deltaTime
        );

        updateExplosions(
            deltaTime
        );

        if (playerSwitchMode) {
            updateSwitchCamera();
        } else {
            updateBattleCamera();
        }

        drawBattleMap();


        drawMinimap();

    }


    requestAnimationFrame(
        battleLoop
    );

}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    battleCanvas.style.width = "100vw";
    battleCanvas.style.height = "100vh";

    battleCanvas.width = Math.round(window.innerWidth * dpr);
    battleCanvas.height = Math.round(window.innerHeight * dpr);

    battleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    battleCtx.imageSmoothingEnabled = true;
    battleCtx.imageSmoothingQuality = "high";
}


// ========================================
// ИЗМЕНЕНИЕ РАЗМЕРА ОКНА
// ========================================

window.addEventListener(
    "resize",
    resizeCanvas
);


// ========================================
// ПЕРВИЧНАЯ НАСТРОЙКА РАЗМЕРОВ
// ========================================

resizeCanvas();

// ========================================
// MOUSE
// ========================================

let mouseX = 0;
let mouseY = 0;

let mapHedgehogs = [];

canvas.addEventListener("mousemove", function (event) {

    const rect = canvas.getBoundingClientRect();

    mouseX =
        (event.clientX - rect.left) *
        (canvas.width / rect.width);

    mouseY =
        (event.clientY - rect.top) *
        (canvas.height / rect.height);


    // ========================================
    // HANGAR ROTATION
    // ========================================

    if (
        currentScreen === "hangar" &&
        isDraggingHangar
    ) {

        const movement =
            event.clientX - lastMouseX;

        targetHangarRotation +=
            movement * 0.01;

        lastMouseX =
            event.clientX;

    }

});

canvas.addEventListener("click", function () {

    if (currentScreen !== "menu")
        return;

    const buttonX =
        canvas.width / 2 -
        button1.width / 2;

    const buttonY =
        canvas.height / 2 -
        button1.height / 2 +
        100;

    if (
        mouseX >= buttonX &&
        mouseX <= buttonX + button1.width &&
        mouseY >= buttonY &&
        mouseY <= buttonY + button1.height
    ) {

        currentScreen = "hangar";

        updateHangarUI();

    }

});

canvas.addEventListener("mousedown", function (event) {

    if (currentScreen !== "hangar")
        return;

    if (event.button === 0) {

        isDraggingHangar = true;

        lastMouseX = event.clientX;

    }

});

function findPlayerSpawnNearVillage() {

    let villageX =
        MAP_WIDTH / 2;

    let villageY =
        MAP_HEIGHT / 2;


    // ========================================
    // ЕСЛИ ЕСТЬ ДОМА —
    // НАХОДИМ ЦЕНТР ДЕРЕВНИ
    // ========================================

    if (
        mapHouses.length > 0
    ) {

        let sumX = 0;
        let sumY = 0;


        for (
            const house of mapHouses
        ) {

            sumX += house.x;
            sumY += house.y;

        }


        villageX =
            sumX /
            mapHouses.length;

        villageY =
            sumY /
            mapHouses.length;

    }


    // ========================================
    // ПРОБУЕМ РАЗНЫЕ НАПРАВЛЕНИЯ
    // ========================================

    const distances = [
        350,
        325,
        375,
        400
    ];


    for (
        const distance of distances
    ) {

        for (
            let angle = 0;
            angle < Math.PI * 2;
            angle += Math.PI / 8
        ) {

            const x =
                villageX +
                Math.cos(angle) *
                distance;

            const y =
                villageY +
                Math.sin(angle) *
                distance;


            // ========================================
            // НЕ ВЫХОДИМ ЗА КАРТУ
            // ========================================

            if (
                x < 100 ||
                x > MAP_WIDTH - 100 ||
                y < 100 ||
                y > MAP_HEIGHT - 100
            ) {

                continue;

            }


            // ========================================
            // НЕ ПОПАДАЕМ В ДОМА
            // ========================================

            if (
                houseCollision(
                    x,
                    y,
                    45
                )
            ) {

                continue;

            }


            return {
                x: x,
                y: y
            };

        }

    }


    // ========================================
    // ЗАПАСНОЙ ВАРИАНТ
    // ========================================

    return {

        x:
            villageX + 400,

        y:
            villageY

    };

}

finishConstructionButton.addEventListener(
    "click",
    function () {

        if (
            !villageBuildMode
        )
            return;


        // ========================================
        // ЗАКАНЧИВАЕМ СТРОИТЕЛЬСТВО
        // ========================================

        villageBuildMode =
            false;

        selectedBuildObject =
            null;


        // ========================================
        // СКРЫВАЕМ ПАНЕЛЬ СТРОИТЕЛЬСТВА
        // ========================================

        constructionPanel.style.display =
            "none";

        constructionPanel.style.visibility =
            "hidden";

        constructionPanel.style.pointerEvents =
            "none";


        // ========================================
        // СКРЫВАЕМ ПАНЕЛЬ СОЮЗНИКОВ
        // ========================================

        const allyPanel =
            document.getElementById("allyPanel");

        if (allyPanel) {
            allyPanel.style.display = "none";
        }

        allyPlacementMode = false;
        selectedAllyTank = null;

        // ========================================
        // ПЕРЕСЧИТЫВАЕМ РАЗМЕР CANVAS
        // ========================================

        resizeCanvas();


        // ========================================
        // СБРАСЫВАЕМ ZOOM
        // ========================================

        camera.zoom =
            playerCameraZoom;

        // ========================================
        // ПОКАЗЫВАЕМ МИНИ-КАРТУ
        // ========================================

        const minimapContainer =
            document.getElementById(
                "minimapContainer"
            );

        if (minimapContainer) {

            minimapContainer.style.display =
                "";

        }


        // ========================================
        // ЦЕНТР ДЕРЕВНИ
        // ========================================

        let villageX =
            MAP_WIDTH / 2;

        let villageY =
            MAP_HEIGHT / 2;


        if (
            mapHouses.length > 0
        ) {

            let sumX = 0;
            let sumY = 0;


            for (
                const house of mapHouses
            ) {

                sumX +=
                    house.x;

                sumY +=
                    house.y;

            }


            villageX =
                sumX /
                mapHouses.length;

            villageY =
                sumY /
                mapHouses.length;

        }

        const playerSpawn =
            findPlayerSpawnNearVillage();

        playerTank.x =
            playerSpawn.x;

        playerTank.y =
            playerSpawn.y;

        // ========================================
        // КАМЕРА НА ДЕРЕВНЮ
        // ========================================

        camera.x =
            villageX;

        camera.y =
            villageY;


        // ========================================
        // ЗАПУСКАЕМ БОЕВОЙ РЕЖИМ
        // ========================================

        currentScreen =
            "battle";

        battleVillageX =
            villageX;

        battleVillageY =
            villageY;


        // ========================================
        // СБРАСЫВАЕМ ФАЗЫ
        // ========================================

        currentBattlePhase =
            0;

        currentBattleWave =
            -1;

        battleWaveState =
            "idle";

        battleWaveTimer =
            0;


        // ========================================
        // ЗАПУСКАЕМ ПЕРВУЮ ВОЛНУ
        // ========================================

        startNextBattleWave();

        resizeCanvas();

    }
);

battleCanvas.addEventListener(
    "wheel",
    function (event) {

        // Работает только при строительстве
        if (!villageBuildMode)
            return;


        // Не даём странице прокручиваться
        event.preventDefault();


        // ========================================
        // НАПРАВЛЕНИЕ КОЛЁСИКА
        // ========================================

        if (event.deltaY < 0) {

            // Приближение
            camera.zoom += 0.1;

        } else {

            // Отдаление
            camera.zoom -= 0.1;

        }


        // ========================================
        // ОГРАНИЧЕНИЯ МАСШТАБА
        // ========================================

        camera.zoom =
            Math.max(
                0.35,
                Math.min(
                    1.5,
                    camera.zoom
                )
            );


        // ========================================
        // НЕ ВЫХОДИМ ЗА ГРАНИЦЫ КАРТЫ
        // ========================================

        const viewport =
            getBattleViewport();

        const viewWidth =
            battleCanvas.width /
            camera.zoom;

        const viewHeight =
            battleCanvas.height /
            camera.zoom;


        const halfWidth =
            viewWidth / 2;

        const halfHeight =
            viewHeight / 2;


        camera.x =
            Math.max(
                halfWidth,
                Math.min(
                    MAP_WIDTH - halfWidth,
                    camera.x
                )
            );


        camera.y =
            Math.max(
                halfHeight,
                Math.min(
                    MAP_HEIGHT - halfHeight,
                    camera.y
                )
            );

    },
    {
        passive: false
    }
);

canvas.addEventListener("mouseup", function (event) {

    if (event.button === 0) {

        isDraggingHangar = false;

    }

});

canvas.addEventListener("mouseleave", function () {

    isDraggingHangar = false;

});

canvas.addEventListener("wheel", function (event) {

    if (currentScreen !== "hangar")
        return;

    event.preventDefault();


    if (event.deltaY < 0) {

        targetHangarZoom += 0.1;

    } else {

        targetHangarZoom -= 0.1;

    }


    targetHangarZoom =
        Math.max(
            1.4,
            Math.min(
                2.5,
                targetHangarZoom
            )
        );

}, { passive: false });

researchButton.addEventListener(
    "click",
    function () {

        // ========================================
        // БЕРЁМ ТАНК, КОТОРЫЙ ВЫБРАН В АНГАРЕ
        // ========================================

        if (selectedHangarTank) {

            // Ищем нацию, которой принадлежит
            // выбранный танк

            const selectedNationIndex =
                nations.findIndex(
                    nation => {

                        const tanks =
                            nation.tanks ||
                            [nation.tank];

                        return tanks.some(
                            tank =>
                                tank.id ===
                                selectedHangarTank.id
                        );

                    }
                );

            // Если нашли нацию —
            // переключаемся на неё

            if (
                selectedNationIndex !== -1
            ) {

                currentNation =
                    selectedNationIndex;

                const nation =
                    nations[currentNation];

                const tanks =
                    nation.tanks ||
                    [nation.tank];

                const selectedTank =
                    tanks.find(
                        tank =>
                            tank.id ===
                            selectedHangarTank.id
                    );

                if (selectedTank) {

                    // Делаем выбранный в ангаре
                    // танк текущим для исследования

                    nation.tank =
                        selectedTank;

                }

            }

        }


        // ========================================
        // ОТКРЫВАЕМ ИССЛЕДОВАНИЕ
        // ========================================

        hangarMenu.style.display =
            "none";

        researchScreen.style.display =
            "block";


        if (tankRibbon) {

            tankRibbon.style.display =
                "none";

        }


        if (hangarBattleButton) {

            hangarBattleButton.style.display =
                "none";

        }


        // ========================================
        // ОБНОВЛЯЕМ ВЕТКУ
        // ========================================

        updateResearchNation();

    }
);

researchBack.addEventListener(
    "click",
    function () {

        researchScreen.style.display =
            "none";

        hangarMenu.style.display =
            "block";

        currentScreen =
            "hangar";

        updateHangarUI();

    }
);

nationDown.addEventListener(
    "click",
    function () {

        if (
            currentNation <
            nations.length - 1
        ) {

            currentNation++;

            updateResearchNation();

        }

    }
);

nationUp.addEventListener(
    "click",
    function () {

        if (currentNation > 0) {

            currentNation--;

            updateResearchNation();

        }

    }
);

buyTankButton.addEventListener(
    "click",
    buyCurrentTank
);

battleButton.addEventListener(
    "click",
    function () {

        // ========================================
        // ВЫБИРАЕМ КАРТУ
        // ========================================

        const randomIndex =
            Math.floor(
                Math.random() *
                battleMaps.length
            );

        currentBattleMap =
            battleMaps[randomIndex];


        // ========================================
        // СОЗДАЁМ ДЕРЕВЬЯ
        // ========================================

        generateMapNature();


        // ========================================
        // УБИРАЕМ СТАРЫЕ ДОМА
        // ========================================

        mapHouses.length = 0;

        mapHedgehogs.length = 0;

        // ========================================
        // СОЗДАЁМ ИГРОКА
        // ========================================

        if (!selectedHangarTank) {

            alert(
                "Сначала выберите танк!"
            );

            return;
        }


        playerTank =
            createPlayerTank(
                selectedHangarTank
            );

        playerTank.isPlayerControlled = true;

        // ========================================
        // ВРАГОВ ПОКА НЕТ
        // ========================================

        enemyTanks.length = 0;


        // ========================================
        // ОЧИЩАЕМ СНАРЯДЫ
        // ========================================

        shells.length = 0;


        // ========================================
        // РЕЖИМ СТРОИТЕЛЬСТВА
        // ========================================

        villageBuildMode = true;

        selectedBuildObject = null;

        housesToBuild = 6;
        hedgehogsToBuild = 16;

        // ========================================
        // КАМЕРА В ЦЕНТР КАРТЫ
        // ========================================

        camera.x =
            MAP_WIDTH / 2;

        camera.y =
            MAP_HEIGHT / 2;


        // ========================================
        // СРАЗУ НА КАРТУ
        // ========================================

        currentScreen =
            "battle";


        // ========================================
        // ПРЯЧЕМ МИНИ-КАРТУ
        // ========================================

        const minimapContainer =
            document.getElementById(
                "minimapContainer"
            );

        if (minimapContainer) {

            minimapContainer.style.display =
                "none";

        }


        // ========================================
        // ПОКАЗЫВАЕМ МЕНЮ СТРОИТЕЛЬСТВА
        // ========================================

        updateConstructionUI();

    }
);

const keys = {};

window.addEventListener("keydown", function (event) {

    keys[event.code] = true;

    // Не даём Space прокручивать страницу
    if (event.code === "Space") {
        event.preventDefault();
    }

});


window.addEventListener("keyup", function (event) {

    keys[event.code] = false;

});

// ========================================
// SHELLS
// ========================================

const shells = [];

const SHELL_SPEED = 500;

const SHELL_LIFETIME = 3000;

let lastShotTime = 0;

function tankCollision(
    nextX,
    nextY,
    currentTank
) {

    const allTanks = [

        playerTank,

        ...enemyTanks,

        ...allyTanks
    ];


    for (const tank of allTanks) {

        if (!tank)
            continue;

        if (tank === currentTank)
            continue;


        // ====================================
        // РАЗМЕР БАРЬЕРА
        // ====================================

        const currentRadius = 45;
        const otherRadius = 45;


        // ====================================
        // РАССТОЯНИЕ
        // ====================================

        const dx =
            nextX - tank.x;

        const dy =
            nextY - tank.y;


        const distance =
            Math.hypot(
                dx,
                dy
            );


        // ====================================
        // СТОЛКНОВЕНИЕ
        // ====================================

        if (
            distance <
            currentRadius +
            otherRadius
        ) {

            return tank;

        }

    }


    return null;

}

function applyTankMovement(
    tank,
    targetSpeed,
    deltaTime
) {

    const dt =
        deltaTime / 1000;


    // ========================================
    // УСКОРЕНИЕ / ТОРМОЖЕНИЕ
    // ========================================

    if (
        targetSpeed !== 0
    ) {

        const acceleration =
            tank.maxSpeed /
            tank.accelerationTime;


        if (
            tank.speed <
            targetSpeed
        ) {

            tank.speed +=
                acceleration * dt;

        }

        else if (
            tank.speed >
            targetSpeed
        ) {

            const braking =
                tank.maxSpeed /
                tank.brakingTime;


            tank.speed -=
                braking * dt;

        }

    }


    // ========================================
    // ПЛАВНАЯ ОСТАНОВКА
    // ========================================

    else {

        const braking =
            tank.maxSpeed /
            tank.brakingTime;


        if (
            tank.speed > 0
        ) {

            tank.speed -=
                braking * dt;


            if (
                tank.speed < 0
            ) {

                tank.speed = 0;

            }

        }

        else if (
            tank.speed < 0
        ) {

            tank.speed +=
                braking * dt;


            if (
                tank.speed > 0
            ) {

                tank.speed = 0;

            }

        }

    }


    // ========================================
    // ОГРАНИЧЕНИЕ СКОРОСТИ
    // ========================================

    tank.speed =
        Math.max(
            -tank.reverseSpeed,
            Math.min(
                tank.maxSpeed,
                tank.speed
            )
        );

}

function rotateTankTowards(
    tank,
    targetAngle,
    deltaTime
) {

    const dt =
        deltaTime / 1000;


    let angleDifference =
        targetAngle -
        tank.hull.angle;


    while (
        angleDifference > Math.PI
    ) {

        angleDifference -=
            Math.PI * 2;

    }


    while (
        angleDifference < -Math.PI
    ) {

        angleDifference +=
            Math.PI * 2;

    }


    // ========================================
    // СКОРОСТЬ ТАНКА
    // ========================================

    const speedRatio =
        Math.min(
            Math.abs(tank.speed) /
            tank.maxSpeed,
            1
        );


    // ========================================
    // СКОРОСТЬ ПОВОРОТА
    // ========================================

    const minTurnSpeed =
        0.35;


    const maxTurnSpeed =
        tank.hullTurnSpeed;


    const currentTurnSpeed =
        minTurnSpeed +
        (
            maxTurnSpeed -
            minTurnSpeed
        ) *
        speedRatio;


    // ========================================
    // ПОВОРОТ
    // ========================================

    const maxTurn =
        currentTurnSpeed * dt;


    const turnAmount =
        Math.max(
            -maxTurn,
            Math.min(
                maxTurn,
                angleDifference
            )
        );


    tank.hull.angle +=
        turnAmount;

}

function updatePlayerTank(deltaTime) {

    if (
        !playerTank ||
        playerTank.destroyed
    ) {
        return;
    }

    const dt =
        deltaTime / 1000;

    // ========================================
    // ДВИЖЕНИЕ
    // ========================================

    let targetSpeed = 0;


    // ВПЕРЁД

    if (keys["KeyW"]) {

        targetSpeed =
            playerTank.maxSpeed;

    }


    // НАЗАД

    else if (keys["KeyS"]) {

        targetSpeed =
            -playerTank.reverseSpeed;

    }


    // ========================================
    // УСКОРЕНИЕ / ТОРМОЖЕНИЕ
    // ========================================

    if (targetSpeed !== 0) {

        const acceleration =
            playerTank.maxSpeed /
            playerTank.accelerationTime;

        if (
            playerTank.speed <
            targetSpeed
        ) {

            playerTank.speed +=
                acceleration * dt;

        }


        else if (
            playerTank.speed >
            targetSpeed
        ) {

            const braking =
                playerTank.maxSpeed /
                playerTank.brakingTime;

            playerTank.speed -=
                braking * dt;

        }

    }


    // ========================================
    // ОТПУСТИЛ W/S
    // ПЛАВНАЯ ОСТАНОВКА
    // ========================================

    else {

        const braking =
            playerTank.maxSpeed /
            playerTank.brakingTime;


        // ========================================
        // ЕДЕМ ВПЕРЁД → ТОРМОЗИМ
        // ========================================

        if (playerTank.speed > 0) {

            playerTank.speed -=
                braking * dt;


            if (playerTank.speed < 0) {

                playerTank.speed = 0;

            }

        }


        // ========================================
        // ЕДЕМ НАЗАД → ТОРМОЗИМ
        // ========================================

        else if (playerTank.speed < 0) {

            playerTank.speed +=
                braking * dt;


            if (playerTank.speed > 0) {

                playerTank.speed = 0;

            }

        }

    }


    // ========================================
    // ЗАЩИТА ОТ ПЕРЕСКОКА СКОРОСТИ
    // ========================================

    playerTank.speed =
        Math.max(

            -playerTank.reverseSpeed,

            Math.min(
                playerTank.maxSpeed,
                playerTank.speed
            )

        );


    // ========================================
    // ПОВОРОТ КОРПУСА
    // ========================================

    // Текущая скорость относительно максимальной

    const speedRatio =
        Math.min(
            Math.abs(playerTank.speed) /
            playerTank.maxSpeed,
            1
        );


    // ========================================
    // СКОРОСТЬ ПОВОРОТА
    // ========================================

    // Минимальная скорость поворота,
    // когда танк стоит

    const minTurnSpeed = 0.35;


    // Максимальная скорость поворота,
    // когда танк движется

    const maxTurnSpeed =
        playerTank.hullTurnSpeed;


    // Плавно увеличиваем скорость
    // поворота вместе со скоростью танка

    const currentTurnSpeed =
        minTurnSpeed +
        (maxTurnSpeed - minTurnSpeed) *
        speedRatio;


    // ========================================
    // ПОВОРОТ ВЛЕВО
    // ========================================

    if (keys["KeyA"]) {

        playerTank.hull.angle -=
            currentTurnSpeed * dt;

    }


    // ========================================
    // ПОВОРОТ ВПРАВО
    // ========================================

    if (keys["KeyD"]) {

        playerTank.hull.angle +=
            currentTurnSpeed * dt;

    }


    // ========================================
    // ДВИЖЕНИЕ
    // ========================================

    if (
        Math.abs(playerTank.speed) >
        0.01
    ) {

        const nextX =
            playerTank.x +
            Math.sin(
                playerTank.hull.angle)
            * playerTank.speed * dt;


        const nextY =
            playerTank.y -
            Math.cos(
                playerTank.hull.angle
            ) *
            playerTank.speed *
            dt;

        const collision =
            tankCollision(
                nextX,
                nextY,
                playerTank
            );
        // ========================================
        // КОЛЛИЗИЯ С ДОМОМ
        // ========================================

        const tankRadius = 40;


        if (
            !houseCollision(
                nextX,
                nextY,
                tankRadius
            ) &&
            !collision
        ) {

            playerTank.x =
                nextX;

            playerTank.y =
                nextY;

        }

    }


    // ========================================
    // ГРАНИЦЫ КАРТЫ
    // ========================================

    const tankRadius = 40;


    playerTank.x =
        Math.max(
            tankRadius,
            Math.min(
                MAP_WIDTH - tankRadius,
                playerTank.x
            )
        );


    playerTank.y =
        Math.max(
            tankRadius,
            Math.min(
                MAP_HEIGHT - tankRadius,
                playerTank.y
            )
        );

}

function getPlayerGunWorldAngle() {

    return (
        playerTank.hull.angle +
        playerTank.turret.angle +
        playerTank.gun.angle
    );

}

function shootPlayerTank() {

    if (
        !playerTank ||
        playerTank.destroyed ||
        playerTank.hp <= 0 ||
        playerSwitchMode
    ) {
        return;
    }

    const now =
        performance.now();


    // ====================================
    // ПЕРЕЗАРЯДКА
    // ====================================

    if (
        playerTank &&
        now - lastShotTime <
        playerTank.reloadTime
    ) {

        return;
    }


    lastShotTime = now;


    // ====================================
    // УГОЛ ПУШКИ
    // ====================================

    const angle =
        getPlayerGunWorldAngle();


    // ====================================
    // ТОЧКА ВЫЛЕТА
    // ====================================

    const barrelLength = 60;


    const shellX =
        playerTank.x +
        Math.sin(angle) *
        barrelLength;


    const shellY =
        playerTank.y -
        Math.cos(angle) *
        barrelLength;


    // ====================================
    // СОЗДАЁМ СНАРЯД
    // ====================================

    shells.push({

        x: shellX,

        y: shellY,

        angle: angle,

        speed:
            playerTank.shellSpeed,

        life: 0,

        owner: playerTank

    });

    playerTank.recoil = 0;
    cameraShake = 3;
    cameraShakeTime = 140;

}

function isShellInsideTankHitbox(
    shellX,
    shellY,
    tank
) {
    const hitbox = tank.battleData.hitbox;

    if (!hitbox) {
        return false;
    }

    const angle =
        tank.hull.angle + Math.PI / 2;

    const dx = shellX - tank.x;
    const dy = shellY - tank.y;

    const localX =
        dx * Math.cos(angle) +
        dy * Math.sin(angle);

    const localY =
        -dx * Math.sin(angle) +
        dy * Math.cos(angle);

    return (
        Math.abs(localX) <= hitbox.width / 2 &&
        Math.abs(localY) <= hitbox.length / 2
    );
}

function getShellHitInfo(
    startX,
    startY,
    endX,
    endY,
    tank
) {
    const hitbox = tank.battleData.hitbox;

    if (!hitbox) {
        return null;
    }

    const angle =
        tank.hull.angle + Math.PI / 2;

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    // Переводим координаты снаряда
    // в систему координат танка
    function toLocal(x, y) {
        const dx = x - tank.x;
        const dy = y - tank.y;

        return {
            x: dx * cos + dy * sin,
            y: -dx * sin + dy * cos
        };
    }

    const start = toLocal(startX, startY);
    const end = toLocal(endX, endY);

    const vx = end.x - start.x;
    const vy = end.y - start.y;

    const halfWidth = hitbox.width / 2;
    const halfLength = hitbox.length / 2;

    let tEnter = 0;
    let tExit = 1;
    let side = null;

    // Проверяем вход через левую/правую грань
    if (Math.abs(vx) < 0.000001) {
        if (Math.abs(start.x) > halfWidth) {
            return null;
        }
    } else {
        let t1 = (-halfWidth - start.x) / vx;
        let t2 = (halfWidth - start.x) / vx;

        if (t1 > t2) {
            [t1, t2] = [t2, t1];
        }

        if (t1 > tEnter) {
            tEnter = t1;
            side = vx > 0 ? "front" : "rear";
        }

        tExit = Math.min(tExit, t2);

        if (tEnter > tExit) {
            return null;
        }
    }

    // Проверяем вход через переднюю/заднюю грань
    if (Math.abs(vy) < 0.000001) {
        if (Math.abs(start.y) > halfLength) {
            return null;
        }
    } else {
        let t1 = (-halfLength - start.y) / vy;
        let t2 = (halfLength - start.y) / vy;

        if (t1 > t2) {
            [t1, t2] = [t2, t1];
        }

        if (t1 > tEnter) {
            tEnter = t1;
            side = vy > 0 ? "left" : "right";
            // В локальных координатах:
            // -Y — перед, +Y — зад
        }

        tExit = Math.min(tExit, t2);

        if (tEnter > tExit) {
            return null;
        }
    }

    if (tEnter < 0 || tEnter > 1) {
        return null;
    }

    // Точка входа в мировых координатах
    const point = {
        x: startX + (endX - startX) * tEnter,
        y: startY + (endY - startY) * tEnter
    };

    return {
        side,
        x: point.x,
        y: point.y,
        t: tEnter
    };
}

function getArmorHitInfo(shell, tank) {
    const armor = tank.battleData?.armor;

    // Если броня не задана, используем нулевую
    if (!armor || !tank.hull) {
        return {
            side: "front",
            effectiveArmor: 0
        };
    }

    // Разница между направлением снаряда
    // и направлением корпуса танка
    const relativeAngle =
        shell.angle - tank.hull.angle;

    const cosAngle = Math.cos(relativeAngle);
    const sinAngle = Math.sin(relativeAngle);

    const absCos = Math.abs(cosAngle);
    const absSin = Math.abs(sinAngle);

    let side;
    let angleFactor;

    // Передняя или задняя броня
    if (absCos >= absSin) {
        side = cosAngle < 0 ? "front" : "rear";
        angleFactor = absCos;
    }
    // Бортовая броня
    else {
        side = sinAngle > 0 ? "left" : "right";
        angleFactor = absSin;
    }

    // Чем сильнее угол попадания, тем эффективнее броня.
    // Ограничение не позволяет значению стать бесконечным.
    angleFactor = Math.max(angleFactor, 0.25);

    const nominalArmor = armor[side] ?? 0;

    const effectiveArmor =
        nominalArmor / angleFactor;

    return {
        side,
        nominalArmor,
        effectiveArmor
    };
}

function updateShells(deltaTime) {

    const dt =
        deltaTime / 1000;


    for (
        let i = shells.length - 1;
        i >= 0;
        i--
    ) {

        const shell =
            shells[i];


        // ====================================
        // СЛЕДУЮЩАЯ ПОЗИЦИЯ
        // ====================================

        const nextX =
            shell.x +
            Math.sin(
                shell.angle
            ) *
            shell.speed *
            dt;


        const nextY =
            shell.y -
            Math.cos(
                shell.angle
            ) *
            shell.speed *
            dt;


        // ====================================
        // ПОПАДАНИЕ В ДОМ
        // ====================================

        if (
            houseCollision(
                nextX,
                nextY,
                3
            )
        ) {

            // Снаряд исчезает

            shells.splice(
                i,
                1
            );

            continue;

        }

        const allTargets = [
            playerTank,
            ...enemyTanks,
            ...allyTanks
        ];

        let hitTank = null;

        let hitData = null;

        for (const tank of allTargets) {

            if (!tank)
                continue;

            if (tank === shell.owner)
                continue;

            if (
                shell.owner.isAlly &&
                tank.isAlly
            ) {
                continue;
            }

            // Враг не стреляет во врага

            if (
                shell.owner.isEnemy &&
                tank.isEnemy
            ) {
                continue;
            }

            if (tank.hp <= 0)
                continue;

            const hitInfo = getShellHitInfo(
                shell.x,
                shell.y,
                nextX,
                nextY,
                tank
            );

            if (hitInfo) {
                hitTank = tank;
                hitData = hitInfo;
                break;
            }
        }


        // ====================================
        // ЕСЛИ ПОПАЛИ
        // ====================================

        if (hitTank) {

            // ====================================
            // ПРОВЕРКА БРОНИ И ПРОБИТИЯ
            // ====================================

            const armorInfo =
                getArmorHitInfo(shell, hitTank);

            const penetration =
                shell.owner.penetration ?? 0;

            console.log(
                "ПОПАДАНИЕ В БРОНЮ:",
                armorInfo.side,
                "Броня:",
                Math.round(armorInfo.effectiveArmor),
                "Пробитие:",
                Math.round(penetration)
            );

            // ====================================
            // НЕПРОБИТИЕ
            // ====================================

            if (
                penetration < armorInfo.effectiveArmor
            ) {

                console.log(
                    "НЕ ПРОБИЛ!",
                    armorInfo.side
                );

                // Создаём эффект в точке соприкосновения
                createArmorImpact(
                    hitData.x,
                    hitData.y
                );

                // Удаляем снаряд — он не отскакивает
                shells.splice(i, 1);

                continue;
            }

            // ====================================
            // БРОНЯ ПРОБИТА — НАНОСИМ УРОН
            // ====================================

            hitTank.hp -=
                shell.owner.damage;

            hitTank.hp =
                Math.max(
                    0,
                    hitTank.hp
                );

            if (hitTank.hp <= 0 && !hitTank.destroyed) {

                hitTank.hp = 0;

                hitTank.destroyed = true;

                hitTank.speed = 0;


                if (hitTank === playerTank) {

                    console.log(
                        "ИГРОК УНИЧТОЖЕН — ВЫБОР СОЮЗНИКА"
                    );

                    startPlayerTankSwitch();

                }

                // ====================================
                // НАГРАДА ЗА УНИЧТОЖЕНИЕ
                // ====================================

                if (
                    shell.owner === playerTank &&
                    enemyTanks.includes(hitTank)
                ) {

                    const reward =
                        Math.floor(
                            Math.random() * 16
                        ) + 15;

                    addMoney(
                        reward
                    );

                    console.log(
                        "НАГРАДА:",
                        reward,
                        "ЗОЛОТА"
                    );
                }

                console.log(
                    "ТАНК УНИЧТОЖЕН:",
                    hitTank
                );

                createWreckSmoke(hitTank);

                createExplosion(
                    hitTank.x,
                    hitTank.y,
                    1.2
                );

            }

            console.log(
                "ПОПАДАНИЕ!",
                hitTank.name,
                "HP:",
                hitTank.hp
            );

            shells.splice(i, 1);

            continue;
        }

        // ====================================
        // ДВИЖЕНИЕ
        // ====================================

        shell.x =
            nextX;

        shell.y =
            nextY;


        shell.life +=
            deltaTime;


        // ====================================
        // УДАЛЕНИЕ
        // ====================================

        if (

            shell.life >
            SHELL_LIFETIME ||

            shell.x < 0 ||

            shell.x > MAP_WIDTH ||

            shell.y < 0 ||

            shell.y > MAP_HEIGHT

        ) {

            shells.splice(
                i,
                1
            );

        }

    }

}


function createHouseCollisionMask(image) {

    const canvas =
        document.createElement("canvas");

    canvas.width =
        image.naturalWidth;

    canvas.height =
        image.naturalHeight;

    const ctx =
        canvas.getContext("2d");

    ctx.drawImage(
        image,
        0,
        0
    );

    const imageData =
        ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );

    const data =
        imageData.data;

    const mask = [];


    for (
        let y = 0;
        y < canvas.height;
        y++
    ) {

        mask[y] = [];


        for (
            let x = 0;
            x < canvas.width;
            x++
        ) {

            const alpha =
                data[
                (y * canvas.width + x) * 4
                + 3
                ];


            // Непрозрачный пиксель
            // считается частью дома

            mask[y][x] =
                alpha > 50;

        }

    }


    return {

        mask: mask,

        width:
            canvas.width,

        height:
            canvas.height

    };

}

function drawShells() {

    for (const shell of shells) {

        battleCtx.save();


        // ====================================
        // ПОЗИЦИЯ СНАРЯДА
        // ====================================

        battleCtx.translate(
            shell.x,
            shell.y
        );


        // ====================================
        // НАПРАВЛЕНИЕ СНАРЯДА
        // ====================================

        battleCtx.rotate(
            shell.angle
        );


        // ====================================
        // СВЕЧЕНИЕ ВОКРУГ СНАРЯДА
        // ====================================

        const glow =
            battleCtx.createRadialGradient(
                0,
                0,
                1,
                0,
                0,
                16
            );

        glow.addColorStop(
            0,
            "rgba(255, 220, 120, 0.9)"
        );

        glow.addColorStop(
            0.5,
            "rgba(255, 130, 40, 0.35)"
        );

        glow.addColorStop(
            1,
            "rgba(255, 120, 30, 0)"
        );


        battleCtx.fillStyle = glow;

        battleCtx.beginPath();

        battleCtx.arc(
            0,
            0,
            16,
            0,
            Math.PI * 2
        );

        battleCtx.fill();


        // ====================================
        // ТРАССЕР / СЛЕД ЗА СНАРЯДОМ
        // ====================================

        battleCtx.strokeStyle =
            "rgba(255, 180, 80, 0.25)";

        battleCtx.lineWidth = 1;

        battleCtx.beginPath();

        battleCtx.moveTo(
            0,
            7
        );

        battleCtx.lineTo(
            0,
            18
        );

        battleCtx.stroke();


        // ====================================
        // ОСНОВНОЙ КОРПУС СНАРЯДА
        // ====================================

        battleCtx.fillStyle =
            "#4a4f57";

        battleCtx.beginPath();

        battleCtx.moveTo(
            -3,
            -12
        );

        battleCtx.lineTo(
            3,
            -12
        );

        battleCtx.lineTo(
            2.5,
            7
        );

        battleCtx.lineTo(
            -2.5,
            7
        );

        battleCtx.closePath();

        battleCtx.fill();


        // ====================================
        // НОСИК СНАРЯДА
        // ====================================

        battleCtx.fillStyle =
            "#697079";

        battleCtx.beginPath();

        battleCtx.moveTo(
            -3,
            -12
        );

        battleCtx.lineTo(
            3,
            -12
        );

        battleCtx.lineTo(
            0,
            -18
        );

        battleCtx.closePath();

        battleCtx.fill();


        // ====================================
        // БЛИК НА МЕТАЛЛЕ
        // ====================================

        battleCtx.strokeStyle =
            "rgba(220, 225, 230, 0.8)";

        battleCtx.lineWidth = 1;

        battleCtx.beginPath();

        battleCtx.moveTo(
            -1,
            -11
        );

        battleCtx.lineTo(
            -1,
            5
        );

        battleCtx.stroke();


        // ====================================
        // МЕДНЫЙ ВЕДУЩИЙ ПОЯСОК
        // ====================================

        battleCtx.fillStyle =
            "#c98c4c";

        battleCtx.fillRect(
            -3,
            7,
            6,
            2.5
        );


        // ====================================
        // НИЖНЯЯ ЧАСТЬ
        // ====================================

        battleCtx.fillStyle =
            "#343941";

        battleCtx.fillRect(
            -2.5,
            9.5,
            5,
            3
        );


        // ====================================
        // НИЖНИЙ БЛИК
        // ====================================

        battleCtx.strokeStyle =
            "rgba(180, 185, 190, 0.5)";

        battleCtx.lineWidth = 1;

        battleCtx.beginPath();

        battleCtx.moveTo(
            -1.5,
            10
        );

        battleCtx.lineTo(
            1.5,
            10
        );

        battleCtx.stroke();


        battleCtx.restore();

    }

}

function drawMenu() {

    if (currentScreen !== "menu")
        return;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // ========================================
    // BACKGROUND
    // ========================================

    ctx.drawImage(
        menuBackground,
        0,
        0,
        canvas.width,
        canvas.height
    );


    // ========================================
    // BUTTON POSITION
    // ========================================

    const buttonX =
        canvas.width / 2 -
        button1.width / 2;

    const buttonY =
        canvas.height / 2 -
        button1.height / 2 +
        100;


    // ========================================
    // MOUSE OVER BUTTON
    // ========================================

    const mouseInsideButton =
        mouseX >= buttonX &&
        mouseX <= buttonX + button1.width &&
        mouseY >= buttonY &&
        mouseY <= buttonY + button1.height;


    // ========================================
    // TARGET ANIMATION
    // ========================================

    if (mouseInsideButton) {

        targetButtonScale = 1.05;
        targetButtonBrightness = 1.2;

    } else {

        targetButtonScale = 1;
        targetButtonBrightness = 1;

    }


    // ========================================
    // SMOOTH ANIMATION
    // ========================================

    buttonScale +=
        (targetButtonScale - buttonScale) * 0.12;

    buttonBrightness +=
        (targetButtonBrightness - buttonBrightness) * 0.12;


    // ========================================
    // DRAW BUTTON
    // ========================================

    ctx.save();


    const centerX =
        buttonX + button1.width / 2;

    const centerY =
        buttonY + button1.height / 2;


    ctx.translate(
        centerX,
        centerY
    );


    ctx.scale(
        buttonScale,
        buttonScale
    );


    ctx.filter =
        `brightness(${buttonBrightness})`;


    // ========================================
    // GLOW
    // ========================================

    if (mouseInsideButton) {

        ctx.shadowColor =
            "rgba(255, 220, 130, 0.8)";

        ctx.shadowBlur = 20;

    }


    ctx.drawImage(
        button1,
        -button1.width / 2,
        -button1.height / 2
    );


    ctx.restore();

}

function updateResearchNation() {

    const nation =
        nations[currentNation];

    const tank =
        nation.tank;

    const owned =
        tank.owned;


    // ========================================
    // НАЗВАНИЕ НАЦИИ
    // ========================================

    nationName.textContent =
        nation.name;


    // ========================================
    // ТАНК
    // ========================================

    tankName.textContent =
        tank.name;

    tankType.textContent =
        tank.type;

    tankLevel.textContent =
        tank.level;


    // ========================================
    // ИЗОБРАЖЕНИЕ
    // ========================================

    researchTankImage.src =
        tank.image;


    // ========================================
    // ХАРАКТЕРИСТИКИ
    // ========================================

    tankStats[0].textContent =
        tank.hp;

    tankStats[1].textContent =
        tank.speed;

    tankStats[2].textContent =
        tank.damage;


    // ========================================
    // ПОКУПКА ТАНКА
    // ========================================

    if (owned) {

        buyTankButton.textContent =
            "КУПЛЕНО";

        buyTankButton.disabled =
            true;

    }

    else {

        buyTankButton.textContent =
            `КУПИТЬ — ${tank.price} 🪙`;

        buyTankButton.disabled =
            false;

    }


    // ========================================
    // СЛЕДУЮЩИЙ ТАНК
    // ========================================
    const nextResearchTank =
        getResearchNextTank(nation);

    if (nextResearchTank) {
        nextTankName.textContent =
            nextResearchTank.name;
    }
    else {
        nextTankName.textContent =
            "—";
    }
    // ========================================
    // СТРЕЛКИ НАЦИЙ
    // ========================================

    if (currentNation === 0) {

        nationUp.style.display =
            "none";

    }

    else {

        nationUp.style.display =
            "block";

    }


    if (
        currentNation >=
        nations.length - 1
    ) {

        nationDown.style.display =
            "none";

    }

    else {

        nationDown.style.display =
            "block";

    }


    // ========================================
    // БЛОКИРОВКА ДЕРЕВА
    // ========================================

    const researchTree =
        document.getElementById(
            "researchTree"
        );


    if (owned) {

        researchTree.classList.remove(
            "tankLocked"
        );

    }

    else {

        researchTree.classList.add(
            "tankLocked"
        );

    }


    // ========================================
    // ОБНОВЛЯЕМ МОДУЛИ
    // ========================================

    updateResearchNodes();


    // ========================================
    // ОБНОВЛЯЕМ СЛЕДУЮЩИЙ ТАНК
    // ========================================

    updateNextTank();
}

function showTankUnlocked(nextTank) {

    // Если окно уже существует — удаляем
    const oldPopup =
        document.getElementById(
            "tankUnlockPopup"
        );

    if (oldPopup) {
        oldPopup.remove();
    }


    // ========================================
    // СОЗДАЁМ ОКНО
    // ========================================

    const popup =
        document.createElement("div");

    popup.id =
        "tankUnlockPopup";


    popup.innerHTML = `

        <div class="tankUnlockWindow">

            <div class="tankUnlockIcon">
                ✓
            </div>

            <div class="tankUnlockSmall">
                НОВАЯ МАШИНА
            </div>

            <div class="tankUnlockTitle">
                МАШИНА РАЗБЛОКИРОВАНА
            </div>

            <div class="tankUnlockName">
                ${nextTank.name}
            </div>

            <div class="tankUnlockDescription">
                ИССЛЕДОВАНЫ ВСЕ МОДУЛИ
            </div>

            <button id="tankUnlockButton">
                ОТЛИЧНО
            </button>

        </div>

    `;


    document.body.appendChild(
        popup
    );


    // ========================================
    // ПОКАЗЫВАЕМ С АНИМАЦИЕЙ
    // ========================================

    requestAnimationFrame(() => {

        popup.classList.add(
            "active"
        );

    });


    // ========================================
    // ЗАКРЫТИЕ
    // ========================================

    const button =
        document.getElementById(
            "tankUnlockButton"
        );


    button.addEventListener(
        "click",
        () => {

            // ====================================
            // ЗАКРЫВАЕМ ОКНО ОПОВЕЩЕНИЯ
            // ====================================

            popup.classList.remove(
                "active"
            );


            // ====================================
            // ЖДЁМ, ПОКА ОКНО УЙДЁТ
            // ====================================

            setTimeout(() => {

                popup.remove();


                // ====================================
                // НАХОДИМ ЗАМОК В КАРТОЧКЕ
                // ====================================

                const lock =
                    document.querySelector(
                        ".nextTankLock"
                    );


                if (!lock)
                    return;


                // ====================================
                // ЗАПУСКАЕМ АНИМАЦИЮ ЗАМКА
                // ====================================

                lock.classList.remove(
                    "tankUnlocked"
                );

                lock.classList.remove(
                    "unlocking"
                );


                // Пока оставляем разблокированный замок
                lock.innerHTML =
                    "🔓";


                // Запускаем анимацию
                requestAnimationFrame(() => {

                    lock.classList.add(
                        "unlocking"
                    );

                });


                // ====================================
                // ПОСЛЕ СБРОСА ЗАМКА
                // ПОКАЗЫВАЕМ BT-5
                // ====================================

                setTimeout(() => {

                    lock.classList.remove(
                        "unlocking"
                    );

                    lock.classList.add(
                        "tankUnlocked"
                    );


                    lock.innerHTML = `
                        <img
                            src="${nextTank.image}"
                            class="nextTankImage"
                            alt="${nextTank.name}"
                        >
                    `;

                }, 650);


            }, 400);

        }
    );

}

function researchModule(
    module,
    level
) {

    const nation =
        nations[currentNation];

    const tank =
        nation.tank;


    // Танк должен быть куплен

    if (!tank.owned) {

        alert(
            "Сначала купите танк!"
        );

        return;

    }


    if (!tank.research)
        return;


    const currentLevel =
        tank.research[module];


    // ========================================
    // МОЖНО ИССЛЕДОВАТЬ ТОЛЬКО СЛЕДУЮЩИЙ
    // ========================================

    if (
        level !==
        currentLevel + 1
    ) {

        return;

    }


    const price =
        researchPrices[level];


    // ========================================
    // ПРОВЕРКА ДЕНЕГ
    // ========================================

    if (
        playerMoney <
        price
    ) {

        alert(
            "Недостаточно золота!"
        );

        return;

    }


    // ========================================
    // СПИСЫВАЕМ ДЕНЬГИ
    // ========================================

    playerMoney -=
        price;


    // ========================================
    // ИССЛЕДУЕМ
    // ========================================

    const wasFullyResearched =
        isTankFullyResearched();

    tank.research[module] =
        level;

    tank.installed[module] =
        level;


    // ========================================
    // СОХРАНЯЕМ
    // ========================================

    saveTankProgress();


    updateMoneyUI();

    updateResearchNodes();

    updateNextTank();

    if (
        !wasFullyResearched &&
        isTankFullyResearched()
    ) {

        showTankUnlocked(
            getResearchNextTank(nation)
        );
    }

}

function setupResearchButtons() {

    const rows =
        document.querySelectorAll(
            "#researchTree .researchRow"
        );


    const modules = [
        "gun",
        "turret",
        "engine",
        "tracks"
    ];


    rows.forEach(
        (row, rowIndex) => {

            if (
                rowIndex >=
                modules.length
            )
                return;


            const module =
                modules[rowIndex];


            const nodes =
                row.querySelectorAll(
                    ".researchNode"
                );


            nodes.forEach(
                (node, nodeIndex) => {

                    const level =
                        nodeIndex + 1;


                    node.addEventListener(
                        "click",
                        function () {

                            researchModule(
                                module,
                                level
                            );

                        }
                    );

                }

            );

        }

    );

}

function isTankFullyResearched() {

    const tank =
        nations[currentNation].tank;


    if (!tank.research)
        return false;


    return (

        tank.research.gun >= 4 &&

        tank.research.turret >= 4 &&

        tank.research.engine >= 4 &&

        tank.research.tracks >= 4

    );

}

function updateNextTank() {

    const nation =
        nations[currentNation];

    const nextTank =
        getResearchNextTank(nation);

    if (!nextTank) {

        const lock =
            document.querySelector(
                ".nextTankLock"
            );

        const text =
            document.querySelector(
                ".nextTankText"
            );

        if (lock) {
            lock.textContent = "—";
        }

        if (text) {
            text.innerHTML =
                "СЛЕДУЮЩАЯ МАШИНА<br>ПОКА НЕДОСТУПНА";
        }

        const button =
            document.getElementById(
                "buyNextTankButton"
            );

        if (button) {
            button.remove();
        }

        return;
    }


    if (
        isTankFullyResearched()
    ) {

        nextTank.unlocked =
            true;


        const lock =
            document.querySelector(
                ".nextTankLock"
            );


        const text =
            document.querySelector(
                ".nextTankText"
            );


        if (lock) {

            // Если танк уже куплен или уже разблокирован
            // показываем его изображение
            lock.classList.add(
                "tankUnlocked"
            );

            lock.innerHTML = `
                <img
                    src="${nextTank.image}"
                    class="nextTankImage"
                    alt="${nextTank.name}"
                >
            `;
        }


        if (text) {

            if (
                nextTank.owned
            ) {

                text.innerHTML =
                    "МАШИНА КУПЛЕНА";

            }

            else {

                text.innerHTML =
                    `МАШИНА ОТКРЫТА<br>
                     МОЖНО КУПИТЬ`;

            }

        }


        addNextTankButton();

    }

    else {

        nextTank.unlocked =
            false;


        const lock =
            document.querySelector(
                ".nextTankLock"
            );


        const text =
            document.querySelector(
                ".nextTankText"
            );


        if (lock) {

            lock.textContent =
                "🔒";

        }


        if (text) {

            text.innerHTML =
                "ЗАВЕРШИТЕ ИССЛЕДОВАНИЕ<br>ВСЕХ МОДУЛЕЙ";

        }


        const button =
            document.getElementById(
                "buyNextTankButton"
            );


        if (button) {

            button.remove();

        }

    }

}

function addNextTankButton() {

    const nextTank =
        getResearchNextTank(
            nations[currentNation]
        );

    if (!nextTank) {

        const oldButton =
            document.getElementById(
                "buyNextTankButton"
            );

        if (oldButton) {
            oldButton.remove();
        }

        return;
    }

    const container = document.getElementById("nextTank");

    if (!container) return;

    // Уже существует
    let button = document.getElementById("buyNextTankButton");

    if (!button) {

        button = document.createElement("button");

        button.id = "buyNextTankButton";

        container.appendChild(button);

        button.addEventListener("click", buyNextTank);
    }

    // =================================
    // ТАНК УЖЕ КУПЛЕН
    // =================================

    if (nextTank.owned) {

        button.innerHTML = `
            <span class="nextTankButtonIcon">➜</span>
            <span>ПЕРЕЙТИ</span>
        `;

        button.classList.add("owned");

        button.disabled = false;

        return;
    }

    // =================================
    // ТАНК ЕЩЁ НЕ КУПЛЕН
    // =================================

    button.innerHTML = `
        <span class="nextTankButtonIcon">⚙</span>
        <span>КУПИТЬ</span>
        <span class="nextTankButtonPrice">
            ${nextTank.price}
        </span>
    `;

    button.classList.remove("owned");

    button.disabled = false;
}

function buyNextTank() {

    const nation =
        nations[currentNation];

    if (!nation)
        return;

    const nextTank =
        getResearchNextTank(nation);

    if (!nextTank)
        return;


    // =================================
    // ЕСЛИ ТАНК УЖЕ КУПЛЕН
    // =================================

    if (nextTank.owned) {

        // Делаем новый танк текущим
        nation.tank = nextTank;


        // =================================
        // СОЗДАЁМ СПИСОК ТАНКОВ
        // =================================

        if (!nation.tanks) {
            nation.tanks = [];
        }


        // =================================
        // ВАЖНО:
        // ДОБАВЛЯЕМ ТЕКУЩИЙ ТАНК,
        // ЕСЛИ ЕГО НЕТ
        // =================================

        if (
            nation.tank &&
            !nation.tanks.some(
                tank => tank.id === nation.tank.id
            )
        ) {
            nation.tanks.unshift(nation.tank);
        }


        // =================================
        // ДОБАВЛЯЕМ НОВЫЙ ТАНК
        // =================================

        if (
            !nation.tanks.some(
                tank => tank.id === nextTank.id
            )
        ) {
            nation.tanks.push(nextTank);
        }


        saveTankProgress();

        updateHangarTankRibbon();
        updateResearchNation();
        updateMoneyUI();

        return;
    }


    // =================================
    // ПРОВЕРКА ОТКРЫТИЯ
    // =================================

    if (!nextTank.unlocked) {

        console.log("Танк ещё не открыт");

        return;
    }


    // =================================
    // ПРОВЕРКА ДЕНЕГ
    // =================================

    if (playerMoney < nextTank.price) {

        console.log("Недостаточно денег");

        return;
    }


    // =================================
    // ПОКУПКА
    // =================================

    playerMoney -= nextTank.price;

    nextTank.owned = true;


    // =================================
    // СОЗДАЁМ СПИСОК ТАНКОВ
    // =================================

    if (!nation.tanks) {
        nation.tanks = [];
    }


    // =================================
    // ДОБАВЛЯЕМ ПРЕДЫДУЩИЙ ТАНК
    // =================================

    if (
        nation.tank &&
        !nation.tanks.some(
            tank => tank.id === nation.tank.id
        )
    ) {
        nation.tanks.unshift(nation.tank);
    }


    // =================================
    // ДОБАВЛЯЕМ КУПЛЕННЫЙ ТАНК
    // =================================

    if (
        !nation.tanks.some(
            tank => tank.id === nextTank.id
        )
    ) {
        nation.tanks.push(nextTank);
    }


    // =================================
    // ДЕЛАЕМ BT-5 ТЕКУЩИМ
    // =================================

    saveTankProgress();


    // =================================
    // ОБНОВЛЯЕМ ИНТЕРФЕЙС
    // =================================

    updateMoneyUI();

    updateNextTank();

    updateHangarTankRibbon();

    addNextTankButton();
}

function drawHangar() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // ========================================
    // DARK HANGAR
    // ========================================

    const backgroundGradient =
        ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            100,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width
        );

    backgroundGradient.addColorStop(
        0,
        "#252525"
    );

    backgroundGradient.addColorStop(
        1,
        "#080808"
    );

    ctx.fillStyle =
        backgroundGradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // ========================================
    // SMOOTH ROTATION
    // ========================================

    hangarRotation +=
        (targetHangarRotation - hangarRotation) * 0.12;


    // ========================================
    // SMOOTH ZOOM
    // ========================================

    hangarZoom +=
        (targetHangarZoom - hangarZoom) * 0.12;


    // ========================================
    // CENTER
    // ========================================

    const centerX =
        canvas.width / 2;

    const centerY =
        canvas.height / 2;


    // ========================================
    // PLATFORM SIZE
    // ========================================

    const scale =
        0.7 * hangarZoom;

    const platformWidth =
        hangarPlatform.width * scale;

    const platformHeight =
        hangarPlatform.height * scale;


    // ========================================
    // LIGHT UNDER PLATFORM
    // ========================================

    ctx.save();

    ctx.translate(
        centerX,
        centerY
    );

    const glowRadius =
        platformWidth / 2;

    const glow =
        ctx.createRadialGradient(
            0,
            0,
            glowRadius * 0.82,
            0,
            0,
            glowRadius * 1.08
        );

    glow.addColorStop(
        0,
        "rgba(255, 210, 120, 0)"
    );

    glow.addColorStop(
        0.65,
        "rgba(255, 210, 120, 0.08)"
    );

    glow.addColorStop(
        0.85,
        "rgba(255, 210, 120, 0.25)"
    );

    glow.addColorStop(
        1,
        "rgba(255, 210, 120, 0)"
    );

    ctx.fillStyle = glow;

    ctx.beginPath();

    ctx.arc(
        0,
        0,
        glowRadius * 1.08,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.restore();


    // ========================================
    // PLATFORM
    // ========================================

    ctx.save();

    ctx.translate(
        centerX,
        centerY
    );

    ctx.rotate(
        hangarRotation
    );

    ctx.drawImage(
        hangarPlatform,

        -platformWidth / 2,
        -platformHeight / 2,

        platformWidth,
        platformHeight
    );

    ctx.restore();


    // ========================================
    // TANK ON PLATFORM
    // ========================================

    if (
        selectedHangarTank &&
        hangarTankImage.complete &&
        hangarTankImage.naturalWidth > 0
    ) {

        ctx.save();

        ctx.translate(
            centerX,
            centerY
        );

        // Танк вращается вместе
        // с платформой

        ctx.rotate(
            hangarRotation
        );

        // Поворачиваем танк
        // как в исследовании

        ctx.rotate(
            Math.PI / 2
        );


        let tankScale =
            0.42 * hangarZoom;

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "pz4F"
        ) {
            tankScale =
                0.11 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "pz3e"
        ) {
            tankScale =
                0.34 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "pantera"
        ) {
            tankScale =
                0.14 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "m41"
        ) {
            tankScale =
                0.34 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "kv85"
        ) {
            tankScale =
                0.37 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "jambo"
        ) {
            tankScale =
                0.61 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "tiger1"
        ) {
            tankScale = 0.27 * hangarZoom;
        }

        if (
            selectedHangarTank &&
            selectedHangarTank.id === "t26"
        ) {
            tankScale = 0.57 * hangarZoom;
        }

        const tankWidth =
            hangarTankImage.width *
            tankScale;


        const tankHeight =
            hangarTankImage.height *
            tankScale;


        ctx.drawImage(

            hangarTankImage,

            -tankWidth / 2,

            -tankHeight / 2,

            tankWidth,

            tankHeight

        );


        ctx.restore();

    }

}

function updateHangarTankRibbon() {

    const ribbon =
        document.getElementById(
            "tankRibbonList"
        );

    if (!ribbon)
        return;


    ribbon.innerHTML = "";


    let firstOwnedTank = null;


    nations.forEach(
        nation => {

            // ========================================
            // ВСЕ ТАНКИ ЭТОЙ НАЦИИ
            // ========================================

            const tanks =
                nation.tanks ||
                [nation.tank];


            tanks.forEach(
                tank => {

                    if (!tank.owned)
                        return;


                    // ========================================
                    // ПЕРВЫЙ КУПЛЕННЫЙ ТАНК
                    // ========================================

                    if (!firstOwnedTank) {

                        firstOwnedTank =
                            tank;

                    }


                    // ==============================
                    // КАРТОЧКА ТАНКА
                    // ==============================

                    const item =
                        document.createElement("div");

                    item.className =
                        "tankRibbonItem";


                    // ========================================
                    // TANK INFO
                    // ========================================

                    const topInfo =
                        document.createElement("div");

                    topInfo.className =
                        "tankRibbonTop";


                    const level =
                        document.createElement("span");

                    level.textContent =
                        tank.level;

                    level.className =
                        "tankRibbonLevel";


                    const nationName =
                        document.createElement("span");

                    nationName.textContent =
                        nation.name;

                    nationName.className =
                        "tankRibbonNation";


                    topInfo.appendChild(level);

                    topInfo.appendChild(nationName);

                    item.appendChild(topInfo);


                    // ========================================
                    // ИЗОБРАЖЕНИЕ
                    // ========================================

                    const image =
                        document.createElement("img");

                    image.src =
                        tank.image;

                    image.alt =
                        tank.name;

                    image.className =
                        "tankRibbonImage";

                    item.appendChild(image);


                    // ========================================
                    // НАЗВАНИЕ
                    // ========================================

                    const tankName =
                        document.createElement("div");

                    tankName.className =
                        "tankRibbonName";

                    tankName.textContent =
                        tank.name;

                    item.appendChild(tankName);


                    // ========================================
                    // НАЖАТИЕ
                    // ========================================

                    item.addEventListener(
                        "click",
                        function () {

                            selectedHangarTank =
                                tank;

                            hangarTankImage.src =
                                tank.image;


                            // Обновляем выделение
                            document
                                .querySelectorAll(
                                    ".tankRibbonItem"
                                )
                                .forEach(
                                    item => {

                                        item.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            item.classList.add(
                                "selected"
                            );


                            // Обновляем характеристики
                            updateHangarTankStats();

                        }
                    );


                    ribbon.appendChild(item);

                }
            );

        }
    );


    // ==============================
    // ВЫБИРАЕМ ПЕРВЫЙ ТАНК
    // ==============================

    if (
        !selectedHangarTank &&
        firstOwnedTank
    ) {

        selectedHangarTank =
            firstOwnedTank;

        hangarTankImage.src =
            firstOwnedTank.image;


        const firstItem =
            ribbon.querySelector(
                ".tankRibbonItem"
            );

        if (firstItem) {

            firstItem.classList.add(
                "selected"
            );

        }

    }


    // ==============================
    // НЕТ КУПЛЕННЫХ ТАНКОВ
    // ==============================

    if (!firstOwnedTank) {

        selectedHangarTank =
            null;

        hangarTankImage.src = "";

    }

    updateHangarTankStats();

}

function updateHangarTankStats() {

    const tank =
        selectedHangarTank;

    if (!tank)
        return;


    const battleData =
        getBattleTank(tank.id);

    if (!battleData)
        return;


    const upgrade =
        getPlayerUpgradeBonuses(tank);


    // ========================================
    // АКТУАЛЬНЫЕ ХАРАКТЕРИСТИКИ
    // ========================================

    const damage =
        tank.damage *
        upgrade.gunMultiplier;


    const maxSpeed =
        battleData.maxSpeed *
        upgrade.engineMultiplier;


    const reverseSpeed =
        maxSpeed * 0.5;


    const hullTurnSpeed =
        battleData.hullTurnSpeed *
        upgrade.tracksMultiplier;


    const turretTurnSpeed =
        battleData.turretTurnSpeed *
        upgrade.turretMultiplier;


    const shellSpeed =
        SHELL_SPEED *
        upgrade.gunMultiplier;


    const reloadSeconds =
        battleData.reloadTime / 1000;


    // ========================================
    // ЗАПИСЫВАЕМ В UI
    // ========================================

    const statsTankName =
        document.getElementById(
            "hangarStatsTankName"
        );

    const statHp =
        document.getElementById(
            "statHp"
        );

    const statDamage =
        document.getElementById(
            "statDamage"
        );

    const statSpeed =
        document.getElementById(
            "statSpeed"
        );

    const statReverseSpeed =
        document.getElementById(
            "statReverseSpeed"
        );

    const statHullTurn =
        document.getElementById(
            "statHullTurn"
        );

    const statTurretTurn =
        document.getElementById(
            "statTurretTurn"
        );

    const statShellSpeed =
        document.getElementById(
            "statShellSpeed"
        );

    const statReload =
        document.getElementById(
            "statReload"
        );


    statsTankName.textContent =
        tank.name;

    statHp.textContent =
        Math.round(tank.hp);

    statDamage.textContent =
        damage.toFixed(1);

    statSpeed.textContent =
        maxSpeed.toFixed(1);

    statReverseSpeed.textContent =
        reverseSpeed.toFixed(1);

    statHullTurn.textContent =
        hullTurnSpeed.toFixed(2);

    statTurretTurn.textContent =
        turretTurnSpeed.toFixed(2);

    statShellSpeed.textContent =
        shellSpeed.toFixed(0);

    statReload.textContent =
        reloadSeconds.toFixed(2) + " с";


    // ========================================
    // УРОВНИ МОДУЛЕЙ
    // ========================================

    document.getElementById(
        "moduleGunLevel"
    ).textContent =
        ["I", "II", "III", "IV"]
        [tank.installed.gun - 1];


    document.getElementById(
        "moduleTurretLevel"
    ).textContent =
        ["I", "II", "III", "IV"]
        [tank.installed.turret - 1];


    document.getElementById(
        "moduleEngineLevel"
    ).textContent =
        ["I", "II", "III", "IV"]
        [tank.installed.engine - 1];


    document.getElementById(
        "moduleTracksLevel"
    ).textContent =
        ["I", "II", "III", "IV"]
        [tank.installed.tracks - 1];

}

function updateAllyTankPanel() {

    const list =
        document.getElementById("allyTankList");

    if (!list)
        return;

    list.innerHTML = "";


    // ========================================
    // БЕРЁМ ТОЧНО ТЕ ЖЕ ТАНКИ, ЧТО И АНГАР
    // ========================================

    nations.forEach(nation => {

        const tanks =
            nation.tanks ||
            [nation.tank];


        tanks.forEach(tank => {

            // Если танка нет в ангаре —
            // в подкреплении его тоже нет
            if (!tank.owned)
                return;


            // ========================================
            // ТОЧНО ТА ЖЕ КАРТОЧКА, ЧТО В АНГАРЕ
            // ========================================

            const item =
                document.createElement("div");

            item.className =
                "tankRibbonItem";


            // ========================================
            // ВЕРХНЯЯ ИНФОРМАЦИЯ
            // ========================================

            const topInfo =
                document.createElement("div");

            topInfo.className =
                "tankRibbonTop";


            const level =
                document.createElement("span");

            level.textContent =
                tank.level;

            level.className =
                "tankRibbonLevel";


            const nationName =
                document.createElement("span");

            nationName.textContent =
                nation.name;

            nationName.className =
                "tankRibbonNation";


            topInfo.appendChild(level);
            topInfo.appendChild(nationName);

            item.appendChild(topInfo);


            // ========================================
            // ИЗОБРАЖЕНИЕ
            // ========================================

            const image =
                document.createElement("img");

            image.src =
                tank.image;

            image.alt =
                tank.name;

            image.className =
                "tankRibbonImage";

            item.appendChild(image);


            // ========================================
            // НАЗВАНИЕ
            // ========================================

            const tankName =
                document.createElement("div");

            tankName.className =
                "tankRibbonName";

            tankName.textContent =
                tank.name;

            item.appendChild(tankName);


            // ========================================
            // ЦЕНА В ОЧКАХ
            // ========================================

            const price =
                document.createElement("div");

            price.className =
                "allyTankPrice";


            let points = 1;

            if (tank.level.includes("II"))
                points = 2;

            if (tank.level.includes("III"))
                points = 3;

            if (tank.level.includes("IV"))
                points = 4;


            price.textContent =
                "★ " + points;

            item.appendChild(price);


            // ========================================
            // ВЫБОР СОЮЗНИКА
            // ========================================

            item.addEventListener(
                "click",
                function () {

                    // ========================================
                    // ОТКЛЮЧАЕМ СТРОИТЕЛЬСТВО
                    // ========================================

                    selectedBuildObject = null;

                    // ========================================
                    // ВЫБИРАЕМ СОЮЗНИКА
                    // ========================================

                    selectedAllyTank =
                        tank;

                    allyPlacementMode =
                        true;

                    allyGhostAngle = 0;
                    // ========================================
                    // СТАВИМ ФАНТОМ В ЦЕНТР
                    // ========================================

                    allyGhostX =
                        camera.x;

                    allyGhostY =
                        camera.y;

                    console.log(
                        "Выбран союзник:",
                        tank.name
                    );

                    updateConstructionUI();
                }
            );


            list.appendChild(item);

        });

    });

}

function setupAllyTankScroll() {

    const list = document.getElementById("allyTankList");
    const leftButton = document.getElementById("allyArrowLeft");
    const rightButton = document.getElementById("allyArrowRight");

    if (!list || !leftButton || !rightButton)
        return;


    function scrollAllyTanks(direction) {

        const firstTank =
            list.querySelector(".tankRibbonItem");

        if (!firstTank)
            return;


        // Ширина одного танка + расстояние между карточками
        const gap = 10;

        const step =
            firstTank.offsetWidth + gap;


        list.scrollBy({
            left: step * direction,
            behavior: "smooth"
        });
    }


    leftButton.addEventListener("click", function () {

        scrollAllyTanks(-1);

    });


    rightButton.addEventListener("click", function () {

        scrollAllyTanks(1);

    });

}

function buyCurrentTank() {

    const nation =
        nations[currentNation];

    if (!nation)
        return;


    const tank =
        nation.tank;

    if (!tank)
        return;


    // ========================================
    // УЖЕ КУПЛЕН
    // ========================================

    if (tank.owned) {
        return;
    }


    // ========================================
    // НЕ ХВАТАЕТ ДЕНЕГ
    // ========================================

    if (
        playerMoney <
        tank.price
    ) {

        alert(
            "Недостаточно золота!"
        );

        return;
    }


    // ========================================
    // ПОКУПАЕМ
    // ========================================

    playerMoney -=
        tank.price;

    tank.owned =
        true;


    // ========================================
    // ДОБАВЛЯЕМ ТАНК В СПИСОК АНГАРА
    // ========================================

    if (!nation.tanks) {

        nation.tanks = [];

    }


    // Если танка ещё нет
    // в списке ангара — добавляем

    if (
        !nation.tanks.some(
            existingTank =>
                existingTank.id ===
                tank.id
        )
    ) {

        nation.tanks.push(
            tank
        );

    }


    // ========================================
    // СОХРАНЯЕМ
    // ========================================

    saveTankProgress();


    // ========================================
    // ОБНОВЛЯЕМ ИНТЕРФЕЙС
    // ========================================

    updateMoneyUI();

    updateResearchNation();

    updateHangarTankRibbon();

    updateAllyTankPanel();

    updateHangarUI();

}

function saveTankProgress() {

    localStorage.setItem(
        "tankProgress",
        JSON.stringify(nations)
    );

    localStorage.setItem(
        "playerMoney",
        playerMoney
    );
}

function loadTankProgress() {

    const saved =
        localStorage.getItem(
            "tankProgress"
        );


    const savedMoney =
        localStorage.getItem(
            "playerMoney"
        );

    const savedAllyPoints =
        localStorage.getItem(
            "allyPoints"
        );

    if (saved) {

        const savedNations =
            JSON.parse(saved);


        nations.forEach(
            (nation, index) => {

                if (
                    !savedNations[index]
                )
                    return;


                // ====================================
                // ТЕКУЩИЙ ТАНК
                // ====================================

                if (
                    savedNations[index].tank
                ) {

                    nation.tank.owned =
                        savedNations[index]
                            .tank.owned;


                    // Восстанавливаем исследование

                    if (
                        savedNations[index].tank.installed
                    ) {

                        nation.tank.installed =
                            savedNations[index]
                                .tank.installed;

                    }
                    else {

                        // Для старых сохранений:
                        // исследованный уровень считаем установленным

                        nation.tank.installed = {
                            gun:
                                nation.tank.research.gun,

                            turret:
                                nation.tank.research.turret,

                            engine:
                                nation.tank.research.engine,

                            tracks:
                                nation.tank.research.tracks
                        };

                    }

                }

                if (
                    savedNations[index]
                        .thirdTank &&
                    nation.thirdTank
                ) {

                    nation.thirdTank.owned =
                        savedNations[index]
                            .thirdTank.owned;

                    nation.thirdTank.unlocked =
                        savedNations[index]
                            .thirdTank.unlocked;

                    if (
                        savedNations[index]
                            .thirdTank.research
                    ) {
                        nation.thirdTank.research =
                            savedNations[index]
                                .thirdTank.research;
                    }

                    if (
                        savedNations[index]
                            .thirdTank.installed
                    ) {
                        nation.thirdTank.installed =
                            savedNations[index]
                                .thirdTank.installed;
                    }
                }

                // ====================================
                // СЛЕДУЮЩИЙ ТАНК
                // ====================================

                if (
                    savedNations[index]
                        .nextTank
                ) {

                    nation.nextTank.owned =
                        savedNations[index]
                            .nextTank.owned;


                    nation.nextTank.unlocked =
                        savedNations[index]
                            .nextTank.unlocked;

                }

                if (savedNations[index].tanks) {

                    nation.tanks =
                        savedNations[index].tanks;

                } else {

                    nation.tanks = [
                        nation.tank
                    ];

                }

            }

        );

    }


    // ========================================
    // ДЕНЬГИ
    // ========================================

    if (
        savedMoney !== null
    ) {

        playerMoney =
            Number(savedMoney);

    }

    const pointsElement =
        document.getElementById(
            "allyPoints"
        );

    if (pointsElement) {

        if (
            savedAllyPoints !== null
        ) {

            pointsElement.textContent =
                savedAllyPoints;

        } else {

            // Для первого запуска
            // оставляем стартовые 6 очков

            pointsElement.textContent =
                "6";

            localStorage.setItem(
                "allyPoints",
                "6"
            );

        }

    }

    updateMoneyUI();

}

function updateResearchNodes() {

    const nation =
        nations[currentNation];

    const tank =
        nation.tank;

    if (!tank.research)
        return;

    // Если старое сохранение не содержит installed
    if (!tank.installed) {
        tank.installed = {
            gun: tank.research.gun,
            turret: tank.research.turret,
            engine: tank.research.engine,
            tracks: tank.research.tracks
        };
    }

    const rows =
        document.querySelectorAll(
            "#researchTree .researchRow"
        );

    const modules = [
        "gun",
        "turret",
        "engine",
        "tracks"
    ];

    rows.forEach(
        (row, rowIndex) => {

            if (
                rowIndex >=
                modules.length
            )
                return;

            const module =
                modules[rowIndex];

            const researchedLevel =
                tank.research[module];

            const installedLevel =
                tank.installed[module];

            const nodes =
                row.querySelectorAll(
                    ".researchNode"
                );

            nodes.forEach(
                (node, nodeIndex) => {

                    const level =
                        nodeIndex + 1;

                    const check =
                        node.querySelector(
                            ".researchCheck"
                        );

                    if (!check)
                        return;


                    // ====================================
                    // ОЧИЩАЕМ СТАРЫЕ СОСТОЯНИЯ
                    // ====================================

                    node.classList.remove("completed");
                    node.classList.remove("researched");
                    node.classList.remove("installed");
                    node.classList.remove("available");
                    node.classList.remove("locked");

                    // ====================================
                    // ТЕКУЩИЙ УСТАНОВЛЕННЫЙ УРОВЕНЬ
                    // ====================================

                    if (
                        level ===
                        installedLevel
                    ) {

                        node.classList.add(
                            "installed"
                        );

                        check.textContent =
                            "✓";

                        return;
                    }


                    // ====================================
                    // УЖЕ ИССЛЕДОВАННЫЕ
                    // ====================================

                    if (
                        level <=
                        researchedLevel
                    ) {

                        node.classList.add("completed");
                        node.classList.add("researched");

                        check.textContent = "✓";

                        return;
                    }


                    // ====================================
                    // СЛЕДУЮЩИЙ ДОСТУПНЫЙ
                    // ====================================

                    if (
                        tank.owned &&
                        level ===
                        researchedLevel + 1
                    ) {

                        node.classList.add(
                            "available"
                        );

                        check.textContent =
                            "−";

                        return;
                    }


                    // ====================================
                    // ЗАБЛОКИРОВАНО
                    // ====================================

                    node.classList.add(
                        "locked"
                    );

                    check.textContent =
                        "🔒";
                }
            );
        }
    );
}

function updateHangarUI() {

    if (currentScreen === "hangar") {

        // Лента танков
        if (tankRibbon) {

            tankRibbon.style.display =
                "flex";

        }


        // Характеристики танка
        const hangarTankStats =
            document.getElementById(
                "hangarTankStats"
            );

        if (hangarTankStats) {

            hangarTankStats.style.display =
                "block";

        }


        // Кнопка В БОЙ
        if (hangarBattleButton) {

            hangarBattleButton.style.display =
                "block";

        }

    } else {

        // Лента
        if (tankRibbon) {

            tankRibbon.style.display =
                "none";

        }


        // Характеристики танка
        const hangarTankStats =
            document.getElementById(
                "hangarTankStats"
            );

        if (hangarTankStats) {

            hangarTankStats.style.display =
                "none";

        }


        // Кнопка В БОЙ
        if (hangarBattleButton) {

            hangarBattleButton.style.display =
                "none";

        }

    }

}

// ========================================
// GAME LOOP
// ========================================
function gameLoop() {

    document.body.classList.toggle(
        "battle-cursor",
        currentScreen === "battle"
    );

    mainMenu.style.display =
        currentScreen === "menu" ? "flex" : "none";
    // ========================================
    // ГЛАВНОЕ МЕНЮ
    // ========================================

    if (
        currentScreen ===
        "menu"
    ) {

        //drawMenu();

        hangarMenu.style.display =
            "none";

        operationScreen.style.display =
            "none";

        battleScreen.style.display =
            "none";
    }


    // ========================================
    // АНГАР
    // ========================================

    else if (
        currentScreen ===
        "hangar"
    ) {

        drawHangar();

        hangarMenu.style.display =
            "block";

        battleInfoPanel.style.display =
            "none";

        operationScreen.style.display =
            "none";

        battleScreen.style.display =
            "none";
    }


    // ========================================
    // ЭКРАН ОПЕРАЦИИ
    // ========================================

    else if (
        currentScreen ===
        "operation"
    ) {

        hangarMenu.style.display =
            "none";

        operationScreen.style.display =
            "flex";

        battleScreen.style.display =
            "none";
    }


    // ========================================
    // БОЙ
    // ========================================

    else if (
        currentScreen ===
        "battle"
    ) {

        hangarMenu.style.display =
            "none";

        operationScreen.style.display =
            "none";

        battleScreen.style.display =
            "block";

        if (villageBuildMode) {

            battleInfoPanel.style.display =
                "none";

        } else {

            battleInfoPanel.style.display =
                "flex";

        }
    }


    requestAnimationFrame(
        gameLoop
    );
}
// ========================================
// START
// ========================================

const mainMenu =
    document.getElementById("mainMenu");

const settingsModal =
    document.getElementById("settingsModal");

const resetConfirmModal =
    document.getElementById("resetConfirmModal");

document
    .getElementById("mainMenuPlayButton")
    .addEventListener("click", function () {

        currentScreen = "hangar";

        updateHangarUI();

    });

document
    .getElementById("mainMenuSettingsButton")
    .addEventListener("click", function () {

        settingsModal.style.display = "flex";

    });

document
    .getElementById("settingsModalClose")
    .addEventListener("click", function () {

        settingsModal.style.display = "none";

    });

document
    .getElementById("mainMenuResetButton")
    .addEventListener("click", function () {

        resetConfirmModal.style.display = "flex";

    });

document
    .getElementById("resetConfirmCancel")
    .addEventListener("click", function () {

        resetConfirmModal.style.display = "none";

    });

document
    .getElementById("resetConfirmYes")
    .addEventListener("click", function () {

        localStorage.removeItem("tankProgress");
        localStorage.removeItem("playerMoney");
        localStorage.removeItem("allyPoints");

        location.reload();

    });

menuBackground.onload = function () {

    loadTankProgress();

    setupResearchButtons();

    updateResearchNation();

    updateHangarTankRibbon();

    updateAllyTankPanel();

    setupAllyTankScroll();

    updateHangarUI();

    gameLoop();

    battleLoop();

};