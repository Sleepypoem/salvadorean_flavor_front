import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { IMAGE_URL } from '../utils/Links';

function UserSection(props) {

    const { user } = useContext(UserContext);

    return (
        <div className='container w-25 m-4 mx-auto'>
            <div class="card">
                <div class="card-header">
                    <img className='w-100' src={`${IMAGE_URL}user/${user?.image?.image}`} alt={`${user?.name}`} />
                </div>
                <div class="card-body">
                    <h4 class="card-title">Name: {user?.name}</h4>
                </div>
                <div class="card-footer text-muted">
                    Email: {user?.email}
                </div>
            </div>
        </div>
    );
}

export default UserSection;