import {reducer, ActionType} from "./reducer.js";

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
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tom Wilkinson`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: {hours: 1, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    issuedDate: 2014,
    ratingCount: 100,
    preview: `img/bohemian-rhapsody.jpg`,
    description: `Donec non nunc ipsum. Praesent volutpat nulla ac odio tempus efficitur.
    Cras a magna ut arcu feugiat mollis id sit amet augue.
    Integer quis semper justo. Aliquam nulla orci, tincidunt a eros non, ultrices ullamcorper mi.
    Proin mollis justo imperdiet arcu lobortis, ac dictum risus condimentum`,
    rating: 3.1,
    director: `Macie Mcmillan`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`, `Ralph Fiennes`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 2, minutes: 22},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Macbeth`,
    genre: `Drama`,
    issuedDate: 2008,
    ratingCount: 50,
    preview: `img/macbeth.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 1.5,
    director: `Lara Sweeney`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: {hours: 1, minutes: 11},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
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
    starring: [`Edward Norton`, `Marley Arellano`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`, `Jude Law`, `Willem Dafoe`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 2, minutes: 45},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
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
    starring: [`Edward Norton`, `Marley Arellano`, `Jude Law`, `Willem Dafoe`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: {hours: 1, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `What We Do in the Shadows`,
    genre: `Kids & Family`,
    issuedDate: 2003,
    ratingCount: 223,
    preview: `img/what-we-do-in-the-shadows.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 5.0,
    director: `Mylee Terry`,
    starring: [`Richard Howe`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`, `Cedric Douglas`, `Jude Law`, `Willem Dafoe`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 1, minutes: 32},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Orlando`,
    genre: `Comedy`,
    issuedDate: 2018,
    ratingCount: 455,
    preview: `img/orlando.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 8.4,
    director: `Karly Mays`,
    starring: [`Will Pierce`, `Richard Howe`, `Cedric Douglas`, `Dario Archer`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: {hours: 3, minutes: 11},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `War of the Worlds`,
    genre: `Crime`,
    issuedDate: 2020,
    ratingCount: 320,
    preview: `img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.8,
    director: `Janessa Sims`,
    starring: [`Charlie Brewer`, `Edward Norton`, `Marley Arellano`, `Zion Fitzpatrick`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 3, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
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
    starring: [`Charlie Brewer`, `Edward Norton`, `Marley Arellano`, `Zion Fitzpatrick`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 3, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Romance TEST title`,
    genre: `Romance`,
    issuedDate: 2020,
    ratingCount: 320,
    preview: `img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.8,
    director: `Janessa Sims`,
    starring: [`Charlie Brewer`, `Edward Norton`, `Marley Arellano`, `Zion Fitzpatrick`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 3, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Thriller TEST title`,
    genre: `Thriller`,
    issuedDate: 2020,
    ratingCount: 320,
    preview: `img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.8,
    director: `Janessa Sims`,
    starring: [`Charlie Brewer`, `Edward Norton`, `Marley Arellano`, `Zion Fitzpatrick`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 3, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  },
  {
    title: `Horror TEST title`,
    genre: `Horror`,
    issuedDate: 2020,
    ratingCount: 320,
    preview: `img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.8,
    director: `Janessa Sims`,
    starring: [`Charlie Brewer`, `Edward Norton`, `Marley Arellano`, `Zion Fitzpatrick`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Jeff Goldblum`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: {hours: 3, minutes: 39},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 8.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.0
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 7.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 7.0
      },
    ]
  }
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  });
});

it(`Reducer should increment current activeMovieDetailsIndex by a given value
and switch activeComponent to MovieDetails`, () => {
  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
    activeComponent: `MovieDetails`,
    activeMovieDetailsIndex: 1,
  })).toEqual({
    activeComponent: `MovieDetails`,
    activeMovieDetailsIndex: 1,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  });

  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  });
});

it(`Reducer should return filtered filmsList by a chosen filter
and switch activeGenre to chosen genre`, () => {
  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_GENRE_TYPE_CLICK,
    activeGenre: `Comedy`,
    moviesList: filmsList
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `Comedy`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  });

  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_GENRE_TYPE_CLICK,
    activeGenre: `All genres`,
    moviesList: filmsList
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  });
});

it(`Reducer should add movies quantity to already displayed movies by clicking on show more button
and adding added movies quantity to  moviesQtyToShow state `, () => {
  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_SHOW_MORE_BUTTON_CLICK,
    moviesQtyToShow: 16
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    activeGenre: `All genres`,
    moviesList: filmsList,
    moviesQtyToShow: 16
  });

});

