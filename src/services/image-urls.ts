import NOIMAGE from '../assets/no-image.jpg'

export const getCroppedImageUrl = (url: string) => {
    if (!url) return NOIMAGE;
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}