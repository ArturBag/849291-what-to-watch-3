import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../../components/card/card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const filmsList = [
  {
    title: `Breaking Bad`,
    genre: `Thriller`,
    issuedDate: 2000,
    preview: `../../markup/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Pirates`,
    genre: `Drama`,
    issuedDate: 1999,
    preview: `../../markup/img/bohemian-rhapsody.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Misfits`,
    genre: `Drama`,
    issuedDate: 1998,
    preview: `../../markup/img/macbeth.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Terminal`,
    genre: `Horror`,
    issuedDate: 1992,
    preview: `../../markup/img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Star Wars`,
    genre: `Documentary`,
    issuedDate: 2002,
    preview: `../../markup/img/we-need-to-talk-about-kevin.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Forsage`,
    genre: `Crime`,
    issuedDate: 2001,
    preview: `../../markup/img/what-we-do-in-the-shadows.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `Goal`,
    genre: `Comedy`,
    issuedDate: 2011,
    preview: `../../markup/img/orlando.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  },
  {
    title: `New Yorker`,
    genre: `History`,
    issuedDate: 2010,
    preview: `../../markup/img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  }
];


// it(`Returns active item`, () => {


// });

