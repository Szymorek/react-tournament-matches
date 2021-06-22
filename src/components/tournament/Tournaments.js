import Tournament from './Tournament'

const Tournaments = ({ tournaments, onDelete, onToggle }) => {
    return (
        <div className='tournament'>
            {tournaments.map((tournament) => (
                <Tournament key={tournament.id} tournament={tournament}
                onToggle={onToggle} 
                onDelete={onDelete}/>)
            )}   
        </div>
    )
}

export default Tournaments
