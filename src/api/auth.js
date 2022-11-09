let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          '674967152360-9t0v4dt5ifrege18gp9qru6ih1knj0l3.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();

      initialized = true;
    });
  });
};
