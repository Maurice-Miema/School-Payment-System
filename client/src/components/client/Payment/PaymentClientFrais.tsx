import Navbar from "../navbar/Navbar";
import ListFrais from "./ListFrais";

export default function PaymentClientFrais() {
    return (
        <>
            <div > 
                < Navbar />
            </div>    

            <hr />

            {/* les cards de frais */}
            <section className='mt-4 h-[87vh] overflow-auto scrollbar-none'>
                <div className=''>
                    <h1 className='text-2xl font-semibold'>Listes de Frais a Payer </h1>
                </div>
                
                {/* liste de frais */}
                < ListFrais />
            </section>
        </>
    )
}
