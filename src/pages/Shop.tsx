import { useState } from "react";
import { ArrowLeft, Bell, User, ShoppingCart, ClipboardList, TrendingUp, Calculator, Package, Truck, CreditCard, CheckCircle2, MessageSquare, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  images: string[];
  buyCost: number;
  marketPrice: number;
  profit: number;
  tag: string;
  tagColor: string;
  socialProof: string;
  minQty: number;
}

const products: Product[] = [
  {
    id: 1, name: "Cotton Kurti Set (Set of 3)", images: ["🧵", "👗", "🎨"],
    buyCost: 320, marketPrice: 549, profit: 229,
    tag: "TRENDING IN DELHI", tagColor: "bg-red-500",
    socialProof: "32 dukandaar already le rahe hain", minQty: 10,
  },
  {
    id: 2, name: "Designer Party Wear", images: ["👗"],
    buyCost: 850, marketPrice: 1300, profit: 450,
    tag: "NEW ARRIVAL", tagColor: "bg-primary",
    socialProof: "18 dukandaar already le rahe hain", minQty: 10,
  },
  {
    id: 3, name: "Printed Saree Collection", images: ["🥻", "✨"],
    buyCost: 280, marketPrice: 499, profit: 219,
    tag: "BEST SELLER", tagColor: "bg-amber-600",
    socialProof: "56 dukandaar already le rahe hain", minQty: 10,
  },
  {
    id: 4, name: "Embroidered Dupatta Set", images: ["🧣"],
    buyCost: 150, marketPrice: 299, profit: 149,
    tag: "HOT DEAL", tagColor: "bg-orange-500",
    socialProof: "24 dukandaar already le rahe hain", minQty: 10,
  },
];

const categories = ["Ladies Wear", "FMCG", "Electronics", "Groceries", "Home Decor"];

type ChatStep = "browse" | "selectQty" | "confirmAddress" | "payment" | "confirmed";

