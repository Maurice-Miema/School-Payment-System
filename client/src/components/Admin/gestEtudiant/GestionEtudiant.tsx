import Navbar from "../navbar/Navbar"
import Listeleves from "./Listeleves"


function GestionEtudiant() {
    return (
        <>
            < Navbar />
            <hr />
            <div className="mt-2">
                <div>
                    <h1 className="text-2xl">Liste des eleves</h1>
                </div>

                <div>
                    < Listeleves />
                </div>
            </div>
        </>
    )
}

export default GestionEtudiant
