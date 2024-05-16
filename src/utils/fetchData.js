export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '45af4b905amsh1d8409b004d8c00p17f557jsn8b97b588cb5f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'b281bba309msh916759ec50719e6p1dac8cjsn3cb527aff49c',
    },
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};