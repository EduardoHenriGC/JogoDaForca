import styles from "@/styles/PaginaInicial/paginaInicial.module.css"
import Link from "next/link"

export default function PaginaInicial(){


    return (


        <div className={styles.container}>


            <h1 ><span data-text="jogo da forca">jogo da forca </span><img src="https://cdn-icons-png.flaticon.com/512/3269/3269914.png" width="35px"></img></h1>

            <h3>regras do jogo</h3>

            <div className={styles.list}>

              <div className={styles.listContent}>
              <p>para cada palavra você tem 5 chances.</p>
                <p>cada palavra certa vale 100 pontos.</p>
                <p>não há acentos nas palavras apenas letras e espaços.</p>
                <p>a tecla space conta como uma letra usado em palavras compostas.</p>
                <p>são 15 palavras aleatorias.</p>
              </div>
            </div>

            <Link href="/forca">
             
             <p className={styles.btn}>Iniciar game</p>
            
            </Link>




        </div>
    )
}