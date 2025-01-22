import Navbar from "../navbar/Navbar";
import ListHistorique from "./ListHistorique";



function Historique() {
  return (
    <>
      <div > 
          < Navbar />
      </div>    

      <hr />

      {/* les l'historique */}
      <section className='mt-4 h-[87vh] overflow-auto scrollbar-none'>
          <div className=''>
              <h1 className='text-2xl font-semibold'>Historique de Paiement </h1>
          </div>
          
          {/* liste de frais */}
          <div className="mt-4">
            < ListHistorique />
          </div>
      </section>
        </>
  )
}

export default Historique;
