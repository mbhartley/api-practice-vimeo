var VideoView = Backbone.View.extend({

	videoTemplate: _.template($('#video-template').text()),

	initialize: function(){
	  $('.video-feed').append(this.el);
	  this.render();
	},

	render: function(){
	  this.$el.html(this.videoTemplate(this.model));
	}
});

