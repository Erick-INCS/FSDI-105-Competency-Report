const images = ['../img/pet01.webp', '../img/pet02.webp', '../img/pet03.webp', '../img/pet04.webp', '../img/pet05.webp', '../img/pet06.webp', '../img/pet07.webp', '../img/cat0.webp'];

let img0 = $('#display0'),
    img1 = $('#display1'),
    imageWidth = img0.width(),
    prevDirection = 1;

let pointer = 2;

//return the current left position of a 'image' in pixels
function getPX(elm) {
    return parseInt(elm[0].style.left.replace('px', '')) || 0;
}

// Prepares new image (repositioning the unused image and changin the source)
function switchSource(imgs, sign) {
    let ops = [
        ()=>imgs[0].css({'left':(imageWidth * -sign) +'px', 'background-image':`url(${images[pointer]})`}),
        ()=>{
            pointer = (pointer + sign) % images.length;
            if (pointer < 0)
                pointer = images.length - 1;
        }
    ]

    if (sign != prevDirection){
        ops[1]();
        ops[1]();
    }
    prevDirection = sign;

    if (getPX(imgs[1]) === imageWidth * sign)
        imgs.reverse();            
    if (!(sign+1)) {
        ops.reverse();
    }

    ops[0]();
    ops[1]();
}

// move one image and makes the switch when necessary
function move(imgs, sign, useCallback = false) {
    if (!(sign+1) && !useCallback) {
        switchSource(imgs, sign);
    }

    imgs[0].animate({"left":getPX(imgs[0]) + (imageWidth * sign) + 'px'}, 800, ()=>{
        if ((sign+1) && useCallback) {
            switchSource(imgs, sign);
        }
    });
}

// the full scroll animation
function scroll(sign = 1) {

    let imgs = [img0, img1];
   
    if (getPX(imgs[0]) === 0)
        imgs.reverse();

    move(imgs, sign);
    move(imgs.reverse(), sign, true);
}


$(function () {
    
    const lArrow = $('div#displayL span'),
    rArrow = $('div#displayR span');
    
    // i apply this css values by default and i don't know why is needed to initialize the imgs :| but it's needed
    img0[0].style.left = `-${imageWidth}px`;
    img1[0].style.left = '0px';

    rArrow.click(function () {
        scroll();
    });
    
    lArrow.click(function () {
        scroll(-1);
    });

    // the load of the new image source is too slow :c
    //preload images to solve performance issues
    // for (const k in images) {
    //     // const xhr = new XMLHttpRequest();
    //     // xhr.open("GET", images[k]);
    //     // xhr.responseType = "blob";
    //     // xhr.onload = () => {
    //     //     var urlCreator = window.URL || window.webkitURL;
    //     //     let a = urlCreator.createObjectURL(xhr.response);
    //     //     console.log(a);
    //     //     images[k] = a;
    //     // };
    //     // xhr.send();
    // }
});