function getUser(userId) {
    return new Promise((resolve, reject) => {
      // Simulate fetching data from a server
      setTimeout(() => {
        if (userId === 1) {
          resolve({ id: 1, name: "John Doe" });
        } else {
          reject(new Error("User not found"));
        }
      }, 1000); // Simulate a 1 second delay
    });
  }
  
  const getUserPromise = getUser(1);
  
  getUserPromise
    .then((user) => {
      console.log("User:", user);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  