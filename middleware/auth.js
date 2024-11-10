// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return navigateTo("/home");
  }
});
