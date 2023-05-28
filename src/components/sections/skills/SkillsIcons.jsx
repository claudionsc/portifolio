import React, { useEffect, useState } from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaSass} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiSequelize} from 'react-icons/si'
import {SiNodemon} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiDotnet} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'


const html = "Meu primeiro contato com HTML foi em 2016, porém só estudei pra valer en 2022. ";
const css = "Assim como o HTML, comecei a estudar CSS em 2022, aprendendo principalmente CSS Flexbox e construção de páginas responsivas";
const scss = "Uma maneira muito interessante de estilizar aplicações, já usei o SASS em alguns dos meus projetos";
const js = "Minha principal linguagem no momento, Javascript é a base pra quase todos os meus projetos";
const react = "Um framework poderosíssimo de Javascript que está presente em 99% das minhas aplicações";
const node = "NodeJs no momento é a minha principal ferramenta para aplicações backend, junto com sequelize";
const sequelize = "Sequelize é um framework de node que facilita bastante a construção de bancos de dados e APIs";
const nodemon = "Uso o nodemon para monitorar erros e mudanças nas minhas aplicações backend. A principal vantagem é o seu reinício automático";
const docker = "Com docker, crio bancos de dados através de containers";
const post = "Postgresql é o principal banco de dados relacional utilizado por mim em minhas aplicações";
const mysql = "MwSql é um banco de dados relacional assim como o Postgres. Com o MySql, eu crio um banco de dados espacífico pra nuvem, afim de alimentar as APIs que servem meus projetos em funcionamento.";
const mongo = "Um banco de dados não relacional. Apesar de não usar em quase nenhuma aplicação minha, eu estudo o MongoDb desde 2022";
const dot = "Comecei a estudar o .NET no ano de 2023, possuindo apenas conhecimentos básicos, porém estou evoluindo a cada dia";
const csharp = "C# é uma linguagem que venho aprendendo e evoluindo, e pretendo usá-la em 100% dos meus projetos";
const illu = "Comecei a usar o Illustrator mais ou menos em 2015, apenas por diversão. Possuo conhecimento autodidata, e hoje em dia já fiz diversos projetos com ele";
const photo = "Comecei a utilizar o Photoshop um pouco antes do Illustrator, também aprendi por conta própria e utilizei em alguns projetos de design"


const SkillsIcons = () => {

    const [ text, showText ] = useState("Passe o mouse nos cards para ler")

   
  return (
    <div id='skills-icons-grid'>
        <span className='skills-icons'>
            <AiFillHtml5 onMouseOver={(texto) => showText(html)} />
            <IoLogoCss3  onMouseOver={(texto) => showText(css)} />
            <FaSass onMouseOver={(texto) => showText(scss)} />
            <IoLogoJavascript onMouseOver={(texto) => showText(js)} />
            <FaReact onMouseOver={(texto) => showText(react)} />
            <FaNodeJs onMouseOver={(texto) => showText(node)} />
            <SiSequelize onMouseOver={(texto) => showText(sequelize)} />
            <SiNodemon onMouseOver={(texto) => showText(nodemon)} />
            <FaDocker onMouseOver={(texto) => showText(docker)} />
            <SiPostgresql onMouseOver={(texto) => showText(post)} />
            <GrMysql onMouseOver={(texto) => showText(mysql)} />
            <SiMongodb onMouseOver={(texto) => showText(mongo)} />
            <SiDotnet onMouseOver={(texto) => showText(dot)} />
            <SiCsharp onMouseOver={(texto) => showText(csharp)} />
            <SiAdobeillustrator onMouseOver={(texto) => showText(illu)} />
            <SiAdobephotoshop onMouseOver={(texto) => showText(photo)} />

            
        </span>
        <span className='skills-texts'>
            <p>{text}</p>
        </span>
    </div>
  )
}

export default SkillsIcons