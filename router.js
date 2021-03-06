const router = require('express').Router()
const passport = require('passport')
// Import strategies from passport service
require('./services/passport')

const auth = require('./controllers/auth')
const pill = require('./controllers/pill')

const requireSignin = passport.authenticate('local', {session: false})
const requireToken = passport.authenticate('jwt', {session: false})

// Routes with special middleware requirements
// /signup route requires no authentication
// /signin route requires local passport authentication\\
router.post('/signup', auth.signup)
router.post('/signin', requireSignin, auth.signin)
// Use requireToken middleware for all other routes
router.use("/*", requireToken)
// Additional routes requiring tokens
// must be placed below
router.route('/pills')
    .post(pill.createPill)
    .get(pill.getPills)

router.route('/pills/:pill_id')
    .put(pill.editPill)
    .delete(pill.deletePill)
    
module.exports = router