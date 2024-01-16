export let data = [
  {
  question_id: '659ef624b1f8b07d4648b6e2',  // will be exam_question_id probably
    type: 'multiple_choice:select_one',     // the question type
  scoring: {
  client_scored: true,                // whether the client scores the question
    provide_feedback: true,             // whether the client provides feedback
  },
  data: {
    // the stem is the question that is asked. It can contain
    // multiple items.
    stem: {
      title: 'What is the capital of France?',
        content: [
        { text: 'What is the current capital of France?' },
      ],
    },

    alternatives: [
      {
        id: '659ef624b1f8b07d4648b6e3',
        answer: 'Paris',
        correct: true,
        points: 1
      },
      {
        id: '659ef624b1f8b07d4648b6e4',
        answer: 'London',
        correct: false,
        points: 0,
        feedback: 'No, London is the capital of the UK.',
      },
      {
        id: '659ef624b1f8b07d4648b6e5',
        answer: 'Berlin',
        correct: false,
        points: 0,
        feedback: 'No, Berlin is the capital of Germany.',
      },
      {
        id: '659ef624b1f8b07d4648b6e6',
        answer: 'Madrid',
        correct: false,
        points: 0,
        feedback: 'No, Madrid is the capital of Spain.',
      },
    ],
  },
},
  {
    question_id: '659ef624b1f8b07d4648b6e2',  // will be exam_question_id probably
    type: 'multiple_choice:select_one',     // the question type
    scoring: {
      client_scored: true,                // whether the client scores the question
      provide_feedback: true,             // whether the client provides feedback
    },
    data: {
      // the stem is the question that is asked. It can contain
      // multiple items.
      stem: {
        title: 'What is the capital of Germany?',
        content: [
          { text: 'What is the current capital of Germany?' },
        ],
      },

      alternatives: [
        {
          id: '659ef624b1f8b07d4648b6e3',
          answer: 'Paris',
          correct: false,
          points: 0,
          feedback: 'No, Paris is the capital of France.',
        },
        {
          id: '659ef624b1f8b07d4648b6e4',
          answer: 'London',
          correct: false,
          points: 0,
          feedback: 'No, London is the capital of the UK.',
        },
        {
          id: '659ef624b1f8b07d4648b6e5',
          answer: 'Berlin',
          correct: true,
          points: 1,
        },
        {
          id: '659ef624b1f8b07d4648b6e6',
          answer: 'Madrid',
          correct: false,
          points: 0,
          feedback: 'No, Madrid is the capital of Spain.',
        },
      ],
    },
  },
]
