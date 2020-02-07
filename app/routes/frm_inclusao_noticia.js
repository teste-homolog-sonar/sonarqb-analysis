module.exports = function(app) {
    const valor = 1;
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
        valor = 2;
    });
};
