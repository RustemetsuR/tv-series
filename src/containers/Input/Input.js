import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom'
import { inputValueChanged, getAutoComplete } from '../../store/actions';
import reducer from '../../store/reducer';
import axios from '../../axios-api';
import './Input.css';

const initialState = {
    autoComplete: [],
    inputValue: '',
};

const Input = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { autoComplete, inputValue } = state;

    const changedValue = event => {
        const value = event.target.value;
        dispatch(inputValueChanged(value));

        const fetch = async () => {
            const response = await axios.get(value);
            dispatch(getAutoComplete(response.data));
        };
        
        fetch();
    };


    return (
            <header className='search-box'>
                <div className="container">
                    <h3 className="website-title"><a className="link-title" href="/">TV-Series</a></h3>
                    <div className="input-box">
                        <input onChange={changedValue} value={inputValue} />
                        {autoComplete.length > 0 ?
                            <div className='autocomplete-box'>
                                {autoComplete.map(ac => {
                                    const pathId = '/shows/' + ac.show.id;
                                    return <NavLink to={pathId} key={ac.show.id}><p>{ac.show.name}</p></NavLink>
                                })}
                            </div>
                            : null}
                    </div>
                </div>
            </header>
    );
};

export default Input;