
function scrollTo(to, duration) {

    var doc = document.documentElement;

    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function scrollToProjects()
{
    console.log('Scroll to ', document.getElementById('projects-screen'));
    var dest = document.getElementById('projects-screen');
    scrollTo(dest.offsetTop, 500);
}