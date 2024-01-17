export let data = [
	{
		question_id: '659ef624b1f8b07d4648b6e2',  // will be exam_question_id probably
		type: 'multiple_choice:select_one',     // the question type
		scoring: {
			client_scored: true,                // whether the client scores the question
			provide_feedback: true             // whether the client provides feedback
		},
		data: {
			// the stem is the question that is asked. It can contain
			// multiple items.
			stem: {
				title: 'What is the capital of France?',
				content: [
					{ text: 'Versailles was the capital of France from 1682 to 1789. Louis XIV made Versaille his residence and the seat of the French court.' },
					{
						img: {
							url: 'https://static.datakortet.no/test/ulrik/map-france-old.jpg',
							caption: '"Carte géographicque des postes qui trauersent la France" (Paris: Par Melchior Tauernier . . . , 1632).'
						}
					},
					{ text: "What is the <em>current</em> capital of France?" }
				]
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
					feedback: 'No, London is the capital of the UK.'
				},
				{
					id: '659ef624b1f8b07d4648b6e5',
					answer: 'Berlin',
					correct: false,
					points: 0,
					feedback: 'No, Berlin is the capital of Germany.'
				},
				{
					id: '659ef624b1f8b07d4648b6e6',
					answer: 'Madrid',
					correct: false,
					points: 0,
					feedback: 'No, Madrid is the capital of Spain.'
				}
			]
		}
	},
	{
		question_id: '659ef624b1f8b07d4648b6e2',  // will be exam_question_id probably
		type: 'multiple_choice:select_one',     // the question type
		scoring: {
			client_scored: true,                // whether the client scores the question
			provide_feedback: true             // whether the client provides feedback
		},
		data: {
			// the stem is the question that is asked. It can contain
			// multiple items.
			stem: {
				title: 'What is the capital of Germany?',
				content: [
					{ text: 'What is the current capital of Germany?' }
				]
			},

			alternatives: [
				{
					id: '659ef624b1f8b07d4648b6e3',
					answer: 'Paris',
					correct: false,
					points: 0,
					feedback: 'No, Paris is the capital of France.'
				},
				{
					id: '659ef624b1f8b07d4648b6e4',
					answer: 'London',
					correct: false,
					points: 0,
					feedback: 'No, London is the capital of the UK.'
				},
				{
					id: '659ef624b1f8b07d4648b6e5',
					answer: 'Berlin',
					correct: true,
					points: 1
				},
				{
					id: '659ef624b1f8b07d4648b6e6',
					answer: 'Madrid',
					correct: false,
					points: 0,
					feedback: 'No, Madrid is the capital of Spain.'
				}
			]
		}
	}
];
