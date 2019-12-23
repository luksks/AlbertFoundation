export const state = () => ({
  my_custom_value: 0,
  theme: "theme-dark",
})

export const mutations = {
  increase: state => state.my_custom_value++,

  // how to use this one

// {{$store.state.localStorage.my_custom_value}}
// <button @click="$store.commit('localStorage/increase')">increase</button>

  changetheme: state => state.theme = state.theme === "theme-light" ? "theme-dark" : "theme-light"
}
