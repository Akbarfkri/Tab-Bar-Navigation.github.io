const home = document.getElementById("home");
const search = document.getElementById("search");
const add = document.getElementById("add");
const reels = document.getElementById("reels");
const profile = document.getElementById("profile");

const svghome = document.getElementById("svghome");



home.addEventListener('click', function () {

    if (home.classList.toggle('active')) {
        home.style.background = 'rgba(196, 182, 182, 0.43)';
        home.style.borderBottomLeftRadius = '30px';
        svghome.style.width = '40';


        search.style.background = 0;
        svgsearch.style.width = '35';

        add.style.background = 0;
        svgadd.style.width = '35';

        reels.style.background = 0;
        svgreels.style.width = '35';

        profile.style.background = 0;
        profile.style.borderBottomRightRadius = '0px';
        svgprofile.style.width = '35';

    } else {
        home.style.background = 0;
        home.style.borderBottomLeftRadius = '0px';
        svghome.style.width = '35';
    }

});



search.addEventListener('click', function () {
if (search.classList.toggle('active')) {
    search.style.background = 'rgba(196, 182, 182, 0.43)';
    svgsearch.style.width = '40';



    home.style.background = 0;
    home.style.borderBottomLeftRadius = '0px';
    svghome.style.width = '35';

    add.style.background = 0;
    svgadd.style.width = '35';

    reels.style.background = 0;
    svgreels.style.width = '35';

    profile.style.background = 0;
    profile.style.borderBottomRightRadius = '0px';
    svgprofile.style.width = '35';

    } else {
    search.style.background = 0;
    svgsearch.style.width = '35';
    }
});


add.addEventListener('click', function() {
if ( add.classList.toggle('active')) {
     add.style.background = 'rgba(196, 182, 182, 0.43)';
     svgadd.style.width = '40';


     home.style.background = 0;
     home.style.borderBottomLeftRadius = '0px';
     svghome.style.width = '35';

     search.style.background = 0;
     svgsearch.style.width = '35';

     reels.style.background = 0;
     svgreels.style.width = '35';

     profile.style.background = 0;
     profile.style.borderBottomRightRadius = '0px';
     svgprofile.style.width = '35';


    } else {
    add.style.background = 0;
    svgadd.style.width = '35';
    }
});


reels.addEventListener('click', function () {
    if (reels.classList.toggle('active')) {
        reels.style.background = 'rgba(196, 182, 182, 0.43)';
        svgreels.style.width = '40';

        home.style.background = 0;
        home.style.borderBottomLeftRadius = '0px';
        svghome.style.width = '35';

        search.style.background = 0;
        svgsearch.style.width = '35';
    
        add.style.background = 0;
        svgadd.style.width = '35';

        profile.style.background = 0;
        profile.style.borderBottomRightRadius = '0px';
        svgprofile.style.width = '35';


        } else {
        reels.style.background = 0;
        svgreels.style.width = '35';
        }
    });


    profile.addEventListener('click', function () {
        if (profile.classList.toggle('active')) {

            profile.style.background = 'rgba(196, 182, 182, 0.43)';
            profile.style.borderBottomRightRadius = '30px';
            svgprofile.style.width = '40';


            home.style.background = 0;
            home.style.borderBottomLeftRadius = '0px';
            svghome.style.width = '35';
    
            search.style.background = 0;
            svgsearch.style.width = '35';
        
            add.style.background = 0;
            svgadd.style.width = '35';

            reels.style.background = 0;
            svgreels.style.width = '35';

        } else {
            profile.style.background = 0;
            profile.style.borderBottomRightRadius = '0px';
            svgprofile.style.width = '35';
        }
    
    });





    
