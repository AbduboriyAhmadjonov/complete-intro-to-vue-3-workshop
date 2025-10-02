<script>
export default {
  props: {
    submit: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <button>
    <slot v-if="cancel">Left icon - Cancel</slot>
    <slot v-else> Submit </slot>
  </button>
</template>
