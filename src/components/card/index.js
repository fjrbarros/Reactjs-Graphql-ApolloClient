import './style.css';

export default function Card(props) {
    const { person } = props
    return (
        <div className='card'>
            <img src={person.image} alt='Avatar' style={{ width: '100%' }} />
            <div>
                <h4>
                    <b>{person.name}</b>
                </h4>
                <p>
                    <b>GENDER:</b> {person.gender}
                </p>
                <p>
                    <b>SPECIE:</b> {person.species}
                </p>
            </div>
        </div>
    );
}