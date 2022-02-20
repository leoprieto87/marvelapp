import md5 from "md5";
import { Key, ReactChild, ReactFragment, ReactPortal, SetStateAction, useCallback, useEffect, useState } from "react";
import { Loading } from "../loading";
import { DescPersonagem, CardPersonagem, Title, ContentResult, ShowMoreButton } from "./style";


export function Characters() {

    const [characters, setCharacters] = useState<any>([])
    const [isHover, setIsHover] = useState(null)

    const [isLoading, setLoading] = useState(false)

    const publicKey = '61356e78b8ce1037e2acf521205aa013'
    const privateKey = '04eebbc1094eac67831b65a7536632f75139abb1'

    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)

    const URL_TO_FETCH = 'http://gateway.marvel.com/v1/public/characters?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash;


    const handleMore = useCallback(() => {
        try {
            setLoading(true)
            const offset = characters.length
            fetch(URL_TO_FETCH + '&offset=' + offset, {
                method: 'get'
            })
                .then(response => response.json())
                .then(function (response) {
                    setCharacters([...characters, ...response.data.results])
                    console.log(response.data.results)
                    setLoading(false)
                })
                .catch(function (err) {
                    console.error(err);
                })

        } catch (err) {
            console.log(err)
        }
    }, [characters])

    function fetchData() {
        setLoading(true)
        fetch(URL_TO_FETCH, {
            method: 'get'
        })
            .then(response => response.json())
            .then(function (response) {
                setCharacters(response.data.results)
                setLoading(false)
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    function toggleHoverActive(index: number | SetStateAction<null>) {
        setIsHover(index)
    }

    function toggleActiveStyle(index: number | null) {
        if (index === isHover) {
            return "hoverShow"
        } else {

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    interface DataTypes {
        id: Key | null | undefined;
        thumbnail: {
            path: string;
            extension: string;
        };
        name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
        resourceURI: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    }

    return (
        <>
            <Title>Personagens</Title>
            <div>

                <ContentResult>
                    {characters.map((character: DataTypes,
                        index: number) =>
                        <CardPersonagem
                            key={character.id}
                            onMouseEnter={() => { toggleHoverActive(index) }}
                            onMouseLeave={() => { setIsHover(null) }}
                            className={toggleActiveStyle(index)}
                        >
                            <img width={200} height={350} src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
                            <DescPersonagem>
                                {character.name}
                                Series: {character.resourceURI}
                            </DescPersonagem>

                        </CardPersonagem>
                    )}
                </ContentResult>

                <ShowMoreButton onClick={handleMore}>
                    <span>VER MAIS</span>
                </ShowMoreButton>

                {isLoading && (
                    <Loading />
                )}

            </div>
        </>
    )
}



