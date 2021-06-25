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


const TournamentBracket = ( {matches, participants} ) => {
  console.log(matches)
  console.log(matches?.[2]?.firstParticipant?.username)
  console.log(matches?.[2]?.secondParticipant?.username)
  if (participants === 4) {
    roundsOf4[0].seeds[0].teams[0].name = matches?.[0]?.firstParticipant?.username
    roundsOf4[0].seeds[0].teams[1].name = matches?.[0]?.secondParticipant?.username
    roundsOf4[0].seeds[1].teams[0].name = matches?.[1]?.firstParticipant?.username
    roundsOf4[0].seeds[1].teams[1].name = matches?.[1]?.secondParticipant?.username
    roundsOf4[1].seeds[0].teams[0].name = matches?.[2]?.firstParticipant?.username
    roundsOf4[1].seeds[0].teams[1].name = matches?.[2]?.secondParticipant?.username
    return <Bracket rounds={roundsOf4}/>;
  } else if (participants === 8) {
    // Round one
    roundsOf8[0].seeds[0].teams[0].name = matches?.[0]?.firstParticipant?.username
    roundsOf8[0].seeds[0].teams[1].name = matches?.[0]?.secondParticipant?.username
    roundsOf8[0].seeds[1].teams[0].name = matches?.[1]?.firstParticipant?.username
    roundsOf8[0].seeds[1].teams[1].name = matches?.[1]?.secondParticipant?.username
    roundsOf8[0].seeds[2].teams[0].name = matches?.[2]?.firstParticipant?.username
    roundsOf8[0].seeds[2].teams[1].name = matches?.[2]?.secondParticipant?.username
    roundsOf8[0].seeds[3].teams[0].name = matches?.[3]?.firstParticipant?.username
    roundsOf8[0].seeds[3].teams[1].name = matches?.[3]?.secondParticipant?.username

    // Round two
    roundsOf8[1].seeds[0].teams[0].name = matches?.[4]?.firstParticipant?.username
    roundsOf8[1].seeds[0].teams[1].name = matches?.[4]?.secondParticipant?.username
    roundsOf8[1].seeds[1].teams[0].name = matches?.[5]?.firstParticipant?.username
    roundsOf8[1].seeds[1].teams[1].name = matches?.[5]?.secondParticipant?.username

    // Round three
    roundsOf8[2].seeds[0].teams[0].name = matches?.[6]?.firstParticipant?.username
    roundsOf8[2].seeds[0].teams[1].name = matches?.[6]?.secondParticipant?.username
    return <Bracket rounds={roundsOf8}/>;
  }

  return <></>;
};

export default TournamentBracket