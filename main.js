// function to get a random image

$.getJSON("https://dog.ceo/api/breeds/list/all", function(result) {
    var $dropdown = $("#dropdown");
    console.log(result.message);
    for (let key in result.message){
        if(!result.message.hasOwnProperty(key)){
            continue;
        }
        console.log(key);
        $dropdown.append($("<option />").val(key).text(key));
    };
    $dropdown.val('chihuahua');
});

function getRandomchihuahuaImage()
{
    // get the data from the server
    console.log($("#dropdown").val());
    var fetchUrl = "https://dog.ceo/api/breed/" + $("#dropdown").val() + "/images/random";
    $.get( fetchUrl, function( data ) {
        // set the source of the image
        $('#dogImage').attr('src', data.message)
    });
}
