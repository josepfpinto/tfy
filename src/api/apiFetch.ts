import { API } from 'aws-amplify';
import { getToken } from './auth';
import { dealResponse } from './utils';

function ApiFetch(path:string='/', queryStringParameters?:any, apiName:string='apitfy') {
    return getToken().then((token) => {

        if (!token) return dealResponse(false, 'Token not found');

        let myInit:any = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            response: true,
            redirect: 'follow'
        };
        
        queryStringParameters && (myInit.queryStringParameters = queryStringParameters);

        return API.get(apiName, path, myInit)
        .then((response) => {
            return dealResponse(true, response.data);
        })
        .catch((error) => {
            return dealResponse(false, error.response);
        });
    });
}

export default ApiFetch;