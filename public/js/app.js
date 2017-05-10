const reactContainer = document.getElementById("root");

const getBooksFromFakeXHR = () => new Promise((resolve, reject) => {
  const booksFromFakeDB = [
    {
      title : 'Enders Game',
      author : 'Orson Scott Card'
    },
    {
      title : 'Ready Player One',
      author : 'Ernest Cline'
    },
    {
      title : 'Talion: The Revenant',
      author : 'Michael A. Stackpole'
    }
  ];

  setTimeout(() => resolve(booksFromFakeDB), 250);
});

const Book = (props) => (
  <li>
    <h3>{ props.book.title }</h3>
    <p>{ props.book.author }</p>
  </li>
);

const BookSearchFilter = filter =>
  ({ title, author }) =>
    filter === "" ||
      title.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||
      author.toLowerCase().indexOf(filter.toLowerCase()) >= 0;

const BookList = ({ books, filter }) => (
  <ul>
    { books
      .filter(BookSearchFilter(filter))
      .map( book => <Book book={book} /> )
    }
  </ul>
);

const BookFilterInput = ({ setFilter }) => (
  <input type="text" placeholder="search" onChange={setFilter} />
);

class NewBookForm extends React.Component {

  constructor(props){
    super(props);

    // set the initial state
    this.state = {
      title: "",
      author: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  addBook(book){
    console.log(book);
    // update my parent's books state
    this.props.addBook(book);
    this.setState({ title : "", author : "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addBook(this.state);
  }

  handleTitleChange(event) {
    this.setState({ title : event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author : event.target.value });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div>
          <input type="text" placeholder="author" onChange={this.handleAuthorChange} value={this.state.author} />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    )
  }
}

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      books : [],
      filter : ""
    };

    this.setFilter = this.setFilter.bind(this);
    this.addBook = this.addBook.bind(this);

  }

  componentWillMount() {
    this.getBooks().then( books => {
      this.setState({ books });
    });
  }

  getBooks(){
    return getBooksFromFakeXHR();
  }

  setFilter(e){
    // console.log(e.target.value);
    this.setState({ filter : e.target.value });
  }

  addBook(book){
    this.setState({
      books : this.state.books.concat(book)
    });
  }

  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <BookFilterInput setFilter={this.setFilter} />
        <BookList books={this.state.books} filter={this.state.filter}></BookList>
        <NewBookForm addBook={this.addBook}/>
      </div>
    );
  }
};

ReactDOM.render(
  // component to render
  <App />,

  // where to inject this component
  // dom element, or use getElementById
  reactContainer
);