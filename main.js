// function to get a random image

// prepopulate the dropdown list
$.getJSON("https://dog.ceo/api/breeds/list/all", function(result) {
    var $dropdown = $("#dropdown");
    console.log(result.message);
    for (let key in result.message){
        if(!result.message.hasOwnProperty(key)){
            continue;
        }
        console.log(key);
        if (key === 'chihuahua') {
            $dropdown.append($("<option />").val(key).text("吉娃娃"));
        } else if (key === 'shiba') {
            $dropdown.append($("<option />").val(key).text("柴犬"));
        } else if (key === 'labrador') {
            $dropdown.append($("<option />").val(key).text("拉布拉多"));
        } else {
            $dropdown.append($("<option />").val(key).text(key));
        }
    };
    $dropdown.val('chihuahua');
});

// on select dropdown, update button text
$("#dropdown").change(function() {
    var text = "获得一个" + $("#dropdown option:selected").text() + "狗狗";
    //$('#myButton').innerHTML = text;
    $('#myButton').html(text);
});

function getRandomImage()
{
    // get the data from the server
    console.log($("#dropdown").val());
    var fetchUrl = "https://dog.ceo/api/breed/" + $("#dropdown").val() + "/images/random";
    $.get( fetchUrl, function( data ) {
        // set the source of the image
        $('#dogImage').attr('src', data.message)
    });
}
