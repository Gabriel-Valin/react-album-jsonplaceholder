import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { AlbumPhotos } from "../components/AlbumPhotos"
import { api } from "../services/api"
import { AlbumList as TypeAlbumList } from "../types/AlbumList"

export const AlbumList = () => {
    const [albumList, setAlbumList] = useState<TypeAlbumList[]>([])
    const params = useParams()

    const loadPhotosByAbum = async (id: string) => {
        const response = await api.get(`albums/${id}/photos`)
        setAlbumList(response.data)
    }

    useEffect(() => {
        if (params.id) {
            loadPhotosByAbum(params.id)
        }
    }, [])

    return (
        <div className='listphoto'>
                {albumList.map(album => (
                    <AlbumPhotos key={album.id} id={album.id} title={album.title} thumbnailUrl={album.thumbnailUrl}/>
                ))}
        </div>
    )
}