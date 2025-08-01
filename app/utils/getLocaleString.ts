import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function getLocaleString() {
	const { locale } = useI18n()
	return computed(() => locale.value)
}