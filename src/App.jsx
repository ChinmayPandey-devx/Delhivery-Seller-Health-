import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  AlertTriangle, 
  CreditCard, 
  Settings, 
  Activity,
  Search,
  Bell,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Info
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine 
} from 'recharts';

// Mock Data for State A
const mockOrders = [
  { id: 'AWB123456789', date: '03 Jul 2026', customer: 'Rohan Sharma', city: 'Mumbai', value: '₹1,299', rtoRisk: 'Low Risk' },
  { id: 'AWB123456790', date: '03 Jul 2026', customer: 'Priya Patel', city: 'Ahmedabad', value: '₹850', rtoRisk: 'High Risk' },
  { id: 'AWB123456791', date: '03 Jul 2026', customer: 'Amit Kumar', city: 'Delhi', value: '₹2,499', rtoRisk: 'Low Risk' },
  { id: 'AWB123456792', date: '02 Jul 2026', customer: 'Sneha Gupta', city: 'Bangalore', value: '₹599', rtoRisk: 'High Risk' },
  { id: 'AWB123456793', date: '02 Jul 2026', customer: 'Vikram Singh', city: 'Jaipur', value: '₹1,850', rtoRisk: 'Low Risk' },
  { id: 'AWB123456794', date: '01 Jul 2026', customer: 'Anita Desai', city: 'Pune', value: '₹3,200', rtoRisk: 'Low Risk' },
];

// Mock Data for State B
const chartData = [
  { name: 'Week 1', rto: 14.2, benchmark: 12.0 },
  { name: 'Week 2', rto: 13.8, benchmark: 12.0 },
  { name: 'Week 3', rto: 15.1, benchmark: 12.0 },
  { name: 'Week 4', rto: 14.5, benchmark: 12.0 },
  { name: 'Week 5', rto: 12.9, benchmark: 12.0 },
  { name: 'Week 6', rto: 11.2, benchmark: 12.0 },
];

const pinCodeData = [
  { pin: '400072 (Saki Naka)', volume: 342, success: 82, rto: 18 },
  { pin: '110059 (Uttam Nagar)', volume: 289, success: 84, rto: 16 },
  { pin: '560068 (Bommanahalli)', volume: 215, success: 91, rto: 9 },
  { pin: '302012 (Mansarovar)', volume: 178, success: 83, rto: 17 },
  { pin: '380054 (Thaltej)', volume: 156, success: 94, rto: 6 },
];

