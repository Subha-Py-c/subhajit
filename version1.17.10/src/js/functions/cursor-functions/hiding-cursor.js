const csr = document.querySelector(".cursor");

const eBox = document.querySelector(".box");
// const slider = document.querySelector(".slider");

let items = [eBox];

items.forEach((item) => {
    item.addEventListener("mouseover", function () {
        csr.style.display = "none";
    });

    item.addEventListener("mouseout", function () {
        csr.style.display = "block";
    });
});

// hide for mobiles
function isDeviceMobile() {
    // Check if the user agent indicates a mobile device
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSmallScreen = window.innerWidth < 768;

    return isAndroid || isIOS || isSmallScreen;
}

document.addEventListener("DOMContentLoaded", () => {
    if (isDeviceMobile()) {
        csr.style.display = "none !important";
    }
});
