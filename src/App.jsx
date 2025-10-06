import CommitChart from "./components/UI/CommitChart.jsx";
import LangChart from "./components/UI/LangChart.jsx";
import ReposOverview from "./components/UI/ReposOverview.jsx";
import TopRepos from "./components/UI/TopRepos.jsx";

function App() {
    return (
        <main className="flex flex-col justify-center items-center">
            <header>
                <h1 className="text-eggshell font-bold text-center text-5xl">
                    GitHubDash
                </h1>
                <p className="text-eggshell text-center">
                    GitHub activity dashboard
                </p>
            </header>

            <section>
                <article>
                    <ReposOverview />
                </article>

                <article className="flex flex-col justify-center items-center gap-6 md:flex-row md:items-center md:gap-16">
                    <LangChart />
                    <CommitChart />
                </article>

                <article>
                    <TopRepos />
                </article>
            </section>
        </main>
    );
}

export default App;
