import { RepositoryItemList } from "./RepositoryItemList";
import '../styles/repositories.scss';
import { useState, useEffect } from 'react'

interface Respository {
    name: string
    description: string;
    html_url: string
}

export function RepositoryList() {
    const [repositories, setrepositories] = useState<Respository[]>([]);
    console.log(repositories);

    useEffect(() => {

        fetch('https://api.github.com/users/menta2010/repos')
            .then(response => response.json())
            .then(banana => setrepositories(banana))

    }, [])



    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItemList key={repository.name} repository={repository} />
                })
                }


            </ul>

        </section>
    );

}