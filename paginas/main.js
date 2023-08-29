const textInfo = document.querySelector('.textInfop')
const nav = document.querySelector('.nav')
const subtitle = document.querySelectorAll('.SobreH1')
const imgAvatar2=document.querySelector('.imgInfo1')
const cardio = document.querySelector(".cardio")
const Skills = document.querySelectorAll(".skills")
const SkillText = document.querySelector('.skillText')
const skillImg = document.querySelector(".skillImg")
const ReSkill2 = document.querySelector('.boxSkill2')
const imgSelect= document.querySelector('.IconSelect')
const titleSelect = document.querySelector('.TitleSelect')
const TextSelect = document.querySelector(".TextSelect")
const Cards = document.querySelectorAll('.projectsCard')

const projectInfo1 = document.querySelector('.projectInfo1')
const projectInfo2 = document.querySelector('.projectInfo2')

//dados do scroll
const maxHeightPage = document.body.scrollHeight + window.innerHeight


//scroll Eventos
window.addEventListener('scroll', function(){
    const propr = (window.scrollY/maxHeightPage)*100
    const porcentagem = parseInt((window.scrollY/maxHeightPage)*100)
    console.log(propr)
//Animações no Sobre
    if(porcentagem>=10){
        textInfo.innerHTML='Muito prazer, me chamo Alex. Tenho 26 anos. Sou do estado do Amapá mas resido em Brasilia há alguns anos. Minha paixão pela tecnologia e pela programação me fez mudar de área e me trouxe até aqui. Neste momento, estou estudando muito, cursos em video, tutoriais, artigos e etc...Tudo sobre a área!<br>  Acredito que durante o dia, são mais de 10 horas entre estudos e treinos em busca da perfeição e do domínio total das ferramentas. E quando não estou estudando, estou pensando em códigos(É sério rsrs...).<br> Busco por uma vaga como Front-End, garanto que posso fazer a diferença, só preciso de uma oportunidade, não só para contribuir, mas para evoluirmos juntos.';
        textInfo.setAttribute('style','animation:zoomInRight; animation-duration:1s; display:block; ')
        subtitle[0].setAttribute('style','animation:slideInRight; animation-duration:0.5s; display:block; ')
        imgAvatar2.style.display='block'
        cardio.setAttribute('style','animation:zoomInUp; animation-duration:1s; display:block; ') 
    };
    if(porcentagem>=2){
        nav.style.background='transparent'
        nav.style.transition='1s'
    }else{
        nav.style.background='rgb(255, 115, 0)'
    };
//Animação nas skills
    if(porcentagem>=29){
        subtitle[1].setAttribute('style','animation:slideInRight; animation-duration:0.5s; display:block; ') 
        imgSelect.style.display='block'
        titleSelect.style.display='block'
        TextSelect.style.display='block' 
    
        ReSkill2.setAttribute('style','animation:zoomInRight; animation-duration:1s; display:block; ') 
        for(var x = 0; x<=8; x++){
        Skills[x].setAttribute('style','animation:zoomInLeft; animation-duration:1s; display:block; ')
     }
    }
    //Animação project
    if(porcentagem>=43){
        subtitle[2].setAttribute('style','animation:slideInRight; animation-duration:0.5s; display:block;')
        for(var x=0 ; x<=3; x++){
            Cards[x].setAttribute('style','animation:zoomInRight; animation-duration:1s; display:block;') 
        }    
        projectInfo1.setAttribute('style','animation:zoomInLeft; animation-duration:1s; display:block;')
        projectInfo2.setAttribute('style','animation:zoomInLeft; animation-duration:1s; display:block;')
    }
   
    
            
               
      
        
  
})
//Animação Icons:

const Icon = ["../icons/HTML5.png" ,"../icons/Css3.png","../icons/bootstrap.png","../icons/js.png" ,"../icons/node-js.png",'../icons/react-js-160.png','../icons/git.png','../icons/github.png','../icons/responsive-design.png'];
const Title = ['HTML5','CSS3','Bootstrap'];

function setAtributo(attribute,value, Element){
    const atributo = document.createAttribute(attribute)
    atributo.value= value
    Element.setAttributeNode(atributo)
};
function setText(element,text){
    element.innerHTML=text
};
// Criando informções
class Info{
    constructor(img,title,text){
        this.img = img
        this.title = title
        this.text = text
    }
};
//----função especial----
function info(x){
    setAtributo('src',x.img ,imgSelect)
    setText(titleSelect,x.title)
    setText(TextSelect,x.text)
};
//=============HTML5====================
const textHMTL = 'Tenho conhecimento sólido de HTML5. A ponto de não haver dificuldade nenhuma para aprender novas tags ou recursos. É um conhecimento sólido.';

const InfoHTML = new Info(Icon[0],'HTML5', textHMTL);

