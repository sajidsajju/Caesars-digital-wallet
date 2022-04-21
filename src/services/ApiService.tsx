import instance from './axios/Instance';

interface Props {
  url: string;
  data?: any;
  timeOut?: number;
}

const config_headers = {
  headers: {
    'X-TENANT': 'Caesars',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
};
export const ApiService = async (props: Props) => {
  const { url, timeOut } = props;
  try {
    if (timeOut) {
      instance.defaults.timeout = timeOut;
    }
    const response = await instance.get(url, config_headers);
    return response;
  } catch (error) {
    console.log(`Could not fetch data for ${url}`);
    // throw new Error(`Could not fetch data for ${url}`);
  }
};

export const ApiPostService = async (props: Props) => {
  const { url, timeOut, data } = props;
  try {
    if (timeOut) {
      instance.defaults.timeout = timeOut;
    }
    const response = await instance.post(url, data, config_headers);
    return response;
  } catch (error) {
    console.log(`Could not fetch data for ${url}`);
    // throw new Error(`Could not fetch data for ${url}`);
  }
};
