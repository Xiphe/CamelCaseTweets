jQuery(function($) {
  var $symbols = $('#deletesymbols'),
      $in = $('#camecasethis'),
      $out = $('#camecasehere'),
      $counter = $('#counthere'),
      $saved = $('#savedhere');

  function camelize() {
    var text = $in.val(),
        original = text;


    text = text.replace(/[@#]?[^\s]*\s+([^\s@#])/g, function(letter, index) {
      if (!/[@#]/.test(letter[0])) {
        return letter.replace(/\s+([^\s])/g, function($1) {
          return $1.replace(/\s+/g, '').toUpperCase();
        });
      }
      return letter;
    });

    text = $.trim(text);

    if ($symbols.is(':checked')) {
      text = text.split(' ');

      for (var i = text.length - 1; i >= 0; i--) {
        if (!/[@#]/.test(text[i][0])) {
          text[i] = text[i].replace(/[^\w#@ ]/g, '');
        }
      }

      text = text.join(' ');
    }

    $out.text(text);
    $counter.text(text.length);
    $saved.text(original.length - text.length);
  }

  camelize();

  $symbols.on('click', camelize);
  $in.on('keyup', camelize);
});
