import { HiOutlineChevronDown } from 'react-icons/hi'
import { IoNotificationsOutline } from 'react-icons/io5'

function Navbar() {
    const Getuser = localStorage.getItem("user");
    const User = Getuser ? JSON.parse(Getuser) : "";
    console.log("Admin User :", User);

    return (
        <div className='flex items-center'> 
            <div className='w-1/2'>
                <h1 className='text-xl md:text-3xl'> {User.prenom} Admin</h1>
            </div>

            <div className='w-1/2 flex justify-end'>
                <div className='flex items-center'>
                    <div className='mx-2'>
                        < IoNotificationsOutline size={20} />
                    </div>
                    <div>
                        <img 
                            src="/src/assets/images/Admin/avatar.png" 
                            alt="Photo User" 
                            className='h-12 w-12'
                        />
                    </div>
                    <div>
                        <h1 className='hidden md:block'>{User.nom} {User.prenom}</h1>
                        < HiOutlineChevronDown 
                            size={20}
                            className='md:hidden block' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
