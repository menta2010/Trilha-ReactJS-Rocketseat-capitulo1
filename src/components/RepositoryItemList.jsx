export function RepositoryItemList(props) {
    return (
        <li>
            <strong>{props.repository.name ?? "natalino"}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>link</a>
        </li>


    );
}