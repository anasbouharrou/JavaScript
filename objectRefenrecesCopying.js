(function(){
    "use strict";
    let user = {
        name:"John",
        sizes:{
            height:182,
            width:155
        }
    }
    let user2 = {};
    cloneObjects(user,user2);
    user.name ="Anas";
    user.sizes.height = 185;
    console.log(user2);
})();
