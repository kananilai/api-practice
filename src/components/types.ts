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
  weatherNews?: [
    currrent: {
      temp: number;
      clouds: number;
      weather: [
        condidiotions: {
          main: string;
          icon: string;
        }
      ];
    }
  ];
  daily?: [
    date: {
      dt: number;
      clouds: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        condidiotions: {
          id: number;
          icon: string;
        }
      ];
    }
  ];
};
