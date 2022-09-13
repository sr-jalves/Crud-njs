const express = require('express');

const express = express();

server.use(express.json());

const cursos = ['Fullstack Master', 'Desenvolvimento de Games','Viver de Youtube'];

//Retornar um Curso

serve.get('/cursos/:index', function (req, res) {
        const { index } = req.params;

        return res.json(cursos[index]);
    });

//Retornar Todos os Cursos

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Criar um Novo Curso

server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizar um Curso

server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Deletar um Curso

server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "O Curso foi Deletado!"});
});



server.listen(3000);