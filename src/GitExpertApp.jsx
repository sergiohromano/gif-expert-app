import React, {useState} from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

const GitExpertApp = () => {
    const [categories, setCategories] = useState(['frontend'])

    return (
        <>
            <h2>GitExpert</h2>
            <hr />
            <AddCategoria setCategories={ setCategories }/>
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} 
                    category={category} >
                    </GifGrid>
                ))}
            </ol>
        </>
    );
}

export default GitExpertApp;