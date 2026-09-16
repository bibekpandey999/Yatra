export default function AdminCustomers(){
    const customers=[
        {name:"Anita Sharma", phone:"98412344567",blocked:false},
        {name:"Prakash kc", phone:"9812349876",blocked:false},
        {name:"Sunita Magar", phone:"9807654321",blocked:true},
    ];
    return(
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold text-primary mb-8 ">Customers </h1>
            <div className="bg-white border-2 border-gray-200 shadow-sm roundedd-xl p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200 text-gray-600 text-sm">
                                <th className="py-3 px-2">Name</th>
                                <th className="py-3 px-2">Phone</th>
                                <th className="py-3 px-2">Account</th>
                                <th className="py-3 px-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer)=>(
                                <tr key={customer.phone} className="border-b border-gray-100">
                                    <td className="py-3 px-2 text-gray-900">{customer.name}</td>
                                    <td className="py-3 px-2 text-gray-900">{customer.phone}</td>
                                    <td className="py-3 px-2">
                                        <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            customer.blocked?"bg-error/20 text-error":"bg-success/20 text-success"}`}>
                                                {customer.blocked? "Blocked":"Active"}
                                            </span>
                  </td>
                  <td className="py-3 px-2 flex gap-2">
                    <button className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm hover:opacity-90 transition">
                      {customer.blocked ? "Unblock" : "Block"}
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