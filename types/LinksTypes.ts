
export interface RedirectedLink {
    redirect: string;
    lifetime: string;
    collect: string[];
  }



export interface ShortenedURL {
    url: string;
    metricsId: number;
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

