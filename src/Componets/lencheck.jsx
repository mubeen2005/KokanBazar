const lencheck = () => {
  const userData = localStorage.getItem("user");

  if (!userData) return 0;

  try {
    const user = JSON.parse(userData);
    return Array.isArray(user.products) ? user.products.length : 0;
  } catch (error) {
    console.error("Failed to parse user data from localStorage:", error);
    return 0;
  }
};

export default lencheck;
