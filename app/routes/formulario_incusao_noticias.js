module.exports = function(app){
    app.get('/formulario_inclusao_oticia', function(req, res){
        res.render('admin/form_add_noticia');
    });
};