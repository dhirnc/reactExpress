module.exports = function(app){
    
     var items = [
               {name: "Ice Cream"},
               {name: "Waffles"},
               {name: "candy", purchased: true},
               {name:"snarks"} ];
    
    app.route('/api/items')
    .get(function(req,res){
       res.send(items); 
    })
    .post(function(req,res){
       var item = req.body;
        items.push(item);
    }); 
}