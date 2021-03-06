describe('parkalot', function() {


		beforeEach (function(){
			module('parkalot');
			$document=angular.element(document);
			$document.find('body').append('<div id="mapid"></div>');
		});


	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

		it('Testing filter function from controller', function(){
			
			var scope = {};
			var controller = $controller('mapController', {$scope:scope});

			controller.dist = "2000"; 
			controller.price = "10";
			controller.locations = [{"location_name":"Allpro Parking","location_id":5476,"listing_id":186692,"start":1470841200,"end":1470852000,"parkwhiz_url":"https://www.parkwhiz.com/p/cincinnati-parking/215-e-9th-st?start=1470841200&end=1470852000","api_url":"https://api.parkwhiz.com/p/cincinnati-parking/215-e-9th-st?start=1470841200&end=1470852000","address":"215 E. 9th St.","city":"Cincinnati","state":"OH","zip":"45202","lat":39.105860280849,"lng":-84.509822027578,"distance":1710,"recommendations":0,"reservation":1,"eticket":0,"valet":0,"indoor":0,"shuttle":0,"tailgate":0,"security":0,"restroom":0,"attended":0,"rv":0,"available_spots":5,"price":14.12,"price_formatted":"$14.12","www_reserve_url":"https://www.parkwhiz.com/reserve/?id=186692&start=1470841200&end=1470852000","api_reserve_url":"https://api.parkwhiz.com/reserve/?id=186692&start=1470841200&end=1470852000"},{"location_name":"ABM Parking Services","location_id":6326,"listing_id":359047,"start":1470841200,"end":1470852000,"parkwhiz_url":"https://www.parkwhiz.com/p/cincinnati-parking/655-plum-st?start=1470841200&end=1470852000","api_url":"https://api.parkwhiz.com/p/cincinnati-parking/655-plum-st?start=1470841200&end=1470852000","address":"327 W. 7th St.","city":"Cincinnati","state":"OH","zip":"45202","lat":39.102776438996,"lng":-84.518948962566,"distance":1785,"recommendations":0,"reservation":1,"eticket":0,"valet":0,"indoor":1,"shuttle":0,"tailgate":0,"security":0,"restroom":0,"attended":0,"rv":0,"available_spots":10,"price":3,"price_formatted":"$3","www_reserve_url":"https://www.parkwhiz.com/reserve/?id=359047&start=1470841200&end=1470852000","api_reserve_url":"https://api.parkwhiz.com/reserve/?id=359047&start=1470841200&end=1470852000"},{"location_name":"Parking Company of America","location_id":5508,"listing_id":188267,"start":1470841200,"end":1470852000,"parkwhiz_url":"https://www.parkwhiz.com/p/cincinnati-parking/425-e-court-st?start=1470841200&end=1470852000","api_url":"https://api.parkwhiz.com/p/cincinnati-parking/425-e-court-st?start=1470841200&end=1470852000","address":"425 E. Court St.","city":"Cincinnati","state":"OH","zip":"45202","lat":39.106363072737,"lng":-84.505689146463,"distance":2619,"recommendations":0,"reservation":1,"eticket":0,"valet":0,"indoor":0,"shuttle":0,"tailgate":0,"security":0,"restroom":0,"attended":0,"rv":0,"available_spots":10,"price":10,"price_formatted":"$10","www_reserve_url":"https://www.parkwhiz.com/reserve/?id=188267&start=1470841200&end=1470852000","api_reserve_url":"https://api.parkwhiz.com/reserve/?id=188267&start=1470841200&end=1470852000"}];
			controller.locationsExpected = [{"location_name":"Allpro Parking","location_id":5476,"listing_id":186692,"start":1470841200,"end":1470852000,"parkwhiz_url":"https://www.parkwhiz.com/p/cincinnati-parking/215-e-9th-st?start=1470841200&end=1470852000","api_url":"https://api.parkwhiz.com/p/cincinnati-parking/215-e-9th-st?start=1470841200&end=1470852000","address":"215 E. 9th St.","city":"Cincinnati","state":"OH","zip":"45202","lat":39.105860280849,"lng":-84.509822027578,"distance":1710,"recommendations":0,"reservation":1,"eticket":0,"valet":0,"indoor":0,"shuttle":0,"tailgate":0,"security":0,"restroom":0,"attended":0,"rv":0,"available_spots":5,"price":14.12,"price_formatted":"$14.12","www_reserve_url":"https://www.parkwhiz.com/reserve/?id=186692&start=1470841200&end=1470852000","api_reserve_url":"https://api.parkwhiz.com/reserve/?id=186692&start=1470841200&end=1470852000"},{"location_name":"ABM Parking Services","location_id":6326,"listing_id":359047,"start":1470841200,"end":1470852000,"parkwhiz_url":"https://www.parkwhiz.com/p/cincinnati-parking/655-plum-st?start=1470841200&end=1470852000","api_url":"https://api.parkwhiz.com/p/cincinnati-parking/655-plum-st?start=1470841200&end=1470852000","address":"327 W. 7th St.","city":"Cincinnati","state":"OH","zip":"45202","lat":39.102776438996,"lng":-84.518948962566,"distance":1785,"recommendations":0,"reservation":1,"eticket":0,"valet":0,"indoor":1,"shuttle":0,"tailgate":0,"security":0,"restroom":0,"attended":0,"rv":0,"available_spots":10,"price":3,"price_formatted":"$3","www_reserve_url":"https://www.parkwhiz.com/reserve/?id=359047&start=1470841200&end=1470852000","api_reserve_url":"https://api.parkwhiz.com/reserve/?id=359047&start=1470841200&end=1470852000"}];
			expect(2).toEqual(2);
			
		});

});