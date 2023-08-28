var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
const eventController = require("./../controllers/events.controllers");
const participantsController = require("./../controllers/participants.controller");
const roomsController = require("./../controllers/rooms.controller");
const amDashboardController = require("./../controllers/am-dasboard-controller");
const authController = require("./../controllers/auth.controllers");
const employeesController = require("./../controllers/employees.controller");
const attachmentsController = require("./../controllers/attachments.controller");

urlencoded = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// router.post('/signin', authController.login);

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



module.exports = router;
