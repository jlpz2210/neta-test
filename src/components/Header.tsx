import MarvelLogo from '../assets/img/Marvel_Logo.svg.png'

interface HeaderProps {
    page: number
    setPage(change: boolean): void
    total?: number
}

export default function Header({page, setPage, total}: HeaderProps) {
    return(
        <div className="flex justify-between gap-3 px-3 py-3 items-center min-h-fit">
            <div>
                <img className='w-100 h-10' src={MarvelLogo} alt="Marvel" />
            </div>
            <div className='flex gap-6'>
                <button className="bg-red-600 text-white font-bold p-3 clip-button" onClick={() => setPage(false)}>Anterior</button>
                <button className='bg-neutral-800 text-white font-bold p-3 clip-button' onClick={() => setPage(true)}>Siguiente</button>
            </div>
            <p>Mostrando del {page * 25} al {page * 25 + 25} de {total}</p>
        </div>
    )
}