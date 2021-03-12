import React, { Component } from "react";
import { connect } from "react-redux";

import TasksList from "../components/TasksList";
import SmallForm from "./SmallForm";
import { fetchRequested } from "../redux";
import CircularProgress from '@material-ui/core/CircularProgress';

class Users extends Component {

  render() {
    const { users, isLoading } = this.props;
    return (
      <div className="container">
        <SmallForm />
        {isLoading && <CircularProgress />}
        <TasksList users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);