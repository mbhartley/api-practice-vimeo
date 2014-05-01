var VideoModel = Backbone.Model.extend ({});

var VideoCollection = Backbone.Collection.extend({
  
  model: VideoModel,

  url: "https://vimeo.com/api/v2/channel/nicetype/videos.json?callback=?",

});



