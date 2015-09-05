$(document).ready(function () {
  var callOutStartX = $('#callout').position().left;

  callouts = [
    "I have a high level of experience with <strong>Ruby</strong>. I have worked with Ruby for over two years.",
    "I've worked on Rails professionally for nearly two years and I've written countless <strong>Rails</strong> applications, and wrote <a href='#rails-lite'>a mini-version of Rails</a> using WEBrick.",
    "On a regular basis I don't shy away from fixing data bugs with SQL or writing zero downtime migrations in raw SQL because Rails 2 doesn't naturally support zero downtime deployment.",
    "I'm proficient in <strong>JavaScript</strong>, jQuery, Backbone and Ember.",
    "Design isn't as fun as programming for me, but I know enough <strong>CSS</strong> to get by.",
    "I've built a lot of small <a target='_blank' href='https://github.com/NatashaHull/AppAcademyProjects/tree/master/Week6'>JavaScript games</a> using <strong>jQuery</strong>.",
    "I have converted <a href='#hack-underflow'>a complex Rails app</a> into a client-side <strong>Backbone.js</strong> app.",
    "I wrote a lot of Blurb's production Ember code in addition to defining our conventions for unit testing in our Ember application.",
    "I use <strong>git</strong> religiously. Check out <a target='_blank' href='https://github.com/NatashaHull'>my Github</a>!",
    "I am a proud user of Ubuntu 14.04. I'm also proficient in Windows and OS X."
  ];

  $('body').click(function () {
    $('#callout').addClass('hidden');
  });

  $(window).resize(function () {
    $('#callout').addClass('hidden').css('left', 0);
    callOutStartX = $('#callout').position().left;
  });

  $('#skillsList li').mouseover(function () {
    var x = $(this).position().left + $(this).width()/2 - callOutStartX - 100;
    $('#callout').removeClass('hidden').css('left', x);
    $('#callout').html(callouts[$('#skillsList li').index($(this))]);
  });
});
