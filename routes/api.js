var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
const eventController = require("./../controllers/events.controllers");
const participantsController = require("./../controllers/participants.controller");
const roomsController = require("./../controllers/rooms.controller");
const amDashboardController = require("./../controllers/am-dasboard-controller");
const pdmDashboardController = require("./../controllers/pdm-dashboard-controllers");
const kluberController = require("./../controllers/kluber-controller");
const documentationController = require("./../controllers/sms-doc-controller");
const authController = require("./../controllers/auth.controllers");
const employeesController = require("./../controllers/employees.controller");
const attachmentsController = require("./../controllers/attachments.controller");

urlencoded = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post('/signin', authController.login);

router.get("/events", eventController.index);
router.post("/events", eventController.store);
router.get("/events/:from/:to", eventController.dateRange);
router.post("/events/:id", eventController.update);
router.delete("/events/:id", eventController.destroy);

router.get("/participants", participantsController.index);
router.post("/participants", participantsController.store);
router.delete("/participants/:eventId", participantsController.destroy);

router.get("/rooms", roomsController.index);

// -------------------------------> Employees
router.get("/employees/email", employeesController.employeesEmail);
router.get("/employees/m2up", employeesController.employeesM2Up);
router.get("/employees/name-email", employeesController.employeesNameEmail);

//--------------------------------> Attachments
router.get("/attachments", attachmentsController.index);
router.get("/attachments/:eventId", attachmentsController.getById);
router.delete("/attachments/:eventId", attachmentsController.destroy);

////////////////////////////
// ROUTE FOR DASHBOARD AM //
////////////////////////////
router.get('/totalf',amDashboardController.read);
router.get('/totalreadpendingexecute',amDashboardController.readpendingexecute);
router.get('/totalreadreadyexecute', amDashboardController.readreadyexecute);
router.get('/totalreadfinishexecute', amDashboardController.readfinishexecute);
router.get('/totalfindingm',amDashboardController.readTotalFindingM);
router.get('/totalpendingexecutem',amDashboardController.readpendingexecutem);
router.get('/totalreadyexecutem',amDashboardController.readreadyexecutem);
router.get('/totalfinishexecutem',amDashboardController.readfinishexecutem);
router.get('/findingpending',amDashboardController.findingpending);
router.get('/funcloc',amDashboardController.funcloc);
router.get('/funclococi2',amDashboardController.funclococi2);
router.get('/funclocfsb',amDashboardController.funclocfsb);
router.get('/findingpendingsection',amDashboardController.findingpendingsection);
router.get('/findingpendingsectionoci2',amDashboardController.findingpendingsectionoci2);
router.get('/findingpendingsectionfsb',amDashboardController.findingpendingsectionfsb);
router.get('/levelam',amDashboardController.levelam);
router.get('/totalfindingmoci2',amDashboardController.readTotalFindingMoci2);
router.get('/totalpendingexecutemoci2',amDashboardController.readpendingexecutemoci2);
router.get('/totalreadyexecutemoci2',amDashboardController.readreadyexecutemoci2);
router.get('/totalfinishexecutemoci2',amDashboardController.readfinishexecutemoci2);
router.get('/findingpendingoci2',amDashboardController.findingpendingoci2);
router.get('/levelamoci2',amDashboardController.levelamoci2);
router.get('/totalfindingmfsb',amDashboardController.readTotalFindingMfsb);
router.get('/totalpendingexecutemfsb',amDashboardController.readpendingexecutemfsb);
router.get('/totalreadyexecutemfsb',amDashboardController.readreadyexecutemfsb);
router.get('/totalfinishexecutemfsb',amDashboardController.readfinishexecutemfsb);
router.get('/findingpendingfsb',amDashboardController.findingpendingfsb);
router.get('/findingpendingutileng', amDashboardController.findingpendingutileng);
router.get('/levelamutileng', amDashboardController.levelamutileng);
router.get('/levelamfsb',amDashboardController.levelamfsb);
router.get('/kategori',amDashboardController.kategori);
router.get('/getorder',amDashboardController.getOrder);
router.get('/total1year',amDashboardController.totaldata1year);
router.post('/totaldatapost', amDashboardController.totaldatapost);
router.get('/totalfeeding', amDashboardController.totalfeeding);
router.get('/totalapproval', amDashboardController.totalapproval);
router.post('/totalapprovalorderfinish', amDashboardController.totalapprovalorderfinish);
router.post('/totalapprovalshcedule', amDashboardController.totalapprovalshcedule);
router.post('/reportingharianam',amDashboardController.reportingharianam);
router.post('/totalpartreporting',amDashboardController.totalpartreporting);

