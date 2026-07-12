var app = {
  setWindowHeight() {
    document.documentElement.style.setProperty(
      "--window-inner-height",
      $(window).innerHeight() + "px",
    );
  },

  swiperFn() {
    if ($(".project-slider").length > 0) {
      var projectSlider = new Swiper(".project-slider", {
        loop: false,
        slideVisibleClass: "is-visible",
        watchSlidesVisibility: true,
        observer: true,
        spaceBetween: 10,
        observeParents: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          350: {
            slidesPerView: 1.1,
          },
          400: {
            slidesPerView: 1.1,
          },
          440: {
            slidesPerView: 1.1,
          },
          525: {
            slidesPerView: 1.2,
          },
          650: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 1.4,
          },
          992: {
            slidesPerView: 1.1,
          },
          1200: {
            slidesPerView: 1.2,
          },
          1700: {
            slidesPerView: 1.4,
          },
        },
      });
    }
    $(function () {
      window.setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 300);
    });
    $(window).focus(function () {
      {
        window.dispatchEvent(new Event("resize"));
      }
    });
  },

  bodyClickControlFn() {
    $("body").on("click", function (e) {
      if (
        e.target.closest(".langs-menu") === null &&
        e.target.closest(".langs-menu-content") === null
      ) {
        $(".langs-menu").removeClass("active");
      }
    });
  },
  validateForm() {
    $(".validateForm").each(function () {
      $(this).validate({
        rules: {
          mail: "required email",
          namesurname: {
            required: true,
          },
          name: {
            required: true,
          },

          surname: {
            required: true,
          },
          phone: {
            required: true,
          },
          phoneCode: {
            required: true,
          },
          library: {
            required: true,
          },
          checkbox: {
            required: true,
          },
          ccardskt: {
            required: true,
          },
          detailCheckbox: {
            required: true,
          },
          ckullaniciadi: {
            required: true,
          },
          accessCode: {
            required: true,
          },
          reason: {
            required: true,
          },
          oldpassword: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },
          password: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },
          retry_password: {
            required: true,
            minlength: 8,
            maxlength: 14,
            equalTo: "#password",
          },
          cpasswordnew: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },

          cnewpasswordagain: {
            required: true,
            minlength: 8,
            maxlength: 14,
            equalTo: "#cnewpassword",
          },
          verification: {
            required: true,
            maxlength: 1,
          },
          sozlesme: {
            required: true,
          },
          subject: {
            required: true,
          },
          message: {
            required: true,
          },
          rating: {
            required: true,
          },
          comment: {
            required: true,
          },
        },
        messages: {
          mail: {
            required: "This field is required!",
            email: "Please enter a valid e-mail address!",
          },
          namesurname: {
            required: "This field is required!",
          },
          name: {
            required: "This field is required!",
          },
          surname: {
            required: "This field is required!",
          },
          phone: {
            required: "This field is required!",
          },
          phoneCode: {
            required: "This field is required!",
          },
          checkbox: {
            required: "This field is required!",
          },
          detailCheckbox: {
            required: "This field is required!",
          },
          library: {
            required: "This field is required!",
          },
          accessCode: {
            required: "This field is required!",
          },
          reason: {
            required: "This field is required!",
          },

          subject: {
            required: "This field is required!",
          },
          message: {
            required: "This field is required!",
          },
          kitapadi: {
            required: "This field is required!",
          },
          rating: {
            required: "This field is required!",
          },
          comment: {
            required: "This field is required!",
          },
          user: {
            required: "Select A User!",
          },

          oldpassword: {
            required: "This field is required!",
            minlength: jQuery.validator.format(
              "You must enter at least {0} characters!",
            ),
            maxlength: jQuery.validator.format(
              "Maximum allowed length is {0} characters!",
            ),
          },
          password: {
            required: "This field is required!",
            minlength: jQuery.validator.format(
              "You must enter at least {0} characters!",
            ),
            maxlength: jQuery.validator.format(
              "Maximum allowed length is {0} characters!",
            ),
          },
          retry_password: {
            required: "This field is required!",
            minlength: jQuery.validator.format(
              "You must enter at least {0} characters!",
            ),
            maxlength: jQuery.validator.format(
              "Maximum allowed length is {0} characters!",
            ),
          },
          cpasswordagain: {
            required: "This field is required!",
            minlength: jQuery.validator.format(
              "You must enter at least {0} characters!",
            ),
            maxlength: jQuery.validator.format(
              "Maximum allowed length is {0} characters!",
            ),
            equalTo: "Passwords Don't Match",
          },
          cnewpasswordagain: {
            required: "This field is required!",
            minlength: jQuery.validator.format(
              "You must enter at least {0} characters!",
            ),
            maxlength: jQuery.validator.format(
              "Maximum allowed length is {0} characters!",
            ),
            equalTo: "Passwords Don't Match",
          },
          sozlesme: {
            required: "This field is required!",
          },
          verification: {
            required: "This field is required!",
          },
        },
        highlight: function (element) {
          $(element).closest(".input-row").addClass("input-error");
        },
        unhighlight: function (element) {
          $(element).closest(".input-row").removeClass("input-error");
        },
      });
    });
  },
  mobileMenuOpenFn() {
    $("body").on("click", ".js-open-menu", function () {
      if ($(".header").hasClass("active")) {
        $(".header").removeClass("active");
        $(".header-wrapper").removeClass("active");
        $(".js-open-menu").removeClass("active");

        if (
          !$(".header").hasClass("active") &&
          !$(".offer").hasClass("active")
        ) {
          $("html, body").removeClass("scroll-disabled");
        }
      } else {
        $(".header").addClass("active");
        $(".header-wrapper").addClass("active");
        $(".js-open-menu").addClass("active");
        $("html, body").addClass("scroll-disabled");
      }
    });
  },
  mobileMenuItemOpen() {
    if (window.innerWidth <= 991) {
      $("body").on(
        "click",
        ".header-menu-item.has-submenu .header-menu-item__title",
        function () {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("html, body").removeClass("scroll-disabled");
          } else {
            $(this).addClass("active");
            $("html, body").addClass("scroll-disabled");
          }
        }
      );
    }
  },
  modalFn: function () {
    // Eğer sayfa yüklendiğinde herhangi bir .js-modal aktifse, overlay de aktif olmalı
    if ($(".js-modal.active").length) {
      $(".overlay").addClass("active");
      $("html, body").addClass("scroll-disabled");
    }

    $(".js-open-modal").on("click", function (e) {
      e.preventDefault();

      $(".overlay, .js-modal").removeClass("active");

      $(".overlay").addClass("active");
      var id = $(this).data("modal-id");
      $('.js-modal[data-modal-id="' + id + '"]').addClass("active");

      $("html, body").addClass("scroll-disabled");
    });

    $(".js-close-modal").on("click", function () {
      $(".overlay,.js-modal").removeClass("active");
      $("html, body").removeClass("scroll-disabled");
    });

    $(document).keydown(function (e) {
      if (e.key === "Escape") {
        $(".overlay,.js-modal").removeClass("active");
        $("html, body").removeClass("scroll-disabled");
      }
    });

    $("body").on("click", ".overlay", function () {
      $(".overlay,.js-modal").removeClass("active");
      $("html, body").removeClass("scroll-disabled");
    });
  },
  modalVideoControlFn() {
    $(".js-modal-btn").modalVideo({
      autoplay: 1,
      youtube: {
        autoplay: 1,
        mute: 1,
      },
      vimeo: {
        autoplay: 1,
      },
    });
  },

  tabFn() {
    $(".tab").each(function () {
      const $tabContainer = $(this);

      const $tabItems = $tabContainer.find(".js-tab-item");

      $tabItems.on("click", function (e) {
        e.preventDefault();

        const $clickedTab = $(this);
        const dataFilter = $clickedTab.data("filter");
        const dataTab = $clickedTab.data("tab");

        const $allTabItems = $clickedTab
          .closest(".animated-tabs")
          .find(".js-tab-item");
        const $filteredItems = $clickedTab
          .closest(".tab")
          .find(".filtered-item");

        $allTabItems.removeClass("active");

        if (dataFilter) {
          $allTabItems.removeClass("active");
          $clickedTab.addClass("active");
          $clickedTab
            .parent(".animated-tabs")
            .closest(".tab")
            .find(".filtered-item.active")
            .find(".js-tab-item.active")
            .trigger("click");

          if ($clickedTab.hasClass("js-filter-all")) {
            $filteredItems.removeClass("hide").addClass("active");
          } else {
            $filteredItems.removeClass("active").addClass("hide");
            const $targetFiltered = $filteredItems.filter("." + dataFilter);
            $targetFiltered.removeClass("hide").addClass("active");

            setTimeout(() => {
              const $activeSubTab = $targetFiltered.find(
                ".tab-link-wrapper .js-tab-item.active",
              );
              if ($activeSubTab.length === 0) {
                const $firstSubTab = $targetFiltered
                  .find(".tab-link-wrapper .js-tab-item")
                  .first();
                if ($firstSubTab.length) {
                  $firstSubTab.addClass("active");
                  const subFilter = $firstSubTab.data("filter");
                  const $subFiltered = $targetFiltered.find(".filtered-item");

                  $subFiltered.removeClass("active").addClass("hide");
                  $subFiltered
                    .filter("." + subFilter)
                    .removeClass("hide")
                    .addClass("active");
                }
              } else {
                const subFilter = $activeSubTab.data("filter");
                const $subFiltered = $targetFiltered.find(".filtered-item");

                $subFiltered.removeClass("active").addClass("hide");
                $subFiltered
                  .filter("." + subFilter)
                  .removeClass("hide")
                  .addClass("active");
              }
            }, 0);
          }
        } else if (dataTab) {
          $clickedTab.addClass("active");
          const $tabContent = $tabContainer.find(".tab-content");

          $tabContent.removeClass("filtering").addClass("filtered");
          $tabContent.filter("." + dataTab).removeClass("filtered");

          const hasAccordion = $tabContainer
            .find(".tab-content." + dataTab)
            .find(".accordion-wrapper");
          if (hasAccordion.length) {
            const firstItem = hasAccordion.find(".accordion-item").first();
            if (!firstItem.hasClass("active")) {
              firstItem.find(".js-accordion-trigger").trigger("click");
            }
          }
        }

        setTimeout(() => {
          const $tabsWrapper = $clickedTab.closest(".tab-link-wrapper");

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {

              if ($(window).width() < 992) {
                app.centerActiveTab($tabsWrapper, $clickedTab);
              }

              app.updateTabLine($tabsWrapper, $clickedTab);

            });
          });

        }, 100);
      });

      const $initialTab = $tabContainer.find(".js-tab-item.active").first();
      if ($initialTab.length > 0) {
        $initialTab.trigger("click");
      } else {
        const $firstTab = $tabContainer
          .find(".js-tab-item")
          .first()
          .addClass("active");
        $firstTab.trigger("click");
      }
    });

    $(".animated-tabs .js-tab-item.active").each(function () {
      const $tabsWrapper = $(this).closest(".animated-tabs");
      app.updateTabLine($tabsWrapper, $(this));
    });

    $(".js-category-filter .dropdown_bar-item-box__item").on(
      "click",
      function (e) {
        e.preventDefault();

        const $clickedItem = $(this);
        const dataFilter = $clickedItem.data("filter");

        if (dataFilter) {
          const $tabContainer = $(".tab");
          const $filteredItems = $tabContainer.find(".filtered-item");

          $filteredItems.removeClass("active").addClass("hide");
          $filteredItems
            .filter("." + dataFilter)
            .removeClass("hide")
            .addClass("active");

          const $targetFiltered = $filteredItems.filter("." + dataFilter);
          const $firstSubTab = $targetFiltered
            .find(".tab-link-wrapper .js-tab-item")
            .first();

          if ($firstSubTab.length) {
            $targetFiltered
              .find(".tab-link-wrapper .js-tab-item")
              .removeClass("active");
            $firstSubTab.addClass("active");

            const subFilter = $firstSubTab.data("filter");
            const $subFiltered = $targetFiltered.find(".filtered-item");

            $subFiltered.removeClass("active").addClass("hide");
            $subFiltered
              .filter("." + subFilter)
              .removeClass("hide")
              .addClass("active");
          }
        }
      },
    );

    const resetSubTabsInActiveFilteredItems = () => {
      $(".tab .filtered-item.active").each(function () {
        const $filteredItem = $(this);
        const $subTabsWrapper = $filteredItem.find(".tab-link-wrapper");
        const $subTabs = $subTabsWrapper.find(".js-tab-item");

        if ($subTabs.length > 0) {
          const $firstSubTab = $subTabs.first();
          const $activeSubTab = $subTabs.filter(".active");

          if (!$firstSubTab.is($activeSubTab)) {
            $subTabs.removeClass("active");
            $firstSubTab.addClass("active");

            const subFilter = $firstSubTab.data("filter");
            const $subFiltered = $filteredItem.find(".filtered-item");

            $subFiltered.removeClass("active").addClass("hide");
            $subFiltered
              .filter("." + subFilter)
              .removeClass("hide")
              .addClass("active");

            const $tabsWrapper = $firstSubTab.closest(".animated-tabs");
            if ($tabsWrapper.length > 0) {
              app.updateTabLine($tabsWrapper, $firstSubTab);
            }
          }
        }
      });
    };

    $(document).on(
      "click",
      ".js-outline-tab .js-tab-item[data-filter]",
      function () {
        setTimeout(() => {
          resetSubTabsInActiveFilteredItems();
        }, 100);
      },
    );
  },
  animatedTabs() {
    $(".animated-tabs").each(function () {
      const $tabsWrapper = $(this);
      app.updateTabLine($tabsWrapper);

      $tabsWrapper.find(".animated-tabs-item").on("click", function (e) {
        e.preventDefault();
      });
    });
  },

  updateTabLine($tabsWrapper, $activeTab = null) {
    if (!$tabsWrapper || !$tabsWrapper.length) return;

    const $activeItem =
      $activeTab || $tabsWrapper.find(".animated-tabs-item.active").first();

    const $line = $tabsWrapper.find(".animated-tabs-line");

    if (!$activeItem.length || !$line.length) return;

    const $container = $tabsWrapper.hasClass("tab-link-wrapper")
      ? $tabsWrapper
      : $tabsWrapper.find(".tab-link-wrapper");

    if (!$container.length) return;

    const container = $container[0];
    const item = $activeItem[0];

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const scrollLeft = container.scrollLeft;

    // 🔥 CRITICAL FIX: padding dahil gerçek iç offset
    const containerStyle = window.getComputedStyle(container);
    const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;

    const left =
      (itemRect.left - containerRect.left) +
      scrollLeft -
      paddingLeft;

    const width = $activeItem.outerWidth();

    $line.css({
      left: left,
      width: width,
    });

    // 🎨 color class
    $line.removeClass("blue orange light-purple purple red green");

    const colorClass = $activeItem
      .attr("class")
      .split(" ")
      .find((cls) =>
        ["blue", "orange", "light-purple", "purple", "red", "green"].includes(cls)
      );

    if (colorClass) {
      $line.addClass(colorClass);
    }
  },

  fixedTab: function () {
    var tab = $(".tab .tab-link-wrapper");
    if (tab.length > 0) {
      var scrollPos = $(window).scrollTop();
      var wrapper = $(".wrapper");
      if (wrapper.length > 0) {
        var firstSection = wrapper.find(".section").first();
        var lastSection = wrapper.find(".section").last();

        if (firstSection.length > 0 && lastSection.length > 0) {
          var firstSectionPos = firstSection.offset().top;
          var lastSectionPos = lastSection.offset().top + 300;
          var positionTopValue = parseInt(
            window
              .getComputedStyle(document.documentElement)
              .getPropertyValue("--tab-position")
              .trim(),
          );
          var activeTabItem = $(".js-scroll-item.active");

          if (activeTabItem.length > 0) {
            var parent = activeTabItem.closest(".tab-link-wrapper");
            var activeWidth = activeTabItem.outerWidth();
            var activePos = activeTabItem.position();

            $(".js-scroll-item").each(function () {
              var targetSection = $("#" + $(this).data("target"));
              if (targetSection.length > 0) {
                var sectionPos = targetSection.offset().top - 100;
                if (scrollPos > sectionPos - 100) {
                  $(".js-scroll-item").removeClass("active");
                  $(this).addClass("active");
                }
              }
            });

            if (parent.length > 0) {

              app.centerActiveTab(parent, activeTabItem);
              app.updateTabLine(parent);
            }

            if (!isNaN(positionTopValue) && scrollPos > positionTopValue) {
              tab.addClass("fixed").removeClass("hidden");
              if (scrollPos > lastSection.offset().top + 300) {
                tab.addClass("hidden");
              }
            } else {
              tab.removeClass("fixed hidden");
            }
          }
        }
      }
    } else {
    }

    $(".js-scroll-item").on("click", function (e) {
      e.preventDefault();

      var target = $(this).data("target");
      var targetSection = $("#" + target);

      if (targetSection.length > 0) {
        var newUrl = window.location.pathname + "#" + target;
        history.replaceState(null, null, newUrl);
      }
    });
  },
  scrollItem() {
    $("body").on("click", ".js-scroll-item", function (e) {
      e.preventDefault();
      let id = "";
      let scrollPos = "";

      if ($(this).hasClass("animated-tabs-item")) {
        $(".js-scroll-item").removeClass("active");
        $(this).addClass("active");
      }
      if ($(this).data("target")) {
        id = $(this).data("target");
        if (window.innerWidth < 992) {
          scrollPos = $("#" + id).offset().top - 100;
        } else scrollPos = $("#" + id).offset().top - 20;
      } else {
        id = $(this).attr("href");
        scrollPos = $(id).offset().top;
      }
      $("html, body").animate(
        {
          scrollTop: scrollPos,
        },
        200,
      );
    });
    $("body").on("click", ".js-scroll-link-item", function (e) {
      e.preventDefault();
      let id = $(this).attr("href");
      let scrollPos = $(id).offset().top;
      $("html, body").animate(
        {
          scrollTop: scrollPos,
        },
        200,
      );
    });
  },

  centerActiveTab: function ($wrapper, $item) {
    if (!$wrapper || !$wrapper.length || !$item || !$item.length) return;

    const $container = $wrapper.hasClass("tab-link-wrapper")
      ? $wrapper
      : $wrapper.find(".tab-link-wrapper");

    if (!$container.length) return;

    const containerWidth = $container.outerWidth();
    const itemWidth = $item.outerWidth();

    const itemOffset = $item[0].offsetLeft;
    const target =
      itemOffset - (containerWidth / 2) + (itemWidth / 2);

    $container.stop(true).animate(
      {
        scrollLeft: target,
      },
      250
    );
  },

  fancyboxFn() {
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["download", "zoom", "fullScreen", "close"],
      lang: "tr",
      i18n: {
        tr: {
          CLOSE: "Çıkış",
          NEXT: "Sonraki",
          PREV: "Önceki",
          ERROR:
            "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Tam Ekran",
          THUMBS: "Galeri",
          DOWNLOAD: "İndir",
          SHARE: "Share",
          ZOOM: "Zoom",
        },
        thumbs: {
          autoStart: true,
        },
      },
      animationEffect: "zoom",
      transitionEffect: "slide",
      dblclickContent: "zoom",
    });
    $.fancybox.defaults.backFocus = false;
  },

  inputSelectStyle() {
    const selects = document.querySelectorAll(".input-wrapper select");

    selects.forEach(function (select) {
      // Sayfa yüklendiğinde renk ayarla
      if (select.selectedIndex === 0) {
        select.style.color = "#7f838a"; // Placeholder rengi
      }

      select.addEventListener("change", function () {
        if (this.selectedIndex === 0) {
          this.style.color = "#7f838a"; // Placeholder rengi
        } else {
          this.style.color = "#161B28"; // Seçim sonrası renk
        }
      });
    });
  },

  headerScrollFn() {
    const header = document.querySelector(".header");

    const tabLinkWrapper = document.querySelector(".tab-link-wrapper.sticky");
    const projectDetailHeader = document.querySelector(".project-detail-tab-header");

    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const isScrollingDown = scrollTop > lastScrollTop && scrollTop > 50;
      const isScrollingUp = scrollTop < lastScrollTop && scrollTop > 50;
      const isTop = scrollTop <= 50;

      const handleElement = (el) => {
        if (!el) return;

        if (isScrollingDown) {
          el.classList.remove("scrolled");
        } else if (isScrollingUp) {
          el.classList.add("scrolled");
        } else if (isTop) {
          el.classList.remove("scrolled");
        }
      };

      // HEADER
      if (isScrollingDown) {
        header.classList.remove("scrolled");
        header.style.top = "-100px";
      } else if (isScrollingUp) {
        header.classList.add("scrolled");
        header.style.top = "0";
      } else if (isTop) {
        header.classList.remove("scrolled");
        header.style.top = "0";
      }

      // BOTH TARGET ELEMENTS
      handleElement(tabLinkWrapper);
      handleElement(projectDetailHeader);

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  },


  init: function () {
    app.setWindowHeight();

    app.swiperFn();
    app.bodyClickControlFn();
    app.tabFn();
    app.animatedTabs();
    app.validateForm();
    app.modalFn();
    app.modalVideoControlFn();
    app.mobileMenuOpenFn();
    app.fixedTab();
    app.scrollItem();
    app.updateTabLine();
    app.fancyboxFn();
    app.inputSelectStyle();
    app.mobileMenuItemOpen();
    app.headerScrollFn();
    app.centerActiveTab();
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        $(".animated-tabs").each(function () {
          app.updateTabLine($(this));
        });
      });
    });
  },
};

$(function () {
  app.init();
});

$(window).on("scroll", function () {
  app.fixedTab();
});
