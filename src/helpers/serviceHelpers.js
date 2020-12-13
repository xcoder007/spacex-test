const defaultTimeout = 30000;

export const getHeaderForGet = () => ({
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const doFetch = (url, header, timeout = defaultTimeout) => {
  console.log("request received");
  return new Promise((resolve, reject) => {
    const timeoutHandle = setTimeout(() => {
      console.log("timed out occured");
      reject(new Error("Request timed out internally."));
    }, timeout);
    fetch(url, header)
      .then((res) => {
        console.log("response received");
        clearTimeout(timeoutHandle);
        res.json().then((data) => {
          console.log("Json parsed");
          resolve(data);
        });
      })
      .catch((err) => {
        console.log("Caught error");
        clearTimeout(timeoutHandle);
        reject(err);
      });
  });
};
