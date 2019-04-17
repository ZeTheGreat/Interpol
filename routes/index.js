var express = require('express');
var router = express.Router();
var i18n = require("i18n");

i18n.configure({
  locales: ['pt_BR', 'zh_HANS'],
  directory: __dirname + '../../locales',
  defaultLocale: 'pt_BR'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  ps = [i18n.__('Title'), i18n.__('Text'), i18n.__('Imgurl')]
  res.render('index', {Title:ps[0], Text:ps[1], Imgurl:ps[2]} );
});



module.exports = router;