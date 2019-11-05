$(document).ready(function() {
    $(this).click(function() {
      var selected = $(this);
      $(this).removeClass('active');
      $(selected).addClass('active');
    });

    var $a = $('.a');
      $b = $('.b');
      $c = $('.c');
      $d = $('.d');
      $home = $('.home');
      $aboutme = $('.aboutme');
      $projects = $('.projects');
      $contactme = $('.contactme');

    $a.click(function() {
      $home.fadeIn();
      $aboutme.fadeOut();
      $projects.fadeOut();
      $contactme.fadeOut();
    });
    $b.click(function() {
      $aboutme.fadeIn();
      $projects.fadeOut();
      $contactme.fadeOut();
      $home.fadeOut();
    });
    $c.click(function() {
      $projects.fadeIn();
      $home.fadeOut();
      $aboutme.fadeOut();
      $contactme.fadeOut();
    });
    $d.click(function() {
      $contactme.fadeIn();
      $home.fadeOut();
      $projects.fadeOut();
      $aboutme.fadeOut();

    });

  });