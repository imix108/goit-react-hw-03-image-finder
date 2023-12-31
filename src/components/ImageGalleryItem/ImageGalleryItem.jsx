import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ id, webImg, handleModal}) => {
  return (
    <li id={id} className={ css.imageGalleryItem} key={id} onClick={()=>handleModal(id)}>
      <img className={css.image } src={webImg} alt="" />
    </li>
  )
}