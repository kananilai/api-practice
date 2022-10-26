export type Props = {
  articles?: [
    article: {
      author: string;
      title: string;
      publishedAt: string;
      url: string;
      urlToImage: string;
    }
  ];
  title?: string;
  weather?: {
    current: {
      temp: number;
      clouds: number;
      weather: [
        condidiotions: {
          main: string;
          icon: string;
        }
      ];
    };
  };
};
