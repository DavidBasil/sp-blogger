'use strict'

angular.module('spBlogger', ['ui.router', 'spBlogger.posts'])

angular.module('spBlogger').run(['$state', function($state){
	$state.go('allPosts')
}])
