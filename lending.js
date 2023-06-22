function draw()
  {
    var canvas = document.getElementById('circle');
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d'); 
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}




var marker = new atlas.HtmlMarker({
    color: 'DodgerBlue',
    text: '10',
    position: [0, 0],
    popup: new atlas.Popup({
        content: '<div style="padding:10px">Hello World</div>',
        pixelOffset: [0, -30]
    })
});

map.markers.add(marker);

//Add a click event to toggle the popup.
map.events.add('click',marker, () => {
    marker.togglePopup();
});

//Wait until the map resources are ready.
map.events.add('ready', function () {
    //Create a HTML marker and add it to the map.
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-0.1406, 51.5018],
        pixelOffset: [5, -18]
    }));
});