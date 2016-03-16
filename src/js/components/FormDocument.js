
import React, { Component, PropTypes } from 'react';
import { applyMiddleware, combineReducers, createStore, compose, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

export default function document(state = {}, action) {
    switch(action.type)
    {
        default:
            return state;
        break;
    }
}

const finalReducer = combineReducers({
  document,
  // form: formReducer
});

// Common devTools usage
const finalCreateStore = compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default class FormDocument extends Component {
  render() {

    var store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(finalReducer, {
        document: {}
    });

    return (
      <div>
        <Provider store={store}>
            <div className="FormDocument">
                Redux FormDocument
            </div>
        </Provider>
      </div>
    );
  }
}

FormDocument.defaultProps = {
}



export default FormDocument;