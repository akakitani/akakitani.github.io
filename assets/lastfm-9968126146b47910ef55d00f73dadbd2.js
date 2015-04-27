$(document).ready(function() {

    var last_fm_url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Verbana&api_key=c4b434ce11c4e59f20433e95f4252ea0&format=json';

    var jqxhr = $.getJSON(last_fm_url, function(data) {
      var last_track = data.recenttracks.track.shift();
      var artist = last_track.artist['#text'];
      var title = last_track.name;
      var img_url = last_track.image[1]['#text'];
      if (!img_url) {
        img_url = '/assets/album-ef25caeb53f81d98aa1f086d854508fb.png';
      }

      $("#artist").text(artist);
      $("#title").text(title);
      $("#cover").attr("src", img_url);
    })
});
