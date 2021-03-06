// **This example illustrates the binding of DOM events to View methods.**
//
// _Working example: [2.html](../2.html)._
// _[Go to Example 3](3.html)_

//
(function($){
  var foo = Backbone.View.extend({
    el: $('body'), // el attaches to existing element
    // `events`: Where DOM events are bound to View methods. Backbone doesn't have a separate controller to handle such bindings; it all happens in a View.
    events: {
      'click button#add': 'addItem'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

      this.counter = 0; // total number of items added thus far
      this.render();
    },
    // `render()` now introduces a button to add a new list item.
    render: function(){
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
    },
    // `addItem()`: Custom function called via `click` event above.
    addItem: function(){
      this.counter++;
      console.log(this.el);
      $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
    }
  });

  var foo = new foo();
})(jQuery);