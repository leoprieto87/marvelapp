import { Key, ReactChild, ReactFragment, ReactPortal, SetStateAction, useCallback, useEffect, useState } from "react";
import { FilterElement } from "../../styles/global";
import { Loading } from "../utils/loading";
import {
    DescPersonagem,
    CardPersonagem,
    Title,
    ContentResult,
    ShowMoreButton,
    ModalDetail,
    ModalDetailContent
} from "./style";

import { InputBusca } from "../utils/busca";
import { API, ts } from "../../services/api";


export function Characters() {

    const [characters, setCharacters] = useState<any>([])
    const [searchTerm, setSearchTerm] = useState<string | null>('')

    const [isHover, setIsHover] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const showMore = document.getElementsByClassName(ShowMoreButton.styledComponentId)[0]
    const windowPosition = window.pageYOffset
    interface DataTypes {
        description: string;
        id: Key | null | undefined;
        thumbnail: {
            path: string;
            extension: string;
        };
        name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
        resourceURI: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    }

    const handleMore = useCallback(async () => {

        setLoading(true)


        const offsetResults = characters.length

        if (searchTerm == null) {
            setSearchTerm(null)
        }

        const request = await API.get('characters' + ts, {
            params: {
                offset: offsetResults,
                nameStartsWith: searchTerm || null
            }
        })

        try {
            request
            setCharacters([...characters, ...request.data.data.results])
            setLoading(false)

            if (request.data.data.total == offsetResults) {
                showMore.classList.add("inactive");
            } else {
                showMore.classList.remove("inactive");
            }

        } catch (err) {
            console.log(err)
        }
    }, [characters])

    const handleBusca = function (e: { target: { value: any; }; }) {
        setSearchTerm(e.target.value)

        searchAllCharacters()
    }

    // SETA DETALHES DO MODAL E SE O MODAL SERA ATIVADO
    const [characterDetail, setCharacterDetail] = useState<any>([])
    const [isModal, setIsModal] = useState(false)

    const searchAllCharacters = async () => {
        setLoading(true)
        // AJUSTAR O PARAMETRO TS
        const request = await API.get('characters' + ts, {
            params: {
                nameStartsWith: searchTerm
            }
        })
        try {
            request
            setCharacters(request.data.data.results)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleModalDetail = (character: DataTypes) => {
        setLoading(true)
        setIsModal(true)
        setCharacterDetail(character)
        setLoading(false)
    }

    async function fetchData() {
        setLoading(true)
        const offset = characters.length

        // AJUSTAR O PARAMETRO TS
        const request = await API.get('characters' + ts, {
            params: {
                offset: offset
            }
        })
        try {
            request
            setCharacters([...characters, ...request.data.data.results])
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
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
        console.log(characters)
    }, [])

    useEffect(() => {
        handleBusca
    }, [searchTerm])

    useEffect(() => {
        //AJUSTAR A EXECUÇÃO DESTE FLOAT (ESTA MUITO LENTO)
        const filterFloat = document.getElementsByClassName(FilterElement.styledComponentId)[0]
        const filterHeight = filterFloat.offsetTop

        if (windowPosition > filterHeight) {
            filterFloat.classList.add("float");
        } else {
            filterFloat.classList.remove("float");
        }
    }, [windowPosition])

    return (
        <>
            <FilterElement>
                <Title>Personagens</Title>
                <InputBusca placeholder={"busque algum personagem"} busca={searchTerm} handleBusca={handleBusca} ></InputBusca>
            </FilterElement>

            <div>
                <ContentResult>

                    {characters.map((character: DataTypes,
                        index: number) => {
                        return (
                            <CardPersonagem
                                key={character.id}
                                onMouseEnter={() => { toggleHoverActive(index) }}
                                onMouseLeave={() => { setIsHover(null) }}
                                className={toggleActiveStyle(index)}
                                onClick={() => { handleModalDetail(character) }}
                            >
                                <img width={200} height={350} src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
                                <DescPersonagem>
                                    {character.name}
                                </DescPersonagem>

                            </CardPersonagem>
                        )
                    })
                    }

                    {isModal && (
                        <ModalDetail>
                            <ModalDetailContent>
                                <button onClick={() => setIsModal(false)}>X FECHAR</button>
                                {characterDetail.name}
                                <br />
                                {characterDetail.description}
                            </ModalDetailContent>
                        </ModalDetail>
                    )}

                </ContentResult>

                <ShowMoreButton onClick={handleMore}><span>VER MAIS</span></ShowMoreButton>

                {isLoading && (
                    <Loading />
                )}

            </div>
        </>
    )
}
