var randomMovieArray=['Star Wars','Harry Potter','Game of thrones','wonder woman','Avengers','captain marvel'];



function apiCall(){
    var name=randomMovieArray[Math.floor((Math.random() * randomMovieArray.length-1) + 1)];
    console.log(name);
    $.getJSON('https://www.omdbapi.com/?apikey=bf380855&t=['+name+']&').then(function(resonse){
        console.log(resonse);
        var image=resonse.Poster;
        if(image!=='N/A'){
            $('#img_card').attr('src',image);
            $('#title').text(resonse.Title);
            $('#year').text(resonse.Year);
            $('#director').text(resonse.Director);
            $('#rating').text(resonse.imdbRating);
        }
    });
}

function movieSearch(){
    key=document.getElementById("searchBar").value;
    if(key.length>=3){
        $('#display_out').show();
        $.getJSON('https://www.omdbapi.com/?apikey=bf380855&s=['+key+']&').then((response)=>{
            console.log(response);
            let movies=response.Search;
            let output='';
            $.each(movies,(index,movie)=>{
                if(movie.Type=='movie'){
                    output+=`
                        <a href="#" onclick="return setMovie('${movie.imdbID}');">${movie.Title} (${movie.Year})</a>
                    `;
                }
               
            });
            $('#display_out').html(output);
        });
    }
    else{
        $('#display_out').hide();
    }
}


function setMovie(imdb){
    console.log(imdb);
    $.getJSON('https://www.omdbapi.com/?apikey=bf380855&i='+imdb).then((response)=>{
        console.log(response);
        var image_a=response.Poster;
        if(image_a!=='N/A'){
            $('#img_card').attr('src',image_a);
            $('#title').text(response.Title);
            $('#year').text(response.Year);
            $('#director').text(response.Director);
            $('#rating').text(response.imdbRating);
        }
    });
}


function movieSearch2(){
    key=document.getElementById("searchBar2").value;  
    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=4b3cdebfa41acc67afa72367f1541802&query='+key).then((response)=>{
        console.log(response);
        let movies=response.results;
        let output='';
        $.each(movies,(index,movie)=>{
                output+=`
                    <p>${movie.title}</p>
                `;
           console.log(movie.title);
        });
        $('#display_out2').html(output);    
    
    });
}
