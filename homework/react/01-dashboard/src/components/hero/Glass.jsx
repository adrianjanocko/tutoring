import SimpleGlass from "./glass/SimpleGlass"

const Glass = () => {
  return (
    <section>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h5 className='text-sm'>Glass Intake</h5>
                <h1 className='text-basePurple text-2xl'>200 ml</h1>
            </div>
            <div className='flex items-start gap-4 text-sm'>
                <SimpleGlass colour="Purple" number={1}/>
                <SimpleGlass colour="Pinnk" number={2}/>
                <SimpleGlass colour="Red" number={3}/>
            </div>
        </div>
    </section>
  )
}

export default Glass