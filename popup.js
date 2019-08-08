$(document).ready(function () {

    document.querySelectorAll('.box').forEach(skills => {
        skills.addEventListener('click', function () {

            var colors = ["red", "maroon", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple"];
            let title = this.getAttribute("id");
            let skill = document.getElementById('skills-'+title).innerHTML;

            document.getElementById('popup-title').innerHTML = title;
            document.getElementById('progress-bar').innerHTML = "";

            let skill_array = skill.split(", ");
            let message = "";
            for (i = 0; i < skill_array.length; i++) {

                let random = Math.floor(Math.random() * 101);
                let color = Math.floor(Math.random() * colors.length);
                console.log(colors[color]+"hola"+color);
                message += "<h3>" + skill_array[i] + "</h3>" +
                    "<div id='myProgress'>" +
                    "<div id='myBar' style='width:" + random + "%; background-color: "+colors[color]+";'>" + random + "%</div>" +
                    "</div>"
            }
            var bar = document.getElementById("progress-bar");
            bar.insertAdjacentHTML("beforeend", message);


            let altura = 150;
            let anchura = 300;

            let y = parseInt(($(document).height() / 2) - (altura / 2));
            let x = parseInt(($(document).width() / 2) - (anchura / 2));

            $('#popup').css('top', y);
            $('#popup').css('left', x);
            $('#popup').css(("transform","translate(-"+y+", -"+x+")"));
            

            // Bind scroll
            $('body').css({ 'overflow': 'hidden' });
            $(document).bind('scroll', function () {
                window.scrollTo(0, 0);
            });

            $('#popup').fadeIn('slow');
        })
    })

    $('#close').on('click', function () {
        $('#popup').fadeOut('slow');

        // Unbind Scroll
        $(document).unbind('scroll');
        $('body').css({ 'overflow': 'visible' });
        return false;
    });
});