import Link from "next/link";

const Table = ({ headers, data, actions }) => {
    return (
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
                {data.map((row) => (
                    <tr key={row.id}>
                        {Object.values(row).map((value, index) => (
                            <td key={index} className="px-10 py-5 text-center">
                                {value}
                            </td>
                        ))}
                        {/* Render action buttons */}
                        <td className="px-10 py-5 text-center flex justify-center gap-2">
                            {actions.map((action, index) => (
                                <Link key={index} href={action.link(row)} className="p-1 rounded text-gray-900">
                                    {action.icon}
                                </Link>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
