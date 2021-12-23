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
async function harvestPlan(landId ) {
    var response = await axios.post("https://api.happyland.finance/api/b2/getDataPlantCare",{landId: landId, seedId: null});
    if(response.status == 200){
        //102 trong 105 thu hoach 104 tuoi nuoc
        console.log("success "+landId);
    }else{
        console.log("error "+landId);
    }
}
//chăm sóc vật nuôi
async function careAnimal(animalType,animalId){
    var response = await axios.post("b2/getDataAnimalCare",{animalType: animalType, animalId: animalId});
    if(response.data){
        console.log(response.message+animalType);
    }else{
        console.log("error "+animalType);
    }
}
//thu hoạch nông sản (trứng gà, trứng vịt)
async function collectAgricultural(productType){
    var response = await axios.post("https://api.happyland.finance/api/b2/collectAgricultural",{productType: productType});
    if(response.data){
        //102 trong 105 thu hoach 104 tuoi nuoc
        console.log("Thu hoach vat nuoi"+productType);
    }else{
        //101
        console.log("error "+productType);
    }
}
//danh sách hạt giống trong kho
async function getListSeed(){
    var response = await axios.post("https://api.happyland.finance/api/b1/getListPlantSeeds");
    if(response.data.errorCode === 0){
        return response.data;
    } else{
        return [];
    }
}
//danh sách hạt giống kho shop
async function getDataShop(){
    var response = await axios.post("b1/getDataSeedsShop",{});
    if(response.errorCode === 0){
        return response.data.tree;
    }else{
        return [];
    }
}
//danh sách nông sản trong kho
async function getDataInStore(){
    var response = await axios.post("b2/getDataStoreHouse",{});
    if(response.errorCode === 0){
        return response.data;
    }else{
        return [];
    }
}
//kiểm tra level
async function checkPlantMax(seeds){
    if(seeds.length == 0 || farm.data.level !== seeds[seeds.length-1].id){
        return false;
    }
    return true;
}
//bán cây {id:'',quantity}
async function sellTree(params){
    var response = await axios.post("b1/sellTree",params);
    if(response.errorCode === 0){
        console.log("da ban all 1 item");
    }else{
        console.log("error ban all 1 item");
    }
}
//thông tin 1 ô đất
async function getAField(landId){
    var response = await axios.post("b2/getDataLandUmbrella",{landId: landId});
    if(response.errorCode === 0){
        return response.data;
    }else{
        return null;
    }
}
//mua đất
async function buyLand(){
    var response = await axios.post("b2/buyLand",{});
    if(response.errorCode === 0){
        console.log("da mua 1 land");
    }else{
        console.log("error mua 1 land");
    }
}
//mua pet(dog)
async function buyPet(params){
    var response = await axios.post("b1/buyPet",params);
    if(response.errorCode === 0){
        console.log("da mua pet");
    }else{
        console.log("error mua pet");
    }
}
//mua vat nuoi
async function buyAnimal(params){
    var response = await axios.post("b2/buyAnimal",params);
    if(response.errorCode === 0){
        console.log("da mua vat nuoi");
    }else{
        console.log("error mua vat nuoi");
    }
}
//trồng cây
async function plantTree(landId , seedId) {
    var response = await axios.post("https://api.happyland.finance/api/b2/getDataPlantCare",{landId: landId, seedId: seedId});
    if(response.status == 200){
        //102 trong 105 thu hoach 104 tuoi nuoc
        console.log("success "+landId);
    }else{
        console.log("error "+landId);
    }
}
//mua cây
async function buyTre(id, quantity) {
    var response = await axios.post("b2/buyTree",{id: itemBuy.id,quantity: 1});
    if(response.status == 200){
        //102 trong 105 thu hoach 104 tuoi nuoc
        console.log("success "+landId);
    }else{
        console.log("error "+landId);
    }
}

//bán các loại cây và quả 
async function sellAll(id, quantity) {
    var response = await axios.post("b1/sellTree",{id: id, quantity: quantity});
    if(response.status == 200){
        //102 trong 105 thu hoach 104 tuoi nuoc
        console.log("success "+landId);
    }else{
        console.log("error "+landId);
    }
}
delay = ms => new Promise(res => setTimeout(res, ms));
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
    while (true) {
        const playerInfor = await axios.post('https://api.happyland.finance/api/b1/getPlayerInfo') 
        playerInformation.setObj = playerInfor.data
        
        // array miếng đất lớn
        let lands = playerInformation.getObj.data.Farm.land

        for(let i = 0 ; i < lands.length ;i++) {
            // array miếng đất nhỏ trong 1 miếng đất lớn
            let arrLand = lands[i].data
            for(let k = 0 ; k < arrLand.length ; k++) {
                let land = arrLand[k]
                if(land.tree != null) {
                    console.log("có cay")
                    const timeNow = new Date().getTime()
                    // tưới cây
                    if(land.tree.isWater == true) {
                        console.log("chuẩn bị tưới cây")
                        await harvestPlan(land.id, null)
                        console.log("tưới cây xong")
                    }   
                    // bắt sâu 
                    if(land.tree.isWorm == true) {
                        console.log("chuẩn bị bắt sâu")
                        await harvestPlan(land.id, null)
                        console.log("bắt sâu xong")
                    }
                    // thu hoạch
                    if(land.tree.growthAt <= timeNow) {
                        console.log("chuẩn bị thu hoạch")
                        await harvestPlan(land.id, null)
                        console.log("thu hoạch xong")
                    }
                } else {
                    console.log("trồng cây") 
                    //lấy hết tất cả cây đang có
                    let trees = await getListSeed()
                    //check xem coi còn cấy nào không
                    if(trees.data.length > 0) {
                        var treeId = trees.data[0].id
                        //trồng cây
                        console.log("chuẩn bị trồng cây")
                        await plantTree(land.id, treeId)
                        console.log("trồng cây xong")
                    }

                }
            }
        }
        // thu hoạch 
        let harvest = playerInformation.getObj.data.CattleFarm
        let harvestChickenEggs = harvest.harvestChickenEggs.count
        let harvestDuckEggs = harvest.harvestDuckEggs.count

        if(harvestChickenEggs > 0) {
            console.log("chuẩn bị thu hoạc trứng gà")
            await collectAgricultural('harvestChickenEggs')
            console.log("thu hoạch trứng gà xong")
        }

        if(harvestDuckEggs > 0) {
            console.log("chuẩn bị thu hoạc trứng vịt")
            await collectAgricultural('harvestDuckEggs')
            console.log("thu hoạch trứng vịt xong")
        }

        await delay(10000)
    }
    
    
    
}
main()