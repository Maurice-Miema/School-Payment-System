

function ListFrais() {
    return (
        <div className="overflow-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-auto scrollbar-none border rounded-lg">
                    <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                        <div className="table-header-group bg-gray-50 py-2">
                            <div className="table-row">
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Description</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Montant</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Debut</div>
                                <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Fin</div>
                                <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Promotion</div>
                                <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Suppresion</div>
                                <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Modifier</div>
                                
                            </div>
                        </div>
                        <div className="table-row-group divide-y divide-gray-200 bg-white ">

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>

                            <div className="table-row ">
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 ">Frais Scolaire</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">20.000 FC</div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 01/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">10/ 02/ 2025 </div>
                                <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">8 ieme </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                    >
                                        Supprimer
                                    </button>
                                </div>

                                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                    <button 
                                        type="button" 
                                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                        disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                    >
                                        Modifier
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

export default ListFrais
