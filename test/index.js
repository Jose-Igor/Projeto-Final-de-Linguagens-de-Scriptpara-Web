const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(express.static("site"))

//buscar dados
app.get('/anime', (req,res) => {
    return res.json(anime)
})


//animes

const anime =[
    {nome: "Naruto", sinopse: "Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, descobre que tem um demônio raposa selado dentro de si. Seu pai, o quarto Hokage, aprisionou a raposa no próprio filho quando a raposa ameaçava destruir a Vila da Folha, sacrificando assim a própria vida. Agora Naruto vai contar com a ajuda dos colegas Sakura e Sasuke e do professor dos três, Kakashi Hatake, para perseguir seu sonho e deter os ninjas que planejam fazer mal á sua cidade."},
    {nome: "Dragon Ball z", sinopse: "Criada por Akira Toryiama, a franquia conta a história de Son Goku, guerreiro que descobre ser parte de um legado de poderosos conquistadores alienígenas - e passa a defender seu planeta adotivo, a Terra, de outros seres igualmente superfortes e capazes de feitos descomunais."},
    {nome: "Urusei yatsura", sinopse: "Urusei Yatsura se concentra no pervertido estudante do ensino médio Ataru, que é selecionado pelo computador em um jogo de tag intergaláctico envolvendo a espécie alienígena Oni. Seu oponente é sua princesa, Lum, que acaba perdendo para o rapaz lascivo. Devido a um mal-entendido envolvendo uma proposta para sua namorada Shinobu, Lum acredita que Ataru quer realmente se casar com ela e aceita sua ‘oferta’. Entrando em sua escola, Lum se torna popular entre os caras, ganhando alguns seguidores"},
    {nome: "hunter x hunter", sinopse: "O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo."},
    {nome: "Yu gi oh", sinopse: "O jovem estudante do ensino médio Yugi Muto derrota o campeão mundial, Seto Kaiba, em um duelo de cartas com a misteriosa ajuda do quebra-cabeça Millenium. Em razão de sua vitória inesperada, Yugi se torna famoso em todo o mundo e passa a participar de outros duelos para salvar os amigos e a família."},
    {nome: "Bleach", sinopse: "O jovem Ichigo, depois de passar grande parte de sua vida vendo fantasmas, se torna um Shinigami, um ser sobrenatural capaz de controlar a morte. Devido a isso, ele dedica sua vida a proteger os inocentes e ajudar os espíritos torturados até que eles encontrem a paz."},
    {nome: "YuYu HAKUSHO", sinopse: "A série conta a história de Yusuke Urameshi, um bad boy que morreu atropelado ao tentar salvar uma criança. Como seu ato foi inesperado por todos, principalmente pelo Mundo Espiritual, Yusuke teve a chance de voltar a viver após fazer um teste para se tornar Detetive Espiritual. Após voltar, ele deve se dedicar a combater os demônios do Mundo das Trevas que por um acaso venham a se infiltrar no Mundo dos Homens."},
    {nome: "Great Teacher Onizuka", sinopse: "O jovem Eikichi Onizuka de 22 anos decide se tornar um professor, embora inicialmente pelos motivos errados, ele logo descobre sua vocação: transformar a escola num lugar divertido. O problema é que Onizuka está sempre se metendo em confusões e sendo responsável pelos alunos mais problemáticos."},
    {nome: "Gintama", sinopse: "O samurai Sakata Gintoki, vivendo em um mundo tomado por seres de outro planeta, ajuda o adolescente Shimura Shinpachi a salvar sua irmã de um grupo de alienígenas que quer levá-la para um bordel, explorando-a como trabalhadora. Eventualmente, Shimura se torna aprendiz de Gintoki e eles criam uma grande amizade, além de viverem grandes aventuras juntos."},
    {nome: "Doraemon", sinopse: "Doraemon é um gato robótico que veio do século 22, que ao chegar ao século 20 encontra uma família cheia de amor e carinho, os Nobis. Eles trocam experiências, Doraemon ganha um lar e a família recebe ajuda com a tecnologia. "},
    {nome: "Fairy Tail", sinopse: "A história  de Fairy Tail segue as aventuras de Lucy Heartfilia, uma jovem maga que sonha em se tornar escritora e Natsu Dragneel, um mago adolescente que é membro da popular guilda de feiticeiros Fairy Tail que está a procura do dragão Igneel."},
    {nome: "Black Jack", sinopse: "Black Jack é um médico não registrado com um nebuloso e misterioso passado. Ele trabalha com sua pequena assistente Pinoko (que tem uma enorme paixão pelo médico), lidando com casos médicos não muito conhecidos, que podem ser estranhos, perigosos ou desconhecidos. Mas ele é um gênio e pode salvar a vida de quase todos os seus pacientes (isto é, desde que tenham dinheiro para isso), e é conhecido por muitos em todo o mundo, especialmente por aqueles da área de medicina e ciência. Ele é um homem de ciência, e não acredita muito até que ele tenha visto com seus próprios olhos, mas muitas vezes é surpreendido pelo amor e pela natureza, que frequentemente prevalece sobre a ciência em que ele baseia sua vida."},
    {nome: "Baka to Test to Shōkanjū", sinopse: "A História gira em torno de Yoshii Akihisa. Ele entra na Academia Fumizuki, uma escola que implantou um sistema diferente para dividir seus alunos: suas classes são decididas de acordo com seu resultado em um exame realizado antes do início do ano letivo, separando-os em classes de “A” a “F”. Quanto maior for a classe, melhores serão suas instalações, portanto a classe 'A' possui a melhor sala e a 'F', a pior. Durante o ano letivo, as classes podem batalhar entre si utilizando um sistema de invocação de -seres, onde cada aluno possui um ser, cujos pontos são baseados no resultado de seu último teste."},
    {nome: "Grand Blue", sinopse: "Uma nova vida começa para Kitahara Iori, ele ingressa na faculdade perto do mar na cidade de Izu, emocionado por um novo começo, ele se muda para casa do seu tio, uma loja de mergulho chamada “Grand Blue.” Lá, ele encontra um lindo oceano, belas mulheres, e os homens que gostam de mergulho e álcool…."},
    {nome: "Black Clover", sinopse: "A história acompanha os dois garotos que competem entre si para se tornar o Rei Mago, o cavaleiro mágico mais forte do reino de Clover. Mesmo sem magia Asta tenta ser um cavaleiro mágico, assim sua jornada começa quando obtém o misterioso poder anti-magia, que pode anular todas as magias. Assim Asta, com sua anti-magia e força física, e Yuno, com seus poderes mágicos e talento, começam a jornada."},
    {nome: "Death Note", sinopse: "Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas. Sob a influência de Ruyk, dono do caderno, ele passa a usá-lo para eliminar criminosos e pessoas que escaparam da justiça. A súbita onda de assassinatos faz com que ele seja endeusado por muitos, que o apelidam de Kira, mas também atrai a atenção de um enigmático e brilhante detetive, chamado L."},
    {nome: "Munou na Nana", sinopse: "Uma academia em uma ilha em águas inevitáveis. Lá, os alunos treinavam incansavelmente, para lutar contra os inimigos da humanidade. O protagonista, um estudante recém-transferido para lá, também parte com a intenção de erradicar todos os inimigos da humanidade."},
    {nome: "Kimetsu no Yaiba", sinopse: "Após um ataque de demônios na vila, o jovem Tanjir Kamado perdeu praticamente toda sua família. Apenas sua irmã mais nova, Nezuko, sobreviveu, mas foi transformada em um demônio. Para vingar sua família e recuperar a irmã, Tanjir se torna um caçador de demônios e parte em busca de justiça."},
    {nome: "Shingeki no Kyojin", sinopse: "Em Attack on Titan, acompanhamos o jovem Eren Yeager que vive em um distrito cercado de muralhas, já que nesse universo existem os titãs, seres enormes que comem humanos"},
    {nome: "Murenase! Seton Gakuen", sinopse: "Uma academia de animais onde convivem seres de várias espécies. Seu nome é Academia Seton. Nela, os animais lutam todo dia por sua sobrevivência. Entre os estudantes estão Jin Majima, que odeia animais, e a loba solitária Ranka Oogami"}

]


//inserir dados
/*app.post('/add', (req,res)=>{
    const body = req.body

    if(!body){
        return res.status(400).end()}
    anime.push(body)
    return res.json(body)
})*/

app.listen(3000, () => {
    console.log(`Express started at http://localhost:3000`)
} )
