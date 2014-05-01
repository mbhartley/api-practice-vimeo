var MainRouter = Backbone.Router.extend({

	routes: {

		"nicetype/:videos" : "niceTypeVideos"
	},

initialize: function(){
	console.log('anything happening!?!?!');
	this.videos = new VideoCollection;
	this.videos.on('add', function(video){
		new VideoView({model: video})
		console.log('router initialized!');
	});
},

niceTypeVideos: function(){
	console.log('niceTypeVideos good!')
	this.videos.fetch();

  }
})