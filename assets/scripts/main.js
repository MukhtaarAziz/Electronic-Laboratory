const defaultTemplate = {
    logo: "",
    ministry: {
        en: "Ministry of Higher Education and Scientific Research",
        ar: "وزارة التعليم العالي والبحث العلمي"
    },
    university: {
        en: "",
        ar: ""
    },
    collage: {
        en: "",
        ar: ""
    },
    department: {
        en: "",
        ar: ""
    }
}



let defaultTheme = {
    color: "",
    banner: ""
}

let rootElement = null;
let mainColor = null;
let colorBoxesElements = null;
const MAX_NAMES = 5;
let btnEditExpNum, btnEditExpName, btnEditDate, btnAddNewName = null;
let selectStudying, selectClass = null;
let expDate = null;
let arrayName = [];

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Document loaded!");
    console.table(colors);

    let colorBoxesContainerElement = document.getElementsByClassName("color-boxes-container")[0];
    if(colorBoxesContainerElement){
        let _colorBoxes = "";
        colors.forEach( (color,index)=> {
            // let _colorBox = `<div class="color-box color-box--apple" data-color="${color.hexaCode}" style="background-color: 	${color.hexaCode};">${color.nameAR}</div>`
            _colorBox = color.createColorBoxElement();
            colorBoxesContainerElement.appendChild(_colorBox);
            // _colorBoxes +=_colorBox;
        });
        // colorBoxesContainerElement.innerHTML  = _colorBoxes;
    }
    // Color Boxes
    colorBoxesElements = document.querySelectorAll(".color-box");



    // Root and root style
    rootElement =  document.querySelector(":root");
    let rootComputedStyle = getComputedStyle(rootElement);
    mainColor = rootComputedStyle.getPropertyValue("--main-color");

    // Experiment Properties
    btnEditExpNum = document.getElementById("btnEditExpNum");
    btnEditExpName = document.getElementById("btnEditExpName");
    btnAddNewName = document.getElementById("btnAddNewName");
    selectStudying = document.getElementById("selectStudying");
    selectClass = document.getElementById("selectClass");
    expDate = document.getElementById("expDate");



    // Event Handlers
    // Color Boxes Click Events;
    if(colorBoxesElements && colorBoxesElements.length > 0){
        colorBoxesElements.forEach( (colorBoxElement,index)=> {
            colorBoxElement.addEventListener("click",(e) => {
                let color = e.target.dataset.color; 
                console.log(color);
                rootElement.style.setProperty('--main-color',color);
            });
        });
    }

    if (btnEditExpNum) {
        btnEditExpNum.addEventListener("click", (e) => {
            let _expNum = prompt("Experment Number", 0);
            _expNum = _expNum.replace(/<[^>]*>?/gm, '');
            if (_expNum && _expNum != 0) {
                console.log("Exp Num is: " + _expNum);
                document.getElementsByClassName("text-value--experimentNumber")[0].innerHTML = _expNum;
            } else {
                console.log("Error:- no Exp Num!!");
                document.getElementsByClassName("text-value--experimentNumber")[0].innerHTML = "99";

            }
        })
    }

    if (btnEditExpName) {
        btnEditExpName.addEventListener("click", (e) => {
            let _expName = prompt("Experment Name", "Name of Experiment Here...");
            if (_expName != "") {
                console.log("Exp Name is: " + _expName);
                document.getElementsByClassName("text-value--experimentName")[0].innerHTML = _expName;
            } else {
                document.getElementsByClassName("text-value--experimentName")[0].innerHTML = _expName;

            }
        })
    }


    if (btnAddNewName) {
        btnAddNewName.addEventListener("click", (e) => {
            let _name = prompt("Name of Student", "");
            _name = _name.replace(/<[^>]*>?/gm, '');
            if (_name != "") {
                if (arrayName.length >= MAX_NAMES){
                    console.log("Names are Full!!");
                    return;
                }else{
                    arrayName.push(_name);
                    // loop through names
                    let __names = "";
                    arrayName.forEach((item,index) => {
                        let _id = new Date().getTime()
                        __names += `<span  id="${index}">${item}   <button class='no-print' onclick="document.getElementById('${index}').remove();arrayName = arrayName.filter((item,index)=> index !== ${index});">حذف</button></br></span>`;
                    });
                    document.getElementsByClassName("text-value--preparedBy")[0].innerHTML = __names;
                }
            } else {
                console.log("Error in the name of student");
            }
        })
    }


    if(selectClass){
        selectClass.addEventListener("change",(e)=>{
            document.getElementsByClassName("text-value--class")[0].innerHTML = e.target.value;
        });
    }
    if(selectStudying){
        selectStudying.addEventListener("change",(e)=>{
            document.getElementsByClassName("text-value--studying")[0].innerHTML = e.target.value;
        });
    }

    if(expDate){
        expDate.addEventListener("change",(e)=>{
            let _newDate = e.target.value;
            _newDate = _newDate.split('-')
            let _expDate = `${_newDate[0]} / ${_newDate[1]} / ${_newDate[2]}`

            document.getElementsByClassName("text-value--date")[0].innerHTML = _expDate
        });
    }


    const ministryENElement = document.getElementById("ministryEN");
    const ministryARElement = document.getElementById("ministryAR");
    console.log(ministryENElement.innerHTML);
    console.log(ministryARElement.innerHTML);
});