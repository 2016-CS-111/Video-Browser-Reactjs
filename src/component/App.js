import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';
import Spinner from './Spinner';

class App extends React.Component {
    state = { videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (searchText) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchText
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoClick = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
                <div>
                    <div className='ui container' style={{ marginTop: '10px' }} >
                        <SearchBar onFormSubmit={this.onSearchSubmit} />
                        <div className='ui grid'>
                            <div className='ui row'>
                                <div className='eleven wide column'>
                                    <VideoDetail video={this.state.selectedVideo} />
                                </div>    
                                <div className='five wide column'>
                                    <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default App;