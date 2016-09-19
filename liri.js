var keys = require('./keys.js')
var request = require('request')
var Twitter = require('twitter')
var spotify = require('spotify')
var fs = require('fs')

// var kev = keys.kevin;

// for(var key in kev){
// 	console.log("Kevin is " + kev[key])
// }
var movieArg;

var firstArg = process.argv[2];
var secondArg = process.argv[3];
var thirdArg = process.argv[4];
var fourthArg = process.argv[5];
var fifthArg = process.argv[6];
var sixthArg = process.argv[7];

if(firstArg == "my-tweets"){
	var client = new Twitter(keys.twitterKeys);
	var params = {screen_name: 'inrtracker'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	  	for(var i=0; i < tweets.length; i++){
	  		console.log(tweets[i].created_at);
	  		console.log('');
	  		console.log(tweets[i].text);
	  	}
	  }
	});	
}else if(firstArg == "spotify-this-song"){
	var songName;
		if(sixthArg != undefined){
			songName = secondArg + "-" + thirdArg + "-" + fourthArg + "-" + fifthArg + "-" + sixthArg;
		}else if(fifthArg != undefined){
			songName = secondArg + "-" + thirdArg + "-" + fourthArg + "-" + fifthArg;
		}else if(fourthArg != undefined){
			songName = secondArg + "-" + thirdArg + "-" + fourthArg;
		}else if(thirdArg != undefined){
			songName = secondArg + "-" + thirdArg;
		}else if(secondArg != undefined){
			songName = secondArg;
		}
	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }else if(songName == undefined){
	    	songName = 'What\'s my age again';
	    }
	    var songs = data.tracks.items;

	    for(var i = 0; i < songs.length; i++){
	    	console.log('\n'+i);
	    	console.log('\nartist(s): ' + songs[i].artists);
	    	console.log('\nsong name: ' + songs[i].name);
	    	console.log('\npreview song: ' + songs[i].preview_url);
	    	console.log('\nalbum: ' + songs[i].album.name);
	    }
	});
}else if(firstArg == "movie-this"){
	// if(firstArg == ""){
	// 	movieArg = secondArg;
	// }else if(secondArg == ""){
	// 	movieArg = secondArg + "_" + thirdArg;
	// }else if(thirdArg == ""){
	// 	movieArg = secondArg + "_" + thirdArg + "_" + fourthArg;
	// }else if(fourthArg == ""){
	// 	movieArg = secondArg + "_" + thirdArg + "_" + fourthArg + "_" + fifthArg;
	// }else if(fifthArg == ""){
	// 	movieArg = secondArg + "_" + thirdArg + "_" + fourthArg + "_" + fifthArg + "_" + sixthArg;
	// }
		if(sixthArg != undefined){
			movieArg = secondArg + "-" + thirdArg + "-" + fourthArg + "-" + fifthArg + "-" + sixthArg;
		}else if(fifthArg != undefined){
			movieArg = secondArg + "-" + thirdArg + "-" + fourthArg + "-" + fifthArg;
		}else if(fourthArg != undefined){
			movieArg = secondArg + "-" + thirdArg + "-" + fourthArg;
		}else if(thirdArg != undefined){
			movieArg = secondArg + "-" + thirdArg;
		}else if(secondArg != undefined){
			movieArg = secondArg;
		}
	var movieUrl = "http://www.omdbapi.com/?t=" +movieArg + "&y=&plot=full&tomatoes=true&r=json";
	console.log(movieUrl)
	
	request(movieUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var movData = JSON.parse(body);
	
	console.log('\nYou typed in ' + movData.Title);
	console.log('\n'+movieArg+' was made in ' + movData.Year);
    console.log('\n'+movieArg+' is rated ' + movData.Rated);
    console.log('\n'+movieArg+' has an IMDB rating of ' + movData.imdbRating);
    console.log('\n'+movieArg+' was filmed in ' + movData.Country);
    console.log('\n'+'Language: ' + movData.Language);
    console.log('\n'+'Plot Summary: ' + movData.Plot);
    console.log('\n'+movieArg+' features ' + movData.Actors);
    console.log('\n'+'Rotten Tomatoes Rating: ' + movData.tomatoRating);
	console.log('\n'+'Rotton Tomatoes URL: ' + movData.tomatoURL);
}else if(firstArg == "do-what-it-says"){
}else{
	console.log("not a valid argument")

}});

};
