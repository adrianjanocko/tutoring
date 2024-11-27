const Average = ({percentage, mililiters}) => {
  return (
    <div className='bg-lightPurple py-5 px-2 rounded-xl flex items-start justify-start pl-6 gap-4'>
        <div className="flex justify-center items-center w-fit h-full">
            {percentage} %
        </div>
        <div>
            <h1 className="text-lightPurpleText">Average Intake</h1>
            <h1 className="text-lightPurpleText font-bold">{mililiters} ml</h1>   
        </div>  
    </div>
  )
}

export default Average