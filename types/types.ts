

export interface postRequestBody {
    redirect: string;
    lifetime: number;
    collect: string[];
  }

export interface postResponses {
    url: string;
    metricsId: string;
    redirectId: string;
  }

  export interface idValue {
    id: number;
    path: string
  } 

  export interface getResponses {
    visitors: {
      total: number;
      ios: number;
      android: number;
      desktop: number;
    }
  }