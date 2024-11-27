import watermelon from '/images/watermelon.png'
import oranges from '/images/oranges.png'
import grapes from '/images/grapes.png'

const Fruit = ({name, description, background}) => {

  const capitalizedBackground = background.charAt(0).toUpperCase() + background.slice(1).toLowerCase();

  const fruitImages = {
    watermelon: watermelon,
    oranges: oranges,
    grapes:grapes
  };

  const fruitImage = fruitImages[name.toLowerCase()] || watermelon; // Ak neexistuje obrázok pre daný názov, použije sa predvolený watermelon

  return (
    <div className={`bg-fruit${capitalizedBackground} flex flex-col rounded-lg p-5 gap-2`}>
        <img src={fruitImage} alt={name} className='w-8 h-8 object-contain' />
        <h1 className='text-baseDarkerGrey font-bold capitalize'>{name}</h1>
        <p className='font-light text-sm text-baseGrey'>{description}</p>
    </div>
  )
}

export default Fruit