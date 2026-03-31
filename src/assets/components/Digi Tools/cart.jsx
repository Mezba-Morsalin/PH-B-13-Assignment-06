import toast, { Toaster } from "react-hot-toast";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ selectCart, setSelectCart }) => {
    const total = selectCart.reduce((sum ,num) => sum + num.price, 0)
    const handleSelect = (selected) => {
        const filterSelected = selectCart.filter(filterSelect => filterSelect.name != selected.name)
        setSelectCart(filterSelected);
        toast.success(`${selected.name} has been removed from the cart`);
    }
    const handlePayment = () => {
    if (selectCart.length === 0) {
        toast.error("Please select a card first!");
        return;
    }

    setSelectCart([]);
    toast.success("Purchased Successful");
}
    return (
        <div className='space-y-5'>
            <Toaster></Toaster>
            <h2 className='font-bold text-4xl md:text-5xl text-center my-14'>Your Cart</h2>

            {selectCart.length === 0 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">No Tools Added Yet</h2>
                    <p className="text-gray-600">
                        You haven’t added any Digital Tools to your cart.<br />
                       Browse our collection and start boosting your productivity today!
                    </p>
                </div>
            ) : (
                selectCart.map((selected, index) => (
                    <div key={index} className="bg-gray-200 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center lg:text-left">
                        <img className="w-14" src={selected.image} alt={selected.image} />
                        <div className="flex-1 px-4 space-y-2.5">
                            <h3 className="font-bold text-2xl">{selected.name}</h3>
                            <p className="text-black/50">{selected.description}</p>
                             <p className= "font-bold text-xl">
                            ${selected.price}
                        </p>
                        </div>

                        <button onClick={() => handleSelect(selected)} className="text-red-500 ml-4 cursor-pointer">
                            <MdDeleteForever className="text-3xl" />
                        </button>
                    </div>
                    
                ))
            )}
            <div className="border border-gray-200 flex justify-between p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
            <div className="mt-5 text-center">
                <button onClick={()=> handlePayment()} className="btn mt-5 bg-linear-to-r from-violet-600 to-indigo-600 text-white text-2xl p-4  rounded-full">
            Proceed to Checkout <IoBagCheckOutline className=" text-2xl"></IoBagCheckOutline>
          </button>
            </div>
        </div>
    );
};

export default Cart;