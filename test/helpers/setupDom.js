const jsdom = require('jsdom');
const _eval = require('node-eval');

const setupDom = (el, script) => (done) => {
  const markup = el.markup();

  const src = script ? [] : [];
  
  global.window = jsdom.jsdom(markup).defaultView;
  jsdom.jQueryify(window, './node_modules/jquery/dist/jquery.js', () => {
    global.$ = window.$;
    $(window.document).ready(() => {
      if (script)
        _eval.call(window, script)
      done();
    });
  });
}

module.exports = setupDom;