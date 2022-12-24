
export interface RedirectedLink {
    redirect: string;
    lifetime: string;
    collect: string[];
  }



export interface ShortenedURL {
    url: string;
    metricsId: string;                              // was a number, changed it to string
    redirectId: string;
  }


export interface IdValue {
    id: number;
  } 


export interface AggregatedInfo {
    visitors: {
        total: number;
        ios: number;
        android: number;
        desktop: number;
      }
  }


export interface RedirectedURL {
    urlId: string;
    os: string;
  }


export interface UrlValue {
    url: string;
  } 

