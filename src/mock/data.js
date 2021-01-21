import { nanoid } from 'nanoid';
import { Container, Row, Col } from "react-bootstrap";
import newShirt from "../video/new-shirt.mp4";
import cleaningRG from "../video/cleaning-rg.mp4";
import ourCalling from "../video/our-calling.mp4";
import justSmile from "../video/just-smile.mp4";
import cookieVideo from "../video/Cookie-Video.mp4";


// HEAD DATA
export const headData = {
  title: 'Ryan Parish | Instructional Design Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ryan Parish.',
  subtitle: "I'm a Senior Instructional Designer and Learning Strategist.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hey there! I'm Ryan. I have been designing and developing Digital Learning Experiences for over 10 years.",
  paragraphTwo: "I approach each project holistically-- asking whether the problem at hand is best addressed through a learning intervention, process change, or by getting people in a room to hash things out.",
  paragraphThree: "I believe that everyone has the potential for greatness, but that potential is often limited by fear, an attempt to hide weaknesses, and being unwilling to ask for help.",
  paragraphFour: "I understand how to remove those barriers-- empowering teams to live up to their true potential.",
  resume: 'https://resume.io/r/VLu9fOOQd',
}; 

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'new-shirt.png',
    title: 'New Shirt',
    info: "This project was a ton of fun! We were asked to present MAPCO's HR Initiatives to its international sister companies in a best practices meeting in Santiago, Chile.",
    info2: 'I had 5 days to create a concept, shoot, and edit a video for an international audience that could highlight these initiatives without needing to be translated into multiple languages. This is the result.',
    url: newShirt,
  //   repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'our-calling.png',
    title: "Our Calling",
    info: 'When the COVID-19 pandemic began to take hold of the US in March 2020, MAPCO sprung into action-- implementing a variety of health and safety measures in stores, and expanded health and welfare benefits to team members. My task was to succinctly convey how MAPCO had risen to the occasion of the crisis.',
    info2: ' Since non-retail personnel were not allowed into the stores when this video was created, I turned to animation (instead of our typical video-based approach) to convey this message. This is the English version, but I also produced a version in Spanish. ',
    url: ourCalling,
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'the-argument.png',
    title: 'The Argument',
    info: 'This project is an oldie, but a goodie! Back in my Inception Labs days, I wanted to expiriment with the idea of branching video courses laid out like a Choose-Your-Own-Adventure game.',
    info2: 'It was around Christmas, so we ran with the decoration idea. There really was not a clear objective with this project other than to see what was possible with hotspots, branching, and video, but I can trace back my approach for dozens of subsequent projects to this little expiriment.',
    url: 'https://priceless-heisenberg-657dbd.netlify.app/story.html',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RG-activity.png',
    title: "Rockin' Out the Roller Grill",
    info: 'When MAPCO decided to launch a Roller Grill program at each of its ~350 locations, we knew we needed to build an interactive and lighthearted course to support the initiative.',
    info2: 'In this section, learners were provided a video demonstration of how to start up the grill and get product ready for the guests-- followed with an interactive activity to check their understanding. ',
    url: 'https://goofy-villani-529cbb.netlify.app/story.html',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Thawing-Product.png',
    title: 'Thawing Product',
    info: "Also taken from the Rockin' Out the Roller Grill course, this section taught learners how to properly thaw and store product to ensure that there was enough to meet guest demand.",
    info2: 'As was the format used throughout the rest of the course, the section combined video demonstrations with interactive activities to ensure retention. In addition to using the videos in the course itself, these were also added as performance support materials in our online Operations Manual. ',
    url: 'https://sad-bhabha-e771b2.netlify.app/story.html',
    // repo: '', // if no repo, the button will not show up
  },
{
  id: nanoid(),
  img: 'GS-Cookies.png',
  title: '2020 Girl Scout Cookie Promotional Video',
  info: "Okay, this one is just for cuteness points. My daughter, Maggie, is a proud member of the Girl Scouts, and wanted to go big this year by producing a promotional video to post online.",
  info2: 'We worked together to put together a short script, which we filmed in our living room. #ThinMints4Ever',
  url: cookieVideo,
  // repo: '', // if no repo, the button will not show up
},

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ryan@ryanparish.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryanparish/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
