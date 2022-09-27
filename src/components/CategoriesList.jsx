import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import Category from './Category';

function CategoriesList() {

    const [categories, setCategories] = useState([]);
    const { token } = useContext(UserContext);

    const getCategories = async () => {
        let request = await axios.get(`${BASE_URL}categories/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        setCategories(request?.data?.data)
    }

    useEffect(() => {
        getCategories();
    }, [])
    return (
        <div>
            {
                categories?.map((category, idx) => {
                    return <Category name={category.name} key={idx} />
                })
            }
        </div>
    );
}

export default CategoriesList;