function Html(){
    info(InfoHTML)
};
//=============CSS3========================
 const textCSS = 'Tenho conhecimento sólido de CSS3. A ponto de não haver dificuldade nenhuma para aprender novos recursos.Domínio de flex-Box. <br>É um conhecimento sólido.';
 const infoCSS3 = new Info(Icon[1],'CSS3',textCSS)

 function Css(){ 
    info(infoCSS3)
 };
 //============Boostrap================
 
 const textBoot = 'Tenho conhecimento de Bootstrap. Conhecimentos em aprimoramento. <br>(Em processo de solidificação).';
 const infoBoot = new Info(Icon[2],'Bootstrap',textBoot);

 function Bootstrap(){ 
    info(infoBoot)
 };
 
 //===============JS=================
 
 const textJS = "Linguagem Javascript. Estou em constante treinamento e apredizado. Tanto em relação a logica de programação, quanto em aprimorar boas praticas, escalabilidade do código, consumo de API’ tus Rest, tratamento de dados JSON, manipulação do DOM e etc.";
 const infoJS = new Info(Icon[3],'JavaScript',textJS);

 function JS(){ 
    info(infoJS)

 };
 //================node==========

 const textNode = "Introdução ao Node.js. Em constante treinamento e apredizado. Aprendendo a utilizar gerenciadores de pacote como NPM e Yarn. Apesar de estar começando já criei servidores com Api JSON. <br> Apesar de ser algo mais voltado ao Back-End, me interesso pelo assunto, e tenho estudado bastante."
 const infoNode = new Info(Icon[4],'Node.js',textNode)

 function Node(){ 
    info(infoNode)

 };
 //================React============
 const textReact = "Introdução ao React.js. Em constante treinamento. Aprendendo e aprimorando meus conhecimentos em manipulação de componentes e Hooks. "
 const infoReact = new Info(Icon[5],'React.js',textReact)

 function React(){ 
    info(infoReact)

 };
 //===============Git=================
 const textGit= "Introdução ao Git. Em treinamento.<br> Aprendendo e aprimorando meus conhecimentos de versionamento de projetos, como clonar respositórios, fazer e verificar históricos de commits e mais."
 const infoGit = new Info(Icon[6],'Git',textGit)

 function Git(){ 
    info(infoGit)

 };
 //==============Github==============
 const textGithub= "Conhecimentos para utilização e armazenamento de repositórios no GitHub."
 const infoGithub = new Info(Icon[7],'GitHub',textGithub)

 function Github(){ 
    info(infoGithub)

 };
 //===========Responsividade============
 const textResp= "Conhecimentos para fabricar designs de páginas web responsivas para diversos tipos de dispositivos."
 const infoResp = new Info(Icon[8],'Design Responsivo',textResp)

 function Resp(){ 
    info(infoResp)
 };

 //===============projetos================

 //mousemove===============

 const textProject1 = 'Projeto: Formulário para cadastro. Com regras devidamente definidas para cada campo e tipo de dados preenchidos pelo usuário.'
const textProject2 = 'Projeto: Cardápio digital. Construido de forma autonoma, é um cardápio para pizzarias com carrinho, campo de observações e campo de endereço! Tudo com encaminhamento automatico para o whatsapp da empresa ao finalizar o pedido. Um dos modelos de projetos disponiveis para venda. (Design responsivo)'
 const textOut = ' Aqui estão alguns projetos para que possam conferir um pouco mais do meu trabalho. Todas as skills utilizadas nos projetos estão, repito, sendo constantemente aprimoradas. <br> Confiram!<br>'
 const textSorry  = 'Infelizmente, o projeto requisitado ainda não esta disponível. Mas logo estará pronto.<br> Obrigado!'

 const projectInfoImg = document.querySelector('.ProjectInfoImg')


 function ProjEnter1(){
    setAtributo("src","../avatar/Avatar1.png",projectInfoImg)
    setText(projectInfo2, textProject1)
 }
 function ProjOut1(){
    setAtributo("src","../avatar/Avatar3.png",projectInfoImg)
    setText(projectInfo2, textOut)
 }
//=====================================


 function ProjEnter2(){
    setAtributo('src',"../avatar/Avatar1.png",projectInfoImg)
    setText(projectInfo2, textProject2)
 }
 function ProjOut2(){
    setAtributo('src',"../avatar/Avatar3.png",projectInfoImg)
    setText(projectInfo2, textOut)
 }
 //======================================
 function ProjEnter3(){
    setAtributo('src',"../avatar/Avatar4.png",projectInfoImg)
    setText(projectInfo2, textSorry)
 }
 function ProjOut3(){
    setAtributo('src',"../avatar/Avatar3.png",projectInfoImg)
    setText(projectInfo2, textOut)
 }
 //=========================================================
 function ProjEnter4(){
    setAtributo('src',"../avatar/Avatar4.png",projectInfoImg)
    setText(projectInfo2, textSorry)
 }
 function ProjOut4(){
    setAtributo('src',"../avatar/Avatar3.png",projectInfoImg)
    setText(projectInfo2, textOut)
 }

