import { ref } from 'vue';
// 임시 전역 상태
const alerts = ref([]);

export function useAlert() {
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ message, type });
    setTimeout(() => {
      alerts.value.shift();
    }, 2000);
  };

  const vSuccess = (message) => vAlert(message, 'success');

  return { alerts, vAlert, vSuccess };
}
