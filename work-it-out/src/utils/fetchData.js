export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': "4cc9a6ca0emshf5124794ff6d2cap194708jsn78376271e654",
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4cc9a6ca0emshf5124794ff6d2cap194708jsn78376271e654',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };