'use strict';

// App controllers, it coming in handy module for DI
var myControllers = angular.module('myControllers', [
  'ngRoute'
]);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.tabs = [{
    "number": 1,
    "title": "Schritt 1.",
    "content": "Bacon ipsum dolor amet landjaeger short loin jerky boudin chuck hamburger. Ball tip landjaeger pork, pork belly capicola chuck kevin bresaola tri-tip strip steak turkey bacon filet mignon fatback pork chop. Beef ribs corned beef rump spare ribs, porchetta drumstick ribeye short ribs turkey tail leberkas boudin. Jerky salami fatback shankle sirloin meatball. Rump ribeye picanha pork swine drumstick pastrami ground round jerky."
  }, {
    "number": 2,
    "title": "Schritt 2.",
    "content": "Sausage pig prosciutto chicken swine porchetta. Pork chuck hamburger shank, pork loin leberkas tongue pork belly corned beef short loin filet mignon shankle venison cow flank. Jerky ground round shankle, filet mignon sausage kevin strip steak beef alcatra. Pork belly cupim beef ribeye pork chop turkey andouille strip steak pig ball tip sirloin."
  }, {
    "number": 3,
    "title": "Schritt 3.",
    "content": "Boudin bresaola sirloin, meatball kevin cow ham hock. Ham hock kevin boudin frankfurter, shank tongue cow brisket turkey leberkas tri-tip salami pastrami. Sausage jowl jerky, ham hock spare ribs turkey turducken short ribs pork tongue bresaola andouille strip steak. Short loin tenderloin sausage hamburger."
  }, {
    "number": 4,
    "title": "Schritt 4.",
    "content": "Turducken ham hock spare ribs, hamburger pork rump beef ribs kielbasa t-bone. Turkey jowl venison sausage ham hock, biltong pancetta andouille. Ham venison bresaola tongue shankle, pastrami beef tri-tip tenderloin picanha beef ribs rump turducken. Doner ball tip tri-tip landjaeger cow short ribs. Pancetta jerky drumstick landjaeger shank."
  }, {
    "number": 5,
    "title": "Schritt 5.",
    "content": "Shankle shank biltong rump ham fatback ham hock boudin tail. Brisket t-bone corned beef, rump boudin capicola meatball chuck jowl ribeye shank pork loin. Tri-tip shoulder pancetta ham pork belly short ribs. Short ribs beef kielbasa, meatloaf brisket turkey pork belly alcatra jowl hamburger chicken capicola. Pancetta turducken kevin boudin shoulder fatback ribeye bacon. Kielbasa meatloaf ball tip, drumstick ground round ham short loin bresaola capicola tenderloin strip steak pork salami meatball."
  }, {
    "number": 6,
    "title": "Schritt 6.",
    "content": "Turkey frankfurter pig meatloaf, tail doner boudin cow chuck tri-tip shankle tongue brisket alcatra pork loin. Short loin ground round pancetta leberkas, ham porchetta cupim andouille. Cupim ground round kielbasa swine short loin drumstick. Spare ribs salami ground round jerky."
  }, {
    "number": 7,
    "title": "Schritt 7.",
    "content": "Ham hock porchetta short loin, short ribs pancetta picanha leberkas chicken bresaola. Ground round tenderloin picanha, biltong alcatra chicken sirloin pig short loin. Rump bresaola pig tri-tip. Spare ribs shank ham hock kielbasa rump pig ground round venison salami leberkas pork loin turducken pork ribeye. Strip steak frankfurter pork ham pork loin. Ham chicken pork loin doner bresaola t-bone salami alcatra rump pork venison boudin."
  }, {
    "number": 8,
    "title": "Schritt 8.",
    "content": "Boudin porchetta bacon spare ribs shankle turducken short loin shank prosciutto salami. Doner ball tip hamburger, capicola alcatra short loin jowl bacon ham chuck cow ground round. Ham hock meatball pig bresaola turducken short ribs. Ball tip swine ground round picanha ham. Chicken tail sirloin picanha shank, pork belly shankle prosciutto kevin boudin."
  }, {
    "number": 9,
    "title": "Schritt 9.",
    "content": "Alcatra cow hamburger pork short ribs kielbasa chicken swine meatloaf. T-bone beef ribs jowl doner turducken. Drumstick beef landjaeger short ribs shank sausage. Landjaeger cupim andouille venison alcatra porchetta frankfurter short loin pork loin shank ball tip salami meatloaf beef boudin. Jowl landjaeger salami boudin sausage cow ground round, rump pork spare ribs leberkas hamburger drumstick tail pig. T-bone salami ham hock venison. Filet mignon bresaola pork flank, pork belly pig alcatra cupim tenderloin."
  }];
  var countChilds = $scope.tabs.length,
    childHeight = 50,
    overallHeight = countChilds * childHeight;

  $scope.height = countChilds * childHeight + "px";

  $('.settingsArrow').css({
    "border-top": childHeight - (childHeight / 2) + "px solid transparent",
    "border-bottom": overallHeight - (childHeight - (childHeight / 2)) + "px solid transparent"
  });
  $(document).ready(function() {

    $('.singleSettingTab').hover(function() {
      $(this).css({
        backgroundColor: "#ebebeb",
        color: "#000"
      });
    }, function() {
      if (!$(this).hasClass('active')) {
        $(this).css({
          backgroundColor: "#545454",
          color: "#fff"
        });
      }
    });

    var activeTab = 1,
      animationDuration = 250,
      lastActive = $('.singleSettingTab').first();
    $(".1").fadeIn(animationDuration);
    $('.singleSettingTab').first().css({
      "backgroundColor": "#ebebeb",
      "color": "#000"
    }).addClass('active');

    $scope.changeTab = function(number, event) {
      if (activeTab !== number) {
        $(event.target).addClass('active');
        var borderTop = (number * childHeight) - (childHeight / 2);
        $('.settingsArrow').animate({
          "border-top-width": borderTop,
          "border-bottom-width": overallHeight - borderTop
        }, 200);
        $("." + activeTab).fadeOut(animationDuration, function() {
          $("." + number).fadeIn(animationDuration);
          activeTab = number;

        });
        $(lastActive).removeClass('active').animate({
          backgroundColor: "#545454",
          color: "#fff"
        }, 250);
        lastActive = event.target;
      }
    };

  });
}]);

myControllers.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

myControllers.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);