interface ChatMessage {
  from: "bot" | "user";
  text: string;
  type?: "product" | "quantity" | "address" | "payment" | "confirmed" | "text";
  product?: Product;
  options?: string[];
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("Ladies Wear");
  const [chatStep, setChatStep] = useState<ChatStep>("browse");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedQty, setSelectedQty] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "bot", text: "Aapke area me ye products fast bik rahe hain 👇", type: "text" },
  ]);
  const [activeTab, setActiveTab] = useState("kharido");

  const addMessage = (msg: ChatMessage) => setMessages((prev) => [...prev, msg]);

  const handleAddProduct = (product: Product) => {
    setSelectedProduct(product);
    setChatStep("selectQty");
    addMessage({ from: "user", text: `Add: ${product.name}`, type: "text" });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: "Kitne pieces chahiye? 📦",
        type: "quantity",
        options: ["10", "20", "50", "Custom"],
      });
    }, 400);
  };

  const handleSelectQty = (qty: string) => {
    const q = parseInt(qty) || 10;
    setSelectedQty(q);
    setChatStep("confirmAddress");
    addMessage({ from: "user", text: `${qty} pieces`, type: "text" });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: `✅ ${qty} pcs of ${selectedProduct?.name}\n💰 Total: ₹${(selectedProduct?.buyCost || 0) * q}\n📍 Delivery address confirm karein:`,
        type: "address",
        options: ["Shop #12, Sadar Bazaar, Delhi", "New Address"],
      });
    }, 400);
  };

  const handleSelectAddress = (addr: string) => {
    setChatStep("payment");
    addMessage({ from: "user", text: addr, type: "text" });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: `🚚 Delivery: 2-3 din mein\n💳 Payment kaise karenge?`,
        type: "payment",
        options: ["COD (Cash on Delivery)", "UPI / Online", "Credit (7 din)"],
      });
    }, 400);
  };

  const handleSelectPayment = (method: string) => {
    setChatStep("confirmed");
    addMessage({ from: "user", text: method, type: "text" });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: `🎉 Order confirmed!\n\n📦 ${selectedQty} pcs - ${selectedProduct?.name}\n💰 Total: ₹${(selectedProduct?.buyCost || 0) * (selectedQty || 10)}\n📍 Delivery in 2-3 din\n💳 ${method}\n\nOrder track karne ke liye ORDERS tab dekho ✨`,
        type: "confirmed",
      });
    }, 400);
    setTimeout(() => {
      setChatStep("browse");
      setSelectedProduct(null);
      setSelectedQty(null);
    }, 1000);
  };

  const bottomTabs = [
    { id: "kharido", label: "KHARIDO", icon: ShoppingCart, active: true },
    { id: "orders", label: "ORDERS", icon: ClipboardList },
    { id: "profit", label: "PROFIT", icon: TrendingUp },
    { id: "hisaab", label: "HISAAB", icon: Calculator },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] flex flex-col max-w-md mx-auto relative shadow-2xl">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <span className="font-extrabold text-lg tracking-tight text-gray-900">LOCAMART</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm text-gray-500 font-medium">
          <button className="hover:text-gray-900 transition-colors">Orders</button>
          <button className="hover:text-gray-900 transition-colors">Inventory</button>
          <button className="hover:text-gray-900 transition-colors">Support</button>
        </nav>
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-gray-400" />
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </header>

      {/* Category Chips */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#6b6b2e] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chat + Products Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-28 space-y-4">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.from === "bot" ? (
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6b6b2e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-4 h-4 text-[#6b6b2e]" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="bg-[#f5f5e8] rounded-2xl rounded-tl-md px-4 py-3 text-sm text-gray-800 whitespace-pre-line max-w-[90%]">
                    {msg.text}
                  </div>

                  {/* Render product cards after the intro message */}
                  {i === 0 && (
                    <div className="grid grid-cols-1 gap-4 mt-2">
                      {products.filter((_, idx) => idx < 2).map((product) => (
                        <ProductCard key={product.id} product={product} onAdd={handleAddProduct} />
                      ))}
                    </div>
                  )}

                  {/* Quantity options */}
                  {msg.type === "quantity" && msg.options && chatStep === "selectQty" && (
                    <div className="flex flex-wrap gap-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectQty(opt)}
                          className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                            opt === "Custom"
                              ? "border-[#6b6b2e] text-[#6b6b2e] bg-[#6b6b2e]/5 hover:bg-[#6b6b2e]/10"
                              : "border-gray-200 text-gray-700 bg-white hover:border-[#6b6b2e] hover:text-[#6b6b2e]"
                          }`}
                        >
                          {opt === "Custom" ? `✨ ${opt}` : opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Address options */}
                  {msg.type === "address" && msg.options && chatStep === "confirmAddress" && (
                    <div className="space-y-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectAddress(opt)}
                          className="w-full text-left px-4 py-3 rounded-xl text-sm bg-white border-2 border-gray-200 hover:border-[#6b6b2e] transition-all flex items-center gap-2"
                        >
                          <span>📍</span> {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Payment options */}
                  {msg.type === "payment" && msg.options && chatStep === "payment" && (
                    <div className="space-y-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectPayment(opt)}
                          className="w-full text-left px-4 py-3 rounded-xl text-sm bg-white border-2 border-gray-200 hover:border-[#6b6b2e] transition-all flex items-center gap-2"
                        >
                          {opt.includes("COD") ? "💵" : opt.includes("UPI") ? "📱" : "🏦"} {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Confirmed */}
                  {msg.type === "confirmed" && (
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      Order successfully placed!
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-[#6b6b2e] text-white rounded-2xl rounded-tr-md px-4 py-3 text-sm max-w-[80%]">
                  {msg.text}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* More products after chat */}
        {messages.length > 1 && (
          <div className="pt-4 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#6b6b2e]/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-[#6b6b2e]" />
              </div>
              <div className="bg-[#f5f5e8] rounded-2xl rounded-tl-md px-4 py-3 text-sm text-gray-800">
                Aur bhi products dekhein? 👇
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {products.filter((_, idx) => idx >= 2).map((product) => (
                <ProductCard key={product.id} product={product} onAdd={handleAddProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 flex items-center justify-around py-2 z-50">
        {bottomTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all ${
              activeTab === tab.id
                ? "bg-[#e8e84e] text-gray-900 shadow-md -translate-y-1"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-wide">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const ProductCard = ({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    {/* Image placeholder */}
    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
      <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide`}>
        {product.tag}
      </span>
      <div className="flex gap-2 text-4xl">
        {product.images.map((img, i) => (
          <span key={i}>{img}</span>
        ))}
      </div>
    </div>

    <div className="p-4 space-y-3">
      <h3 className="font-semibold text-gray-900 text-base">{product.name}</h3>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1.5">💰 Buy Cost</span>
          <span className="font-bold text-gray-900">₹{product.buyCost}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1.5">🏷️ Market Price</span>
          <span className="font-medium text-gray-600">₹{product.marketPrice}</span>
        </div>
        <div className="flex items-center justify-between text-sm bg-green-50 rounded-lg px-3 py-2">
          <span className="text-green-700 flex items-center gap-1.5">📈 Your Profit</span>
          <span className="font-bold text-green-700">₹{product.profit}</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 flex items-center gap-1.5">
        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
        {product.socialProof}
      </p>

      <div className="flex gap-2">
        <Button
          onClick={() => onAdd(product)}
          className="flex-1 bg-[#6b6b2e] hover:bg-[#5a5a25] text-white rounded-xl h-11 text-sm font-semibold"
        >
          ✨ Add ({product.minQty} pcs)
        </Button>
        <Button variant="outline" className="rounded-xl h-11 text-sm border-gray-200 text-gray-600">
          👀 Details
        </Button>
      </div>
    </div>
  </div>
);

export default Shop;
