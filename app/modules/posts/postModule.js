'use strict'

angular.module('spBlogger.posts', [])

angular.module('spBlogger.posts').config(['$stateProvider', '$locationProvider', function($stateProvider, $locatonProvider){
	// all posts
	$stateProvider.state('allPosts', {
		url: '/posts',
		templateUrl: 'modules/posts/views/posts.html',
		controller: 'PostController'
	})
	// single post
	$stateProvider.state('singlePost', {
		url: '/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
		controller: 'PostDetailController'
	})
}])
