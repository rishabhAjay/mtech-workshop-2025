export const clearAuthFromLocalstorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const setAuthLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
