var bluedotApp = angular.module('bluedot', []);

bluedotApp.controller('siteController',
	function($location, $scope, $timeout) {
		function triggerArrowFade() {
			$scope.schowScroll = false;
			$timeout(function() {
				$scope.showScroll = true;
			}, 1550);
		}

		function init() {
			var urlParams = $location.search();
			$scope.pageNo = urlParams.page ? Number(urlParams.page) : 0;

			$scope.backgroundStyles = [
				"bg--one",
				"bg--two",
				"bg--three",
				"bg--four",
				"bg--five"
			];
			
			$scope.navIsOpen = false;
			
			

			$scope.homeContent1 = "We build brands with public relations and marketing campaigns. We convert your ideas and products into words to motivate people, whether they are capital investors, press or potential clients.";
			$scope.homeContent2 = "The personal computer. The Internet. News 24 hours a day. Blogs. Our means of communicating has changed since the first continuously-published newspaper, the Boston News-Letter, was published in 1704. We can learn something from this two-page newspaper for the early colonies: it was short and to the point."; 
			$scope.homeContent3 = "In a world of noise, Bluedot gets your messaging heard through powerful writing, inventive strategy and bottom-line results.";
			$scope.homeContent4 = "We don’t wait for the phone to ring. We pro-actively pitch stories to our press contacts, then we measure our results. Success for clients can take several forms, which is why we establish goals at the onset: did your Web site traffic increase? Did your distribution channels report more in-store demand for your product? Did the trend-setting publication in your industry cover a story about you? These are the questions we want you to ask, the goals we strive to meet.";
			$scope.homeContent5 = "We look at clients with a comprehensive approach. What are your key messages, and how are they best communicated? In what form will this new look, brand or image appear? What are the words you will use?";
			$scope.homeContent6 = "Bluedot selects the appropriate marketing tools that will best relay your product or idea. We offer key message development, marketing collateral design and copy writing, presentation training, event management, strategic brand development and graphic design management.";
			$scope.homeContent7 = "Connecting the dots. That is what we do best. Telling your story to create ripples in consumer spending or spikes in Web visitors. Moving the needle and hitting your target.";
			
			$scope.servicesContent1 = "At Bluedot, we offer integrated communications combining both public relations and marketing strategy. The key is to engage people. We work to increase awareness so that the public will be motivated to investigate who you are on the web, in person or by phone.";
			$scope.servicesContent2 = "The art of telling your story. We believe public relations, or press work, needs to be strategic. At Bluedot, we compose public relations strategy that thoughtfully considers your industry and market trends and matches them with the appropriate editors of print, broadcast and on-line publications.";
			
			triggerArrowFade();
		}
		
		$scope.pageIsSelected = function (pageNo) {
			return pageNo === $scope.pageNo;
		};
		
		$scope.getBackgroundIMG = function () {
			return $scope.backgroundStyles[$scope.pageNo];
		};
		
		$scope.setPageNo = function (pageNo) {
			$scope.navIsOpen = false;
			triggerArrowFade();
			window.scrollTo(0, 0);
			$scope.pageNo = pageNo;
			$location.search('page', pageNo);
		};
		
		$scope.toggleNav = function () {
			$scope.navIsOpen = !$scope.navIsOpen;
		};
		
		$scope.showFullNav = function() {
			return $scope.navIsOpen;
		};
		
		init();
	});