/**
 * This file contain minbox
 * @copyright (c) Damien Nicoulaud <info@da-dn.fr>
 * @version 1.0.1
 */

/**
 * @param {Function} factory module wrapper
 */
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.minbox = factory(root);
  }
}(this, function (root) {
	if (root){ 
        var style=root.document.createElement("style");
        style.type="text/css";
        var css=root.document.createTextNode(
        "#minbox p {font-family: champagne__limousinesregular;}"
                );
    if (style.styleSheet) {
        style.styleSheet.cssText=css.nodeValue;
    } else {
        style.appendChild(css);
    }

    root.document.getElementsByTagName("head")[0].appendChild(style);

   }

	var switchContent = function (elem, content) {
        elem.removeChild(elem.firstChild);
        elem.appendChild (root.document.createTextNode ("c'est bon"));
    };

    var getHelper=function(message, level) {
        if (typeof message !=="string") {
           throw new Error("message must be string"); 
        }
        var div=root.document.createElement("div");
        div.setAttribute("id", "minbox");
        div.setAttribute("class", level);
        var p=root.document.createElement("p");
        var close=root.document.createElement("div");
        close.setAttribute("class", "close-button");
        var button=root.document.createElement("button");
        var pText=root.document.createTextNode(message);
        var buttonText=root.document.createTextNode("ok");
        
        close.onclick=function () {
            close.parentNode.parentNode.removeChild(close.parentNode);
        };
        button.onclick=function() {
            switchContent(
                this.parentNode.getElementsByTagName("p")[0],
                "Kawabungaaaaaa");
        };
        
        p.appendChild(pText);
        button.appendChild(buttonText);
        div.appendChild(close);
        div.appendChild(p);
        div.appendChild(button);
        
        return div;
        
    };
    
    var log=function(helper) {
        if(! (helper instanceof root.HTMLElement)
            || !root.document.body) {
        throw new Error("Require a valid element and a body");
        }
        
        root.document.body.appendChild(helper);
        
    };
    return (function() {
    
        /**
         * @type {Object} 
         */
         var self = {};
        
        /**
         * Init minbox
         * 
         * @memberOf minbox
         * @param {Object} window with a document
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
          self.init = function (window) {
            if (!window || !window.document) {
                throw new Error ("minbox require a window with a document");
            }
            root = window;
        };
        
        
        /**
         * Create emergency notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.emergency = function(message) {
            var helper=getHelper(message, "emergency");
            helper.getElementsByTagName("button")[0].setAttribute("class", "emergency");
            log(helper);
        };
        
        /**
         * Create alert notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.alert=function(message) {
            var helper=getHelper(message, "alert");
            helper.getElementsByTagName("button")[0].setAttribute("class", "alert");
            log(helper);
        };
        
        /**
         * Create critical notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.critical=function(message) {
            var helper=getHelper(message, "critical");
            helper.getElementsByTagName("button")[0].setAttribute("class", "critical");
            log(helper);
        };
        
        /**
         * Create Error notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.error=function(message) {
            var helper=getHelper(message, "error");
            helper.getElementsByTagName("button")[0].setAttribute("class", "error");
            log(helper);
        };
        
        /**
         * Create warning notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.warning=function(message) {
            var helper=getHelper(message, "warning");
            helper.getElementsByTagName("button")[0].setAttribute("class", "warning");
            log(helper);
        };
        
        /**
         * Create notice notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.notice=function(message) {
            var helper=getHelper(message, "notice");
            helper.getElementsByTagName("button")[0].setAttribute("class", "notice");
            log(helper);
        };
        
        /**
         * Create info notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.info=function(message) {
            var helper=getHelper(message, "info");
            helper.getElementsByTagName("button")[0].setAttribute("class", "info");
            log(helper);
        };
        
        /**
         * Create debug notification
         * 
         * @memberOf minbox
         * @param {String} message minbox message
         * @returns {Object} minbox namespace
         * 
         * @throws {Error} for invalid argument exception
         */
        self.debug=function(message) {
            var helper=getHelper(message, "debug");
            helper.getElementsByTagName("button")[0].setAttribute("class", "debug");
            log(helper);
        };
        return self;
        
    }());
    
    
    
}));
