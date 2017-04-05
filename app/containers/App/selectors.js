// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState = {};

  return (state) => {
    const routingState = state.route;

    if (!routingState == prevRoutingState) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

export {
  makeSelectLocationState,
};
