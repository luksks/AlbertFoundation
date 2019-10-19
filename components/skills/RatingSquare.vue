<script>
export default {
  functional: true,
  render (h, { props }) {
    const outerClasses = 'zoom w-8 h-8 border-4 border-orange-910 hover:border-green-600 shadow-lg mx-1 bg-transparent group-hover:rotate-45 transition-all-300'
    const innerClasses = ['absolute w-4 h-4 m-1 bg-orange-920 shadow-lg', { 'hidden': props.hidden }]
    return h('div', { class: outerClasses }, [h('div', { class: innerClasses }, '')])
  }
}
</script>
