import { RepositoryItemList } from "./RepositoryItemList";

const repository = {
    name: "unfold",
    description: "forms in react",
    link: "https://www.facebook.com/"

};

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItemList repository={repository} />
                <RepositoryItemList repository={repository} />
                <RepositoryItemList repository={repository} />
                <RepositoryItemList repository={repository} />

            </ul>

        </section>
    );

}