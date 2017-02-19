$("#search-btn").on('click', function(){
	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
	var search = $("#searchBar").val();
	var numRec = $("#numRecord").val(); 
	var yearBeg = $("#yearBeg").val(); 
	var yearEnd = $("#yearEnd").val();
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 		authKey 
 		+ "&q=" + search 
 		+ "&limit=" + numRec 
 		+ "&begin_date=" + yearBeg + "0101"  
 		+ "&end_date=" + yearEnd + "1231"
 		;
 	console.log(queryURLBase);
	$.ajax({url: queryURLBase, method: 'GET'})
		.done(function(data){
		//create new div
		for (i = 0; i < numRec; i++){
			var newdiv = $("<div>");
			//create new elements
			var title = $("<h2>");
			var auth = $("<h3>");
			var sect = $("<p>");
			var time = $("<p>");
			var link = $("<a>");
			//create the text for each element
			var results = data.response.docs;
			console.log(results)
			var titleText = results[i].headline.main;
			console.log(titleText);
			var authText = results[i].source;
			console.log(authText);
			var sectText = results[i].section_name;
			var timeText = results[i].pub_date;
			var linkText = results[i].web_url;
			//append text
			title.append(titleText);
			auth.append(authText);
			sect.append(sectText);
			time.append(titleText);
			link.append(linkText);
			//apppend to div
			newdiv.append(title);
			newdiv.append(auth);
			newdiv.append(sect);
			newdiv.append(time);
			newdiv.append(link);
			$("#results").append(newdiv);
		}

	})

});