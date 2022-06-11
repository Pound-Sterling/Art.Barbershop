let a = $(".triangle");
var actualInnerScroll = $("body").innerWidth();
a.css({
  "border-right-width": actualInnerScroll / 2,
  "border-left-width": actualInnerScroll / 2,
});
window.onresize = function (event) {
  var actualInnerScroll = $("body").innerWidth();
  a.css({
    "border-right-width": actualInnerScroll / 2,
    "border-left-width": actualInnerScroll / 2,
  });
};

$(document).ready(function () {
  $(".preload").removeClass("preload");
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      if (blockID == "") return false;

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  $(".header__burger").on("click", () => {
    $(".header__burger,.header__menu,.header__logo").toggleClass(
      "burger-active"
    );
    $("body").toggleClass("lock");
    $(".header__menu.burger-active a, .burger-active.header__logo").on(
      "click",
      () => {
        $(".header__burger,.header__menu,.header__logo").removeClass(
          "burger-active"
        );
        $("body").removeClass("lock");
      }
    );
    window.onresize = function (e) {
      var eW = e.target.outerWidth;
      if (eW >= 993) {
        $(".header__burger,.header__menu,.header__logo").removeClass(
          "burger-active"
        );
        $("body").removeClass("lock");
      }
    };
  });

  $(".tel__data").html("38(063)-142-16-52");
  $(".tel__data").prop("href", "tel:38(063)-142-16-52");
  $(".book").prop(
    "href",
    "https://b160618.yclients.com/company/166178/menu?o="
  );

  $(".slider__content").slick({
    infinite: true,
    speed: 300,
    touchThreshold: 10,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  if ($(".img-popup1").length) {
    var groups = {};
    $(".img-popup1").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });
    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true,
        },
        fixedContentPos: true,
      });
    });
  }
});
