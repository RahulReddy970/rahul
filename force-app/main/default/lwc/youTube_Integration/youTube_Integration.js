import { LightningElement, track } from 'lwc';
import getVideos from '@salesforce/apex/YoutubeController.getYoutubeVideos';

export default class YouTube_Integration extends LightningElement 
{
    API_KEY= 'AIzaSyBcIPo4E7j969X7cOgDeNaSOtSfoaqTRd0';

    END_POINT= 'https://www.googleapis.com/youtube/v3/search';

    @track finalresult = [];

    @track finalError = '';

    @track searchInput = 'salesforce';

    @track videoResults = [];

    @track viewUrl = '';

    connectedCallback()
    {
         this.handleSubmit();
    }
    handleSearch(event)
    {
         this.searchInput = event.target.value;
    }
    handleSubmit()
    {
          getVideos({SEARCH_KEY:this.searchInput,SEARCH_URL:this.END_POINT,API_KEY:this.API_KEY})
         .then ((results)=>{
              this.videoResults = results;
              if (this.videoResults.length > 0) 
              {
                   this.showVideoInIframe(this.videoResults[0].videoId);
              }
         })
         .catch((error)=>{
              this.finalError = error.body.message;
              console.log('This is final video results ::'+ this.finalError);
         })
    }
    showVideoInIframe(videoId)
    {
         this.viewUrl = 'https://www.youtube.com/embed/'+videoId;
    }
    watchVideo(event)
    {

         let slt = event.currentTarget.dataset.id;

         this.viewUrl = 'https://www.youtube.com/embed/'+slt;

    }
}