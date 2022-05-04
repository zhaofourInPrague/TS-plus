import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as types from '../store/action-types'; 
import {CombinedState} from '../store/reducers';
import {Counter2State} from '../store/reducers/counter2';

const mapStateToProps = (state: CombinedState): Counter2State => state.counter2;
const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        add2(amount: number){
            dispatch({type: types.ADD2, payload: amount})
        }
    }
)

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class Counter2 extends Component<Props> {
    render(){
        return (
            <div>
                <p>
                    {this.props.number}
                </p>
                <button onClick={() => this.props.add2(5)}>+</button>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter2);