/**
 * Tupi is a project to let the development of dynamic webpages easier.
 * It does not substitutes jQuery, it just turns easy and fast to develop rich
 * page contents and interface functionalities with few lines of code.
 * 
 * You are free to use the Tupi in your projects, it's open :)
 * I just ask you to write some note about it in your project.
 * 
 * @author    Daniel Campos <danielalvarengacampos@gmail.com>
 * @version   0.3
 */

var Tupi = {
  
  // Stores the main container element (#container).
  mainContainer   : '',
  
  // Stores the general animation function to load before the changes.
  transitionStart : '',
  
  // Stores the general animation function to load after the changes.
  transitionEnd   : '',
  
  // Indicates if the general transition effects (stored in two attributes
  // above) will be used or not. Default: 0 (not used).
  useTransitions  : 0,
  
  
  /**
   * Initializes the class and set the "mainContainer" element also indicates if
   * the general transition effects will be used.
   * 
   * @param selector string that specify the "mainContainer" element.
   * @param transitions integer that indicates if custom general transitions
   *        will be used.
   * @return void
   */
  init : function(selector, transitions){
    var self = this;
    
    self.mainContainer = selector;
    
    if(transitions != undefined){
      self.useTransitions = transitions;
    }
  },
  
  /**
   * Method to include other script files into page. So, now you just need one
   * .js file to load all your scripts from inside it.
   * 
   * @param file string that contains the address of the script to load
   * @return void
   */
  include : function (file){
    jQuery.getScript(file);
  },
  
  
  /**
   * Set the value of "transitionStart" attribute (check description of
   * "transitionStart").
   * 
   * @param callback function to be called or "" if not
   * @return void
   */  
  setTransitionStart: function(callback){
    var self = this;
    
    self.transitionStart = callback;
  },
  
  
  /**
   * Set the value of "transitionEnd" attribute (check description of
   * "transitionEnd").
   * 
   * @param callback function to be called or "" if not
   * @return void
   */
  setTransitionEnd : function(callback){
    var self = this;
    
    self.transitionEnd = callback;
  },
  
  
  /**
   * Hide the element specified by the "selector" parameter. It must be inside
   * the "mainContainer" element.
   * 
   * @param selector string that specify the element to hide
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @return void
   */
  hide : function (selector, callback) {
    var self = this;
    var actualElement = jQuery(self.mainContainer).find(selector);
    
    // Working as cascade, selecting and applying the function to all parents
    // until the "mainContainer".
    while(actualElement.html() != jQuery(self.mainContainer).html()){
      actualElement.hide();
      if(actualElement.html() != jQuery(self.mainContainer).find(selector).html()){
        actualElement.children().hide();
      }
      actualElement = actualElement.parent();
    }
    
    if(callback != undefined){
      callback.call();
    }
  },
  
  
  /**
   * Show the element specified by the "selector" parameter. It must be inside
   * the "mainContainer" element.
   * 
   * @param selector string that specify the element to show
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @return void
   */
  show : function (selector, callback) {
    var self = this;
    var actualElement = jQuery(self.mainContainer).find(selector);

    // Working as cascade, selecting and applying the function to all parents
    // until the mainContainer
    while(actualElement.html() != jQuery(self.mainContainer).html()){
      actualElement.show();
      actualElement = actualElement.parent();
    }
    
    if(callback != undefined){
      callback.call();
    }
  },
  
  
  /**
   * Hide all other elements inside "mainContainer" and display the element
   * specified by the "selector" parameter.
   * 
   * @param selector string that specify the chosen element
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @return void
   */
  hideShow : function (selector, callback) {
    var self = this;
    
    self.action(selector, function(){
      jQuery(self.mainContainer).children().hide();
      self.hide(selector);
      self.show(selector);
    //Find the first child after mainContainer and show it (Cascade working!!!)
    }, callback);
    
    
  },
  
  
  /**
   * Replace the content of specific element for a string.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will replace the content of element.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  replace : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).html(text);
      }else{
        jQuery(self.mainContainer).find(selector).html(text);
      }
    }, callback, customStart, customEnd);
  },
  
  
  /**
   * Hide all elements inside "mainContainer", replaces the content of specific
   * element for a string and display it.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will replace the content of element.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  hideReplace : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      jQuery(self.mainContainer).children().hide();
      self.hide(selector);
      self.show(selector);

      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).html(text);  
      }else{
        jQuery(self.mainContainer).find(selector).html(text);
      }
    }, callback, customStart, customEnd);
  },
  
  
  /**
   * Append a string to the specified element content.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will append to element content.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  append : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).append(text);  
      }else{
        jQuery(self.mainContainer).find(selector).append(text);
      }
    }, callback, customStart, customEnd);
    
    
  },
  
  
  /**
   * Hide all elements inside "mainContainer", append a string to specific
   * element and display it.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will append to element content.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  hideAppend : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      jQuery(self.mainContainer).children().hide();
      self.hide(selector);
      self.show(selector);

      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).append(text);  
      }else{
        jQuery(self.mainContainer).find(selector).append(text);
      }
    }, callback, customStart, customEnd);
    
  },
  
  
  /**
   * Prepend a string to the specified element content.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will prepend to element content.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  prepend : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).prepend(text);  
      }else{
        jQuery(self.mainContainer).find(selector).prepend(text);
      }
    }, callback, customStart, customEnd);
  },
  
  
  /**
   * Hide all elements inside "mainContainer", prepend a string to specific
   * element and display it.
   * 
   * @param selector string that specify the chosen element.
   * @param text string that will prepend to element content.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  hidePrepend : function(selector, text, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      jQuery(self.mainContainer).children().hide();
      self.hide(selector);
      self.show(selector);

      if(selector == undefined || selector == ''){
        jQuery(self.mainContainer).prepend(text);  
      }else{
        jQuery(self.mainContainer).find(selector).prepend(text);
      }
    }, callback, customStart, customEnd);    
    
  },
  
  replaceStaticPage : function(selector, link, callback, customStart, customEnd){
    var self = this;
    
    self.action(selector, function(){
      jQuery.ajax({
        url: link,
        type: "POST",
        dataType: "html",
        success: function(responseHtml){
          jQuery(self.mainContainer).find(selector).html(responseHtml);
        }
      });
    }, callback, customStart, customEnd);
    
  },
  
  
  /**
   * Get through AJAX a specific static page (like an HTML for example).
   * 
   * @param link string that indicates the URL address to get.
   * @return string
   */
  getStaticPage : function(link){
    return jQuery.ajax({
      url: link,
      async: false
    }).responseText;
  },
  
  
  /**
   * Get through AJAX a specific page and returns it's content as string.
   * 
   * @param link string that indicates the URL address to get.
   * @param params string that is the request query string (&param1=test...).
   * @param method string that indicates the method to use (GET or POST).
   * @return string
   */
  getHtml : function(link, params, method){
    return jQuery.ajax({
      url: link,
      type: method,
      data: params,
      dataType: "html",
      async: false
    }).responseText;
  },
  
  
  /**
   * Get through AJAX a specific page and returns it's content as string
   * codified in JSON.
   * 
   * @param link string that indicates the URL address to get.
   * @param params string that is the request query string (&param1=test...).
   * @param method string that indicates the method to use (GET or POST).
   * @return string
   */
  getJson : function(link, params, method){
    return jQuery.ajax({
      url: link,
      type: method,
      data: params,
      dataType: "json",
      async: false
    }).responseText;
  },
  
  
  /**
   * This is the method that perform the main execution tasks of the other
   * methods. It controls the execution workflow for the changing elements
   * methods. To force the execution flow it uses the jQuery "queue".
   * See "Object Pool" Design Pattern or QueuedPool for a better understanding,
   * here:
   * http://www.codegain.com/articles/designpatterns/general/introduction-to-the-object-pool-design-pattern.aspx
   * 
   * @param selector string that specify the chosen element.
   * @param method function to execute in the specific element.
   * @param callback function to be called after the execution of this method
   *                 or undefined if not
   * @param customStart function that overwritten the standard start animation
   *                 effect. Default: undefined
   * @param customEnd function that overwritten the standard end animation
   *                 effect. Default: undefined
   * @return void
   */
  action : function(selector, method, callback, customStart, customEnd){
    var self = this;
    
    if(self.useTransitions == 1 && self.transitionStart != '' && customStart == undefined ){
      jQuery(self.mainContainer).queue(function () {
        self.transitionStart.call();
        $(this).dequeue();
      });      
    }
    if(customStart != false && customStart != undefined){
      jQuery(self.mainContainer).queue(function () {
        self.customStart.call();
        $(this).dequeue();
      });
    }
    
    jQuery(self.mainContainer).queue(function () {
      method.call();
      $(this).dequeue();
    });  
    
    if(self.useTransitions == 1 && self.transitionEnd != '' && customEnd == undefined){
      jQuery(self.mainContainer).queue(function () {
        self.transitionEnd.call();
        $(this).dequeue();
      });
    }
    if(customEnd != false && customEnd != undefined){
      jQuery(self.mainContainer).queue(function () {
        self.customEnd.call();
        $(this).dequeue();
      });
    }
    
    if(callback != undefined){
      jQuery(self.mainContainer).queue(function () {
        callback.call();
        $(this).dequeue();
      });
    }
  }
  
}