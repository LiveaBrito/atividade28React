import ItemDaLista from "./ItemDaLista";

function ListaDeComponentes(){

    return (
        <ul>
            {<ItemDaLista Item="Canadá"/>}
            {<ItemDaLista Item="Brasil"/>}
            {<ItemDaLista Item="Japão"/>}
            {<ItemDaLista Item="EUA"/>}
            {<ItemDaLista Item="Inglaterra"/>}
        </ul>
    )
}

export default ListaDeComponentes;