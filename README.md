
## Vumblr: microblogging Tumblr mimic 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lobortis ultrices. Phasellus nec augue blandit, rhoncus mauris ut, pretium tortor. Maecenas et interdum tortor. Aenean convallis commodo dui eu scelerisque. Nunc laoreet leo vel mi auctor, consequat mollis odio rhoncus. Vivamus dictum dui at porttitor molestie. Nunc venenatis, velit in volutpat sagittis, ex risus auctor mi, a tincidunt arcu tellus id orci.

## Motivation
Vivamus ut facilisis sem. Etiam vel turpis in metus porttitor gravida id ut est. Nunc feugiat vehicula dui in fringilla. Nam malesuada metus enim, non dapibus justo cursus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam scelerisque varius ipsum in porttitor. Curabitur vitae volutpat leo, eu tempus sapien. Curabitur quis euismod neque. 

## Project Links
- [Live application](https://gallant-agnesi-8213be.netlify.app/)
- [Github](https://github.com/neillsom/vumblr)

## Screenshots
Dashboard:
![Dashboard](https://content.screencast.com/users/neill.somerville/folders/Snagit/media/e3c46885-2028-4ed8-89fc-054331b9467e/2020-11-12_15-49-13%20(2).gif "Dashboard")




## Tech / Frameworks used
<b>Built with</b>
- Vue.js 
- Node
- Vuetify
- HTML
- MongoDB

## Code Example
### API Server Side
#### Linked list logic for question order
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  /**Inserts a new node after a node containing the key */
  insertAfter(key, itemToInsert) {
    let tempNode = this.head;
    while (tempNode !== null && tempNode.value !== key) {
      tempNode = tempNode.next;
    }
    if (tempNode !== null) {
      tempNode.next = new _Node(itemToInsert, tempNode.next);
    }
  }
...
```

### Frontend Client Side
#### Question component
```javascript
class Question extends Component {
  onSubmit = (event) => {
    event.preventDefault();

    let userAnswer = event.target.userInput.value.toLowerCase();
    this.props.dispatch(postAnswer({
      answer: userAnswer
    }));
    event.target.userInput.value = "";
  }


  render() {

    const feedbackData = (this.props.feedback === undefined || this.props.answered === false) ? null : (
      <div className="feedbackboard">
        <p>{this.props.feedback.feedback}. The answer is: {this.props.feedback.answer}</p>
        <br />
        <p>You answered correctly {this.props.feedback.correctTries} out of {this.props.feedback.totalTries} guesses for this card</p>
        <br />
        <p>You answered correctly {this.props.correctScore} out of {this.props.totalScore} guesses for this session</p>
      </div>
    );

    return (

      <div className="questionboard">
        <form onSubmit={event => { this.onSubmit(event), this.props.dispatch(toggleAnswered()) }}>


          <div className="question-img-container" >
            <img key={this.props.id} src={this.props.question} alt="medicinal herbs" />
          </div>

          {(this.props.answered === true) ? null :
            <div className="conditional-input-submit">
              <input className="userInput"
                type="text"
                name="userInput"
                validate={[required, nonEmpty]}
                required
              />
              <button className="button-submit">Submit</button>
            </div>
          }
        </form>
        <div className="feedback">
          {feedbackData}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  answered: state.protectedData.answered,
  question: state.protectedData.data.image,
  id: state.protectedData.id,
  feedback: state.protectedData.feedback,
  totalScore: state.protectedData.totalScore,
  correctScore: state.protectedData.correctScore
});

export default requiresLogin()(connect(mapStateToProps)(Question));
```

## License
MIT License
Copyright (c) 2018 Neill Somerville

#### http://neillsomerville.com