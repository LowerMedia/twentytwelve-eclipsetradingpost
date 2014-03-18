var simplemaps_continentmap_mapdata = {

	main_settings:{
		//General settings
		width: 800,
		background_color: '#FFFFFF',	
		background_transparent: 'no',
		label_color: '#d5ddec',		
		border_color: '#FFFFFF',
		zoom: 'yes',
		pop_ups: 'detect', //on_click, on_hover, or detect
	
		//Country defaults
		state_description:   'Country description',
		state_color: '#88A4BC',
		state_hover_color: '#3B729F',
		state_url: 'http://simplemaps.com',
		all_states_inactive: 'no',
		
		//Location defaults
		location_description:  'Location description',
		location_color: '#FF0067',
		location_opacity: .8,
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
		color: '#CC33FF',
		hover_color: '#751d92',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	NA: {
		name: 'North America',
		description: 'default',
		color: '#3366FF',
		hover_color: '#1c388c',
		url: 'default' 
	},	
	
	EU: {
		name: 'Europe',
		description: 'default',
		color: '#FF3366',
		hover_color: '#c0264d',
		url: 'default' 
	},		
	
	AF: {
		name: 'Africa',
		description: 'default',
		color: '#33FF66',
		hover_color: '#1a8535',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	NS: {
		name: 'North Asia',
		description: 'default',
		color: '#33FFCC',
		hover_color: '#23b28e',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},
	
	SS: {
		name: 'South Asia',
		description: 'default',
		color: '#FF6633',
		hover_color: '#ac4422',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},	
	
	ME: {
		name: 'Middle East',
		description: 'default',
		color: '#FFCC33',
		hover_color: '#bb9525',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},	
	
	OC: {
		name: 'Oceania',
		description: 'default',
		color: '#FF33CC',	
		hover_color: '#b1238d',
		url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	}
},
	
	locations:{
		0: {
			name: "New York",
			lat: 40.71, 
			lng: -74.0059731,
			description: 'default',
			color: 'default',
			url: 'default',
			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
		},
		1: {
			name: "London",
			lat: 51.5073346, 
			lng: -0.1276831,
			description: 'default',
			color: 'default',
			url: 'default'
			}

} //end of simplemaps_worldmap_mapdata

}




