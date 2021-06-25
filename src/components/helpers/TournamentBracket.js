import { Bracket } from 'react-brackets';

//  seeds: date opcjonalna

const roundsOf8 = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        teams: [{ name: '' }, { name: '' }],
      },
      {
        id: 2,
        teams: [{ name: '' }, { name: '' }],
      },
      {
        id: 3,
        teams: [{ name: '' }, { name: '' }],
      },
      {
        id: 4,
        teams: [{ name: '' }, { name: '' }],
      },
    ],
  },

  {
    title: 'Round two',
    seeds: [
      {
        id: 1,
        teams: [{ name: '' }, { name: '' }],
      },
      {
        id: 2,
        teams: [{ name: '' }, { name: '' }],
      },
    ],
  },

  
  {
    title: 'Round three',
    seeds: [
      {
        id: 3,
        teams: [{ name: '' }, { name: '' }],
      },
    ],
  },
];

const roundsOf4 = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        teams: [{ name: '' }, { name: '' }],
      },
      {
        id: 2,
        teams: [{ name: '' }, { name: '' }],
      },
    ],
  },

  {
    title: 'Round two',
    seeds: [
      {
        id: 1,
        teams: [{ name: '' }, { name: '' }],
      }
    ],
  },
];


const TournamentBracket = ( {matches} ) => {
  if (matches.length === 14) {
    roundsOf4[0].seeds[0].teams[0].name = readyMatches[0]?.firstParticipant?.username
    roundsOf4[0].seeds[0].teams[1].name = readyMatches[0]?.secondParticipant?.username
    roundsOf4[0].seeds[1].teams[0].name = readyMatches[1]?.firstParticipant?.username
    roundsOf4[0].seeds[1].teams[1].name = readyMatches[1]?.secondParticipant?.username
    roundsOf4[1].seeds[0].teams[0].name = readyMatches[2]?.firstParticipant?.username
    roundsOf4[1].seeds[0].teams[1].name = readyMatches[2]?.secondParticipant?.username
  } else if (matches.length === 14) {
    // Round one
    roundsOf4[0].seeds[0].teams[0].name = readyMatches[0]?.firstParticipant?.username
    roundsOf4[0].seeds[0].teams[1].name = readyMatches[0]?.secondParticipant?.username
    roundsOf4[0].seeds[1].teams[0].name = readyMatches[1]?.firstParticipant?.username
    roundsOf4[0].seeds[1].teams[1].name = readyMatches[1]?.secondParticipant?.username
    roundsOf4[0].seeds[2].teams[0].name = readyMatches[2]?.firstParticipant?.username
    roundsOf4[0].seeds[2].teams[1].name = readyMatches[2]?.secondParticipant?.username
    roundsOf4[0].seeds[3].teams[0].name = readyMatches[3]?.firstParticipant?.username
    roundsOf4[0].seeds[3].teams[1].name = readyMatches[3]?.secondParticipant?.username

    // Round two
    roundsOf4[1].seeds[0].teams[0].name = readyMatches[4]?.firstParticipant?.username
    roundsOf4[1].seeds[0].teams[1].name = readyMatches[4]?.secondParticipant?.username
    roundsOf4[1].seeds[1].teams[0].name = readyMatches[5]?.firstParticipant?.username
    roundsOf4[1].seeds[1].teams[1].name = readyMatches[5]?.secondParticipant?.username

    // Round three
    roundsOf4[2].seeds[0].teams[0].name = readyMatches[6]?.firstParticipant?.username
    roundsOf4[2].seeds[0].teams[1].name = readyMatches[6]?.secondParticipant?.username
  }

  if (matches === 'undefined' || matches.length === 0 || !matches[0].firstParticipant) {
    return <Bracket rounds={roundsOf4}/>
  }
  var readyMatches = matches.filter(function (firstParticipant) {
    return firstParticipant !== 'undefined'
  } )
  console.log(readyMatches)

  roundsOf4[0].seeds[0].teams[0].name = readyMatches[0]?.firstParticipant?.username
  roundsOf4[0].seeds[0].teams[1].name = readyMatches[0]?.secondParticipant?.username
  roundsOf4[0].seeds[1].teams[0].name = readyMatches[1]?.firstParticipant?.username
  roundsOf4[0].seeds[1].teams[1].name = readyMatches[1]?.secondParticipant?.username

  // rounds[0].seeds[2].teams[0].name = matches[0].firstParticipant.username
  // rounds[0].seeds[2].teams[1].name = matches[0].secondParticipant.username
  // rounds[0].seeds[3].teams[0].name = matches[0].firstParticipant.username
  // rounds[0].seeds[3].teams[1].name = matches[0].secondParticipant.username
  return <Bracket rounds={roundsOf4}/>;
};

export default TournamentBracket