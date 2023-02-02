import React from 'react';
import {Outlet} from "react-router-dom";

interface LayoutProps {
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <header>
                header
            </header>
            <aside>
                aside
            </aside>
            <main>
                <Outlet/>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
};

export default Layout;
