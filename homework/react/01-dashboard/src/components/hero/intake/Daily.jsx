const Daily = ({percentage, mililiters}) => {
  return (
    <div className='bg-lightGreen py-5 px-2 rounded-xl flex items-start justify-start pl-6 gap-4'>
        <div className="flex justify-center items-center w-fit h-full">
            {percentage} %
        </div>
        <div>
            <h1 className="text-lightGreenText">Daily Intake</h1>
            <h1 className="text-lightGreenText font-bold">{mililiters} ml</h1>   
        </div>
    </div>
  )
}

export default Daily