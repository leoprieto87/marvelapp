import { ChangeEventHandler } from "react"
import { SearchInput } from "./style"

export function InputBusca(props:
    {
        placeholder: string | undefined;
        busca: string | number | readonly string[] | undefined;
        handleBusca: ChangeEventHandler<HTMLInputElement> | undefined
    }) {

    return (
        <SearchInput
            type={'text'}
            placeholder={props.placeholder}
            value={props.busca}
            onChange={props.handleBusca}
        />
    )

}