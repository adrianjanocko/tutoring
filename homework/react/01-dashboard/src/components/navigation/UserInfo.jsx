import guy from '/images/guy.png'

const UserInfo = ({username, useremail}) => {
  return (
    <div className='flex gap-2'>
            <img src={guy} alt="a happy guy picture" className='w-10 h-10'/>
            <div className='text-baseGrey flex flex-col'>
                <h1>{username}</h1>
                <p>{useremail}</p>
            </div>
        </div>
  )
}

export default UserInfo