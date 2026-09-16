export default function AdminProviders(){
    const providers=[
        { name:"Niten Thapa",phone:"9812345678",vehicle:"Bus",kyc:"Pending",blocked:false},
        { name:"Sahil Gurung",phone:"9801234567",vehicle:"Car",kyc:"Approved",blocked:false},
        { name:"Samir Rana Magar",phone:"9801442366",vehicle:"Truck",kyc:"Pending",blocked:true},
    ];
    return(
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold text-primary mb-8"> Transport Providers </h1>
            <div className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200 text-gray-600 text-sm">
                                <th className="py-3 px-2">
                                    Name
                                </th>
                                <th className="py-3 px-2">
                                    Vehicle
                                </th>
                                <th className="py-3 px-2">
                                    KYC status
                                </th>
                                <th className="py-3 px-2">
                                    Account
                                </th>
                                <th className="py-3 px-2">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {providers.map((provider)=>(
                                <tr
                                key={provider.phone}
                                className="border-b border-gray-100">
                                    <td className="py-3 px-2 text-gray-900">
                                        {provider.name}
                                    </td>
                                    <td className="py-3 px-2 text-gray-900">
                                        {provider.phone}
                                        </td>
                                        <td className="py-3 px-2 text-gray-900">
                                        {provider.vehicle}
                                        </td>
                                        <td className="py-3 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        provider.kyc === "Approved"
                          ? "bg-success/20 text-success"
                          : "bg-warning/20 text-warning"
                      }`}
                    >
                      {provider.kyc}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        provider.blocked ? "bg-error/20 text-error" : "bg-success/20 text-success"
                      }`}
                    >
                      {provider.blocked ? "Blocked" : "Active"}
                    </span>
                  </td>
                  <td className="py-3 px-2 flex flex-wrap gap-2">
                    {provider.kyc === "Pending" && (
                      <>
                        <button className="bg-accent text-white px-3 py-1 rounded-lg text-sm hover:bg-accent-dark transition">
                          Verify
                        </button>
                        <button className="bg-error text-white px-3 py-1 rounded-lg text-sm hover:opacity-90 transition">
                          Reject
                        </button>
                      </>
                    )}
                    <button className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm hover:opacity-90 transition">
                      {provider.blocked ? "Unblock" : "Block"}
                    </button>
                    <button className="border border-error text-error px-3 py-1 rounded-lg text-sm hover:bg-error/10 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
                               