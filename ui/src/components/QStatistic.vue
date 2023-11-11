<template>
    <q-card :flat="!bordered">
        <q-card-section :class="cardColumn">
            <div :class="boldLabel ? 'text-h5 text-bold' : 'text-h8 text-grey'">
                <div :style="labelStyle">
                    {{ label }}
                </div>
            </div>
            <slot />
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
        boldLabel: {
            type: Boolean,
            required: false,
            default: false
        },
        labelStyle: {
            type: Object,
            required: false,
            default: () => { }
        }
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