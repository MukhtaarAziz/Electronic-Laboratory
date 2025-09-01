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

    // Root and root style
    rootElement =  document.querySelector(":root");
    let rootComputedStyle = getComputedStyle(rootElement);
    mainColor = rootComputedStyle.getPropertyValue("--main-color");

    // Color Boxes
    colorBoxesElements = document.querySelectorAll(".color-box");
    // Experiment Properties
    btnEditExpNum = document.getElementById("btnEditExpNum");
    btnEditExpName = document.getElementById("btnEditExpName");
    btnAddNewName = document.getElementById("btnAddNewName");
    selectStudying = document.getElementById("selectStudying");
    selectClass = document.getElementById("selectClass");
    expDate = document.getElementById("expDate");



    // Event Handlers

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