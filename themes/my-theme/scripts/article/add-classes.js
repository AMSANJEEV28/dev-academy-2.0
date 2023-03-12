hexo.extend.tag.register('add_classes', function (args) {
  var text = args[0];
  var classes = args[1] ? args[1]: '';
  return `<p class="${classes}">${text}</p>`;
});
