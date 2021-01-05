onscroll = () => {
    const page        = document.documentElement; //element HTML
    let totalHeight   = page.scrollHeight; //Height Total of page
    let visibleHeight = page.clientHeight; //Height visible
    let scrolling     = page.scrollTop; //size of scroll
    let max           = totalHeight - visibleHeight;

    bar.style.width   = Math.floor(scrolling / max * 100) + "%"; //Around width in %

    bar.style.backgroundColor = (bar.style.width == "100%")? "green" : "orange";

    barBottom.style.cssText   = bar.style.cssText; //copy style from bar
}