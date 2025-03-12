exports.setRoutes = (app) => {
    const IndexController = require('../controllers/index');
    const indexController = new IndexController();

    app.post('/api/input', indexController.createInput);
    app.get('/api/input', indexController.getInputs);
};