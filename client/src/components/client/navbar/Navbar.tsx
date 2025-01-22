import { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi"
import { IoNotificationsOutline } from "react-icons/io5"


type User = {
    role: string,
    nom: string,
    postnom: string,
    prenom: string,
    numerotel: string,
    promotion: string,
}

function Navbar() {
    const [user, setUser] = useState<string>(" ");
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            const user = JSON.parse(storedUser) as User;
            setUser(`${user.nom} ${user.prenom}`)
        }
    },[]);

    return (
        <div className="flex items-center">
            <div className='w-1/2 '>
                {/* <h1 className='text-xl md:text-3xl'>Complexe Sconlaire ADS</h1> */}
                
                <input 
                    type="search" 
                    name="" 
                    id="" 
                    className="border rounded-lg py-1 px-4 focus:outline-none w-1/2"
                />

                {/* <button type="button"></button> */}
            </div>

            <div className='w-1/2 flex justify-end'>
                <div className='flex items-center'>
                    <div className='mx-2'>
                        < IoNotificationsOutline size={20} />
                    </div>
                    <div>
                        <img 
                            src="/src/assets/images/client/avatar.png" 
                            alt="Photo User" 
                            className='h-12 w-12'
                        />
                    </div>
                    <div>
                        <h1 className='hidden md:block'>{user}</h1>
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

export default Navbar;
