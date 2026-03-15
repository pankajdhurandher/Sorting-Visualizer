import Footer from "./components/Footer";
import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    return (
        <SortingProvider>
            <div className="flex flex-col min-h-screen bg-[#0b0b0b] font-sans text-[#ecf0f1]">
                <main className="flex-1 w-full py-[60px]">
                    <SortingChart />
                </main>

                <Footer />
            </div>
        </SortingProvider>
    );
}

export default App;
