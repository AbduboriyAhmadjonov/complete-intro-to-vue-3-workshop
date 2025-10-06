import { ref } from "vue";

export function useState() {
  const userEmail = ref();
  const userName = ref();
  return {
    userEmail,
    userName,
  };
}
