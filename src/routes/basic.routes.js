var router = require("express").Router();
var {validateCommonCode} = require("../main/basicInfo/middleware/generalcommoncode.middleware");
var generalcommoncodeController = require("../main/basicInfo/controller/generalcommoncode.controller");
console.log("basic info routes");
router.post("/createCommonCode", generalcommoncodeController.createCommonCode);
router.post("/getCommonCodeInfo",generalcommoncodeController.getCommonCodeInfo);
router.post("/getListCommonCodes",generalcommoncodeController.getListCommonCodes);
router.post("/getListGeneralCodes",generalcommoncodeController.getListGeneralCodes)
router.get("/test",(req,res)=>{
    res.json({data :"test basicInfo"})
});
router.get("/getCommonCodeDetail",generalcommoncodeController.getCommonCodeDetail)
module.exports = router;