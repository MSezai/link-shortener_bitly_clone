
export interface redirectedLink {
    redirect: string;
    lifetime: number;
    collect: string[];
  }



export interface shortenedURL {
    url: string;
    metricsId: number;
    redirectId: string;
  }


export interface idValue {
    id: number;
  } 


export interface aggregatedInfo {
    visitors: {
        total: number;
        ios: number;
        android: number;
        desktop: number;
      }
  }


export interface redirectedURL {
    urlId: string;
    os: string;
  }


export interface urlValue {
    url: string;
  } 

