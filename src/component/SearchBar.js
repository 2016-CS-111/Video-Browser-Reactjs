import React from 'react';

class SearchBar extends React.Component {
    state = { searchbox: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchbox);
    }

    render() {
        return (
            <div className='ui segment' style={{ backgroundColor: 'lightpink' }}>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search:</label>
                        <input 
                            value={this.state.searchbox} 
                            onChange={(e) => this.setState({ searchbox: e.target.value })} 
                            />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;