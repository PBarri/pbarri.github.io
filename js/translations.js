$.i18n().load({
  'en': 'i18n/en.json',
  'es': 'i18n/es.json'
}).done(function() {
  $('html').i18n();
});
