/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _barrier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barrier.js */ \"./src/barrier.js\");\n/* harmony import */ var _tire_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tire.js */ \"./src/tire.js\");\n/* harmony import */ var _cone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cone.js */ \"./src/cone.js\");\n/* harmony import */ var _boulder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boulder.js */ \"./src/boulder.js\");\n\n\n\n\n\nclass Background {\n  constructor(canvas, obstacles, game) {\n    this.canvas = canvas;\n    this.game = game;\n    this.obstacles = obstacles;\n    this.img = new Image;\n    this.img.src = './assets/track.png';\n  }\n\n  render() {\n    const c = canvas.getContext('2d');\n    c.drawImage(this.img, -500, -500, 3101, 3774)\n\n    const obj = ['tree', 'cone', 'tire'];\n    if (this.obstacles.length < 100) {\n      let random;\n      this.obstacles.push(new _barrier_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-750, 1300, 500, 4300));\n      this.obstacles.push(new _barrier_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1050, -750, 3400, 500));\n      this.obstacles.push(new _barrier_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2851, 1300, 500, 4300));\n      this.obstacles.push(new _barrier_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1050, 3524, 3400, 500));\n      for (let i = 0; i < 30; i++) {\n        random = Math.floor(Math.random() * 3);\n        if (obj[random] === 'tree') {\n          this.obstacles.push(new _boulder_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.randomInt(0, 2500), this.randomInt(0, 3100), 60, 60))\n        } else if (obj[random] === 'cone') {\n          this.obstacles.push(new _cone_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.randomInt(0, 2500), this.randomInt(0, 3100), 22, 22))\n        } else {\n          this.obstacles.push(new _tire_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.randomInt(0, 2500), this.randomInt(0, 3100), 50, 50))\n        }\n      }\n    }\n    \n    this.obstacles.forEach(obstacle => {\n      obstacle.draw();\n    })\n  }\n\n  randomInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/barrier.js":
/*!************************!*\
  !*** ./src/barrier.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\n/* harmony import */ var _tire_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tire.js */ \"./src/tire.js\");\n\n\n\nclass Barrier extends _obstacle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height) {\n    super(x, y, width, height)\n  }\n\n  draw() {\n    const c = canvas.getContext('2d');\n    c.fillStyle = 'transparent'\n    c.save();\n    c.translate(-this.width / 2, -this.height / 2)\n    c.fillRect(this.x, this.y, this.width, this.height);\n    c.restore();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Barrier);\n\n//# sourceURL=webpack:///./src/barrier.js?");

/***/ }),

