export function CustomList({ array }) {
    const listitems = array.map(x =>
        <li key={x.id} style={{ color: x.isPlaced ? 'green' : 'red' }}>{x.text}</li>
    );

    return (
        <ul className="namesList">{listitems}</ul>
    );
}