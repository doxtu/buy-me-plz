import React from 'react';

import { connect } from 'react-redux';

import { selectSections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    render(){
        const { sections } = this.props;

        return (
            <div className='directory-menu'>
                {
                    sections.map(
                        ({id, imageUrl, title, size, linkUrl, match}) => 
                            <MenuItem 
                                key={id} 
                                title={title} 
                                imageUrl={imageUrl} 
                                size={size} 
                                linkUrl={linkUrl}
                                match={match} />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sections: selectSections(state)
})

export default connect(mapStateToProps)(Directory);