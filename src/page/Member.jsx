import { useRef, useState } from "react"
import Anggota from "../komponen/Anggota"
import  "./Member.css"
import Button from "../komponen/Button";
import {MdClose} from 'react-icons/md'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'


export default function Member(){
const [mem,setMem] = useState([
  {
    id: 1,
    name: "MacBook Air 15”",
    image: "https://cdn.idntimes.com/content-images/community/2021/12/fromandroid-b4b774e60eff1b034babc409da459efd.jpg",
    price: 26999999,
    kategori:""
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
    kategori:""
  },
  {
    id: 3,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
    kategori:""
  },
  {
    id: 4,
    name: "Apple Vision Pro",
    image: "https://public.urbanasia.com/images/post/2022/05/07/1651899497-bang-yedam.jpg",
    price: 66999999,
    kategori:""
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
    kategori:""
  },
  
  {
    id: 6,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
    kategori:""
  },
  {
    id: 7,
    name: "MacBook Air 15”",
    image: "/macbook_air_15.jpg",
    price: 26999999,
    kategori:""
  },
  {
    id: 8,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
    kategori:""
  },

  {
    id: 9,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
    kategori:""
  },
  {
    id: 10,
    name: "Apple Vision Pro",
    image: "/apple_vision_pro.jpg",
    price: 66999999,
    kategori:""
  },
  {
    id: 11,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
    kategori:""
  },
  {
    id: 12,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
    kategori:""
  },
])

const [search,setSearch] = useState("");
const [min,setMin] = useState(0);
const [max,setMax] = useState(Infinity);
const [sortBy, setSortBy] = useState("id");
const [sortOrder,setSortOrder] = useState("asc");
const [add,setAdd] = useState("");
const nextId = useRef(mem.length+1);
const [no,setNo] = useState("");
const [tingg,setTing] = useState("");
const [pos,setPos] = useState("");
const [idSeq,setIdSeq] = useState(mem.length);
const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false);


const edit = () => {
    setMem(mem.map((m) => m.id == no ? {...m,name:namaEdit} : m))
}
const [namaEdit,setNamaEdit] = useState("");
const [editCard,setEditCard] = useState("");

// footer
const [page,setPage] = useState(1);




