import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";

import CircularProgress from '@material-ui/core/CircularProgress';
import TasksList from "../components/TasksList";
import OpenNewTaskDialog from "./OpenNewTaskDialog.js";

class Tasks extends Component {

  render() {
    const { tasks, isLoading } = this.props;
    return (
      <div className="container">
        <OpenNewTaskDialog />
        {isLoading && <CircularProgress />}
        <TasksList tasks={tasks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  isLoading: state.tasks.isLoading,
  isError: state.tasks.isError
});

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);