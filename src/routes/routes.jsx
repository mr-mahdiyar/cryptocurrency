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
                path: "/cryptocurrencies",
                element: <CryptocurrenciesPage />
            },
            {
                path: "/cryptoDetails",
                element: <CryptoDetailsPage />
            },
            {
                path: "/exchanges",
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