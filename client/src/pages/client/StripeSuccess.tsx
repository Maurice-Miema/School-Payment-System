import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router";

function StripeSuccess() {
    return (
        <div className="bg-slate-300 h-screen font-Roboto">
            <div className="flex justify-center items-center h-screen">
                <div className="px-4 pt-8 pb-2 bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center">
                        < FaCircleCheck size={50} color="#16a34a" />
                    </div>

                    <div className="mt-4">
                        <h1 className="text-2xl justify-center text-center flex font-semibold">Paiement Terminé avec Succès ! </h1>
                        <p className="flex justify-center text-center text-gray-600">Félicitations, votre paiement a été validé avec succès ! 🎉</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-center text-lg">
                            Nous vous remercions pour votre confiance. <br /> Votre transaction a été traitée avec succès
                        </p>

                        <p className="mt-4 text-center">
                            <strong> Besoin d’aide ?</strong> <br /> N’hésitez pas à contacter notre support en cas de question.
                        </p>

                        <p className="mt-4 text-center">
                            Cliquez sur le bouton ci-dessous pour revenir à l’accueil.
                        </p>
                    </div>

                    <div>
                        <Link 
                            to="/Home"
                            type="button"
                            className="mt-4 flex justify-center bg-green-500 w-full py-2 text-lg rounded-lg text-white"
                        >
                            Retourner à L'Acceuil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StripeSuccess;
