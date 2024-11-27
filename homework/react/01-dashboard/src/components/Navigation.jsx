import Logo from './navigation/Logo';
import UserInfo from "./navigation/UserInfo";
import Links from "./navigation/Links";

const Navigation = () => {
  return (
    <section className='flex flex-col items-center relative h-screen pt-10 min-h-full border-r-2'>
        <Logo/>
        <Links/>
        <div className='flex gap-2 pt-44'>
           <UserInfo username="Matthew Perry" useremail="matthewperry@xyz.com"/>
        </div>
    </section>
  )
}

export default Navigation