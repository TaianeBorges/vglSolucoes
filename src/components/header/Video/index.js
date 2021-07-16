import Component from 'styled-components';
import VideoCover from 'react-video-cover';

class MinimalCoverExample extends Component {
    render() {
      const videoOptions = {
        src: '../../../assets/video/video.mp4',
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          if (this.videoRef && this.videoRef.paused) {
            this.videoRef.play();
          } else if (this.videoRef) {
            this.videoRef.pause();
          }
        },
        title: 'click to play/pause',
      };
      return (
        // <div style={{
        //   width: '300px',
        //   height: '300px',
        //   overflow: 'hidden',
        // }}>
          <VideoCover
            videoOptions={videoOptions}
          />
       
      );
    }
  }
  export default MinimalCoverExample