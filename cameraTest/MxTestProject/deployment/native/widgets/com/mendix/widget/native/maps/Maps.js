module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("react")},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,r){var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=i(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===n)for(var u in r)o.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===i(r(1))&&r(1)?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},function(e,t,r){var n,o,i,a=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n=[r,t,r(11),r(4),r(0),r(5),r(6),r(7),r(8),r(12)],void 0===(o=function(e,t,r,n,o,i,l,p,f,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l=c(l);var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={status:"loadingMarkers"},t.onMapReadyHandler=t.onMapReady.bind(t),t.onRegionChangeCompleteHandler=t.onRegionChangeComplete.bind(t),t.styles=r.flattenStyles(p.defaultMapsStyle,t.props.style),t.mapViewRef=o.createRef(),t.geocoder=new f.CachedGeocoder,t}return a(t,e),t.prototype.componentDidMount=function(){this.parseMarkers()},t.prototype.componentDidUpdate=function(){"loadingMarkers"===this.state.status&&this.parseMarkers()},t.prototype.componentWillReceiveProps=function(){"cameraReady"===this.state.status&&this.parseMarkers()},t.prototype.render=function(){var e=this;return o.createElement(i.View,{style:this.styles.container,testID:this.props.name},"loadingMarkers"!==this.state.status&&o.createElement(l.default,{ref:this.mapViewRef,provider:"default"===this.props.provider?null:this.props.provider,mapType:this.props.mapType,showsUserLocation:this.props.showsUserLocation,showsMyLocationButton:this.props.showsUserLocation,showsTraffic:!1,minZoomLevel:y(this.props.minZoomLevel),maxZoomLevel:y(this.props.maxZoomLevel),rotateEnabled:this.props.interactive,scrollEnabled:this.props.interactive,pitchEnabled:!1,zoomEnabled:this.props.interactive,style:{flex:1,alignSelf:"stretch"},liteMode:!this.props.interactive,cacheEnabled:!this.props.interactive,showsPointsOfInterest:!1,mapPadding:{top:40,right:20,bottom:20,left:20},onMapReady:this.onMapReadyHandler,onRegionChangeComplete:this.onRegionChangeCompleteHandler},this.state.markers&&this.state.markers.map((function(t){return e.renderMarker(t)}))),("loadingMarkers"===this.state.status||"loadingMap"===this.state.status)&&o.createElement(i.View,{style:this.styles.loadingOverlay},o.createElement(i.ActivityIndicator,{color:this.styles.loadingIndicator.color,size:"large"})))},t.prototype.renderMarker=function(e){var t=e.key,r=e.props,i=e.coordinate;return o.createElement(l.Marker,{key:t,coordinate:i,title:this.props.interactive?r.title&&r.title.value:"",description:this.props.interactive?r.description&&r.description.value:"",onPress:this.props.interactive?function(){return e=r.onClick,void d.executeAction(e);var e}:void 0,pinColor:r.color||this.styles.marker.color,opacity:this.styles.marker.opacity},r.icon&&r.icon.value&&o.createElement(n.Icon,{icon:r.icon.value,color:r.color||this.styles.marker.color,size:r.iconSize}))},t.prototype.onMapReady=function(){"android"===i.Platform.OS&&(this.updateCamera(!1),this.setState({status:this.props.interactive?"mapReady":"cameraReady"})),this.onRegionChangeComplete()},t.prototype.onRegionChangeComplete=function(){if("android"===i.Platform.OS&&"mapReady"===this.state.status&&this.setState({status:"cameraReady"}),"ios"===i.Platform.OS)switch(this.state.status){case"loadingMap":this.setState({status:"mapReady"}),this.updateCamera(!1);break;case"mapReady":this.setState({status:"default"===this.props.provider?"cameraAlmostReady":"cameraReady"});break;case"cameraAlmostReady":this.setState({status:"cameraReady"})}},t.prototype.parseMarkers=function(){return s(this,void 0,void 0,(function(){var e,t=this;return u(this,(function(r){switch(r.label){case 0:return[4,Promise.all(this.props.markers.map((function(e,r){return s(t,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return t={key:"map_marker_"+r,props:e},[4,this.parseCoordinate(e.latitude,e.longitude,e.address)];case 1:return[2,(t.coordinate=n.sent(),t)]}}))}))})))];case 1:return(e=r.sent()).some((function(e){return null==e.coordinate}))?[2]:(this.setState({status:"loadingMarkers"===this.state.status?"loadingMap":this.state.status,markers:e},(function(){"cameraReady"===t.state.status&&t.updateCamera(!0)})),[2])}}))}))},t.prototype.updateCamera=function(e){return s(this,void 0,void 0,(function(){var t,r;return u(this,(function(n){switch(n.label){case 0:return this.mapViewRef.current?this.props.fitToMarkers&&this.props.markers.length>1?(this.mapViewRef.current.fitToElements(e),[2]):(r={},[4,this.getCenter()]):[2];case 1:return r.center=n.sent(),r.zoom=y(this.props.defaultZoomLevel),r.altitude=function(e){switch(e){case"world":return 16026161;case"continent":return 4006540;case"country":return 1001635;case"city":return 125204;case"town":return 31301;case"streets":return 3914;case"building":return 122}}(this.props.defaultZoomLevel),t=r,e?this.mapViewRef.current.animateCamera(t):this.mapViewRef.current.setCamera(t),[2]}}))}))},t.prototype.getCenter=function(){return s(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return 1===this.props.markers.length&&this.props.fitToMarkers?[4,this.parseCoordinate(this.props.markers[0].latitude,this.props.markers[0].longitude,this.props.markers[0].address)]:[3,2];case 1:return e=t.sent(),[3,4];case 2:return[4,this.parseCoordinate(this.props.centerLatitude,this.props.centerLongitude,this.props.centerAddress)];case 3:e=t.sent(),t.label=4;case 4:return[2,e||{latitude:51.9066346,longitude:4.4861703}]}}))}))},t.prototype.parseCoordinate=function(e,t,r){if(e&&e.value&&t&&t.value){var n=Number(e.value),o=Number(t.value);if(!function(e){return!isNaN(e)&&e<=90&&e>=-90}(n)||!function(e){return!isNaN(e)&&e<=180&&e>=-180}(o))throw new Error("Invalid coordinate provided: ("+n+", "+o+")");return Promise.resolve({latitude:n,longitude:o})}return r&&r.value?this.geocoder.geocode(r.value):Promise.resolve(null)},t}(o.Component);function y(e){switch(e){case"world":return 3;case"continent":return 5;case"country":return 7;case"city":return 10;case"town":return 12;case"streets":return 15;case"building":return 20}}t.Maps=h}.apply(t,n))||(e.exports=o)},function(e,t){e.exports=require("mendix/components/native/Icon")},function(e,t){e.exports=require("react-native")},function(e,t){e.exports=require("react-native-maps")},function(e,t,r){var n;void 0===(n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultMapsStyle={container:{},loadingOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:99,backgroundColor:"#fafafa",justifyContent:"center",alignItems:"center"},loadingIndicator:{},marker:{color:"red",opacity:1}}}.apply(t,[r,t]))||(e.exports=n)},function(e,t,r){var n,o,i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n=[r,t,r(9),r(10)],void 0===(o=function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a(r);var o=function(){function e(){this.queue=new n.PromiseQueue,this.cache={}}return e.prototype.geocode=function(e){var t=this,r=this.cache[e];return r?Promise.resolve(r):this.queuedGeocode(e).then((function(r){var n;return t.cache=i(i({},t.cache),((n={})[e]=r,n)),r}))},e.prototype.queuedGeocode=function(e){return this.queue.add((function(){return r.default.geocodeAddress(e).catch((function(){throw new Error("Failed to retrieve a location for the provided address: "+e)}))})).then((function(t){if(0===t.length)throw new Error("No location found for the provided address: "+e);return{latitude:t[0].position.lat,longitude:t[0].position.lng}}))},e}();t.CachedGeocoder=o}.apply(t,n))||(e.exports=o)},function(e,t){e.exports=require("react-native-geocoder")},function(e,t,r){var n;void 0===(n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.queue=[],this.running=!1}return e.prototype.add=function(e){var t=this;return new Promise((function(r,n){t.queue.push({getPromise:e,resolve:r,reject:n}),t.next()}))},e.prototype.next=function(){var e=this;if(!this.running&&0!==this.queue.length){this.running=!0;var t=this.queue.shift();t.getPromise().then((function(r){t.resolve(r),e.running=!1,e.next()})).catch((function(r){t.reject(r),e.running=!1,e.next()}))}},e}();t.PromiseQueue=r}.apply(t,[r,t]))||(e.exports=n)},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var r=[e].concat(n(t.filter((function(e){return void 0!==e}))));return Object.keys(e).reduce((function(e,t){var n,o,i,a=r.map((function(e){return e[t]}));return Object.assign(Object.assign({},e),(n={},o=t,i=a.reduce((function(e,t){return Object.assign(Object.assign({},e),t)}),{}),o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,n))}),{})}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return Object.keys(e).filter((function(e){return-1===t.findIndex((function(t){return t===e}))})).reduce((function(t,r){return Object.assign(Object.assign({},t),i({},r,e[r]))}),{})}function s(e,t){return t.filter((function(t){return void 0!==e[t]})).reduce((function(t,r){return Object.assign(Object.assign({},t),i({},r,e[r]))}),{})}function u(e){return"available"===e.status&&null!=e.value}function c(e){return"unavailable"===e.status||"available"===e.status&&null==e.value}function l(e){return u(e)?Number(e.value):void 0}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return null==e?{status:"loading",value:void 0}:{status:"available",value:e}}function d(){return{canExecute:!(arguments.length>0&&void 0!==arguments[0])||arguments[0],isExecuting:arguments.length>1&&void 0!==arguments[1]&&arguments[1],execute:jest.fn()}}r.r(t);var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.editableValue={value:void 0,displayValue:"",status:"available",validation:void 0,readOnly:!1,formatter:{format:jest.fn((function(e){return"Formatted ".concat(e)})),parse:jest.fn(),getFormatPlaceholder:jest.fn()},setValidator:jest.fn(),setValue:jest.fn((function(e){return t.withValue(e)})),setTextValue:jest.fn(),setFormatter:jest.fn()}}var t,r,n;return t=e,(r=[{key:"withValue",value:function(e){return this.editableValue.value=e,this.editableValue.displayValue=this.editableValue.formatter.format(e),this}},{key:"isReadOnly",value:function(){return this.editableValue.readOnly=!0,this}},{key:"isLoading",value:function(){return this.editableValue.status="loading",this.isReadOnly()}},{key:"isUnavailable",value:function(){return this.editableValue.status="unavailable",this.isReadOnly()}},{key:"withValidation",value:function(e){return this.editableValue.validation=e,this}},{key:"withUniverse",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.editableValue.universe=t,this}},{key:"build",value:function(){return this.editableValue}}])&&p(t.prototype,r),n&&p(t,n),e}();r.d(t,"flattenStyles",(function(){return o})),r.d(t,"only",(function(){return s})),r.d(t,"exclude",(function(){return a})),r.d(t,"available",(function(){return u})),r.d(t,"toNumber",(function(){return l})),r.d(t,"unavailable",(function(){return c})),r.d(t,"dynamicValue",(function(){return f})),r.d(t,"actionValue",(function(){return d})),r.d(t,"EditableValueBuilder",(function(){return h}))},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(2),i=r.n(o),a=function(e){var t=e.className,r=e.bootstrapStyle,o=e.children;return n.Children.count(o)>0?Object(n.createElement)("div",{className:i()("alert alert-".concat(r),t)},o):null};a.displayName="Alert";var s=function(e){e&&e.canExecute&&!e.isExecuting&&e.execute()};r.d(t,"Alert",(function(){return a})),r.d(t,"executeAction",(function(){return s}))}]);