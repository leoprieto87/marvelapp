import md5 from "md5";
import { useCallback, useEffect, useState } from "react";

export function Characters() {

    const [characters, setCharacters] = useState([])

    const publicKey = '61356e78b8ce1037e2acf521205aa013'
    const privateKey = '04eebbc1094eac67831b65a7536632f75139abb1'

    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)

    const URL_TO_FETCH = 'http://gateway.marvel.com/v1/public/characters?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash;

    function fetchData() {
        fetch(URL_TO_FETCH, {
            method: 'get'
        })
            .then(response => response.json())
            .then(function (response) {
                setCharacters(response.data.results)

            })
            .catch(function (err) {
                console.error(err);
            });
    }


    useEffect(() => {
        fetchData()
    }, [])

    const handleMore = useCallback(() => {
        try {

            const offset = characters.length
            fetch(URL_TO_FETCH + '&offset=' + offset, {
                method: 'get'
            })
                .then(response => response.json())
                .then(function (response) {
                    setCharacters([...characters, ...response.data.results])
                })
                .catch(function (err) {
                    console.error(err);
                })

        } catch (err) {
            console.log(err)
        }
    }, [characters])

    return (
        <>
            <h2>##PERSONAGENS</h2>
            <div>

                <ul>
                    {characters.map((character) =>
                        <li key={character.id}>
                            {character.name}
                            <br />
                            <img width={50} height={50} src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
                        </li>
                    )}
                </ul>

                <button onClick={handleMore}>VER MAIS</button>
            </div>
        </>
    )

}