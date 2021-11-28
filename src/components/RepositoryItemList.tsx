interface RepositoryItemListProps {

    repository: {
        name: string;
        description: string;
        html_url: string

    }
}


export function RepositoryItemList(props: RepositoryItemListProps) {
    return (
        <li>
            <strong>{props.repository.name ?? "natalino"}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositorio</a>
        </li>


    );
}