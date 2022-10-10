import React from "react";
import API from "./API";
import Loader from "./Loader";
import NewsDescription from "./NewsDescription";

class NewsApiList extends React.Component {
  dummyData={};
  articles=[];
   def=[];
  state = {
    newsArticles: [],
    isLoading: false,
  };
  
  componentDidMount() {
    this.setState({ isLoading: true });
    API.getNewsArticles()
      .then((response) => {
        this.dummyData = response.data;
        this.articles = this.dummyData.articles;
        this.articles.forEach(o => {
          let objcr = {
            content: "",
            title: "",
            url:"",
            image:{
              thumbnail:{
                contentUrl:"",
              }
            },
          };
          objcr.content = o.summary,
            objcr.title = o.title,
            objcr.url = o.link,
            objcr.image.thumbnail.contentUrl = o.media,
            this.def.push(objcr)
        });
        this.def.shift();
        
        ;
        this.setState({ newsArticles: this.def });
      })
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          this.state.newsArticles.map(({ title, content, image, url }) => (
            <div key={title} className="mb-4">
              <NewsDescription
                title={title}
                content={content}
                imageUrl={image.thumbnail.contentUrl}
                url={url}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default NewsApiList;
