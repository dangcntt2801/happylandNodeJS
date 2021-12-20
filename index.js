const axios = require('axios');

const COMMON_TREE = {
    Tomato : {
        id: 1,
        name: "Tomato",
        price: 100
    },
    Carrot: {
        id: 2,
        name: "Carrot",
        price: 200
    },
    Sunflower: {
        id: 3,
        name: "Sunflower",
        price: 300
    },
    Rose: {
        id: 4,
        name: "Rose",
        price: 600
    },
    Watermelon: {
        id: 5,
        name: "Watermelon",
        price: 500
    },
    Lavender: {
        id: 6,
        name: "Lavender",
        price: 600
    },
    Corn: {
        id: 7,
        name: "Corn",
        price: 700
    },
    Wheat: {
        id: 8,
        name: "Wheat",
        price: 800
    },
    Sugarcane: {
        id: 9,
        name: "Sugarcane",
        price: 900
    },
    Grape: {
        id: 10,
        name: "Grape",
        price: 1000
    },
    Coconut: {
        id: 11,
        name: "Coconut",
        price : 1100
    }
}
const COMMON_ANIMAL = {

}

var userInfor = {
    'name' : "sutu9579",
    "pass" : "danghuynh",
    token : "",
    get getToken() {
        return this.token;
    },
    set setToken(val) {
        this.token = val;
    }
}
var playerInformation = {
    obj: {},
    get getObj() {
        return this.obj;
    },
    set setObj(val) {
        this.obj = val;
    }
}
// thu hoạch cây
async function harvestPlan() {

}
//thu hoạch trứng gà
async function harvestChicken() {

}
//thu hoạch trứng vịt
async function harvestDuck() {

}
//trồng cây
async function plantTree() {

}
//mua cây
async function buyTre(type, quantity) {

}
//mua pet
async function butAnimal(type, quantity) {

}
//bán các loại cây và quả 
async function sellAll(type, quantity) {

}
async function main() {
    const login = await axios.post('https://api.happyland.finance/api/b1/login', {msisdn: userInfor.name, password: userInfor.pass})

    if(login.status == 200) {
        userInfor.setToken = login.data.data.token
    }

    //set token header cho axios
    axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${userInfor.getToken}`;
        return config;
    });

    const playerInfor = await axios.post('https://api.happyland.finance/api/b1/getPlayerInfo') 
    playerInformation.setObj = playerInfor.data
    console.log(playerInformation)
    
    
}
main()