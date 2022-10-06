<template>
    <q-card :flat="!bordered">
        <q-card-section :class="cardColumn">
            <div class="text-h8 text-grey">
                {{ label }}
            </div>
            <div class="text-h5 row items-center">
                <slot />
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "QStatistic",
    props: {
        label: {
            type: String,
            required: false,
            default: undefined
        },
        textAlign: {
            type: String,
            required: false,
            default: "left"
        },
        bordered: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    computed: {
        cardColumn() {
            if (this.textAlign === "right") {
                return "column items-end"
            } else if (this.textAlign === "center") {
                return "column items-center"
            }
            return "column"
        }
    }
})
</script>