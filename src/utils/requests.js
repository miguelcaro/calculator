import axios from "axios";
import merge from "lodash.merge";

const baseUrl = "http://localhost:3000/api/v1";

const headers = {
  "Content-Type": "application/vnd.api+json",
  Accept: "application/vnd.api+json"
};

function request(method, url, axiosConfig = {}, data = undefined) {
  const options = merge(
    {},
    {
      method,
      url: baseUrl + url,
      data,
      headers,
      responseType: "json"
    },
    axiosConfig
  );
  return axios(options);
}

export function post(
  url,
  { params = {}, headers = {}, transformResponse = [] },
  data
) {
  return request("post", url, { params, transformResponse, headers }, data);
}

export function put(
  url,
  { params = {}, headers = {}, transformResponse = [] },
  data = {}
) {
  return request("put", url, { params, transformResponse, headers }, data);
}

export function patch(
  url,
  { params = {}, headers = {}, transformResponse = [] },
  data = {}
) {
  return request("patch", url, { params, transformResponse, headers }, data);
}

export function get(
  url,
  { params = {}, transformResponse = [], headers = {} }
) {
  return request("get", url, { transformResponse, params, headers });
}

export function destroy(url, { headers = {} }) {
  // delete
  return request("delete", url, { headers });
}

