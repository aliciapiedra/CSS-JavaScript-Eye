var ball = document.getElementsByClassName("ball");
        document.onmousemove = function () {
            var x = event.clientX * 100 / window.innerWidth + "%";
            var y = event.clientY * 100 / window.innerHeight + "%";
                for (var i=0; i < 1; i++) {
                    ball[i].style.left = x;
                    ball[i].style.top = y;

                    ball[i].style.transform = "translate(-"+x+", -"+y+")"
                }
        }