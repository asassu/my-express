module.exports = function(app) {

    app.get('/view/event/:event_id', function(req, res) {

        // get the business collection
        var eventDB = app.db.get('events')

         var q = {
            'id' : req.params.event_id
        }

        var myevent = eventDB.findOne(q, function(err, item) {
            res.render('viewEvent.jade', {
                myevent: item
            })
        })

    })
}
