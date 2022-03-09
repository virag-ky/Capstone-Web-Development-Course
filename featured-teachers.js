const teachersSection = document.querySelector('#featured-teachers');

const teachersObject = [
  {
    name: 'Bob Miller',
    quote: 'JavaScript teacher at Udemy',
    paragraph:
      'He is teaching JavaScript in the past 10 years, and started to teach on Udemy since 2020.',
  },

  {
    name: 'Nancy Hughes',
    quote: 'Web Designer, teaching from New York',
    paragraph: 'You can find some of her designs on Figma.',
  },

  {
    name: 'Emily Brown',
    quote: 'A CSS expert, from Michigan',
    paragraph:
      'She is preparing our students from zero experience into advanced level in CSS.',
  },

  {
    name: 'John Benkler',
    quote: 'Teaching full stack web development on Udemy',
    paragraph:
      'He is in this field in the past 15 years, he can give you all the knowledge you need.',
  },

  {
    name: 'Steven Wright',
    quote: 'Command line expert',
    paragraph:
      'He is using the command line on a daily basis, he knows all the tricks you need to have.',
  },

  {
    name: 'Andrew Brown',
    quote: 'Frontend developer',
    paragraph:
      "He started his journey at Google, now he's teaching new comers here at our platform.",
  },
];

function createTeachers() {
  const teachersContainer = document.createElement('div');
  teachersContainer.setAttribute('id', 'teachers-container');

  for (let i = 1; i <= teachersObject.length; i += 1) {
    const teachersDiv = document.createElement('div');
    teachersDiv.setAttribute('class', 'teachers');

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('class', 'profile-container');

    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', `img-div${i}`);

    const teacherInfo = document.createElement('div');
    teacherInfo.setAttribute('class', 'teacher-info');

    const teacherName = document.createElement('h3');
    teacherName.innerText = teachersObject[i - 1].name;

    const quote = document.createElement('blockquote');
    quote.innerText = `${teachersObject[i - 1].quote}`;

    const greyLine = document.createElement('div');
    greyLine.setAttribute('class', 'grey-line');

    const teacherParagraph = document.createElement('p');
    teacherParagraph.innerText = `${teachersObject[i - 1].paragraph}`;

    teacherInfo.appendChild(teacherName);
    teacherInfo.appendChild(quote);
    teacherInfo.appendChild(greyLine);
    teacherInfo.appendChild(teacherParagraph);

    profileContainer.appendChild(imageDiv);

    teachersDiv.appendChild(profileContainer);
    teachersDiv.appendChild(teacherInfo);

    teachersContainer.appendChild(teachersDiv);
  }
  teachersSection.appendChild(teachersContainer);
}

createTeachers();
