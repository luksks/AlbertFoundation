export const state = () => ({
    //  The main declaration of the theme
    theme: "theme-dark",

// past the value into the components


});


//
//
//
// toggleTheme() {
//     this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
//     this.$store.state.theme = this.theme;
//     if (typeof window !== 'undefined') {
//         localStorage.setItem('theme', this.theme)
//     }
// }


export const strict = false

// export default createStore
// export const  getters = {}

// export const state = () => ({
//     my_custom_value: 0,
//     expireTest: {
//         expireCount: 0,
//         expire: 2
//     }
// })
//
// export const mutations = {
//     increase: state => state.my_custom_value++,
//     expirecount: state => state.expireTest.expireCount++
// }