/////////////////////////////
// ROUTE FOR DASHBOARD PDM //
/////////////////////////////
router.get('/totalpdmasset', pdmDashboardController.readtotalasset);
router.get('/totalpdmassetoci1', pdmDashboardController.readtotalassetoci1);
router.get('/pdmassetoci1', pdmDashboardController.readassetoci1);
router.get('/pdmassetoci2', pdmDashboardController.readassetoci2);
router.get('/pdmassetfsb', pdmDashboardController.readassetfsb);
router.get('/totalpdmassetoci2', pdmDashboardController.readtotalassetoci2);
router.get('/totalpdmassetfsb', pdmDashboardController.readtotalassetfsb);
router.get('/totalreadfinishpdm',pdmDashboardController.readtotalfinish);
router.get('/totalreadfinishpdmoci1',pdmDashboardController.readtotalfinishoci1);
router.get('/totalreadfinishpdmoci2',pdmDashboardController.readtotalfinishoci2);
router.get('/totalreadfinishpdmfsb',pdmDashboardController.readtotalfinishfsb);
router.get('/totalgoodandsatis',pdmDashboardController.readgoodandsatis);
router.get('/totalgoodandsatisoci1',pdmDashboardController.readgoodandsatisoci1);
router.get('/totalgoodandsatisoci2',pdmDashboardController.readgoodandsatisoci2);
router.get('/totalgoodandsatisfsb',pdmDashboardController.readgoodandsatisfsb);
router.get('/totalgoodandsatisoci1y',pdmDashboardController.readgoodandsatisoci1y);
router.get('/totalgoodandsatisoci2y',pdmDashboardController.readgoodandsatisoci2y);
router.get('/totalgoodandsatisfsby',pdmDashboardController.readgoodandsatisfsby);
router.get('/totalunsatisunac',pdmDashboardController.unsatisunac);
router.get('/totalunsatisunacoci1',pdmDashboardController.unsatisunacoci1);
router.get('/totalunsatisunacoci2',pdmDashboardController.unsatisunacoci2);
router.get('/totalunsatisunacfsb',pdmDashboardController.unsatisunacfsb);
router.get('/totalasetoci1',pdmDashboardController.assetoci1);
router.get('/totalasetoci2',pdmDashboardController.assetoci2);
router.get('/totalasetfsb',pdmDashboardController.assetfsb);
router.get('/totaloci1good',pdmDashboardController.oci1good);
router.get('/totaloci1satis',pdmDashboardController.oci1satis);
router.get('/totaloci1unsatis',pdmDashboardController.oci1unsatis);
router.get('/totaloci1unacc',pdmDashboardController.oci1unacc);
router.get('/totaloci2good',pdmDashboardController.oci2good);
router.get('/totaloci2satis',pdmDashboardController.oci2satis);
router.get('/totaloci2unsatis',pdmDashboardController.oci2unsatis);
router.get('/totaloci2unacc',pdmDashboardController.oci2unacc);
router.get('/totalfsbgood',pdmDashboardController.FSBgood);
router.get('/totalfsbsatis',pdmDashboardController.FSBsatis);
router.get('/totalfsbunsatis',pdmDashboardController.FSBunsatis);
router.get('/totalfsbunacc',pdmDashboardController.FSBunacc);
router.get('/finishtodaylistoci1',pdmDashboardController.finishtodaylistoci1);
router.get('/finishtodaylistoci1testname',pdmDashboardController.finishtodaylistoci1testname);
router.get('/finishtodaylistoci2',pdmDashboardController.finishtodaylistoci2);
router.get('/finishtodaylistfsb',pdmDashboardController.finishtodaylistfsb);
router.get('/finishtodaylistoci1abnormal',pdmDashboardController.finishtodaylistoci1abnormal);
router.get('/finishtodaylistoci2abnormal',pdmDashboardController.finishtodaylistoci2abnormal);
router.get('/finishtodaylistfsbabnormal',pdmDashboardController.finishtodaylistfsbabnormal);
router.get('/vibrationlineoci1',pdmDashboardController.vibrationlineoci1);
router.get('/vibrationlineoci2',pdmDashboardController.vibrationlineoci2);
router.get('/vibrationlinefsb',pdmDashboardController.vibrationlinefsb);
router.get('/amperelineoci1',pdmDashboardController.amperelineoci1);
router.get('/amperelineoci2',pdmDashboardController.amperelineoci2);
router.get('/amperelinefsb',pdmDashboardController.amperelinefsb);
router.get('/temperaturelineoci1',pdmDashboardController.temperaturelineoci1);
router.get('/temperaturelineoci2',pdmDashboardController.temperaturelineoci2);
router.get('/temperaturelinefsb',pdmDashboardController.temperaturelinefsb);
router.get('/notepdm',pdmDashboardController.notepdm);
router.get('/oci1fnotfinish',pdmDashboardController.oci1fnotfinish);
router.get('/oci2fnotfinish',pdmDashboardController.oci2fnotfinish);
router.get('/fsbffinish',pdmDashboardController.fsbffinish);
router.get('/fsbfnotfinish',pdmDashboardController.fsbfnotfinish);
router.get('/oci1valuepermonth',pdmDashboardController.oci1valuepermonth);
router.get('/oci2valuepermonth',pdmDashboardController.oci2valuepermonth);
router.get('/fsbvaluepermonth',pdmDashboardController.fsbvaluepermonth);

