document.addEventListener("turbolinks:load", function() {
  $('#btn_add').click(function(){
    $input = '<input class="link_youtube" /><br>';
    $('#list_url').append($input);
  });

  $('#video_action').click(function(){
    data = $('.link_youtube');
    $(data).each(function(){
      $list_youtubes.push({link: $(this).val()});
    });
    $('#log').append('<div>xong buoc 1</div><br>');
    console.log($list_youtubes);
  });

  $('#video_getlink').click(function(){
    $max_size = $($list_youtubes).length - 1;
    link = 'https://www.youtubeinmp4.com/youtube.php?video=' + $list_youtubes[0].link;
    url = '/ajaxs?link='  + link;
    do_ajax(url, getvideoafter);
  });
});

function getvideoafter(data){
  result = $.parseHTML(data);
  $('#youtube_details').html(result);
  link_google = 'https://www.youtubeinmp4.com/' + $('#downloadMP4:first').next().attr('href');
  name = $('#box .row .col-sm-7 h2').text();
  $link_google.push({link: link_google, name: name});
  uploadSpecific({link: link_google, name: name});
  $current_index++;

  if($current_index <= $max_size){
    link = 'https://www.youtubeinmp4.com/youtube.php?video=' + $list_youtubes[$current_index].link;
    url = '/ajaxs?link='  + link;
    do_ajax(url, getlinkafter);
  }
}