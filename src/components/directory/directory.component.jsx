import React from 'react';
import './directory.styles.scss';
import sections from './directory.data.js';

import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: sections
        };
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({id, imageUrl, title, size}) => 
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )
                }
            </div>
        )
    }
}

export default Directory;