const filtered = mem
    .toSorted((a,b)=>{
        if(sortOrder === "asc"){
            return a[sortBy] < b[sortBy] ? -1 : 1;
        }else {
            return a[sortBy] > b[sortBy] ? -1 : 1;
        }
    })
    .filter((m) => m.name.toLocaleUpperCase().toLocaleLowerCase().includes(search)  && 
    m.price >= min && 
    m.price <= max)

    return(
    
        <>
        <label>
          Cari
        <input type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
        </label>

        <label>Harga Minimal
        <input type="number" 
            value={min}
            onChange={(e) => setMin(e.target.value)}
        />    
        </label>

<label>Harga Maksimal
        <input type="number" 
            value={max}
            onChange={(e) => setMax(e.target.value || Infinity)}
        />    
</label>
        <section>
            Urut
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="id">Normal</option>
                <option value="name">Nama</option>
                <option value="price">Harga</option>
                <option value="kategori">Kategori</option>
             
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </section>        
        <main>
        {filtered.length > 0
          ? filtered
              .filter((_m, i) => i >= 4 * page - 4 && i < 4 * page)
              .map((m) => (
                <>
                <Anggota
                  key={m.id}
                  {...m}
                  setEditCard={setEditCard} 
                />
                
        <button onClick={()=>
          confirm('Are you sure to farewell the member?') &&
          setMem(mem.filter((mm) => mm.id !== m.id))
                }>Apus</button>
                


                <button onClick={() => {
                      if (cart.find((p) => p.id === m.id)) {
                        setCart(
                          cart.map((p) =>
                            p.id === m.id
                              ? {
                                  ...p,
                                  count: p.count + 1,
                                }
                              : p
                          )
                        );
                      } else {
                        setCart([...cart, { ...m, count: 1 }]);
                      }
                    }}
                    title="Tambahkan ke keranjang">
                      Tambah Keranjang
                </button>

                   
                </>
              ))
          : "Tidak ada produk ditemukan."}
        </main>  
      <button onClick={()=>
                setAdd({
                    id: nextId,

                })}>Tambah Data</button>
              
              <button onClick={() => setIsCartOpen(true)}>
          Keranjang: {cart.reduce((a, p) => a + p.count, 0)}
        </button>               
             

        <footer>
        <Button
         onClick={() => setPage(page - 1)} disabled={page === 1}>
          Sebelumnya
        </Button>
        {filtered
          .filter((_m, i) => i % 4 === 0)
          .map((_m, i) => (
            <button
              key={i}
              className="page-number"
              onClick={() => setPage(i + 1)}
              disabled={i + 1 === page}
            >
              {i + 1}
            </button>
          ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(filtered.length / 4)}
        >
          Berikutnya
        </Button>
        </footer>

{add && (
  <form
    className="dialog"
    onSubmit={(e)=> {
    e.preventDefault();
      setMem([...mem,add]);
      nextId.current++
      setAdd();
      
    setAdd(undefined)
}}
 >
 <h2>ID</h2>
 <input type="number" value={nextId.current}/>
 <h2>Nama</h2>
 <input type="text" value={add.name} onChange={(e) => setAdd({...add, name : e.target.value})}/>
 <h2>Harga</h2>
 <input type="number" value={add.price} onChange={(e) => setAdd({...add, price : e.target.value})}/>
 <h2>Kategori</h2>
 <select name="" id="">
  <option value="">Handphone</option>
  <option value="">Komputer/PC/Laptop</option>
  <option value="">Earphone</option>
 </select>
 <Button
              type="reset"
              variant="tonal"
              onClick={() => setEditCard(undefined)}
            >
              Batal
            </Button>
            <Button >Save</Button>
</form> 
)
}
       

        {editCard && (
                    <form
                        className="dialog"
                        onSubmit={(e)=> {
                          e.preventDefault();
                            setMem(
                                mem.map((m) =>
                                m.id === editCard.id ? editCard:m
                                )
                            );
                            setEditCard(undefined)
                        }}>
                    <h1>Edit Produk</h1>
                    <h2>Nama</h2>
                    <input 
                        type="text" 
                        value={editCard.nama} 
                        onChange={(e) => setEditCard({...editCard,name:e.target.value})}
                        required
                        autoFocus
                    />
                    
                    <h2>Harga</h2>
                    <input type="number" value={editCard.tb} onChange={(e) => setEditCard({...editCard,price:e.target.value})}/>

                    <h2>Kategori</h2>
 <select name="" id="" value={editCard.kategori}>
  <option value="">Handphone</option>
  <option value="">Komputer/PC/Laptop</option>
  <option value="">Earphone</option>
 </select>
                    {/* <input type="text" value={editCard.posisi} onChange={(e) => setEditCard({...editCard,posisi:e.target.value})}/> */}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="reset"
              variant="tonal"
              onClick={() => setEditCard(undefined)}
            >
              Batal
            </Button>
            <Button >Save</Button>
          </div>
            </form>
        )}

{isCartOpen && (
  <>

        <div className="card dialog">
          <button onClick={() => setIsCartOpen(false)}>
            <MdClose />
          </button>
          <h1>Keranjang</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Jumlah</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.count.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (m.count > 1) {

                          setCart(
                            cart.map((p) =>
                              p.id === m.id
                                ? { ...p, count: p.count - 1 }
                                : p
                            )
                          );
                        } else {
                          setCart(cart.filter((p) => p.id !== m.id));
                        }
                      }}
                      title="Kurangi"
                    >
                      <AiOutlineMinusCircle />
                    </button>
                    <button
                      onClick={() => {
                        setCart(
                          cart.map((p) =>
                            p.id === m.id
                              ? { ...p, count: p.count + 1 }
                              : p
                          )
                        );
                      }}
                      title="Tambah"
                    >
                      <AiOutlinePlusCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total</h2>
        </div>
        
        </>
      )}

        </>
    )
}