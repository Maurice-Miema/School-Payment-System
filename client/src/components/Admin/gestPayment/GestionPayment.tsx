import Navbar from "../navbar/Navbar";
import Listpayment from "./Listpayment";


function GestionPayment() {
    return (
        <>
            < Navbar />
            <hr />

            <div className="mt-2">
                <div>
                    <h1 className="text-2xl">Les Paiements</h1>
                </div>

                <div className="h-[80vh] overflow-auto scrollbar-none mt-4">
                    < Listpayment />
                </div>
            </div>
        </>
    )
}

export default GestionPayment
