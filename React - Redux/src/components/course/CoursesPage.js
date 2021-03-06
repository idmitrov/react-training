import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

    this.state = {
      course: { title: "" }
    };
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  courseRow(course, index) {
    return(
      <div key={index}>{course.title}</div>
    );
  }

  render() {
    return(
      <div>
        <h1>Courses</h1>
        { this.props.courses.map(this.courseRow) }
        <h2>Add Course</h2>

        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input 
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}


CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);