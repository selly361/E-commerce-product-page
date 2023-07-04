
interface ISlide {
    image: string
    thumbnail: string
}




export interface IImagePreviewContextProps {
    currentSlide: ISlide
    previewModal: boolean
    openPreviewModal: () => void
    closePreviewModal: () => void
    setSlide: (index: number) => void
    nextSlide: () => void
    prevSlide: () => void
    active: (index: number) => string
}