//////////////////////////////
//ROUTE FOR DASHBOARD KLUBER//
//////////////////////////////
router.get('/oilproduct', kluberController.oilproduct);
router.get('/greaseproduct', kluberController.greaseproduct);
router.get('/spraysproduct', kluberController.spraysproduct);
router.get('/maintenanceproduct', kluberController.maintenanceproduct);
router.get('/pasteproduct', kluberController.pasteproduct);
router.get('/injection', kluberController.injectionmolder);
router.get('/bottle', kluberController.bottleshower);
router.get('/fillerpetline1', kluberController.fillerpetline1);
router.get('/krones', kluberController.krones);
router.get('/sanyu', kluberController.sanyu);
router.get('/labeller', kluberController.labeller);
router.get('/divider', kluberController.divider);
router.get('/sheetfeeder', kluberController.sheetfeeder);
router.get('/shrinktray', kluberController.shrinktray);
router.get('/packconveyor', kluberController.packconveyor);
router.get('/palletconveyor', kluberController.palletconveyor);
router.get('/palletiser', kluberController.palletiser);
router.get('/packroller', kluberController.packroller);
router.get('/injectionmolderpt2', kluberController.injectionmolderpt2);
router.get('/bottleblowerpt2', kluberController.bottleblowerpt2);
router.get('/fillerpt2', kluberController.fillerpt2);
router.get('/conveyorpt2', kluberController.conveyorpt2);
router.get('/labellerpt2', kluberController.labellerpt2);
router.get('/sanyupt2', kluberController.sanyupt2);
router.get('/caserpt2', kluberController.caserpt2);
router.get('/sheetfeederpt2', kluberController.sheetfeederpt2);
router.get('/packconveyorpt2', kluberController.packconveyorpt2);
router.get('/palletconveyorpt2', kluberController.palletconveyorpt2);
router.get('/palletiserpt2', kluberController.palletiserpt2);
router.get('/offpackmain', kluberController.offlinepackingmain);
router.get('/pet1', kluberController.pet1);
router.get('/pet2', kluberController.pet2);
router.get('/press1', kluberController.press1);
router.get('/press2', kluberController.press2);
router.get('/cip', kluberController.cip);
router.get('/oxonia', kluberController.oxonia);
router.get('/containeroff', kluberController.containeroff);
router.get('/robopackeroff', kluberController.robopackeroff);
router.get('/resealeroff', kluberController.resealeroff);
router.get('/packconveyoroff', kluberController.packconveyoroff);

/////////////////////////////////
// ROUTE FOR DOCUMENTATION SMS //
/////////////////////////////////
router.get('/section', documentationController.read);
router.get('/database/:id', documentationController.section);
router.get('/table/:id', documentationController.tables);

//////////////////////////////
// ROUTE FOR DASHBOARD BIG5 //
//////////////////////////////
// router.get('/big5/get', big5Controller.read);
// router.post('/big5/getbyid', big5Controller.readbyid);
// router.post('/big5/getbydate', big5Controller.readbydate);



module.exports = router;
