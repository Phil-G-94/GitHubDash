import CommitChart from "./components/UI/CommitChart.jsx";
import LangChart from "./components/UI/LangChart.jsx";
import ReposOverview from "./components/UI/ReposOverview.jsx";
import TopRepos from "./components/UI/TopRepos.jsx";

function App() {
    return (
        <main>
            <h1 className="text-red-500 text-center">GitHubDash</h1>

            <ReposOverview />

            <LangChart />

            <CommitChart />

            <TopRepos />
        </main>
    );
}

export default App;
