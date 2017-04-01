document.addEventListener("turbolinks:load", function() {
   $('#action2').click(function(){
    content = $('#text_area').val();
    result = $.parseHTML(content);
    $('#list_youtubes').html(result);

    data = $('.yt-lockup-title .yt-uix-sessionlink');
    $(data).each(function(){
      link = 'https://www.youtube.com' + $(this).attr('href');
      name = $(this).attr('title');
      $list_youtubes.push({link: link, name: name});
    });
    console.log($list_youtubes);
    $('#log').append('<div>buoc 1 xong</div>')
  });
});