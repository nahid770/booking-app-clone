import React from 'react';
import Header from '../../Components/Header/Header';
import Navber from '../../Components/Navber/Navber';

const List = () => {
    return (
        <div>
            <Navber type="list"></Navber>
            <Header type="list"></Header>
        </div>
    );
};

export default List;