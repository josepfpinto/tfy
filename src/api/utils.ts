import { response } from './types';

/**
 * This TypeScript function returns an object with two properties: 'success' and 'data'.
 * @param {boolean} success - The 'success' property is a boolean value indicating whether the operation was
 * successful or not.
 * @param {any} [data] - The 'data' property is an optional parameter of any type that represents the data that 
 * will be returned. If no data is provided, the `data` property in the response object will be `undefined`.
 * @returns {response} - An object with two properties: 'success' and 'data'.
 */
export function dealResponse(success:boolean, data?:any) {
    const response: response = {
        'success': success,
        'data': data,
    }
    return response;
}