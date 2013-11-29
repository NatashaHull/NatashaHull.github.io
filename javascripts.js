$(document).ready(function () {
  var callOutStartX = $('#callout').position().left;

  callouts = [
    "I have a high level of experience with <strong>Ruby</strong>, and have taught and TA'd classes at RailsBridge. I <a href='#crud-generator'>made a gem</a> too.",
    "I've written countless <strong>Rails</strong> applications, and wrote <a href='#rails-lite'>a mini-version of Rails</a> using WEBrick.",
    "I've written my share of nasty joins in <strong>SQL</strong>, and I wrote <a href='#active-record-lite'>my own ORM</a> for Rails.",
    "I'm proficient in <strong>JavaScript</strong>, jQuery, and Backbone.",
    "I picked up <strong>Python</strong> last summer while teaching myself using Berkeley's AI class for fun.",
    "Design isn't as fun as programming for me, but I know enough <strong>CSS</strong> to get by.",
    "I've built a lot of small <a target='_blank' href='https://github.com/NatashaHull/AppAcademyProjects/tree/master/Week6'>JavaScript games</a> using <strong>jQuery</strong>.",
    "I have converted <a href='#hack-underflow'>a complex Rails app</a> into a client-side <strong>Backbone.js</strong> app.",
    "I use <strong>git</strong> religiously. Check out <a target='_blank' href='https://github.com/NatashaHull'>my Github</a>!"
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