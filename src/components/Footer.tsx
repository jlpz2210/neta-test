import GitHub from '../assets/icons/github.png'

interface FooterProps {
    attributionHTML?: string
    attributionText?: string
    copyright?: string
}

export default function Footer({ attributionHTML }: FooterProps) {
    return(
        <div className="bg-neutral-800 text-white mt-10 flex justify-around h-20 items-center b-0">
            <div>
                Creado por: Juan de Dios López 🤓
                <a href="https://github.com/jlpz2210"><img className='w-10 h-10' src={GitHub} alt="GitHub" /></a>
            </div>

            <div dangerouslySetInnerHTML={{__html: attributionHTML || ''}}></div>
        </div>
    )
}