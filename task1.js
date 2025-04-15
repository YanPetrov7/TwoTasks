// It could be a single unified function approach, 
// but I prefered to separate get/set functions to 
// improve reusability and scalability.

function getStyles(sourceStyles) {
  const stylesKeys = Object.keys(sourceStyles);
  const styleState = {};

  for (const key of stylesKeys) {
    styleState[key] = this[key];
  }

  return styleState;
}

function setStyles(sourceStyles, isDefault = false) {
  const stylesKeys = Object.keys(sourceStyles);

  for (const key of stylesKeys) {
    this[key] = isDefault ? sourceStyles[key].canvas : sourceStyles[key];
  }
}

ctx.prototype.__getStyleState = function () {
  return getStyles.call(this, STYLES);
};

ctx.prototype.__setDefaultStyles = function () {
  setStyles.call(this, STYLES, true);
};

ctx.prototype.__applyStyleState = function (styleState) {
  setStyles.call(this, styleState);
};
