import CommitChart from "./components/UI/CommitChart.jsx";
import LangChart from "./components/UI/LangChart.jsx";
import ReposOverview from "./components/UI/ReposOverview.jsx";
import TopRepos from "./components/UI/TopRepos.jsx";

function App() {
    return (
        <main>
            <header className="flex flex-col items-center">
                <h1 className="text-red-700 font-bold text-center text-xl">
                    GitHubDash
                </h1>
                <p>GitHub activity dashboard</p>
            </header>

            <div className="grid grid-cols-1 gap-8 content-center md:grid-cols-3 md:gap-28">
                <div className="flex justify-center col-span-full md:col-span-full">
                    <ReposOverview />
                </div>

                <div className="flex justify-center col-span-full md:row-start-2 md:col-start-1 md:col-end-3">
                    <LangChart />
                </div>
                <div className="flex justify-center col-span-full md:row-start-2 md:col-start-2 md:col-end-4">
                    <CommitChart />
                </div>

                <div className="flex justify-center col-span-full md:col-span-full">
                    <TopRepos />
                </div>
            </div>

            <footer></footer>
        </main>
    );
}

export default App;
