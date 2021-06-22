import { useState } from 'react'

import Header from '../Header'
import Tournaments from './Tournaments'
import AddTournament from './AddTournament'

const TournamentPage = () => {
    const [showAddTournament, setShowAddTournament] = useState(false)
    const [tournaments, setTournaments] = useState([
      {
          id: 1,
          title: 'LoL tournament',
          date: 'June 6th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          title: 'Chess tournament',
          date: 'June 7th at 1:00pm',
          reminder: true,
      },
      {
          id: 3,
          title: 'TFT tournament',
          date: 'June 1st at 5:00 pm',
          reminder: false,
      },
    ])
  
    // Add Tournament
    const addTournament = (tournament) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTournament = { id, ...tournament}
      setTournaments([...tournaments, newTournament])
  
    }
  
    // Delete Tournament
    const deleteTournament = (id) => {
      setTournaments(tournaments.filter((tournament) => tournament.id !== id))
    }
  
    // Toggle Reminder
    const toggleReminder = (id) => {
      setTournaments(tournaments.map(
        (tournament) => tournament.id === id ?
          { ...tournament, reminder: !tournament.reminder} :
          tournament))
    }
  
    return (
        <>
            <Header title='Tournaments'
              onAdd={() => setShowAddTournament(!showAddTournament)} showAdd={showAddTournament}/>
            {showAddTournament && <AddTournament onAdd={addTournament}/>}
            {tournaments.length > 0 ? <Tournaments tournaments={tournaments}
              onToggle={toggleReminder}
              onDelete={deleteTournament}/> : 'No tournaments to show'}
        </>
    )
}

export default TournamentPage
