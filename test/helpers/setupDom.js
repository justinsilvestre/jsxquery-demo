const jsdom = require('jsdom');

const setupDom = (el, callback) => {
  const markup = el.markup();

  global.window = jsdom.jsdom(markup).defaultView;
  jsdom.jQueryify(window, './node_modules/jquery/dist/jquery.js', () => {
    global.$ = window.$;
    $(window.document).ready(() => {
      if (callback)
        callback()
    });
  });
}

module.exports = setupDom;