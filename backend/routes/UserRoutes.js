const express = require("express")
const app = express()
const userRoutes = express.Router()

app.use('/users', userRoutes)

userRoutes.route('/').get(function(req, res){
    User.find(function(err, users){
        if(err){
            console.log(err);
        } else {
            res.json(users)
        }
    })

})

userRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, todo){
        res.json(user)
    });
});

userRoutes.route('/add').post(function(req, res){
    let newUser = new User(req.body);

    newUser.save()
        .then(newUser => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new user failed')
        });
});

userRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, user){
        if(!user)
            res.status(404).send("data not found")
        else
            user.user = req.body.user;
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.characterName = req.body.characterName;
            user.faction = req.body.faction;
            user.profilePic = req.body.profilePic;
            user.img1 = req.body.img1;
            user.img2 = req.body.img2;
            user.age = req.body.age;

            user.save().then(user => {
                res.json('User Updated!')
            })
            .catch(err => {
                res.status(400).send("Update not Possible")
            });
    });
});

