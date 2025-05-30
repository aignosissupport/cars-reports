import React from 'react';

const Page5 = () => {
    const tableData = [
        {
            subskill: "Eye Area Expressivity",
            description: "Observes expressiveness in eye area, showing interest and emotional engagement.",
            percentage: 83,
            color: "bg-[#4CAF50]",
            explain: "Clear eye expressivity, indicating strong emotional engagement."
        },
        {
            subskill: "Lower Face Expressivity",
            description: "Measures mouth expressiveness, reflecting emotional responsiveness.",
            percentage: 75,
            color: "bg-[#66BB6A]",
            explain: "Good lower facial expressivity, showing responsiveness to social interactions."
        }
    ];
    const tableData1 = [
        {
            subskill: "Emotional Range",
            description: "Shows variety in emotions displayed, indicating emotional adaptability and health",
            percentage: 80,
            color: "bg-[#4CAF50]",
            explain: "Displays a broad range of emotions, reflecting healthy emotional adaptability."
        },
        {
            subskill: "Emotion Mirroring",
            description: "Measures ability to reflect others' emotions, showing empathy and social awareness.",
            percentage: 78,
            color: "bg-[#66BB6A]",
            explain: "Mirrors emotions effectively, indicating social awareness and empathy."
        }
    ];
    

    return (
        <div className="pdf-image flex flex-col font-raleway items-center p-8 bg-white min-h-screen">
            <div className="pdf-page bg-white p-8 shadow-md rounded-md flex justify-center items-center w-[210mm] h-[297mm] relative">
                {/* Header */}
                <div className="absolute p-8 top-0 left-0 w-full">
                    <h1 className="text-center text-base font-bold">Feature Analysis Table</h1>
                    <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Table */}
                    <div className="w-full border rounded-3xl p-4 border-[#CDAAE0] font-raleway">
                        <h3 className='text-center text-sm font-bold mb-5'>Facial Muscular Response</h3>
                        <table className="w-full border-collapse">
                            {/* Table Header */}
                            <thead>
                            <tr className="text-left">
                                    <th className="p-2 text-[12px] border-r font-lg border-b border-gray-300 text-center">Feature</th>
                                    <th className="p-2 text-[12px] border-r font-lg border-b border-gray-300 text-center">Percentile</th>
                                    <th className="p-2 text-[12px] font-lg border-b border-gray-300 text-center">Explanation</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        {/* Subskill */}
                                        <td className="p-4 text-[10px] text-gray-800 w-[35%] font-semibold border-r border-gray-300">
                                            {row.subskill}
                                            <br />
                                            <span className="font-normal text-gray-600 text-[8px]">{row.description}</span>
                                        </td>
                                        {/* Performance */}
                                        <td className="py-6 px-6 text-center w-[30%] border-r border-gray-300">
                                            <div className="w-[80%] h-5 mx-auto rounded-full bg-gray-200">
                                                <div className={`flex justify-end items-center h-full rounded-full ${row.color}`} style={{ width: `${row.percentage}%` }}>
                                                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-[0.5rem] font-bold shadow-md">
                                                        {row.percentage}%
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Results */}
                                        <td className="py-4 px-4 text-[8px] text-gray-800 w-[35%]">{row.explain}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full border rounded-3xl p-4 border-[#CDAAE0] font-raleway">
                        <h3 className='text-center text-sm font-bold mb-5'>Emotional and Mirroring Response</h3>
                        <table className="w-full border-collapse">
                            {/* Table Header */}
                            <thead>
                            <tr className="text-left">
                                    <th className="p-2 text-[12px] border-r font-lg border-b border-gray-300 text-center">Feature</th>
                                    <th className="p-2 text-[12px] border-r font-lg border-b border-gray-300 text-center">Percentile</th>
                                    <th className="p-2 text-[12px] font-lg border-b border-gray-300 text-center">Explanation</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {tableData1.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        {/* Subskill */}
                                        <td className="p-4 text-[10px] text-gray-800 w-[35%] font-semibold border-r border-gray-300">
                                            {row.subskill}
                                            <br />
                                            <span className="font-normal text-gray-600 text-[8px]">{row.description}</span>
                                        </td>
                                        {/* Performance */}
                                        <td className="py-6 px-6 text-center w-[30%] border-r border-gray-300">
                                            <div className="w-[80%] h-5 mx-auto rounded-full bg-gray-200">
                                                <div className={`flex justify-end items-center h-full rounded-full ${row.color}`} style={{ width: `${row.percentage}%` }}>
                                                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-[0.5rem] font-bold shadow-md">
                                                        {row.percentage}%
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Results */}
                                        <td className="py-4 px-4 text-[8px] text-gray-800 w-[35%]">{row.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute p-8 bottom-0 left-0 w-full">
                    <div className="w-full flex justify-between items-center text-xs font-manrope mt-10 border-t-2 border-[#800080] pt-2">
                        <span className="text-[10px]">Sample</span>
                        <div className="text-center text-[10px]">
                            <span>Received Date: 2023-07-28 17:22:09</span>
                            <br />
                            <span>ID: Report Generation Date:</span>
                        </div>
                        <span className="text-[10px]">Page 09</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;
