import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Ciclo de palestras',
            sinopse:"Participei de um ciclo de palestras, que teve duração de 10 semanas todas as quinta-feira, cada dia com um palestrante e um tema diferente.",
            imagem:'/ciclo de palestras.jpg'
        },
        {
            id:2,
            titulo:'Semana de ciência e tecnologia 2022',
            sinopse:'participei do minicurso óleos vegetais: Potencial tecnológico e biológico',
            imagem:'/óleos vegetais.jpg'
        },
        {
            id:3,
            titulo:'XI semana da consciência negra e festival de arte e cultura',
            sinopse:'participei da oficina "produção de velas aromáticas"',
            imagem:'/velas aromaticas.jpg'
        },
        {
            id:5,
            titulo:'Semana do meio ambiente',
            sinopse:"participei da semana do meio ambiente IFMS 2021, realizada em entre os dias 31 de maio e 02 de junho de 2021",
            imagem:'/semana do meio ambiente.jpg'
        },
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }

                
                {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}

            </main>
        </>
    )
}