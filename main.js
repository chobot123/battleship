/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "// extracted by mini-css-extract-plugin\nexport {};", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "// extracted by mini-css-extract-plugin\nexport {};", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeBoards": () => (/* binding */ makeBoards),
/* harmony export */   "toggleBoardOpacity": () => (/* binding */ toggleBoardOpacity)
/* harmony export */ });
/**
 * @description           Creates the DOM boards for player and computer  
 * @returns { boards }    The DOM container holding both boards
 */
const makeBoards = () => {

    const boards = document.createElement("div");
    boards.className = "boards";
    
    const  playerOne = document.createElement("div");
    const playerTwo = document.createElement("div");
    playerOne.className = 'playerOne';
    playerTwo.className = 'playerTwo';
    playerTwo.style.display = `none`;

    const pOneBoard = document.createElement("div");
    const pTwoBoard = document.createElement("div");
    pOneBoard.className = `board one`;
    pTwoBoard.className = `board two`;

    const pOneBoardTitle = document.createElement("id");
    pOneBoardTitle.id = "board-title";
    pOneBoardTitle.textContent = "My Board";

    const pTwoBoardTitle = document.createElement("id");
    pTwoBoardTitle.id = "board-title";
    pTwoBoardTitle.textContent = "Computer Board";


    makeGrid(pOneBoard);
    makeGrid(pTwoBoard);
    playerOne.appendChild(pOneBoardTitle);
    playerTwo.appendChild(pTwoBoardTitle);
    playerOne.appendChild(pOneBoard);
    playerTwo.appendChild(pTwoBoard);
    boards.appendChild(playerOne);
    boards.appendChild(playerTwo);

    return boards;
}

/**
 * @description                     Creates cells for the board grid
 * 
 * @param {DOMElement} thisBoard    Board DOM element
 */
const makeGrid = (thisBoard) => {
    let j = 0;
    for(let i = 0; i < 100; i++) {
        if(i % 10 === 0 && i > 0){
            j++;
        }
        let cell = document.createElement("div");
        cell.className = 'cell';
        cell.innerHTML = `${j}${i % 10}`;
        cell.style.color = "rgba(0,0,0,0)";
        cell.style.userSelect = "none";
        thisBoard.appendChild(cell);
    }
}

/**
 * @description                 Changes opacity of the board 
 * @param {DOMElement} board    Board DOM element
 */
const toggleBoardOpacity = (board) => {
    board.classList.toggle("opacity");
}



/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTitle": () => (/* binding */ makeTitle)
/* harmony export */ });
/**
 * @description         Creates title of the page
 * @returns { title }   Title of game
 */
