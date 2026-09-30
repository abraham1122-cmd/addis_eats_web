




import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout({search, onSearch, onCartClick}){
    return(
     <>
      <Header 
      
       search={search}
        onSearch={onSearch}
        onCartClick={onCartClick}
      
      />
        <main>
            <Outlet />
        </main>
    

    <Footer />
    </>
    )

}


export default Layout;