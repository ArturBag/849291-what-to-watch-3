const filmsList = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Crime`,
    issuedDate: 2010,
    ratingCount: 235,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 8.9,
    director: `Bernard Harding`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Bohemian Rhapsody`,
    genre: `Romance`,
    issuedDate: 2014,
    ratingCount: 100,
    preview: `img/bohemian-rhapsody.jpg`,
    description: `Donec non nunc ipsum. Praesent volutpat nulla ac odio tempus efficitur.
    Cras a magna ut arcu feugiat mollis id sit amet augue.
    Integer quis semper justo. Aliquam nulla orci, tincidunt a eros non, ultrices ullamcorper mi.
    Proin mollis justo imperdiet arcu lobortis, ac dictum risus condimentum`,
    rating: 3.1,
    director: `Macie Mcmillan`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Macbeth`,
    genre: `Documentary`,
    issuedDate: 2008,
    ratingCount: 50,
    preview: `img/macbeth.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 1.5,
    director: `Lara Sweeney`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Aviator`,
    genre: `Drama`,
    issuedDate: 2009,
    ratingCount: 120,
    preview: `img/aviator.jpg`,
    description: `Etiam suscipit dictum metus. Proin ut urna nec enim fringilla lobortis.
    Mauris sodales, nunc vel egestas sagittis, nunc urna efficitur neque,
    eu finibus turpis velit feugiat sem. Integer magna risus, porta sit amet leo id,
    egestas bibendum magna.Donec id purus a sem auctor accumsan eu nec leo.`,
    rating: 1.9,
    director: `Heath Brandt`,
    starring: [`Edward Norton, Marley Arellano, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `We need to talk about Kevin`,
    genre: `Kids & Family`,
    issuedDate: 2012,
    ratingCount: 200,
    preview: `img/we-need-to-talk-about-kevin.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.5,
    director: `Kyra Hurst`,
    starring: [`Edward Norton, Marley Arellano, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `What We Do in the Shadows`,
    genre: `Thriller`,
    issuedDate: 2003,
    ratingCount: 223,
    preview: `img/what-we-do-in-the-shadows.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 5.0,
    director: `Mylee Terry`,
    starring: [`Richard Howe, Cedric Douglas, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Orlando`,
    genre: `Kids & Family`,
    issuedDate: 2018,
    ratingCount: 455,
    preview: `img/orlando.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 8.4,
    director: `Karly Mays`,
    starring: [`Will Pierce, Richard Howe, Cedric Douglas, Dario Archer`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `War of the Worlds`,
    genre: `Sci-Fi`,
    issuedDate: 2020,
    ratingCount: 320,
    preview: `img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.8,
    director: `Janessa Sims`,
    starring: [`Charlie Brewer, Edward Norton, Marley Arellano, Zion Fitzpatrick`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

export default filmsList;
