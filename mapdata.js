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
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		1: {
			name: "Prague, Czech Republic",
			lat: 50.0833, 
			lng: 14.4167,
			description: '<strong style="color:#10AB64;">Botanicus</strong><br> Organic, BIO Skincare Products<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/botanicus_natural_face_soap_oils_organic_fair_trade_czech_eclipse_trading_post.jpg" width="150"/>',
			color: 'default',
			url: 'default'
			},
		3: {
			name: "Malawi",
			lat: 13.0167, 
			lng: 33.6000,
			description: '<strong style="color:#10AB64;">Dsenyo </strong><br> Fair Trade Gifts<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/dsenyo-little-friends-white-stuffed-animals-fair-trade-toys-rabbit.png" width="150"/>',
			color: 'default',
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
			4: {
			name: "Brooklyn, NY",
			lat: 40.6928, 
			lng: -73.9903,
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
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		6: {
			name: "Fairfax, VA",
			lat: 38.8526, 
			lng: -77.3044,
			description: '<strong style="color:#10AB64;">Jubilee Traders </strong><br> Handmade in India<br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/jubilee_traders_virgina_fair_trade_organic_jaipur_table_cloth_linen_blue_design_decor.jpg" width="150"/>',
			color: 'default',
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		7: {
			name: "India",
			lat: 21.0000, 
			lng: 78.0000,
			description: '<strong style="color:#10AB64;">Sevya Scarf </strong><br> Caring for humanity and <br>the environment we live in. <br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/sevya-scarf-silk-wholesale-wool-shawl-fair-trade.png" width="150"/>',
			color: 'default',
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		8: {
			name: "Cedar Rapids, IA",
			lat: 41.9831, 
			lng: -91.6686,
			description: '<strong style="color:#10AB64;">Eco Lips</strong><br>The best lip balm in the world <br><img src="http://lowermedia.net/eclipsetradingpost/wp-content/uploads/sites/27/2014/03/eco_lips_cedar_rapids_iowa_lip_balm_cherry_building_one_world.png" width="150"/>',
			color: 'default',
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},



			
} //end of simplemaps_worldmap_mapdata

}




