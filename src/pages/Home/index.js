import { useEffect, useState } from 'react'
import Aliases from '../../components/Aliases';
import Biography from '../../components/Biography';
import Work from '../../components/Work';
import getHero from '../../services/service';
import './home.css'

export default function Home() {
    const [name, setName] = useState();
    const [character, setCharacter] = useState(false)
    const [loading, setLoading] = useState(false)
    const [notFoundMsg, setNotFoundMsg] = useState('')

    async function handleSearch() {
        setNotFoundMsg('not found')
        setCharacter(false)
        setLoading(true)
        const info = await getHero(name.toLowerCase().trim())
        setCharacter(info)
    }

    useEffect(() => {
        setLoading(false)

    })

    return (
        <div className="main">
            <header>
                <input onChange={e => setName(e.target.value)} placeholder='ex: spider-man' />
                <button onClick={handleSearch}>buscar</button>
            </header>

            {character && <h1>{character.name}</h1>}

            {
                character ?
                    <div className='container'>
                        <img src={character.image.url} alt={`${character.name}'s image`} />
                        <Biography
                            full_name={character.biography['full-name']}
                            alter_egos={character.biography['alter-egos']}
                            place_of_birth={character.biography['place-of-birth']}
                            first_appearance={character.biography['first-appearance']}
                            publisher={character.biography.publisher}
                        />
                    </div>
                    : <p>{notFoundMsg}</p>
            }
            {character && 
                <div className='aliases_work'>
                    <Aliases names={character.biography.aliases} />
                    <Work occupation={character.work.occupation} />
                </div>    
                    }
        </div>
    )
}