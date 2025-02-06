import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router";

function StripeCancel() {
    return (
        <div className="bg-slate-300 h-screen font-Roboto">
            <div className="flex justify-center items-center h-screen">
                <div className="px-4 pt-8 pb-2 bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center">
                        < IoCloseCircle size={50} color="#dc2626" />
                    </div>

                    <div className="mt-4">
                        <h1 className="text-2xl justify-center text-center flex font-semibold">Paiement Échoué </h1>
                        <p className="flex justify-center text-center text-gray-600">Malheureusement, votre paiement n’a pas pu être traité.</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-center text-lg">
                        Nous vous invitons à réessayer ou <br /> à utiliser un autre moyen de paiement.
                        </p>

                        <p className="mt-4 text-center">
                            <strong> Besoin d’aide ?</strong> <br /> Contactez notre support pour plus d’assistance.
                        </p>

                        <p className="mt-4 text-center">
                            Cliquez sur le bouton ci-dessous pour revenir à l’accueil ou réessayer.
                        </p>
                    </div>

                    <div>
                        <Link 
                            to="/Home"
                            type="button"
                            className="mt-4 flex justify-center bg-red-600 w-full py-2 text-lg rounded-lg text-white"
                        >
                            Retourner à L'Acceuil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StripeCancel;
