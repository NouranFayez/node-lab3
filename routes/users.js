var express = require('express');
var router = express.Router();

const users=[
  {
      name:'Nouran',
      age: 24,
      address :'nasr city'
  },
  {
      name:'Menna',
      age: 24,
      address :'nasr city'
  }
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ListUsers',{users});
});

router.get ('/create' , function(req,res,next){
  res.render('createUser')
})
router.post('/create', function( req,res){
  users.push(req.body);
  res.redirect('/users')
})
router.get ('/edit/:userIndex' , (req,res,next)=>{
  res.render('userEdit' ,{user:users[req.params.userIndex] , 
  userIndex:req.params.userIndex} )
})
router.post ('/edit/:userIndex' , (req,res,next)=>{
  users[req.params.userIndex]=req.body; 
  res.redirect('/users')

})
  //  router.delete('/:userIndex',(req,res,next)=>{

  //   users.findIndex(req.params.userIndex).delete();
  //   res.redirect('/users')
    
  //  })
   router.get("/delete/:userIndex", function(req, res, next) {
    users.splice(req.params.userIndex, 1);
    res.redirect("/users");
  });
   



module.exports = router;
