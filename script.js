let onLoad = '# markdown preview\n ## it\'s amazing\n [google](https://google.com)\n\n `heyeye` \n\n * 1\n\n* 2\n >"i love heman"\n\n**hehe**\n\n![heman](https://steamuserimages-a.akamaihd.net/ugc/1022821770982158200/5BE1F6216AFC982120477572E45A656C6ED753FF/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)\n\n';

onLoad = onLoad.concat('```\n\nheyeye\n\nI say hey\n\n```');

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      preview: '' };

    this.input = this.input.bind(this);
    this.convert = this.convert.bind(this);
  }
  componentDidMount() {
    this.setState({
      input: onLoad });

    this.convert();
  }
  convert() {
    this.setState(state => ({
      preview: marked(state.input, { sanitize: true }) }));

  }
  input(e) {
    this.setState({
      input: e.target.value });

    this.convert();
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("textarea", { id: "editor", onChange: this.input, value: this.state.input, style: { width: '100%', height: 300 } }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.state.preview } })));



  }}
;

ReactDOM.render(React.createElement(Presentational, null), document.getElementById('root'));