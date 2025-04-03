import CommitChart from "./components/UI/CommitChart.jsx";
import LangChart from "./components/UI/LangChart.jsx";
import ReposOverview from "./components/UI/ReposOverview.jsx";
import TopRepos from "./components/UI/TopRepos.jsx";

function App() {
    return (
        <main className="container mx-auto">
            <header className="flex flex-col items-center">
                <h1 className="text-eggshell font-bold text-center text-5xl">
                    GitHubDash
                </h1>
                <p className="text-eggshell">GitHub activity dashboard</p>
            </header>

            <section className="grid grid-cols-1 gap-y-20 content-center md:grid-cols-3 md:gap-y-64">
                <article className="flex justify-center col-span-full">
                    <ReposOverview />
                </article>

                <article className="flex justify-center col-span-full md:row-start-2 md:col-start-1 md:col-end-3">
                    <LangChart />
                </article>
                <article className="flex justify-center col-span-full md:row-start-2 md:col-start-2 md:col-end-4">
                    <CommitChart />
                </article>

                <article className="flex justify-center col-span-full">
                    <TopRepos />
                </article>
            </section>
        </main>
    );
}

export default App;
