(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // :: 1.0 Welcome Post Slider Active Code
        $(".welcome-post-sliders").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 10,
            nav: true,
            navText: ['', ''],
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
        // :: 2.0 Instagram Slider Active Code
        $(".instargram_area").owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: true,
            navText: ['', ''],
            responsive: {
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        })
        // :: 3.0 Related Post Slider Active Code
        $(".related-post-slider").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: true,
            margin: 30,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        })
    }

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>'
        });
    }

    // :: 5.0 CounterUp Active JS
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 7.0 Search Form Active Code
    $(".searchBtn").on('click', function () {
        $(".search-hidden-form").toggleClass("search-form-open");
    });

    // :: 8.0 Search Form Active Code
    $("#pattern-switcher").on('click', function () {
        $("body").toggleClass("bg-pattern");
    });
    $("#patter-close").on('click', function () {
        $(this).hide("slow");
        $("#pattern-switcher").addClass("pattern-remove");
    });

    // :: 9.0 wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // :: 10.0 matchHeight Active JS
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // :: 11.0 Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    
    // Paragraph
    let currentText = 1; // Mặc định bắt đầu với đoạn văn bản đầu tiên

    // Khi nhấn nút Next
    document.getElementById("nextPage").addEventListener("click", function() {
        if (currentText < 3) { // Kiểm tra nếu chưa đến đoạn cuối
            document.getElementById("text" + currentText).style.display = "none"; // Ẩn đoạn văn bản hiện tại
            currentText++; // Tăng số đoạn văn bản
            document.getElementById("text" + currentText).style.display = "block"; // Hiển thị đoạn văn bản tiếp theo
        }
    });

    // Khi nhấn nút Previous
    document.getElementById("prevPage").addEventListener("click", function() {
        if (currentText > 1) { // Kiểm tra nếu chưa đến đoạn đầu
            document.getElementById("text" + currentText).style.display = "none"; // Ẩn đoạn văn bản hiện tại
            currentText--; // Giảm số đoạn văn bản
            document.getElementById("text" + currentText).style.display = "block"; // Hiển thị đoạn văn bản trước đó
        }
    });
    
    let currentPage = 1;
    const totalPages = 3;

    // Lấy các nút trang
    const pageItems = document.querySelectorAll(".pagination .page-item");
    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");
    const pageStatus = document.querySelector(".page-status p"); 

    // Hàm hiển thị nội dung page
    function showPage(page) {
        // Ẩn tất cả các đoạn
        for (let i = 1; i <= totalPages; i++) {
            const p = document.getElementById("text" + i);
            if (p) p.style.display = "none";
        }
        // Hiển thị đoạn tương ứng
        const currentText = document.getElementById("text" + page);
        if (currentText) currentText.style.display = "block";
    }

    // Hàm cập nhật active nút và page status
    function updatePagination(page) {
        pageItems.forEach(item => item.classList.remove("active"));
        pageItems[page].classList.add("active"); // index = page
        pageStatus.textContent = `Page ${page} of ${totalPages} results`;
    }

    // Khi bấm nút số trang 1 2 3
    pageItems.forEach((item, index) => {
        if (index !== 0 && index !== pageItems.length - 1) { // loại bỏ << và >>
            item.addEventListener("click", function () {
                currentPage = index; // index nút số chính xác
                showPage(currentPage);
                updatePagination(currentPage);
            });
        }
    });

    // Khi bấm nút <<
    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePagination(currentPage);
        }
    });

    // Khi bấm nút >>
    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePagination(currentPage);
        }
    });

    // Khởi tạo lần đầu
    showPage(currentPage);
    updatePagination(currentPage);

})(jQuery);
