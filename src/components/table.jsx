import React from "react";

const Table = ({ headers, data, actions }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="bg-[#14AE5C] text-white">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-10 py-5 text-center">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((value, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-10 py-5 text-center"
                                >
                                    {value}
                                </td>
                            ))}
                            {actions && (
                                <td className="px-10 py-5 text-center flex gap-2">
                                    {actions.map((action, actionIndex) => (
                                        <button
                                            key={actionIndex}
                                            className="p-1 rounded text-gray-900"
                                            onClick={() => action.onClick(row)}
                                        >
                                            {action.icon}
                                        </button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