const SidebarItem = ({ icon: Icon, label, active, isNew }) => (
  <div className={`flex items-center px-4 py-3 cursor-pointer ${active ? 'bg-brand-red/10 text-brand-red border-r-4 border-brand-red' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}>
    <Icon size={20} className={active ? 'text-brand-red' : 'text-gray-500'} />
    <span className={`ml-3 font-medium ${active ? 'text-brand-red' : 'text-gray-700'}`}>{label}</span>
    {isNew && (
      <span className="ml-auto text-[10px] uppercase tracking-wider font-bold bg-brand-red text-white px-2 py-0.5 rounded-full">
        New
      </span>
    )}
  </div>
);

export default function App() {
  const [isProposed, setIsProposed] = useState(false);

  return (
    <div className="flex h-screen bg-[#FAFAFA] font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#E5E5E5] flex flex-col hidden md:flex">
        <div className="p-5 border-b border-[#E5E5E5]">
          <div className="text-2xl font-bold tracking-tight text-brand-black">DELHIVERY<span className="text-brand-red">.</span></div>
          <div className="text-xs text-gray-500 font-medium tracking-wide mt-1">SELLER PORTAL</div>
        </div>
        <div className="py-4 flex-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={Package} label="Orders" active={!isProposed} />
          <SidebarItem icon={AlertTriangle} label="NDR Management" />
          <SidebarItem icon={CreditCard} label="Finance" />
          <SidebarItem icon={Activity} label="Seller Health" active={isProposed} isNew />
          <SidebarItem icon={Settings} label="Services" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-96">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search AWB, Order ID, or Phone..." 
              className="bg-transparent border-none outline-none ml-2 text-sm w-full"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-brand-red rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">
                3
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                MD
              </div>
              <span className="text-sm font-medium">MyStore D2C</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          
          {/* THE PITCH TOGGLE */}
          <div className="max-w-6xl mx-auto mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-brand-black">Prototype Viewer</h2>
              <p className="text-sm text-gray-500">Toggle between current and proposed analytics layer</p>
            </div>
            <div className="mt-4 md:mt-0 flex bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setIsProposed(false)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${!isProposed ? 'bg-white shadow text-brand-black' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Current: Per-Order View
              </button>
              <button 
                onClick={() => setIsProposed(true)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${isProposed ? 'bg-brand-red shadow text-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Proposed: Seller Health Analytics
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {!isProposed ? (
              /* STATE A: CURRENT DELHI-VERY ONE (Sparse, Transactional) */
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold text-brand-black">All Orders</h1>
                  <button className="px-4 py-2 bg-brand-black text-white text-sm font-semibold rounded-md">Create Shipment</button>
                </div>
                
                <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-[#E5E5E5]">
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">AWB Number</th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">City</th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Value</th>
                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">RTO Risk (ML)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      {mockOrders.map((order, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.city}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.value}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              order.rtoRisk === 'Low Risk' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {order.rtoRisk}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500 text-center">
                    Showing 6 of 1,240 orders. Note: ML Risk predictions are charged at ₹2.49/shipment.
                  </div>
                </div>
              </div>
            ) : (
              /* STATE B: PROPOSED SELLER HEALTH (Rich Analytics, Actionable) */
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h1 className="text-2xl font-bold text-brand-black">Seller Health Score</h1>
                    <p className="text-gray-500 mt-1">Aggregated insights across your last 30 days of shipment data.</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-50 flex items-center">
                    Download Report <ChevronDown size={16} className="ml-2" />
                  </button>
                </div>

                {/* Score & Nudge Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Headline Score */}
                  <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#F5F5F5" strokeWidth="8" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#22A06B" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="55.264" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-4xl font-extrabold text-brand-black">78</span>
                        <span className="text-xs font-semibold text-brand-green">GOOD</span>
                      </div>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-900">Overall Health Index</h3>
                    <p className="text-sm text-gray-500 mt-2">Better than <span className="font-semibold text-gray-800">62%</span> of sellers in the Fashion D2C category.</p>
                  </div>

                  {/* Top Level Metric Cards */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-500">RTO Rate</span>
                        <div className="p-2 bg-red-50 rounded-lg"><Activity size={18} className="text-brand-red" /></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">14.2%</div>
                        <div className="flex items-center text-sm mt-1 text-green-600 font-medium">
                          <TrendingDown size={14} className="mr-1" />
                          <span>-1.5% from last month</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-500">WISMO Index (Queries/100)</span>
                        <div className="p-2 bg-blue-50 rounded-lg"><Info size={18} className="text-blue-500" /></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">3.4</div>
                        <div className="flex items-center text-sm mt-1 text-red-600 font-medium">
                          <TrendingUp size={14} className="mr-1" />
                          <span>+0.2 from last month</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-500">NDR Resolution Rate</span>
                        <div className="p-2 bg-green-50 rounded-lg"><AlertTriangle size={18} className="text-brand-green" /></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">42%</div>
                        <div className="flex items-center text-sm mt-1 text-green-600 font-medium">
                          <TrendingUp size={14} className="mr-1" />
                          <span>+5% from last month</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-500">On-Time Delivery vs Category</span>
                        <div className="p-2 bg-gray-50 rounded-lg"><Package size={18} className="text-gray-500" /></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">88%</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div className="bg-brand-red h-1.5 rounded-full" style={{width: '88%'}}></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">Category Avg: 91% (Underperforming)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Chart and Table */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Trend Chart */}
                  <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm">
                    <h3 className="font-bold text-brand-black mb-4">RTO Trend vs Category Benchmark</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} tickFormatter={(v) => `${v}%`} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          />
                          <ReferenceLine y={12} stroke="#9CA3AF" strokeDasharray="3 3" label={{ position: 'top', value: 'Category Benchmark (12%)', fill: '#6B7280', fontSize: 12 }} />
                          <Line type="monotone" dataKey="rto" stroke="#EE3C26" strokeWidth={3} dot={{r: 4, fill: '#EE3C26'}} activeDot={{r: 6}} name="Your RTO %" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Pin Code Risk Breakdown */}
                  <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-sm flex flex-col">
                    <div className="p-5 border-b border-[#E5E5E5]">
                      <h3 className="font-bold text-brand-black">Top Pin Code Risk Areas</h3>
                      <p className="text-xs text-gray-500 mt-1">High volume zones with RTO > 15%</p>
                    </div>
                    <div className="p-0 flex-1 overflow-auto">
                      <ul className="divide-y divide-[#E5E5E5]">
                        {pinCodeData.map((item, idx) => (
                          <li key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{item.pin}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{item.volume} shipments</p>
                            </div>
                            <div className="text-right">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                                item.rto > 15 ? 'bg-red-100 text-red-700' : 
                                item.rto > 10 ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                              }`}>
                                {item.rto}% RTO
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Action Nudge */}
                <div className="bg-gradient-to-r from-brand-red/10 to-orange-50 border border-brand-red/20 p-5 rounded-xl flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="bg-brand-red p-2 rounded-full mt-1 mr-4">
                      <TrendingUp size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-black">Growth Opportunity Identified</h4>
                      <p className="text-sm text-gray-700 mt-1 max-w-2xl">
                        3 of your top pin codes show RTO rates above 15%. Consider enabling the <strong>COD-to-Prepaid Nudge</strong> for these specific zones during checkout to reduce risk and improve your health score.
                      </p>
                    </div>
                  </div>
                  <button className="whitespace-nowrap px-5 py-2.5 bg-brand-red text-white text-sm font-bold rounded-lg shadow-sm hover:bg-red-700 transition-colors">
                    Enable Area Limits
                  </button>
                </div>

              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
