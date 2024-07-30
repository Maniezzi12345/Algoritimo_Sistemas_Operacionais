function Votacao() {
    alert("Bem-vindo à votação de sistemas operacionais!");
    alert("Para votar nos sistemas veja os valores: Windows:1 / Unix:2 / Linux:3 / Netware:4 / Mac:5 / Outro:6");

    let Win = 0, Uni = 0, Lin = 0, Net = 0, Mac = 0, Out = 0;
    const sistemas = ["Windows", "Unix", "Linux", "Netware", "Mac", "Outro"];

    function EntradaVoto() {
        while (true) {
            let voto = parseInt(prompt("Digite o seu voto:"));
            if (voto == 0) {
                alert("Votação encerrada!");
                break;
            } else if (voto >= 1 && voto <= 6) {
                console.log(`Você votou no sistema ${sistemas[voto - 1]}`);
                if (voto == 1) Win++;
                if (voto == 2) Uni++;
                if (voto == 3) Lin++;
                if (voto == 4) Net++;
                if (voto == 5) Mac++;
                if (voto == 6) Out++;
            } else {
                alert('Voto inválido!');
            }
        }
    }

    function MaisVotado() {
        let NumeroMaiorVotos = [Win, Uni, Lin, Net, Mac, Out];
        let maiorNumero = NumeroMaiorVotos[0];
        let indiceMaior = 0;

        for (let i in NumeroMaiorVotos) {
            if (NumeroMaiorVotos[i] > maiorNumero) {
                maiorNumero = NumeroMaiorVotos[i];
                indiceMaior = i;
            }
        }
        console.log(`O sistema mais votado é ${sistemas[indiceMaior]} com ${maiorNumero} votos.`);
    }

    function Porcentagem() {
        let TotalVotos = Win + Uni + Lin + Net + Mac + Out;
        let Porcentagem_votos = [
            (Win / TotalVotos * 100).toFixed(2),
            (Uni / TotalVotos * 100).toFixed(2),
            (Lin / TotalVotos * 100).toFixed(2),
            (Net / TotalVotos * 100).toFixed(2),
            (Mac / TotalVotos * 100).toFixed(2),
            (Out / TotalVotos * 100).toFixed(2)
        ];

        console.log("Sistema Operacional\tVotos\t%");

        for (let i = 0; i < sistemas.length; i++) {
            console.log(`${sistemas[i]}\t${[Win, Uni, Lin, Net, Mac, Out][i]}\t${Porcentagem_votos[i]}%`);
        }

        let maior = Porcentagem_votos[0];
        let indiceMaior = 0;

        for (let i in Porcentagem_votos) {
            if (Porcentagem_votos[i] > maior) {
                maior = Porcentagem_votos[i];
                indiceMaior = i;
            }
        }
        console.log(`Quem venceu a votação é o sistema ${sistemas[indiceMaior]} com ${maior}% dos votos.`);
    }

    return {
        EntradaVoto,
        Porcentagem,
        MaisVotado
    }
}

let inicio = Votacao();
inicio.EntradaVoto();
inicio.Porcentagem();
inicio.MaisVotado();
