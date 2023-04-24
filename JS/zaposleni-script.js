const allProfiles = document.querySelectorAll('.allProfiles .profile');

allProfiles.forEach(profile => {
    let wide = false;
    profile.addEventListener('click', () => {
        
        console.log(profile);
        console.log(wide);
        if (window.innerWidth > 1024) {
            if(wide) {
                wide = false;
                profile.style.width = '300px';
            } else {
                wide = true;
                profile.style.width = '640px';
            }
        
         } else {

         }
    });
});