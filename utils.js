const axios = require ('axios');

const defaultHeaders = {
    Accept: 'application/json, text/plain, */*',
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    pragma: 'no-cache',
};

// Axios configuration
const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        common: {
            ...defaultHeaders
        },
    },
});

const GITHUBURL = 'https://api.github.com';
const GRAPHQLURL = '/graphql';
const WAKAURL = 'https://wakatime.com/api/v1/users/current/';

// Add a request interceptor
axiosInstance.interceptors.request.use(config => config, error => Promise.reject(error));

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
    // Do something with response data
    response.data.status = response.status;
    return response.data;
}, (error) => {
    return error.response;
});

const handlingResponse = (data, prop = 'response') => {
  const response = { error: '' };
  if (data && data.status !== 200) {
    switch (data.status) {
    case 401:
      data.type = 'Unauthorized';
      break;
    case 404:
      data.type = 'Not Found';
      break;
    case 500:
      data.type = 'ServerError';
      break;
    default:
      data.type = 'Invalid Data';
      break;
    }
    return { response, error: data.data };
  }
  delete response.error;
  response[prop] = 'data' in data ? data.data : data;
  return response;
};


const gitApi = async (url, token, prop, isCustomApi = false) => {
  if(isCustomApi){
    axiosInstance.defaults.baseURL = url;
    url = '';
  } else {
    axiosInstance.defaults.baseURL = GITHUBURL;
  }
  let data;
  try {
    data = await axiosInstance({
      headers: {
          Authorization: `token ${token}`,
      },
      url: url,
    });
    return handlingResponse(data, prop);
  } catch (error) {
    return handlingResponse(error);
  }
}

const gitApiGraphQl = async (token, query, vars = {}, prop) => {
  axiosInstance.defaults.baseURL = GITHUBURL;
  let data;

  try {
    data = await axiosInstance.post(GRAPHQLURL, {
      query,
      variables: vars
      }, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    return handlingResponse(data, prop);
  } catch (error) {
    return handlingResponse(error);
  }
}

const wakatimeApi = async (url, prop) => {
  axiosInstance.defaults.baseURL = WAKAURL;
  let data;
  try {
    data = await axiosInstance({
        url: url,
    });
    return handlingResponse(data, prop);
  } catch (error) {
      return handlingResponse(error);
  }
}

const substitute = (str, search, replace) => {
  let string = str;
  if (Array.isArray(search) && Array.isArray(replace)){
    search.forEach((s, k)  => {
      string = string.split(s).join(replace[k])
    });
  } else {
    string = str.split(search).join(replace);
  }

  return string;
};

const convertData = (value) => {
  const decimalSuffix = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const base = 1024;
  const bytes = parseFloat(value)
  const abs_bytes = Math.abs(bytes)

  if(value === 1) {
    return `${value} Byte`;
  } else if(value < base){
    return `${value} Bytes`;
  }

  let res = '';
  let find = false;
  decimalSuffix.forEach((s, k) => {
    const unit = base ** (k + 2);
    if(abs_bytes < unit && !find) {
      find = true;
      res = `${(base * bytes / unit).toFixed(2)} ${s}`
    }
  });
  return res;
};

exports.gitApi = gitApi;
exports.gitApiGraphQl = gitApiGraphQl;
exports.substitute = substitute;
exports.wakatimeApi = wakatimeApi;
exports.convertData = convertData;