const makeTitle = () => {
    const title = document.createElement("h1");
    title.id = "title";
    title.innerHTML = "Battleship";
    return title;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/scripts/factory/player.js
/**
 * Factory Function
 * @description     Determine player turn and which board to attack
 * 
 * @returns { myTurn, attack} 
 */
const Player = () => {

    //status of player turn
    let myTurn = false;

    /**
     * 
     * @param {*} board The board object (see gameBoard)
     * @param {*} x                     the x-coordinate
     * @param {*} y                     the y-coordinate
     * @returns board.receiveAttack     Sends an attack to the chosen board
     */
    const attack = (board, x, y) => {
        myTurn = false;
        return board.receiveAttack(x, y);
    }

    return {
        myTurn,
        attack
    }
}

/* harmony default export */ const player = (Player);
;// CONCATENATED MODULE: ./src/scripts/UI/renderShips/displayShips.js
/**
 * @description                 Creates a ship with length cells and with className name
 * @param {String} name         Name of ship
 * @param {Number} length       Length of ship
 * @returns { shipWrapper }     Ship element
 */
const displayShip = (name, length) => {

        const shipWrapper = document.createElement("div");
        const ship = document.createElement("div");

        shipWrapper.appendChild(ship);
        shipWrapper.className = `${name}-container`;
        shipWrapper.style.display = `flex`;

        ship.className = name;
        ship.style.display = `grid`;
        ship.style.minWidth = `40px`;
        ship.style.minHeight = `${40 * length}px`;
        ship.style.gridTemplateRows = `repeat(${length}, minmax(0, 40px))`;
        ship.setAttribute("draggable", "true");
        ship.classList.add('vertical');



        for(let i = 0; i < length; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.classList.add("ship");
            cell.innerHTML = i;
            cell.style.color = "transparent";
            ship.appendChild(cell);
        }
        return shipWrapper;
}

/**
 * @description                 Makes ship vertical in alignment by removing the class ('horizontal')
 *                              and adding the class ('vertical')
 * 
 * @param {DOMElement} ship     Ship DOM element
 */
const makeVertical = (ship) => {

    ship.classList.remove('horizontal');
    ship.classList.add('vertical');
    ship.style.gridTemplateRows = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `${40 * length}px`;
    ship.style.minWidth = `40px`;
    ship.style.gridTemplateColumns = "";
}

/**
 * @description                 Makes ship horizontal in alignment by removing the class ('vertical')
 *                              and adding the class ('horizontal')
 * 
 * @param {DOMElement} ship     Ship DOM element
 */
const makeHorizontal = (ship) => {

    ship.classList.remove('vertical');
    ship.classList.add('horizontal');
    ship.style.gridTemplateColumns = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `40px`;
    ship.style.minWidth = `${40 * ship.children.length}px`;
    ship.style.gridTemplateRows = "";
}

/**
 * @description                     Creates a container for all ships and appends all ships to said container
 * 
 * @returns { shipsContainer }      DOM element containing all ships to place
 */
const getShips = () => {

    const shipsContainer = document.createElement("div");
    shipsContainer.className = `ships-container`;

    shipsContainer.appendChild(displayShip('carrier', 5));
    shipsContainer.appendChild(displayShip('battleship', 4));
    shipsContainer.appendChild(displayShip('cruiser', 3));
    shipsContainer.appendChild(displayShip('submarine', 3));
    shipsContainer.appendChild(displayShip('destroyer', 2));

    return shipsContainer;
}



;// CONCATENATED MODULE: ./src/scripts/UI/instructions.js


/**
 * Module
 * 
 * @description                                     Creates instructions for when the player
 *                                                  is supposed to place ships and game objective afterwords
 * @returns { shipInstructions, gameInstructions }
 */
const instructions = (() => {

    const instructions = document.createElement("div");
    instructions.className = "instructions";

    const shipInstructions = () => {
        instructions.textContent = "Double Click a Ship to Change Orientation";
        return instructions;
    }

    const gameInstructions = () => {
        instructions.textContent = "Destroy the Enemy Ships";
        return instructions;
    }

    return {
        shipInstructions,
        gameInstructions,
    }

})();

/* harmony default export */ const UI_instructions = (instructions);
// EXTERNAL MODULE: ./src/scripts/UI/boards.js
var boards = __webpack_require__(779);
;// CONCATENATED MODULE: ./src/scripts/UI/renderShips/placeShips.js




/**
 * @description                 Contains a series of event handlers that handles
 *                              orienting and placing the ships on the board DOM.
 *                              renderShips 'ends' when all ships are on the board
 * 
 * @param {Object} gameBoard 
 */
const renderShips = (gameBoard) => {

    let shipCount = 0; //counts number of ships on the board

    const shipsContainer = document.querySelector(".ships-container")
    const content = document.querySelector(".content")
    const myBoard = document.querySelector(".board.one");

    let index = ""; //cell chosen by player to hold ship by
    let currentShip = ""; //ship selected
    let location = {    //coordinates
        target : "",
        x : "",
        y : "",
    }

    // ================= Helper Functions ========================= //

    const getShipIndex = () => {
        //get index of ship on clicking a part of ship
        shipsContainer.addEventListener("mousedown" , (e) => {
            if(e.target.className === 'cell ship'){
                index = e.target.innerHTML;
            }
        })
    }

    const changeShipOrientation = () => {
        //double click a ship to turn it horizontal or vertical
        shipsContainer.addEventListener("dblclick", (e) => {
            
            if(e.target.className === 'cell ship'){
                (e.target.parentElement.classList[1] === 'vertical') ?
                    makeHorizontal(e.target.parentElement) :
                    makeVertical(e.target.parentElement);
            }
        })
    }

    const getShip = () => {
        shipsContainer.addEventListener("dragstart", (e) => {
            currentShip = e.target;
        })
    }

    const getBoardLocation = () => {
        //when cursor enters a grid block 
        content.addEventListener("dragenter", (e) => {
            if(e.target.className === 'cell'){
                location.target = e.target.innerHTML;
                location.x = location.target.at(0);
                location.y = location.target.at(1);

                if(location.x === '0'){
                    location.target = location.target.at(1);
                }      
                e.target.style.backgroundColor = "aqua";
                if(currentShip.classList[1] === 'vertical'){

                    (e.target.innerHTML.at(0) > 0) ? location.x = parseInt(location.x) - parseInt(index) 
                    : location.x = parseInt(location.x);

                    location.y = parseInt(location.y);

                
                }
                else if(currentShip.classList[1] === 'horizontal'){

                    (e.target.innerHTML.at(1) > 0) ? location.y = parseInt(location.y) - parseInt(index) 
                    : location.y = parseInt(e.target.innerHTML.at(1));

                    location.x = parseInt(location.x);
                }
            }
            else {

                location.target = "";
                location.x = "";
                location.y = "";
                
            }
        })

    }

    const updateLocation = () => {
        myBoard.addEventListener("dragleave", (e) => {

            if(e.target.className === "cell"){
                e.target.style.backgroundColor = "";
            }
        })
    }

    const renderShip = (myShip, x, y, align = 'vertical') => {
        if(x === 0){
            x = "";
        }
        let coord = parseInt(x.toString() + y.toString());

        let count = 0;
        while(count < myShip.children.length) {
            if(align === 'vertical'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 10;
            }
            else if(align === 'horizontal'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 1;
            }
            count++;
        }

    }

    const setShip = () => {
        //when user chooses a place to place ship
        content.addEventListener("dragend", (e) => {
            //we place ship
            //if valid, ship disappears from display onto board
            //else we start all over
            if(location.target !== ""){

                let shipIndex = gameBoard.ships.findIndex(e => e.name === currentShip.classList[0]);
                if(gameBoard.placeShip(gameBoard.ships[shipIndex], location.x,
                                        location.y, currentShip.classList[1])){
                                            
                    renderShip(currentShip, location.x, location.y, currentShip.classList[1]);
                    currentShip.style.display = 'none';
                    shipCount++;
                }
                myBoard.children[location.target].style.backgroundColor = "";
            }

            //if all ships are placed, reveal enemy board
            if(shipCount === 5){
                let compDisplay = document.querySelector(".playerTwo");
                compDisplay.style.display = ``;
                UI_instructions.gameInstructions();
                shipCount = 0;
                (0,boards.toggleBoardOpacity)(compDisplay.previousSibling.lastChild); //.board.one
                shipsContainer.remove();
            }
            reset();
        })
    }

    //reset all parameters
    const reset = () => {

        currentShip = "";
        location.target = "";
        location.x = "";
        location.y = "";
        index = "";
    }

    // ===================== Event Listeners ==================== //
    
    getShipIndex();
    getShip();
    changeShipOrientation();
    getBoardLocation();        
    updateLocation();
    setShip();
}



;// CONCATENATED MODULE: ./src/scripts/game_loop/computerAI.js

/**
* Module
* @description          The algorithm for the computer to attack
*                       1) The computer makes a "choice" 
*                       2) If the board tile is already hit, reroll
*                       3) If there are no previous valid hits, add the first success to moveList
*                       4) If there was a previous hit, check in the 4 cardinal directions for another hit 
*                       5) Rinse and repeat until all ships are sunk
 *          
 * @returns { smartMove }
 */
const computerAttack =(() => {

    const moveList = [];
    let count = 0; //see @checkAround

    /**
     * Method
     * @description                 The algorithm gets a coordinate (choice); since a ship has a minimum length of 2
     *                              the choice needs to only be 'every other' grid cell (ie [0,0], [0,2]...[1,1], [1,3]).
     *                              The algorithm uses this choice to target a grid cell, but if it has been already targeted
     *                              it recursively runs the function until a valid cell is found, and attacks the cell, adding
     *                              the choice to the moveList. If there are no previous moves found on the moveList, the algorithm 
     *                              then 'checkAround' for its next target.
     * 
     * @param {Object} player       The player 
     * @param {Object} enemyBoard   The board the player attacks
     */
    const smartMove = (player, enemyBoard) => {
        
        let choice = {
            
            x : Math.floor(Math.random() * 10),
            y : Math.floor(Math.random() * 10),
            
        }
        
        //x is even -> y must be even
        if(choice.x % 2 === 0){
            while(choice.y % 2 !== 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        //x is odd -> y must be odd
        else { 
            while(choice.y % 2 === 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        
        //if the cell has already been hit, run smartMove again
        if(enemyBoard.myBoard[choice.x][choice.y].status !== 0){
            return smartMove(player, enemyBoard);
        }
        
        if(moveList.length === 0) {
            let attackStatus = player.attack(enemyBoard, choice.x, choice.y);
            if(attackStatus.hit){
                moveList.push(choice);
                renderAttack(choice, attackStatus);
                return;
            }
            else {
                renderAttack(choice, attackStatus);
                return;
            }
        }
        else{ //if there are previous valid moves (there has been a successful hit before) 

            checkAround(player, enemyBoard, moveList[moveList.length - 1].x,
                moveList[moveList.length - 1].y);
            return;    
        }
    }
    
    /**
     * Helper Function
     * @description                 Using the most recent hit in moveList, the next move is chosen
     *                              by iterating through a direction array that dictates the 
     *                              cardinal direction the computer will choose next, until it misses.
     *                              Then the moveList is reversed to get the initial position and move up
     *                              in the direction array and repeats the step above. If a ship is sunk
     *                              from the latest attack, @renderAttack deletes the cooresponding coordinates
     *                              from moveList and does the above with, if any, remaining moves.
     * 
     * @param {Object} computer     The computer player object
     * @param {Object} playerBoard  The player board object
     * @param {Number} x            x-coordinate of the board to attack (most recent move in moveList)
     * @param {Number} y            y-coordinate of the board to attack (most recent move in moveList)
     */
    const checkAround = (computer, playerBoard, x, y) => {
    
        //count (in computerAttack) iterate through direction
        const direction = ["up", "down", "left", "right"];
        const up = x - 1;
        const down = x + 1;
        const left = y - 1;
        const right = y + 1;
        let choice = {
            x : x, 
            y : y,
        }
        
        if(direction[count] === "up"){
            if(x > 0 && playerBoard.myBoard[up][y].status === 0){ //'empty' cell
                choice.x = up;
                let attackStatus = computer.attack(playerBoard, up, y);
                if(attackStatus.hit){
                    moveList.push(choice); //add to list 
                    renderAttack(choice, attackStatus);
                }
                else { //hit was miss
                    moveList.reverse(); //reverses only in "up"/"left" to correspond with "down"/"right"
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else { //cell is out of bounds or cell has already been hit
                moveList.reverse();
                count++;
                smartMove(computer, playerBoard);
            }
            
        }
    
        else if(direction[count] === "down"){
            if(x < 9 && playerBoard.myBoard[down][y].status === 0 ){ 
                choice.x = down;
                let attackStatus = computer.attack(playerBoard, down, y);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count++;
                smartMove(computer, playerBoard);
            }
        }
    
        else if(direction[count] === "left"){
            if(y > 0 && playerBoard.myBoard[x][left].status === 0){
                choice.y = left;
                let attackStatus = computer.attack(playerBoard, x, left);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    moveList.reverse();
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                moveList.reverse();
                count++;
                smartMove(computer, playerBoard);
            }
        }

        else if(direction[count] === "right"){
            if(y < 9 && playerBoard.myBoard[x][right].status === 0 ){
                choice.y = right;
                let attackStatus = computer.attack(playerBoard, x, right);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count = 0;
                smartMove(computer, playerBoard);
            }
        }
        else {
                while(moveList.length !== 0){
                    moveList.pop();
                }
                count = 0;
                smartMove(computer, playerBoard);
        }
        return;
    }
    
    /**
     * Helper Function
     * @description    Renders whether the attack was a hit or miss and adds to the classList
     *                 accordinly. If the ship is sunk, gets all coordinates and adds to the 
     *                 classList accordingly. Removes all ship coordinates in moveList
     *                 that corespond with the sunken ship.
     * 
     * @param {Object} choice coordinates
     * @param {Object} status Status of ship to check if sunk
     */
    const renderAttack = (choice, status) => {
    
        const playerBoardDisplay = document.querySelector('.board.one');
        let x = choice.x;
        let y = choice.y;
    
        if(choice.x === 0){
            x = "";
        }
    
        let currentCoord = parseInt(x.toString() + y.toString());
    
        if(status.hit){
            if(status.sunk){
                for(let i = 0; i < status.sunkCoord.length; i++){
                    let sunkenCoord = status.sunkCoord[i];
                    playerBoardDisplay.childNodes.item(sunkenCoord)
                        .classList.add("sunk");
                    
                    //resetMoveList
                    if(sunkenCoord < 10){
                        moveList.splice(moveList.indexOf({
                            x: '0',
                            y: sunkenCoord.toString(),
                        }), 1)
                    }else {
                        let convertSunkenCoord = sunkenCoord.toString();
                        moveList.splice(moveList.indexOf({
                            x: convertSunkenCoord.charAt(0),
                            y: convertSunkenCoord.charAt(1),
                        }), 1)
                    }
                }
                count = 0;
            }
            else {
    
                playerBoardDisplay.children[currentCoord].classList.add("hit");
    
            }
        }
        else {
            
            playerBoardDisplay.children[currentCoord].classList.add("miss");
    
        }
    }
    
    return {
        smartMove
    }
})();

/**
 * @description                     Randomly places ships on the board  
 * 
 * @param {Object} computerBoard    The computer board
 */
const compPlaceShips = (computerBoard) => {

    let placeCount = 0;
    while(placeCount < 5){
        let alignment = Math.floor(Math.random() * 2); 
        (alignment === 0) ? alignment = 'vertical' : alignment = 'horizontal';
        if(computerBoard.placeShip(computerBoard.ships[placeCount],
                                    Math.floor(Math.random() * 10),
                                    Math.floor(Math.random() * 10),
                                    alignment))
        {
            placeCount++;
        }
    }
}

/* harmony default export */ const computerAI = (computerAttack);

;// CONCATENATED MODULE: ./src/scripts/UI/init.js


const { makeTitle } = __webpack_require__(142);
const { makeBoards } = __webpack_require__(779)


/**
 * @description     Consolidates game creation into
 *                      1) header (title)
 *                      2) body (boards, ships, and instructions)
 */
const init = () => {
    
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content);

    content.appendChild(makeTitle());
    content.appendChild(makeBoards());
    content.appendChild(getShips());
    content.appendChild(UI_instructions.shipInstructions());
    
}


;// CONCATENATED MODULE: ./src/scripts/game_loop/gameEnd.js



/**
 * @description              Creates a modal that declares winner and asks the player to 
 *                           restart the game
 * 
 * @param {Object} player 
 */
const announceWinner = (player) => {

    const content = document.querySelector(".content");

    const myModal = document.createElement("div");
    myModal.id = "myModal";
    myModal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const winner = document.createElement("p");
    (player === "computer") ? winner.innerText = `You have lost the battle!`
                            : winner.innerText = `You have defeated the enemy!`;

    const restartBtn = document.createElement("button");
    restartBtn.className = "restart";
    restartBtn.innerText = `Play Again?`;

    content.appendChild(myModal);
    myModal.appendChild(modalContent);
    modalContent.appendChild(winner);
    modalContent.appendChild(restartBtn);

}


/**
 * @description     Adds an event listener to the restart button that deletes all DOM elements
 *                  and then reinitializes the game
 */
const resetGame = () => {
    const reset = document.querySelector(".restart");

    reset.addEventListener("click", () => {
        while(document.body.lastChild){
            document.body.removeChild(document.body.lastChild);
        }
        init();
        gameLoop();
    })
}


;// CONCATENATED MODULE: ./src/scripts/factory/gameBoard.js

/**
 * Factory Function
 * @description      This function will hold a <ships> array and create a 2D array <myBoard>
 *                   The FF includes functions that places ships on <myBoard>, receives attacks on <myBoard>,
 *                   and updates the status of <ships> depending whether or not a ship that was placed on the board
 *                   was hit, sunk, and in such, whether ALL ships in <ships> have been sunk
 * 
 * @returns { ships, myBoard, placeShip, receiveAttack, isAllSunk } 
 */
const Gameboard = () => {

    //ships array to hold ships
    const ships = [];

    /**
     * Helper Function 
     * @description         CREATE a game board object
     * @returns tempArray   a 2D array where each 'cell' contains the ship name, ship part, and status (0 (DEFAULT) = nothing, 1 = miss, 2 = hit)
     */
    const createBoard = () => {
        let tempArray = Array(10);
        for(let i = 0; i < 10; i++){
            tempArray[i] = Array.from({length: 10}, (e) => {
                if(e === undefined){
                    return e = {
                        ship: 'none',
                        shipPart: 'none',
                        status: 0 
                    }
                }
            })
        }
        return tempArray;
    }
    
    //game board object
    const myBoard = createBoard();

    /**
     * Helper Function for placeShip 
     * @description                   Check whether a ship already exists on the places on the game board myShip was to be potentially placed
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns {Boolean}             Return TRUE if there is no coinciding ship on the board coordinates, else return FALSE
     */
    const noOverlap = (myShip, x, y, align) => {
        if(align === 'horizontal'){
            for(let i = y; i < y + myShip.length && i <= 9; i++){
                if(myBoard[x][i].ship !== "none"){
                    return false;
                }
            }
        }
        else if(align === 'vertical'){
            for(let i = x; i < x + myShip.length && i <= 9; i++){
                if(myBoard[i][y].ship !== "none"){
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Method
     * @description                   Check whether the ship to be placed has a valid coordinate, that in its full length
     *                                fits onto the board, and whether it overlaps with any other ships on the board
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns {Boolean}             Return TRUE, if ship has been placed on a valid position, and return FALSE, if spot is invalid
     */
    const placeShip = (myShip, x, y, align) => {
        x = parseInt(x);
        y = parseInt(y);
        if((x >= 0 && x <= 9) && (y >= 0 && y <= 9) && noOverlap(myShip, x, y, align)){
            let pos = 0;
            if(align === 'horizontal'){
                if(y + myShip.length > 10){
                    return false;
                }
                for(let i = y; i < y + myShip.length; i++){
                    myBoard[x][i].ship = myShip.name;
                    myBoard[x][i].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            else if(align === 'vertical') {
                if(x + myShip.length > 10){

                    return false;
                }
                for(let i = x; i < x + myShip.length; i++){
                    myBoard[i][y].ship = myShip.name;
                    myBoard[i][y].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            return true;
        }

        return false;
    }

    /**
     * Method
     * @description                   Check the coordinate on the board to see if there is a ship part.
     *                                 If there is no ship, board status changes to 1 (missed), else 2 (hit),
     *                                 and records whether the hit sunk the ship or not and updates accordingly
     * 
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @returns {status}              An object that records the ship name, hit status, sunk status, and all the
     *                                coordinates on the board that coincide with said sunk ship, if any
     */
    const receiveAttack = (x, y) => {

        let status = {
            ship: "",
            hit: false,
            sunk: false,
            sunkCoord: [],
        }
        if(myBoard[x][y].ship !== 'none'){
            status.ship = myBoard[x][y].ship;
            for(let i = 0; i < ships.length; i++){
                if(ships[i].name === myBoard[x][y].ship){
                    ships[i].hit(myBoard[x][y].shipPart);
                    if(ships[i].isSunk()){
                        status.sunk = true;
                        status.sunkCoord = [...getShip(ships[i].name)];
                    }
                }
            }
            myBoard[x][y].status = 2;
            status.hit = true;
            return status;
        }
        else {
            myBoard[x][y].status = 1;
            return status;
        }
    }

    /**
     * Helper Function
     * @description                 Get the coordinates of a ship
     * @param {String} shipName     The name of the ship
     * @returns {coords}            An array of coordinates (0 -> 99)
     */
    const getShip = (shipName) => {
        let coords = [];
        myBoard.flat().forEach((cell, index) => {
            if(cell.ship === shipName){
                coords.push(index);
            }
        })
        return coords;
    }

    /**
     * Method
     * @description         Check whether all the ships on the board are sunk
     * @returns {Boolean}   Returns a boolean based on the above
     */
    const isAllSunk = () => {
        return (ships.every(e => e.isSunk() === true));
    }

    return {
        ships,
        myBoard,
        placeShip,
        receiveAttack,
        isAllSunk
    }
}

/* harmony default export */ const gameBoard = (Gameboard);
;// CONCATENATED MODULE: ./src/scripts/factory/ship.js
/**
 * Factory Function
 * @description             The ship object to be placed on the game board
 *                          Include individual ship parts to coincide with grid coordinate
 *                          Each ship part has a status and position
 * 
 * @param {String} name     name of the ship
 * @param {Number} length   length of the ship
 * @returns {name, length, shipParts, hit, isSunk}
 */

const Ship = (name, length) => {
    
    //array that uses length of ship to create a collection of ship parts
    const shipParts = Array.apply(null, Array(length))
        .map(function (x, i) { 
            x = {                   //status
                "isHit" : false, 
                "position" : i
            }
            return x;
        }
    ); 

    /**
     * Method
     * @description         Changes status of ship part from 'not hit' to 'hit'
     * 
     * @param {Number} pos  position of ship part
     * @returns {Boolean}   Return TRUE, if hit
     */
    const hit = (pos) => {
        if(shipParts[pos].isHit === false) {
            shipParts[pos].isHit = true;
            return true;
        }
    }
    
    /**
     * Method
     * @description         Filters through each shipPart, and if all art hit, then ship is sunk
     * 
     * @returns {Boolean}   Return TRUE, if all parts are hit, else return FALSE
     */
    const isSunk = () => {
        if(shipParts.filter((e) => {return e.isHit === true}).length === length) {
            return true;
        }
        else {return false;}
    }

    return {
        name,
        length,
        shipParts,
        hit,
        isSunk,
    }
}

/* harmony default export */ const ship = (Ship);
;// CONCATENATED MODULE: ./src/scripts/game_loop/createBoard.js



/**
 * @description         Creates a gameBoard object and fills the 
 *                      ships array with standard Battleship Ships
 * 
 * @returns { board }   Returns the gameBoard with updated ships
 */
const createBoard = () => {
    
    const board = gameBoard();

    const carrier = ship('carrier', 5);
    const battleship = ship('battleship', 4);
    const cruiser = ship('cruiser', 3);
    const submarine = ship('submarine', 3);
    const destroyer = ship('destroyer', 2);

    board.ships.push(carrier);
    board.ships.push(battleship);
    board.ships.push(cruiser);
    board.ships.push(submarine);
    board.ships.push(destroyer);
    
    return board;
}

/* harmony default export */ const game_loop_createBoard = (createBoard);
;// CONCATENATED MODULE: ./src/scripts/game_loop/gameLoop.js









/**
 * @description     Creates players, boards, and boards display, and 
 *                  allows players to place ships onto their board.
 *                  The game begins when the computer's board is displayed, which
 *                  is after the player places all his ships, and continues until
 *                  either players lose all ships
 */
const gameLoop = () => {
    
    const playerOne = player();
    const playerOneBoard = game_loop_createBoard();
    const playerBoardDOM = document.querySelector(".board.one")
    playerOne.myTurn = true; //player always starts game going first
    
    const computer = player();
    const computerBoard = game_loop_createBoard();
    const computerBoardDOM = document.querySelector(".board.two");

    compPlaceShips(computerBoard);
    renderShips(playerOneBoard);
    
    computerBoardDOM.addEventListener("mousedown", (e) => {
    
        if(playerOne.myTurn){
            const x = parseInt(e.target.innerHTML.at(0));
            const y = parseInt(e.target.innerHTML.at(1));

            //If the cell is not empty, return out of this instance of the event listener
            if(e.target.classList[1] === "miss" || e.target.classList[1] === "hit"){
                return;
            }
            else {
                (0,boards.toggleBoardOpacity)(playerBoardDOM); //highlight player board
                (0,boards.toggleBoardOpacity)(computerBoardDOM); //dim computer board

                //if 'fresh' cell then attack
                let attackStatus = playerOne.attack(computerBoard, x, y);

                //update board of ship status
                if(attackStatus.hit){
                    if(attackStatus.sunk){
                        for(let i = 0; i < attackStatus.sunkCoord.length; i++){
                            e.target.parentElement.childNodes.item(attackStatus.sunkCoord[i])
                                .classList.add("sunk");
                        }
                    }
                    else {
                        e.target.classList.add("hit");
                    }
                }
                else {
                    e.target.classList.add("miss");
                }
            }
            
            computer.myTurn = true; //computer turn
            //if player wins return out of event listener instance
            if(computerBoard.isAllSunk()){
                announceWinner("player");
                return resetGame();
            }
        }


        if(computer.myTurn){

            //delay to mimic computer 'thinking'
            setTimeout(() => {
                computerAI.smartMove(computer, playerOneBoard);
                (0,boards.toggleBoardOpacity)(playerBoardDOM); //dim player board
                (0,boards.toggleBoardOpacity)(computerBoardDOM); //highlight computer board
                if(playerOneBoard.isAllSunk()){
                    announceWinner("computer");
                    return resetGame();
                }
            }, 500)

            playerOne.myTurn = true;
        }
    })

}


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__(936);
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css
var normalize = __webpack_require__(804);
;// CONCATENATED MODULE: ./src/styles/normalize.css

      
      
      
      
      
      
      
      
      

var normalize_options = {};

normalize_options.styleTagTransform = (styleTagTransform_default());
normalize_options.setAttributes = (setAttributesWithoutAttributes_default());

      normalize_options.insert = insertBySelector_default().bind(null, "head");
    
normalize_options.domAPI = (styleDomAPI_default());
normalize_options.insertStyleElement = (insertStyleElement_default());

var normalize_update = injectStylesIntoStyleTag_default()(normalize/* default */.Z, normalize_options);




       /* harmony default export */ const styles_normalize = (normalize/* default */.Z && normalize/* default.locals */.Z.locals ? normalize/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js





const runApp = (() => {
    init();
    gameLoop();
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map