const lista = [ "Escócia tem 421 palabras para neve",
    "os polvos pôem 56.000 ovos de cada vez",
    "tubarões sobreviveram a 4 das 5 extinções em massa do planeta",
    "tubarões são mais velhos do que as árvores",
    "Vacas não tem pressas",
    "somente o nariz e a orelha são as partes do corpo humano que nunca param de crescer",
    "o governo do EUA salvou todos os tweets publicos de 2006 a 2017",
    "em 2000 Fidel Castro inaugurou uma estátua em tamanho real de John Lennon em Havana",
    "arrepios serviam para afastar predadores",
    "os tentaculos de um polvo, a tromba de um elefante e a lingua humana tem uma estrutura muscular muito semelhante",
    "os humanos são os unicos animais que possuem queixos",
    "a sensação de se perder dentro de um shopping é conhecida como transferência Gruen",
    "abacates seriam extintos se os humanos",
    "a rã-da-madeira pode segurar seu xixi por até oito meses",
    "local mais quente do planeta está na Líbia",
    "coelhos são incapazes de vomitar",
    "pombos podem dizer a diferença entre uma pintura de Monet e de Picasso",
    "peso total das formigas na terra já foi igual ao peso total das pessoas",
    "golfinhos foram treinados para serem usados ​​em guerras",
    " água emite sons diferentes, dependendo da temperatura",
    "Coalas têm impressões digitais",
    "polícia chinesa usa esquadrões de gansos",
    "uma picada de carrapato pode torná-lo alérgico a carne vermelha",
    "tornados podem causar chuva de peixes",
    "Napoleão já foi atacado por milhares de coelhos",
    "os tubarões podem viver cinco séculos",
    "a patente do hidrante foi perdida em um incêndio",
    "as vacas matam mais americanos a cada ano do que os tubarões",
    "seu fígado pode crescer novamente em três semanas",
    "Alemanha descobre 2.000 toneladas de bombas não detonadas todos os anos",
    "quase todas as espécies que já existiram na Terra estão extintas",
    "cada vez que você embaralha um baralho de cartas, obtém uma combinação que nunca existiu",
    "existe uma água-viva imortal",
    "as baleias azuis bebês crescem 90 kg por dia",
    "em 1870 tentaram usar os gatos para entregarem correspondências na Bélgica",
    "Hitler tinha um problema de flatulência",
    "um estudo da Fundação Getúlio Vargas estimou que o jogo do bicho tenha arrecadado de R$ 1,3 bilhão a R$ 2,8 bilhões no país em 2014",

]

function random() {

    const random = Math.floor(Math.random() * lista.length);
    var fato = `${lista[random]}`
    
    document.getElementById('fato').innerHTML = fato;
    
}

