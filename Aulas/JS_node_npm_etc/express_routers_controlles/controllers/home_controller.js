exports.paginaInicial =  (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="name">
    <button>Ola mundo</button>
    </form>`)
};

exports.tratarPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
}