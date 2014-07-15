var simplemaps_continentmap_mapdata = {

	main_settings:{
		//General settings
		width: 800,
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		label_color: '#FFFFFF',		
		border_color: '#FFFFFF',
		zoom: 'yes',
		pop_ups: 'detect', //on_click, on_hover, or detect
	
		//Country defaults
		state_description:   'Country description',
		state_color: '#88A4BC',
		state_hover_color: '#10AB64',
		state_url: 'http://simplemaps.com',
		all_states_inactive: 'yes',
		
		//Location defaults
		location_description:  'Location description',
		location_color: '#F6CF30',
		location_opacity: 1,
		location_url: 'http://simplemaps.com',
		location_size: 35,
		location_type: 'circle', //or circle
		all_locations_inactive: 'no',
		
		//Advanced settings - safe to ignore these
		url_new_tab: 'no',  
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'yes',
		auto_load: 'yes',
	},

	state_specific:{	
		SA: {
		name: 'South America',
		description: 'default',
		color: '#946330',
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	NA: {
		name: 'North America',
		description: 'default',
		color: '#4D2D19',
		hover_color: '#700517',
		url: 'default' 
	},	
	
	EU: {
		name: 'Europe',
		description: 'default',
		color: '#A06F3A',
		hover_color: '#700517',
		url: 'default' 
	},		
	
	AF: {
		name: 'Africa',
		description: 'default',
		color: '#654016',
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	NS: {
		name: 'North Asia',
		description: 'default',
		color: '#693B0C',
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	SS: {
		name: 'South Asia',
		description: 'default',
		color: '#4F3015',
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},	
	
	ME: {
		name: 'Middle East',
		description: 'default',
		color: '#9D7E58',
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},	
	
	OC: {
		name: 'Oceania',
		description: 'default',
		color: '#5F2A03',	
		hover_color: '#700517',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	}
},
	
	locations:{
		0: {
			name: "Cambodia",
			lat: 12.7333, 
			lng: 105.6667,
			description: '<strong style="color:#10AB64;">Malia Designs </strong><br>Designed to Carry a Cause <br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/malia-design-travel-wallet-fairtrade-organic-silk-chevron-print-chinese1.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/malia-designs/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		1: {
			name: "Ostra, Czech Republic",
			lat: 50.0833, 
			lng: 14.4167,
			description: '<strong style="color:#10AB64;">Botanicus</strong><br> Organic, BIO Skincare Products<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/botanicus_natural_face_soap_oils_organic_fair_trade_czech_eclipse_trading_post.jpg" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/botanicus/'
			},
		3: {
			name: "Brazil",
			lat: -15.7833, 
			lng: -47.8667,
			description: '<strong style="color:#10AB64;">Dsenyo </strong><br> Fair Trade Gifts<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/dsenyo-little-friends-white-stuffed-animals-fair-trade-toys-rabbit.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/dsenyo/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
			4: {
			name: "Laos",
			lat: 17.9667, 
			lng: 102.6000,
			description: '<strong style="color:#10AB64;">ARTICLE:22</strong><br> Turn Fashion Into Impact<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/article22_a22_bomb_bracelets_laos_fragment_circle_war_peace.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/article22/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
			5: {
			name: "Ghana",
			lat: 7.6833, 
			lng: 0.9833,
			description: '<strong style="color:#10AB64;">Baskets of Africa </strong><br>Zulu Wire Wraps<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/zulu_africa_wire_basket_colorful_fairtrade_lidded_pot_trade.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/baskets-of-africa/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		6: {
			name: "Jaipur, India",
			lat: 26.9260, 
			lng: 75.8235,
			description: '<strong style="color:#10AB64;">Jubilee Traders </strong><br> Handmade in India<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/jubilee_traders_virgina_fair_trade_organic_jaipur_table_cloth_linen_blue_design_decor.jpg" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/jubilee-traders/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		7: {
			name: "India",
			lat: 21.0000, 
			lng: 78.0000,
			description: '<strong style="color:#10AB64;">Sevya</strong><br> Caring for humanity and <br>the environment we live in. <br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/sevya-scarf-silk-wholesale-wool-shawl-fair-trade.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/sevya-scarf/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		8: {
			name: "Cedar Rapids, IA",
			lat: 41.9831, 
			lng: -91.6686,
			description: '<strong style="color:#10AB64;">Eco Lips</strong><br>The best lip balm in the world <br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/eco_lips_cedar_rapids_iowa_lip_balm_cherry_building_one_world.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/eco-lips/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		9: {
			name: "Chicago, IL",
			lat: 41.8819, 
			lng: -87.6278,
			description: '<strong style="color:#10AB64;">Bright Endeavors  </strong><br>A social enterprise of New Moms, Inc.<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/eclipse_tradingpost_bright_endeavors_soy_candles.jpg" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/bright-endeavors/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},

		10: {
			name: "Peru",
			lat: -12.0433, 
			lng: -77.0283,
			description: '<strong style="color:#10AB64;">Lucuma Designs</strong><br>Creating a Beautiful World!<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/lucuma_handmade_toys_peru.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/lucuma-designs/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		11: {
			name: "Peru",
			lat: -12.0433, 
			lng: -77.0283,
			description: '<strong style="color:#10AB64;">Mad Mats</strong><br>Beautiful, long-lasting outdoor rugs<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/madmats_handmade_outdoors_rugs_online.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/eclipsetradingpost.com/people/mad-mats/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		12: {
			name: "Spokane, WA",
			lat: 47.6589, 
			lng: -117.4250,
			description: '<strong style="color:#10AB64;">Maid Naturally</strong><br>All Natural Maid Service<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/maid_naturally_spokane_wa_natural_cleaning_products.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/maid-naturally/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		13: {
		name: "China",
			lat: 35.0000, 
			lng: 103.0000,
			description: '<strong style="color:#10AB64;">Moso Natural</strong><br>Clear The Air<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/moso_natural_china_clear_air_clean_scent.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/moso-natural/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		14: {
		name: "Eugene, OR",
			lat: 44.0519, 
			lng: -123.0867,
			description: '<strong style="color:#10AB64;">Panicked Greetings</strong><br>fun things handmade<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/panicked_greetings_card_handmade_oregon_buy_online_fairtrade.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/panicked-greetings/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		15: {
		name: "Egypt",
			lat: 26.0000, 
			lng: 30.0000,
			description: '<strong style="color:#10AB64;">Under the Nile</strong><br>Egyptian Organic Cotton<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/under_the_nile_fairtrade_handmade_toys_cats_dogs_scrappy.png" width="150"/>',
			color: 'default',
			url: 'http://eclipsetradingpost.com/people/under-the-nile/',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
				//10: {
//			name: "Ghana",
//			lat: 41.8819, 
//			lng: -87.6278,
//			description: '<strong style="color:#10AB64;">Global Mamas </strong><br>Love your product.<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/05/eclipse_tradingpost_bright_endeavors_soy_candles.jpg" width="150"/>',
//			color: 'default',
//			url: 'http://eclipsetradingpost.com/people/global-mamas/',
//			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
//		},

			
} //end of simplemaps_worldmap_mapdata

}




