import './styles/global.css';
import './lib/dayjs';

import SummaryTable from './components/SummaryTable';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-background text-white">
            <div className="w-full max-w-5xl px-6 flex flex-col gap-16 items-center">
                <Header />
                <SummaryTable />
                <Footer />
            </div>
        </div>
    );
};

export default App;
