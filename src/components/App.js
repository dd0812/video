import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('cars');
    }

    onTermSubmit = async(term) => {//callback func which will be passed to child component SearchBar as a prop to eventually get search term/config params from child component
        // console.log(term);
        const response = await youtube.get('/search', {
            params : {
                q: term
            }
        });
        // console.log(response);
        this.setState({
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    //callback func; so declare it as an arrow func
    onVideoSelect = (video) =>{
        // console.log('From App component', video);
        this.setState({selectedVideo: video});
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className = "ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>                        
                    </div>                    
                </div>
            </div>
        );
    }
}

export default App;