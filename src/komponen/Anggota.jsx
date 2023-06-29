import "./Anggota.css"
import Button from "./Button"


export default function Anggota({id,image,name,price, kategori, setEditCard}){
    return(
        <div className="cont">
        <div className="card">
            <img src={image} alt={name} />
            <div>{name}</div>
            <div>{price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}</div>
            <div>Kategori : {kategori}</div>
            <Button
                variant="tonal"
                onClick={()=>
                setEditCard({
                    id,
                    image,
                    name,
                    price,
                    kategori,
                })}>
                    Edit
                </Button>
                <Button>Beli</Button>
                

        </div>

        </div>
    )
}