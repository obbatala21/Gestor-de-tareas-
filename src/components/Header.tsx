import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo : ({title} : TodoTitle) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) =>{
    return (
    <header className="flex flex-col items-center gap-4 pb-6">
        <h1 className="flex flex-row items-center gap-4 pb-6 text-4xl">todo<img
        className="w-12 h-12" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
        alt="TypeScript Logo"
        /></h1>

        <CreateTodo saveTodo={onAddTodo} />
    </header>)
}