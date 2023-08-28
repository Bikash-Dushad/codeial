const User = require('../models/user');

module.exports.profile =async function(req, res){
    if(req.cookies.user_id){
        var user =await User.findById(req.cookies.user_id);
        console.log(req.cookies.user_id)
        if(user){
            console.log(user)
            return res.render('user_profile', {
            title: 'profile page',
            user: user
        });
        }else{
        return res.redirect('/user/login');
        }
    }else{
        return res.redirect('/user/login');
    }
}

// signin controller
module.exports.signin = function (req, res) {
    return res.render('sign_in', {
        title: 'signin'
    });
}

// login controller
module.exports.login = function (req, res) {
    return res.render('login', {
        title: 'login'
    })
}

//getting up signin data
module.exports.create = async function (req, res) {
    
    try{
    if (req.body.password!= req.body.confirm_password) {
        console.log("password doesnot match");

        return res.redirect('back');
    }

  var user =  await User.findOne({ email: req.body.email })

        if(!user){
         var newUser = await User.create(req.body);

                console.log(newUser);
                return res.redirect('/user/login');
        }else{
            return res.redirect('signin');
        }
    }catch(err){
        console.log("errpor in login", err);
        return res.redirect('back');
    }
}

module.exports.createSession = async function(req, res){
    var user = await User.findOne({email: req.body.email});
    
    if(user){
        if(user.password === req.body.password){
            res.cookie('user_id', user.id)
            return res.redirect('/user/profile');
        }else{
            console.log("password doesnot match");
            return res.redirect('back');
        }
    }else{
        console.log("email doesnot exist");
        return res.redirect('/user/signin');
    }
}
