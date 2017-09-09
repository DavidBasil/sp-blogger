'use strict'

// module spBlogger.posts.controllers
angular.module('spBlogger.posts.controllers', [])
	// PostController gets all posts
	.controller('PostController', ['$scope', 'postService', function($scope, postService){
		// use postService to get all posts
		$scope.getAllPosts = function(){
			return postService.getAll()
		}
		// assign posts to postService data
		$scope.posts = $scope.geAllPosts()
	}])
	// PostDetailsController gets each post's details	
	.controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'postService', function($stateParams, $state, $scope, postService){
		// user postService to get each post
		$scope.getPostById = function(id){
			return postService.getPostById(id)
		}
		// go to all posts view
		$scope.closePost = function(){
			$state.go('allPosts')
		}
		// assign single post to singlePost var
		$scope.singlePost = $scope.getPostById($stateParams.id)
	}])

