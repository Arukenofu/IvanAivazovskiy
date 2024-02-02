export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/life/story') {
        return navigateTo('/life/story/childhood')
    }
})