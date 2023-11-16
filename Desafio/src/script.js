class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'bárbaro':
                ataque = 'machado';
                break;
            case 'bruxo':
                ataque = 'encantamento';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'elfo':
                ataque = 'arco';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = mensagem;
    }
}
  
function realizarAtaque() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const tipo = document.getElementById('tipo').value;
    const meuHeroi = new Heroi(nome, idade, tipo);
    meuHeroi.atacar();
}
