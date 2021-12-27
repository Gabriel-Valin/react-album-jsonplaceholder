import { Link } from "react-router-dom"
import { Album } from "../types/Album"


export const AlbumItem = ({ id, title }: Album) => {
    return (
        <div style={{padding: '10px'}}>
            <li key={id}>
                <Link to={`/albums/${id}/photos`}>{title}</Link>
            </li>
        </div>
    )
}