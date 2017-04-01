document.addEventListener("turbolinks:load", function() {
  $current_index = 0;
  $max_size = 0;
  $list_youtubes = [];
  $link_google = [];

  $('#action').click(function(){
    link = $('input[name="list_youtube"]').val();
    url = '/ajaxs?link='  + link;
    do_ajax(url, callback_list);
  });

  $('#getlink').click(function(){
    $max_size = $($list_youtubes).length - 1;
    link = 'https://www.youtubeinmp4.com/youtube.php?video=' + $list_youtubes[0].link;
    url = '/ajaxs?link='  + link;
    do_ajax(url, getlinkafter);
  });

  // $('#upload').click(function(){
  //   $($link_google).each(function(){
  //     uploadSpecific(this)
  //   });
  // });
});

function do_ajax(url, func){
  $.get(url, 'text', func)
}

function callback_list(data){
  result = $.parseHTML(data);
  $('#list_youtubes').append(result);
  data = $('.pl-video-title-link ');
  $(data).each(function(index){
    link = 'https://www.youtube.com' + $(this).attr('href');
    name = $(this).text();
    $list_youtubes.push({link: link, name: name});
  });
  $('#log').append('<div>lay danh sach thanh cong</div>');
}

function getlinkafter(data){
  result = $.parseHTML(data);
  $('#youtube_details').html(result);
  link_google = 'https://www.youtubeinmp4.com/' + $('#downloadMP4:first').next().attr('href');
  $link_google.push({link: link_google, name: $list_youtubes[$current_index].name});
  uploadSpecific({link: link_google, name: $list_youtubes[$current_index].name});
  $current_index++;

  if($current_index <= $max_size){
    // link = 'http://vi.keepvid.com/?url=' + $list_youtubes[$current_index].link;
    // url = '/ajaxs?link='  + link;

    link = 'https://www.youtubeinmp4.com/youtube.php?video=' + $list_youtubes[$current_index].link;
    url = '/ajaxs?link='  + link;
    do_ajax(url, getlinkafter);
  }
}

function addLog(content){
  temp = $('#log').val();
  $('#log').val(temp + '\n' +content);
}

function uploadSpecific(data){
  link = encodeURIComponent(data.link);
  name = encodeURIComponent(data.name);
  url = 'http://savetodrive.net/api/upload?url=' + link + '&filename=' + name;
  // window.open(url, "_blank");
  $('#log').append('<a class="link_upload" style="padding:10px" target="_blank" href=" ' + url + ' ">Click here -> Name: ' + data.name + '</a> <br><br>');
  $('.link_upload').click(function(){
    $(this).css('color', 'red');
  });
}