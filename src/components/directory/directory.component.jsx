import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections : [
                {
                  title: 'HATZ',
                  imageUrl: 'https://images.unsplash.com/photo-1566753792285-184b159d1d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'CACTUSZSES',
                  imageUrl: 'https://images.unsplash.com/photo-1560912485-d92ec3dcfb67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'SHOEZ',
                  imageUrl: 'https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'QUESTION MARKS',
                  imageUrl: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'DISKS',
                  imageUrl: 'https://images.unsplash.com/photo-1588415158669-c8b2154fa9bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }]
        }
    }
     render() {
         return (
        <div className='directory-menu'>
       {this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl ={imageUrl} size = {size}/>
        ))}
        </div>
         );
}
}
export default Directory ;