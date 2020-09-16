import React, { useEffect, useReducer } from 'react';
import axios from '../../axios-api';
import { getInfo, getAutoComplete } from '../../store/actions';
import reducer from '../../store/reducer';
import Input from '../Input/Input';
import './MainInfo.css';
import star from '../../assets/images/rating-star-icon-18-256.png';

const MainInfo = props => {
    const initialState = {
        info: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('http://api.tvmaze.com/shows/' + props.match.params.id);
            dispatch(getInfo(response.data));
        };
        fetchData();

    }, [props.match.params.id]);



    return (
        <div className='main-info'>
            <Input />
            <div className="container">
                <div className="movie-info">
                    <div className='picture-box boxes'>
                        {
                            state.info.image ?
                                <img alt={state.info.name + '-picture'} className="picture" src={state.info.image.original} /> :
                                null
                        }
                    </div>
                    <div className='info-box boxes'>
                        <div className='title-box'>
                            <div className="name">
                                {state.info.name}
                                <p className="premiered">{state.info.premiered}</p>
                                {
                                    state.info.rating ?
                                        <div className="rating">
                                            <p>{state.info.rating.average}</p>
                                            <img className="rating-star" alt='rating-star' src={star} />
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        {
                            state.info.network ?
                                <p>Country : {state.info.network.country.name}</p> :
                                null
                        }
                        <p>Status: {state.info.status}</p>
                        <p dangerouslySetInnerHTML={{ __html: state.info.summary }} />
                    </div>
                </div>
            </div>


        </div>
    )



};

export default MainInfo;