import { Link, Route, Routes } from "react-router-dom";


export default function AdminPage() {
    return(
         <div className="w-full h-full flex bg-purple-500">

            <div className="w-75 h-full bg-amber-50 flex flex-col">
                <Link to="/admin/"> Orders </Link>
                <Link to="/admin/products"> Products </Link>
                <Link to="/admin/users"> Users </Link>
            </div>


            <div className="w-[calc(100%-300px)] h-full bg-amber-300">
                <Routes>
                    <Route path="/" element={<h1>orders page</h1>}></Route>
                    <Route path="/products" element={<h1>products page</h1>}></Route>
                    <Route path="/users" element={<h1>users page</h1>}></Route>
                </Routes>


            </div>
        </div>

        
    )
}