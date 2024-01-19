export class Question {
	questionData = $state();
	constructor(data) {
		this.questionData = data;
	}
	get stem() {
		return this.questionData.data.stem;
	}
	get alternatives() {
		return this.questionData.data.alternatives;
	}
	get scoring() {
		return this.questionData.scoring;
	}
	get questionId() {
		return this.questionData.question_id;
	}
	get content() {
		return this.questionData.data.stem.content;
	}
	get title() {
		return this.questionData.data.stem.title;
	}

	set content(content) {
		this.questionData.data.stem.content = content;
	}
	set title(title) {
		this.questionData.data.stem.title = title;
	}
	set alternatives(alternatives) {
		this.questionData.data.alternatives = alternatives;
	}
	// set data(data) {
	// 	this.questionData = data;
	// }
}