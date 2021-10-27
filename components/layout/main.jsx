import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const Layout = ({ children }) => {
    return(
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}