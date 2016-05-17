const jsdom = require('jsdom');

const setupDom = (el) => (done) => {
  const markup = el.markup();
  
  global.window = jsdom.jsdom(markup).defaultView;
  jsdom.jQueryify(window, './node_modules/jquery/dist/jquery.js', () => {
    global.$ = window.$;
    $(window.document).ready(() => {
      done();
    });
  });
}

module.exports = setupDom;