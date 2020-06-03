const express =  require('express');


const headerController = require('./../controller/headerController');
const viewController = require('./../controller/viewController')
const router  = express.Router();


router.route('/').get(viewController.viewHeader);
router.route('/').post(headerController.changeHeader);
router.route('/submit').post(headerController.submitHeader);

// router.route('/:qno').post(questionController.createQuestion);
// router.route('/paper/:qno/:pno').post(questionController.createPaper);
// router.route('/:qno/:pno').get(questionController.getPaper);


module.exports = router;