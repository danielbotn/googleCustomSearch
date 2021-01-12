/* eslint-disable no-undef */
import axios from 'axios';

export async function customSearch(search: string) {
  try {
    const result = await axios({
      method: 'get',
      url: `https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=${search}&searchType=image&key=`,
    });

    return result;
  } catch (error) {
    return error;
  }
}
