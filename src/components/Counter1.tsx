import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as types from '../store/action-types'; 
import {CombinedState} from '../store/reducers';
import {Counter1State} from '../store/reducers/counter1';

const mapStateToProps = (state: CombinedState): Counter1State => state.counter1;
const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        add1(amount: number){
            dispatch({type: types.ADD1, payload: amount})
        }
    }
)

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class Counter1 extends Component<Props> {
    render(){
        return (
            <div>
                <p>
                    {this.props.number}
                </p>
                <button onClick={() => this.props.add1(5)}>+</button>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter1);