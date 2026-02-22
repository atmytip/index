import {
  ShoppingCart,
  Package,
  ClipboardList,
  Truck,
} from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Sales Management", desc: "Track leads, deals, and conversions in real-time" },
  { icon: ClipboardList, title: "Service & Tasks", desc: "Assign, track, and complete tasks efficiently" },
  { icon: Package, title: "Inventory", desc: "Real-time stock management & alerts" },
  { icon: Truck, title: "Supplier Management", desc: "Vendor relationships simplified" },
];

export default function CardOptionsPreview() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-slate-800">Card Design Options Preview</h1>
      
      {/* Option C: Bento Grid Style */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Option C: Bento Grid Style</h2>
        <p className="text-slate-600 mb-6">Mixed card sizes with dark backgrounds and visual hierarchy</p>
        
        <div className="grid grid-cols-4 gap-4">
          {/* Large card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sales Management</h3>
            <p className="text-slate-400 text-lg">Track leads, deals, and conversions in real-time with powerful analytics</p>
          </div>
          
          {/* Small cards */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all group border border-slate-100">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Service & Tasks</h4>
            <p className="text-slate-500 text-sm">Assign & track tasks</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all group border border-slate-100">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Inventory</h4>
            <p className="text-slate-500 text-sm">Real-time stock alerts</p>
          </div>
          
          <div className="col-span-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-6 text-white flex items-center gap-6 hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Supplier Management</h4>
              <p className="text-white/80 text-sm">Vendor relationships simplified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Option E: Compact Pill Cards */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Option E: Compact Pill Cards</h2>
        <p className="text-slate-600 mb-6">Smaller pill-shaped cards with hover expansion</p>
        
        <div className="flex flex-wrap gap-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-full px-4 py-3 shadow-sm hover:shadow-lg hover:px-6 transition-all duration-300 flex items-center gap-3 cursor-pointer border border-slate-100 hover:border-blue-200"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-800 whitespace-nowrap">{feature.title}</span>
              <span className="text-slate-500 text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                — {feature.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Option F: Colorful Background Cards */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Option F: Colorful Background Cards</h2>
        <p className="text-slate-600 mb-6">Light tinted backgrounds with colored icons</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-colors group border border-blue-100">
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Sales Management</h4>
            <p className="text-slate-600 text-sm">Track leads, deals, and conversions in real-time</p>
          </div>
          
          <div className="bg-cyan-50 rounded-2xl p-6 hover:bg-cyan-100 transition-colors group border border-cyan-100">
            <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Service & Tasks</h4>
            <p className="text-slate-600 text-sm">Assign, track, and complete tasks efficiently</p>
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-6 hover:bg-emerald-100 transition-colors group border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
              <Package className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Inventory</h4>
            <p className="text-slate-600 text-sm">Real-time stock management & alerts</p>
          </div>
          
          <div className="bg-violet-50 rounded-2xl p-6 hover:bg-violet-100 transition-colors group border border-violet-100">
            <div className="w-14 h-14 bg-violet-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Supplier Management</h4>
            <p className="text-slate-600 text-sm">Vendor relationships simplified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
