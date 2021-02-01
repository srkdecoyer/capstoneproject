export function MoviesData() {
  return [
    { title: 'Yoga for Kids', rank: '1', id: '961d6e4f-7a27-47cd-b921-3d53041cb8fc' },
    { title: 'Kids Movement Class', rank: '1', id: '81b406f7-4934-4117-b83d-818f777be5db' },
    { title: 'Online Social Group', rank: '1', id: '87d2b940-a7d7-4b2b-95e3-13d8898aa960' },
    { title: 'Acro Yoga for Kids', rank: '1', id: '35c9ef8a-4321-4490-b6b8-454692516b04' },
    { title: 'Social Group for Kids', rank: '1', id: 'a94734eb-505b-41e6-b5a3-a99a538c7540' },
    { title: 'Online Music Classes', rank: '1', id: '75fb8f9a-1b63-4dda-8ced-f1872c48ca65' },
    { title: 'Fairy Tale Story Telling', rank: '1', id: '1e1a9206-12f1-4ad3-9d23-5c6c51332b8a' },
    { title: 'Book Reading Session', rank: '1', id: '1a9367aa-0ca2-4bc5-9f50-53d40ca02767' },
    { title: 'Happy Dreamer', rank: '1', id: 'tt0111161' },
    { title: "Ben's Adventures:A Day At The Beach", rank: '2', id: 'tt0068646' },
    { title: 'Can I Play Too ?', rank: '3', id: 'tt0071562' },
    { title: 'My Brother Charlie', rank: '4', id: 'tt0110912' },
    { title: 'Just Because', rank: '5', id: 'tt0060196' },
    { title: 'My Friend Isabelle', rank: '6', id: 'tt0468569' },
    { title: 'Junkyard Wonders', rank: '7', id: 'tt0050083' },
    { title: 'Melvin Goes to the Dentist', rank: '8', id: 'tt0108052' },
    { title: 'Wonder', rank: '9', id: 'tt0167260' },
    { title: 'Don’t Call Me Special', rank: '10', id: 'tt0137523' },
  ];
}

export function renderMovieTitle(state, val) {
  return state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}
