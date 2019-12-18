import {Router} from 'express';


const CategoryRouter = Router()
    .get('/', function (req, res) {
        // if (req.session.name) {
            res.set('Content-Type', 'application/json');
            res.send([{categoryId: '1111', categoryName: 'ATK'}, {categoryId: '2222', categoryName: 'Furnitur'}]);
        // } else {
        //     res.sendStatus(401);
        // }
    });

export default CategoryRouter;