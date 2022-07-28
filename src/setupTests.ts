// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mock matchmedia
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

// Fix for "ResizeObserver is not defined"
// https://github.com/ZeeCoder/use-resize-observer/issues/40#issuecomment-991256805
global.ResizeObserver = require('resize-observer-polyfill');
