import { useEffect, useState } from "react"
import { AlbumItem } from "../components/AlbumItem"
import { api } from "../services/api"
import { Album } from "../types/Album"

export const Home = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    
    const loadAlbums = async () => {
        const response = await api.get('albums')
        setAlbums(await response.data)
    }

    useEffect(() => {
        loadAlbums()
    }, [])

    return (
        <div>
            {albums.map((album) => (
                <AlbumItem key={album.id} id={album.id} title={album.title} />
            ))}
        </div>
    )
}