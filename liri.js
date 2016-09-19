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

}else if(firstArg == "spotify-this-song"){

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
