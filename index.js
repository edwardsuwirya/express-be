const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 6969;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/user',function  (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({userId: '6969', namaLengkap: 'Edward Suwirya', alamat: 'Jl. Candi 7'});
});

app.post('/user', function (req, res) {
    let userId = '123';
    let userFullName = req.body.namaLengkap;
    let userAddress = req.body.alamat;
    res.set('Content-Type', 'application/json');
    res.send({userId: userId, namaLengkap: userFullName, alamat: userAddress});
});

app.post('/auth/:key', function (req, res) {
    let userFullName = '';
    let userPassword = '';
    let userId = '';
    res.set('Content-Type', 'application/json');
    if (req.params.key === 'userName') {
        userFullName = req.body.userName;

        if (userFullName === 'edo') {
            res.send({status: 'ok', id: '123'})
        } else {
            res.sendStatus(401);
        }
    } else {
        userPassword = req.body.password;
        userId = req.body.id;
        if (userPassword === 'edo' && userId) {
            res.send({status: 'ok', userId: userId, namaLengkap: 'Eds', alamat: 'Pondok Bambu'})
        } else {
            res.sendStatus(401);
        }
    }
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`)
)
