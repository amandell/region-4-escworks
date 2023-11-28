const env = 'dev';
const url = `https://twp43i3jd6.execute-api.us-east-2.amazonaws.com/${env}`

const getProductData = async () => {
  const res = await (await fetch(url + '/getData')).json();
  const data = JSON.parse(res.body);
  return data;
}

const getProductDetails = async (id) => {
  const res = await (await fetch(url + '/getData', {
    method: "POST",
    body: JSON.stringify({id: id})
  })).json();
  const data = JSON.parse(res.body);
  return data;
}

export {getProductData, getProductDetails};