import { reactive } from 'vue'

export const store = reactive({
    textHello: 'Ciao Mondo',
    projects : {
        data : [],
        current_page:0,
        last_page:0,
        total:0,
    },
})