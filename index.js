$(document).ready(function(){

    /////////////////////// NAV /////////////////////////
    //opens nav menu
    $(".js-toggler").click(function(){
        $(".js-nav-menu").css("left", "0");
        $(".js-backdrop").fadeToggle();
    })  ;  
    
    // closes nav menu
    $(".js-menu-close").click(function(){
        $(".js-nav-menu").css("left", "-100%")
        $(".js-backdrop").fadeToggle();
    });



    ///////////////// SLIDER //////////////////////////

    //for desktop
    if($(window).width() > 991){

        //clicking a thumbnail displays big image
        $(".thumbnails").children("img").each( function(){
            $(this).click(function(){
                // displays big image 
                const index = $(".thumbnails").children("img").index($(this));
                $(".js-big-img").attr("src", `images/image-product-${index + 1}.jpg`);

                //adds border to clicked thumbnail
                $(".thumbnails").children("img").each(function(){
                    $(this).removeClass("active")
                });
                $(this).addClass("active");
            });
        });

    };

    // slider controls 
    let sliderIndex = 3
    const sliderImages = [...document.querySelectorAll(".js-slider-img")];

    // clicking next button
    $(".js-slider-next").click(function(){
        if(sliderIndex !== 0) {
            sliderImages[sliderIndex].style.left = "-100%";
            if(sliderIndex > 1) sliderIndex --;
        }
    });

    // clicking previous button
    $(".js-slider-previous").click(function(){
        if(sliderIndex !== 4) {
            sliderImages[sliderIndex].style.left = "0";
            if(sliderIndex < 3) sliderIndex ++
        }
    });

    /////////////// LIGHTBOX ///////////////////

    $(".lightbox").hide();
    //open lightbox with correct img and active thumbnail
    if($(window).width() > 991) {
        $(".js-big-img").click(function(){
            $(".lightbox").fadeIn(300);
    
            const thumbnailIndex = $(".thumbnails").children("img").index($(".thumbnails").children(".active"))
            const thumbnail = $(".lightbox__thumbnails").find("img").get(thumbnailIndex);
            
            $(".lightbox__img").children("img").attr("src", `images/image-product-${thumbnailIndex + 1}.jpg`)
            $(".lightbox__thumbnails").find("img").each(function() {
                $(this).removeClass("active")
            })
            thumbnail.classList.add("active")
        });
    }

    //clicking a thumbnail displays big image
    $(".lightbox__thumbnails").find("img").each( function(){
        $(this).click(function(){
            // displays big image 
            const index = $(".lightbox__thumbnails").find("img").index($(this));
            $(".lightbox__img").children("img").attr("src", `images/image-product-${index + 1}.jpg`);

            //adds border to clicked thumbnail
            $(".lightbox__thumbnails").find("img").each(function(){
                $(this).removeClass("active")
            });
            $(this).addClass("active");
        });
    });

    //clicking previous button 
    $(".js-lightbox-previous").click(function(){
        // gets index of thumbnail img that is active 
        let index = $(".lightbox__thumbnails").find("img").index($(".lightbox__thumbnails").find(".active"))
        if(index === 0) index = 3;
        else index --;

        //sets src attribute of big image acording to thumbnail index 
        $(".lightbox__img").children("img").attr("src", `images/image-product-${index + 1}.jpg`);


        // removes active class from current thumbnail and adds it to previous 
        $(".lightbox__thumbnails").find("img").each(function(){
            $(this).removeClass("active")
        });
        const thumbnail = $(".lightbox__thumbnails").find("img").get(index)
        thumbnail.classList.add("active");

    });

    //clicking next button
    $(".js-lightbox-next").click(function(){
        // gets index of thumbnail img that is active 
        let index = $(".lightbox__thumbnails").find("img").index($(".lightbox__thumbnails").find(".active"))
        console.log(index)
        if(index === 3) index = 0;
        else index ++;

        //sets src attribute of big image acording to thumbnail index
        $(".lightbox__img").children("img").attr("src", `images/image-product-${index + 1}.jpg`);

        // removes active class from current thumbnail and adds it to next
        $(".lightbox__thumbnails").find("img").each(function(){
            $(this).removeClass("active")
        });
        const thumbnail = $(".lightbox__thumbnails").find("img").get(index)
        thumbnail.classList.add("active");

    });

    //close Lightbox 
    $(".js-lightbox-close").click(function(){
        $(".lightbox").fadeOut(300)
    });

    
    
    //////////////// CART ////////////////////
    $(".cart-notification").hide();
    $(".cart__item").hide()

    //Select item quantity
    $(".js-minus").click(function(){
        const counterValue = parseInt(document.querySelector(".counter").innerHTML)
        const counter = document.querySelector(".counter");
        if(counterValue === 0) return;
        else counter.innerHTML = counterValue - 1;     
    });
    $(".js-plus").click(function(){
        const counterValue = parseInt(document.querySelector(".counter").innerHTML)
        const counter = document.querySelector(".counter");
        counter.innerHTML = counterValue + 1;   
    });


    //show/hide cart 
    $(".nav__2-icon").click(function(){
        $(".cart").fadeToggle(300);
        $(this).children("svg").toggleClass("cart-icon")
    });


    //add to cart button
    let counterValue = 0;
    $(".js-add-to-cart").click(function(){
        const itemPrice = 125;
        counterValue = counterValue +  parseInt(document.querySelector(".counter").innerHTML);
        const total = itemPrice * counterValue;

        if(counterValue < 1) return;

        $(".cart__item-sum").html(`$${itemPrice}.00 x ${counterValue}`);
        $(".cart__item-total").html(`$${total}.00`);

        $(".empty").hide();
        $(".cart__item").show();
        $(".checkout").show();

        $(".cart-notification").html(counterValue).show();
    });
    
    //delete item from cart 
    $(".js-delete-item").click(function(){
        counterValue = 0;
        $(".empty").show();
        $(".cart__item").hide();
        $(".checkout").hide();
        $(".cart-notification").hide();
    });



});