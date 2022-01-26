 
import { my_key } from '../config/config.js'

export default async function getHero(name) {

    let info = await fetch(`https://www.superheroapi.com/api.php/${my_key}/search/${name}`)
        .then((response) => response.json()
            .then((r) => r.results[0])
        )

    return info;
}

