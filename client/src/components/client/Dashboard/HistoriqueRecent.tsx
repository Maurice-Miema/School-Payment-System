

function HistoriqueRecent() {
    return (
        <div className="overflow-auto mt-4">
            <div className=" inline-block align-middle">
                <div className="overflow-auto scrollbar-none border rounded-lg h-[79vh]">
                    <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                        <div className="table-header-group bg-gray-50 py-2">
                            <div className="table-row">
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Description</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Montant</div>
                                <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Mode de Paiement</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Numero Voir le Recu</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Status</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Action</div>
                            </div>
                        </div>
                        <div className="table-row-group divide-y divide-gray-200 bg-white ">

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">11/ 01/ 2025</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> Mobile</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">Reusi</div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Voir le Recu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoriqueRecent;
