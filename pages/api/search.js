import axios from 'axios';

const searchHandler = async (req, res) => {
  const searchResults = await axios.get(
    'https://content.guardianapis.com/search',
    {
      params: {
        'api-key': process.env.GUARDIAN_API_KEY,
        q: req.query.term,
      },
    }
  );

  const apiResults = searchResults.data.response.results.map((result) => {
    return {
      id: result.id,
      title: result.webTitle,
      url: result.webUrl,
      publicationDate: result.webPublicationDate,
    };
  });

  res.status(200).json(apiResults);
};

export default searchHandler;
