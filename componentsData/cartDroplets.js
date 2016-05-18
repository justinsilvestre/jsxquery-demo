const jsxQuery = require('jsxquery');

function getProductUrl(item) {
  return [
    (<c:set var="productUrl" value="" />),
    (<dsp:droplet name="/com/amplifi/bolt/endeca/droplet/EndecaProductLinkDroplet">
      <dsp:param name="product" value={item.auxiliaryData.productRef}/>
      <dsp:param name="sku" value={item.auxiliaryData.catalogRef} />
      <dsp:oparam name="output">
        <dsp:getvalueof var="url" param="url"/>
        <c:url var="productUrl" value="${url}"/>
      </dsp:oparam>
    </dsp:droplet>),
  ];
}

module.exports.getProductUrl = getProductUrl;