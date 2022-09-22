import axios from "axios";

const baseURL = "https://632c45375568d3cad8815756.mockapi.io/contacts";

export function fetchContacts() {
  return axios.get(baseURL);
}

export function addContact(contact) {
  return axios.post(baseURL, contact);
}

export function deleteContact(id) {
  const deleteURL = baseURL + "/" + id.toString();
  return axios.delete(deleteURL);
}