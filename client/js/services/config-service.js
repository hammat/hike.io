"use strict";

angular.module("hikeio").
	service("config", ["$location", function($location) {
		this.isProd = $location.host() === "hike.io" || $location.host() === "www.hike.io";
		this.hikeImagesPath = this.isProd ? "http://assets.hike.io/hike-images" : "/hike-images";
		this.landingPageImagesPath = this.isProd ? "http://assets.hike.io/landing-page-images" : "/landing-page-images";
		this.socketIoPath = this.isProd ? "http://socket.hike.io" : "http://localhost:8080";
	}]);