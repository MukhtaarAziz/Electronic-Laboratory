class Color {
    constructor(nameEN,nameAR,hexaCode){
        this.nameEN =  nameEN;
        this.nameAR = nameAR;
        this.hexaCode = hexaCode

    }

     createColorBoxElement(){
        let _className = "color-box"
        let _div = document.createElement("div")
        _div.setAttribute("data-color",this.hexaCode);
        _div.setAttribute("style",`background-color:${this.hexaCode}`);
        _div.innerHTML = this.nameEN
        _div.classList.add(_className);
        _div.style.fontSize = "0.7em";
        _div.style.cursor = "pointer"
        return _div;
    }

}


let _greenAppleColor = new Color("Green Apple","تفاح اخضر","#009900");
let _redAppleColor = new Color("Red Apple","تفاح احمر","#ab4545");
let _orangeColor = new Color("Orange","","#ff4d00");
let _carrotColor = new Color("Carrot","","#f59b0c");
let _blurberryColor = new Color("Blue Berry","","#5b2581");
let _dragonFruitColor = new Color("Dragon Fruit","","#a9456e");
let _passionFruitColor = new Color("Passion Fruit","","#9e2f47");
let _grapeColor = new Color("Grape","","#723c57");
let _strawberryColor = new Color ("StrawBerry","","#e53939");
let _mintColor = new Color("Mint","","#5a855f");

let colors = [
    _greenAppleColor,
    _redAppleColor,
    _orangeColor,
    _carrotColor,
    _blurberryColor,
    _dragonFruitColor,
    _passionFruitColor,
    _grapeColor,
    _strawberryColor,
    _mintColor
];