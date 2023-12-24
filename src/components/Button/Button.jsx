import css from './Button.module.css';

export const Button = ({onLoadMore}) => {
  return (

    <div className={css.ButtonContainer}><button onClick={onLoadMore} className={css.Button} type='button'>Load More</button></div>
    
  )
}


