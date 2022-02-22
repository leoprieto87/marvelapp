import md5 from "md5";
import { Key, ReactChild, ReactFragment, ReactPortal, SetStateAction, useCallback, useEffect, useState } from "react";
import { FilterElement } from "../../styles/global";
import { InputBusca } from "../busca";
import { Loading } from "../loading";
import { DescPersonagem, CardPersonagem, Title, ContentResult, ShowMoreButton, Busca } from "./style";


export function Characters() {

    const [characters, setCharacters] = useState<any>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    const [isHover, setIsHover] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const windosPosition = window.pageYOffset

    const publicKey = '61356e78b8ce1037e2acf521205aa013'
    const privateKey = '04eebbc1094eac67831b65a7536632f75139abb1'

    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)

    const URL_TO_FETCH = 'http://gateway.marvel.com/v1/public/characters?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash;
    interface DataTypes {
        id: Key | null | undefined;
        thumbnail: {
            path: string;
            extension: string;
        };
        name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
        resourceURI: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    }

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
                    setLoading(false)
                })
                .catch(function (err) {
                    console.error(err);
                })

        } catch (err) {
            console.log(err)
        }
    }, [characters])

    const handleBusca = function (e: { target: { value: any; }; }) {
        setSearchTerm(e.target.value)
    }

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

    function toggleHoverActive(index: any) {
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

    useEffect(() => {
        handleBusca
    }, [searchTerm])

    useEffect(() => {
        //AJUSTAR A EXECUÇÃO DESTE FLOAT
        const filterFloat = document.getElementsByClassName(FilterElement.styledComponentId)[0]
        const filterHeight = filterFloat.offsetTop
        if (windosPosition > filterHeight) {
            filterFloat.classList.add("float");
        } else {
            filterFloat.classList.remove("float");
        }
    }, [windosPosition])

    return (
        <>
            <FilterElement>
                <Title>Personagens</Title>
                <InputBusca placeholder={"pesquise algo aqui"} busca={searchTerm} handleBusca={handleBusca} ></InputBusca>
            </FilterElement>

            <div>
                <ContentResult>

                    {characters.filter((character: {
                        name: string;
                    }) => {
                        const matchSearch = character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        if (searchTerm == '') {
                            return character
                        } else if (matchSearch) {
                            return character
                        }
                    }).map((character: DataTypes,
                        index: number) => {
                        return (
                            <CardPersonagem
                                key={character.id}
                                onMouseEnter={() => { toggleHoverActive(index) }}
                                onMouseLeave={() => { setIsHover(null) }}
                                className={toggleActiveStyle(index)}
                            >
                                <img width={200} height={350} src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
                                <DescPersonagem>
                                    {character.name}
                                </DescPersonagem>

                            </CardPersonagem>
                        )
                    })}

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
