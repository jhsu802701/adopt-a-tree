class RadioField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: (props.value || null)};
    this.handleChange = this.handleChange.bind(this);
  }

  value(){
    return this.state.value;
  }

  optionId(option){
    return this.props.name + '_' + option['value'];
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  optionsMarkup(){
    var self = this;
    return this.props.options.map(function(option){
      return <label className="radio"><input type='radio' id={self.optionId(option)} name={self.props.name} className={self.props.className} value={option['value']} checked={self.value() === option['value']} onChange={self.handleChange}/>{option['label'] || option['value']}</label>
    });
  }

  render(){
    return(
      <LabeledField name={this.props.name} label={this.props.label} private={this.props.private} required={this.props.required} errors={this.props.errors}>
        <div className="radio">
          {this.optionsMarkup()}
        </div>
      </LabeledField>
    );
  }
}

RadioField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  required: React.PropTypes.bool,
  private: React.PropTypes.bool,
  options: React.PropTypes.array,
  errors: React.PropTypes.array
};
