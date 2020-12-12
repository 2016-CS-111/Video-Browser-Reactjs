import React from 'react';
// import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';


class App extends React.Component {

    // onSearchSubmit = async (searchText) => {
        // const respose = await unsplash.get('/search/photos', {
        //     params: { query: searchText }
        // });
        // console.log(respose.data.results);
    // };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }} >
                <SearchBar onSubmit={this.onSearchSubmit} />    
            </div>
        );
    }
};

export default App;