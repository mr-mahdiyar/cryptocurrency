import { createBrowserRouter } from "react-router-dom";
import { CryptocurrenciesPage, CryptoDetailsPage, HomePage, ExchangesPage, App, News } from "..";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/cryptocurrenciesPage",
                element: <CryptocurrenciesPage />
            },
            {
                path: "/cryptoDetailsPage",
                element: <CryptoDetailsPage />
            },
            {
                path: "/exchangesPage",
                element: <ExchangesPage />
            },
            {
                path: "/news",
                element: <News />
            },
        ]
    }
])
export default routes;