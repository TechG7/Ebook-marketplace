"use client";

import { useState } from "react";
import {
  Search, BookOpen, ShoppingCart, UserRound,
  Upload, ShieldCheck, ArrowRight, Menu, X
} from "lucide-react";

const books = [
  { id: 1, title: "The Business Mindset", author: "E-Book Hub", price: 149, category: "Business", color: "from-amber-700 to-yellow-950", icon: "💼" },
  { id: 2, title: "Learn Coding Easily", author: "Digital Creator", price: 99, category: "Technology", color: "from-blue-700 to-indigo-950", icon: "💻" },
  { id: 3, title: "The Power of Knowledge", author: "Book Studio", price: 129, category: "Education", color: "from-purple-700 to-fuchsia-950", icon: "📚" },
  { id: 4, title: "Personal Growth Guide", author: "E-Book Hub", price: 79, category: "Self Growth", color: "from-emerald-700 to-teal-950", icon: "🌱" },
  { id: 5, title: "Digital World", author: "Tech Creator", price: 119, category: "Technology", color: "from-cyan-700 to-blue-950", icon: "🌐" },
  { id: 6, title: "Success Starts Today", author: "Writer House", price: 89, category: "Business", color: "from-rose-700 to-red-950", icon: "✨" }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredBooks = books.filter(book =>
    (book.title + " " + book.author + " " + book.category)
      .toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || book.category === category)
  );

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight">
            <BookOpen className="text-[#d8b15a]" size={28} />
            <span>E-BOOK <span className="text-[#d8b15a]">HUB</span></span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <a href="#books" className="hover:text-[#d8b15a]">Explore Books</a>
            <a href="#how" className="hover:text-[#d8b15a]">How It Works</a>
            <a href="#sell" className="hover:text-[#d8b15a]">Sell E-Books</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => alert("Login system agle step mein banega.")} className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-[#d8b15a]">
              Login
            </button>
            <a href="#sell" className="rounded-xl bg-[#d8b15a] px-4 py-2 text-sm font-bold text-black hover:bg-[#e8c878]">
              Start Selling
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 text-sm md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#books">Explore Books</a>
            <a onClick={() => setMenuOpen(false)} href="#how">How It Works</a>
            <a onClick={() => setMenuOpen(false)} href="#sell">Sell E-Books</a>
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b15a]/30 bg-[#d8b15a]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#e7c779]">
              <BookOpen size={15} /> YOUR DIGITAL BOOKSTORE
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              Discover Ideas.<br />
              <span className="text-[#d8b15a]">Unlock Knowledge.</span>
            </h1>
            <p className="mt-6 max-w-lg leading-7 text-gray-400">
              Explore digital books, learn something new and share your knowledge with readers around the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#books" className="inline-flex items-center gap-2 rounded-xl bg-[#d8b15a] px-6 py-3 font-bold text-black hover:bg-[#e8c878]">
                Explore Books <ArrowRight size={18} />
              </a>
              <a href="#sell" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-[#d8b15a]">
                Become a Seller
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><p className="text-2xl font-bold text-[#d8b15a]">Digital</p><p className="mt-1 text-gray-500">Instant access*</p></div>
              <div><p className="text-2xl font-bold text-[#d8b15a]">Creators</p><p className="mt-1 text-gray-500">Support writers</p></div>
              <div><p className="text-2xl font-bold text-[#d8b15a]">Secure</p><p className="mt-1 text-gray-500">Designed for trust</p></div>
            </div>
            <p className="mt-3 text-xs text-gray-600">*Paid downloads activate after payment integration.</p>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 items-center gap-4">
            <div className="mt-10 rotate-[-7deg] rounded-2xl border border-white/10 bg-gradient-to-br from-amber-700 to-yellow-950 p-5 shadow-2xl">
              <span className="text-4xl">📖</span>
              <p className="mt-12 text-xs tracking-[0.2em] text-amber-200">THE ART OF</p>
              <p className="mt-2 text-2xl font-black">THINKING</p>
              <p className="mt-2 text-sm text-amber-100">A better way forward</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-700 to-purple-950 p-5 shadow-2xl">
              <span className="text-4xl">💡</span>
              <p className="mt-12 text-xs tracking-[0.2em] text-purple-200">LEARN & GROW</p>
              <p className="mt-2 text-2xl font-black">NEW IDEAS</p>
              <p className="mt-2 text-sm text-purple-100">Knowledge for everyone</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-[#d8b15a]/20 bg-[#151515] p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#d8b15a]/10 p-3"><ShieldCheck className="text-[#d8b15a]" /></div>
                <div><p className="font-semibold">A home for digital books</p><p className="mt-1 text-sm text-gray-500">Read, create and share knowledge.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b15a]">THE COLLECTION</p>
            <h2 className="mt-2 text-3xl font-black">Explore E-Books</h2>
            <p className="mt-2 text-gray-400">Find your next source of inspiration.</p>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2 rounded-xl border border-white/10 bg-[#141416] px-4 py-3 focus-within:border-[#d8b15a]">
            <Search size={18} className="text-gray-500" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search books..." className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600" />
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {["All", "Business", "Technology", "Education", "Self Growth"].map(cat => (
            <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full border px-4 py-2 text-sm transition ${category === cat ? "border-[#d8b15a] bg-[#d8b15a] text-black" : "border-white/10 text-gray-400 hover:border-[#d8b15a]"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {filteredBooks.map(book => (
            <article key={book.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121214] transition hover:-translate-y-1 hover:border-[#d8b15a]/60">
              <div className={`flex aspect-[3/4] flex-col justify-between bg-gradient-to-br ${book.color} p-4`}>
                <span className="text-3xl">{book.icon}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60">{book.category}</p>
                  <h3 className="mt-2 text-lg font-black leading-tight">{book.title}</h3>
                  <p className="mt-2 text-xs text-white/70">DIGITAL EDITION</p>
                </div>
              </div>
              <div className="p-3">
                <p className="truncate text-xs text-gray-500">{book.author}</p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="font-bold text-[#d8b15a]">₹{book.price}</span>
                  <button onClick={() => alert("Demo listing: real checkout abhi available nahi hai.")} className="rounded-lg border border-white/10 p-2 hover:border-[#d8b15a]" aria-label={`Buy ${book.title}`}>
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredBooks.length === 0 && <p className="mt-10 text-center text-gray-500">No books found. Try another search.</p>}
        <p className="mt-6 text-xs text-gray-600">Sample listings only. No real books or payments are included yet.</p>
      </section>

      <section id="how" className="border-y border-white/5 bg-[#101012]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b15a]">SIMPLE PROCESS</p>
            <h2 className="mt-2 text-3xl font-black">How It Works</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: <Search />, title: "Discover", text: "Browse the collection and find books that interest you." },
              { icon: <ShoppingCart />, title: "Purchase", text: "Secure checkout will be connected after payment setup." },
              { icon: <BookOpen />, title: "Read", text: "Access purchased PDFs when your order is verified." }
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#151517] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d8b15a]/10 text-[#d8b15a]">{item.icon}</div>
                <p className="mt-5 text-xs text-gray-600">0{i + 1}</p>
                <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sell" className="mx-auto max-w-7xl px-5 py-16">
        <div className="overflow-hidden rounded-3xl border border-[#d8b15a]/20 bg-gradient-to-br from-[#201b10] to-[#121214] p-7 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b15a]">FOR CREATORS</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Your Knowledge. Your E-Book.</h2>
              <p className="mt-4 leading-7 text-gray-400">Share your original work with readers. Seller accounts will require admin approval before publishing.</p>
              <button onClick={() => alert("Seller registration agle step mein banega.")} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#d8b15a] px-6 py-3 font-bold text-black hover:bg-[#e8c878]">
                <Upload size={18} /> Become a Seller
              </button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#d8b15a]/10 p-3"><UserRound className="text-[#d8b15a]" /></div>
                <div><p className="font-bold">Creator Dashboard</p><p className="text-sm text-gray-500">Your books and sales in one place.</p></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4"><p className="text-sm text-gray-500">Your listings</p><p className="mt-2 text-2xl font-black">—</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-sm text-gray-500">Your earnings</p><p className="mt-2 text-2xl font-black text-[#d8b15a]">₹—</p></div>
              </div>
              <p className="mt-4 text-xs text-gray-600">Dashboard data will be connected to the database later.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#080809]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-bold"><BookOpen className="text-[#d8b15a]" /> E-BOOK HUB</div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} E-Book Hub. Digital knowledge for everyone.</p>
          <div className="flex gap-4 text-sm text-gray-500"><a href="#books">Books</a><a href="#sell">Sell</a><a href="#how">Help</a></div>
        </div>
      </footer>
    </main>
  );
            }
                  