/***/ "./src/boulder.js":
/*!************************!*\
  !*** ./src/boulder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\n\n\nclass Boulder extends _obstacle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height) {\n    super(x, y, width, height)\n    this.img = new Image;\n    this.img.src = './assets/boulder.png';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boulder);\n\n//# sourceURL=webpack:///./src/boulder.js?");

/***/ }),

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Car {\n  constructor (x, y, game) {\n    this.img = new Image()\n    this.img.src = './assets/ken.png';\n    this.scale = 0.07\n    this.imgw = 1520 * this.scale\n    this.imgh = 766 * this.scale\n    this.x = x;\n    this.y = y;\n    this.rad = Math.PI;\n    this.radDiff = 0;\n    this.frontLeft = {corner: 'frontLeft', x: this.x - this.imgw / 2, y: this.y + this.imgh / 2};\n    this.backLeft = {corner: 'backLeft', x: this.x + this.imgw / 2, y: this.y + this.imgh / 2};\n    this.frontRight = { corner: 'frontRight', x: this.x - this.imgw / 2, y: this.y - this.imgh /2};\n    this.backRight = {corner: 'backRight', x: this.x + this.imgw / 2, y: this.y - this.imgh / 2};\n    this.corners = [this.frontLeft, this.frontRight, this.backLeft, this.backRight];\n    this.prev = []\n    this.velX = 0\n    this.velY = 0\n    this.accX = 0\n    this.accY = 0\n    this.game = game\n  }\n\n  draw() {\n    const c  = canvas.getContext('2d');\n    const friction = 0.94;\n    this.velX *= friction;\n    this.velY *= friction;\n\n    c.translate(this.velX, this.velY)\n    \n    this.update();\n    c.save()\n    c.translate(this.x , this.y);\n    c.rotate(this.rad);\n\n    c.drawImage(this.img, this.imgw / 2 * -1, this.imgh / 2 * -1, this.imgw , this.imgh)\n    c.restore();\n  }\n\n  update() {\n    this.velX += this.accX;\n    this.velY += this.accY;\n    this.prev = [this.x, this.y]\n    this.x -= (this.velX);\n    this.y -= (this.velY);\n\n    this.movePoints()\n    const newCorners = this.corners.map(corner => {\n      return this.turnCorners(corner)\n    })\n\n    this.corners = newCorners;\n  }\n\n\n  moveCar() {\n    if (this.game.keys['w']) {\n      let ax = Math.cos(this.rad) * 0.1;\n      let ay = Math.sin(this.rad) * 0.1;\n      this.accX = ax;\n      this.accY = ay;\n    } else {\n      this.accX = this.accY = 0;\n    }\n\n    if (this.game.keys['a']) {\n      this.rad -= 0.03\n      this.radDiff = -0.03\n    } else if (this.game.keys['d']) {\n      this.rad += 0.03\n      this.radDiff = 0.03\n    } else {\n      this.radDiff = 0\n    }\n\n    if (this.game.keys['s']) {\n      let ax = Math.cos(this.rad) * 0.01 * - 1\n      let ay = Math.sin(this.rad) * 0.01 * - 1\n      this.accX = ax;\n      this.accY = ay;\n    }\n  }\n\n  turnCorners(corner) {\n    let tempX = corner.x - this.x\n    let tempY = corner.y - this.y\n\n    let rotatedX = tempX * Math.cos(this.radDiff / 2) - tempY * Math.sin(this.radDiff / 2);\n    let rotatedY = tempX * Math.sin(this.radDiff / 2) + tempY * Math.cos(this.radDiff / 2);\n\n\n    \n    return Object.assign(corner, {x: rotatedX + this.x, y: rotatedY + this.y})\n  }\n\n  movePoints() {\n    if (this.prev) {\n      let diffX = this.x - this.prev[0];\n      let diffY = this.y - this.prev[1];\n      this.corners.forEach(corner => {\n        corner['x'] += diffX;\n        corner['y'] += diffY;\n      })\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n\n\n//# sourceURL=webpack:///./src/car.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst projectCornerToAxis = (corner, axis) => {\n  const projectedX = (corner.x * axis.x + corner.y * axis.y) / ((axis.x ** 2) + (axis.y ** 2)) * axis.x;\n  const projectedY = (corner.x * axis.x + corner.y * axis.y) / ((axis.x ** 2) + (axis.y ** 2)) * axis.y;\n\n  return { projectedX, projectedY };\n};\n\nconst scalarValues = (projectedCorners, axis) => projectedCorners.map((corner) => {\n  const { projectedX, projectedY } = corner;\n  return projectedX * axis.x + projectedY * axis.y;\n});\n\nconst checkScalarForColision = (scalar1, scalar2) => {\n  const min1 = Math.min(...scalar1);\n  const max1 = Math.max(...scalar1);\n\n  const min2 = Math.min(...scalar2);\n  const max2 = Math.max(...scalar2);\n\n  if (min2 <= max1 && min1 <= max2) {\n    return true;\n  }\n  return false;\n};\n\nconst isCollided = (rect1, rect2) => {\n  const axis1 = {\n    x: rect1.corners[1].x - rect1.corners[0].x,\n    y: rect1.corners[1].y - rect1.corners[0].y,\n  };\n  const axis2 = {\n    x: rect1.corners[1].x - rect1.corners[3].x,\n    y: rect1.corners[1].y - rect1.corners[3].y,\n  };\n  const axis3 = {\n    x: rect2.corners[0].x - rect2.corners[2].x,\n    y: rect2.corners[0].y - rect2.corners[2].y,\n  };\n  const axis4 = {\n    x: rect2.corners[0].x - rect2.corners[1].x,\n    y: rect2.corners[0].y - rect2.corners[1].y,\n  };\n\n  const corners1 = [rect1.corners[1], rect1.corners[0], rect1.corners[3], rect1.corners[2]];\n  const corners2 = [rect2.corners[1], rect2.corners[0], rect2.corners[3], rect2.corners[2]];\n\n  const axes = [axis1, axis2, axis3, axis4];\n\n  for (let i = 0; i < axes.length; i += 1) {\n    const corners1ToAxis = corners1.map(corner => projectCornerToAxis(corner, axes[i]));\n    const corners2ToAxis = corners2.map(corner => projectCornerToAxis(corner, axes[i]));\n\n    const scalar1 = scalarValues(corners1ToAxis, axes[i]);\n    const scalar2 = scalarValues(corners2ToAxis, axes[i]);\n\n    if (checkScalarForColision(scalar1, scalar2) === false) {\n      return false;\n    }\n  }\n  return true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isCollided);\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/cone.js":
/*!*********************!*\
  !*** ./src/cone.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\n\n\nclass Cone extends _obstacle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height) {\n    super(x, y, width, height)\n    this.img = new Image;\n    this.img.src = './assets/cone.png';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cone);\n\n//# sourceURL=webpack:///./src/cone.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n/* harmony import */ var _collision_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collision.js */ \"./src/collision.js\");\n\n\n\n\nclass Game {\n  constructor (canvas) {\n    this.canvas = canvas;\n    this.keys = [];\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    this.obstacles = [];\n    this.background = new _background_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.obstacles, this);\n    this.car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-150, -150 / 2, this);\n    this.points = 0;\n    this.gameDone = false\n\n    this.seconds = 59;\n    this.milliseconds = 99;\n    this.millisecondsTimer;\n    this.secondsTimer;\n  }\n  \n  run () {\n    if (this.gameDone === false) {\n      this.loadListeners();\n      this.car.update();\n      this.draw();\n      requestAnimationFrame(this.run.bind(this))\n    }\n  }\n\n  draw() {\n    const c = canvas.getContext('2d');\n    c.save();\n    c.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    c.translate(-this.car.x + this.canvas.width / 2, -this.car.y + this.canvas.height / 2);\n    this.background.render();\n    this.drawUI();\n    this.checkCollision();\n    this.givePoints();\n    this.car.moveCar();\n    this.car.draw();\n    c.restore();\n  }\n\n  drawUI() {\n    document.getElementById('score').innerHTML = `Score: ${this.points}`;\n    document.getElementById('time').innerHTML = `Time Remaining: ${('0' + this.seconds).slice(-2)}:${('0' + this.milliseconds).slice(-2)}s`;\n  } \n\n  givePoints() {\n    if ((Math.abs(this.car.velX) >= 1.5 || Math.abs(this.car.velY) >= 1.5) && Math.abs(this.car.radDiff) === 0.03 ) {\n      this.points += 1;\n    }\n  }\n\n\n  loadListeners() {\n    window.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n    window.addEventListener(\"keyup\", this.handleKeyUp.bind(this))\n  }\n\n  checkCollision(){\n    for (let i = 0; i < this.obstacles.length; i++) {\n      if (Object(_collision_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.car, this.obstacles[i]) === true) {\n        this.car.velX *= -0.85\n        this.car.velY *= -0.85\n\n        this.points -= 20\n        if (this.points < 0) {\n          this.points = 0\n        }\n      }\n    }\n  }\n\n  handleKeyUp(e) {\n    this.keys[e.key] = false;\n  }\n\n  handleKeyDown(e) {\n    this.keys[e.key] = true;\n  }\n\n  setTimers() {\n    this.millisecondsTimer = setInterval(() => {\n      this.milliseconds -= 1\n      if (this.milliseconds === -1) {\n        this.milliseconds = 99\n      }\n    }, 1)\n\n    this.secondsTimer = setInterval(() => {\n      this.seconds -= 1\n      if (this.seconds === 0) {\n        this.gameOver();\n      }\n    }, 1000)\n  }\n\n  gameOver() {\n    this.seconds = 0\n    this.milliseconds = 0\n\n    clearInterval(this.millisecondsTimer);\n    clearInterval(this.secondsTimer);\n    window.removeEventListener(\"keydown\", this.handleKeyDown.bind(this));\n    window.removeEventListener(\"keyup\", this.handleKeyUp.bind(this))\n    this.gameDone = true\n    this.draw();\n    document.getElementById('description').innerHTML = `Good job! You had a final score of ${this.points}`;\n    document.getElementById('play').innerHTML = 'Play again'\n    document.getElementById('welcome').style.display = 'flex'\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('canvas');\n  let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n\n  document.getElementById('title').innerHTML = `Drift Car Simulator`;\n  document.getElementById('description').innerHTML = `Use WASD to move your car around. Drift and score as many points as possible within 60 seconds. You will lose points if you hit any obstacles!`;\n  document.getElementById('play').innerHTML = 'Play';\n\n  document.getElementById('play').addEventListener('click', (e) => {\n    document.getElementById('welcome').style.display = 'none';\n    if (game.gameDone === true) {\n      game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n    }\n    document.getElementById('background').style.display = 'none';\n    game.setTimers();\n    game.run();\n  })\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Obstacle {\n  constructor(x, y, width, height) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.topLeft = {x: this.x - (this.width / 2) + 15, y: this.y - (this.height / 2) + 15}\n    this.botLeft = {x: this.x - (this.width / 2) + 15, y: this.y + (this.height / 2) - 15}\n    this.topRight = {x: this.x + (this.width / 2) - 15, y: this.y - (this.height / 2) + 15}\n    this.botRight = {x: this.x + (this.width / 2) - 15, y: this.y + (this.height / 2) - 15}\n    this.corners = [this.topLeft, this.topRight, this.botLeft, this.botRight]\n  }\n\n  draw() {\n    const c = canvas.getContext('2d');\n    c.save();\n    c.translate(-this.width / 2, -this.height / 2)\n    c.drawImage(this.img, this.x, this.y, this.width, this.height)\n    c.restore();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/tire.js":
/*!*********************!*\
  !*** ./src/tire.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\n\n\nclass Tire extends _obstacle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height) {\n    super(x, y, width, height)\n    this.img = new Image;\n    this.img.src = './assets/tire.png';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tire);\n\n//# sourceURL=webpack:///./src/tire.js?");

/***/ })

/******/ });