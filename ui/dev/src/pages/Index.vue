<template>
    <q-page padding class="q-gutter-y-md">
        <div class="row q-gutter-md">
            <div class="col">
                <div class="text-h6">QStatistic</div>
                <q-banner class="text-white bg-info rounded-borders">
                    QStatistic allows you to display data statistically.
                </q-banner>
            </div>
            <div class="col">
                <div class="text-h6">Install</div>
                <q-banner class="text-white bg-dark rounded-borders">
                    quasar ext add qstatistic
                </q-banner>
            </div>
            <div class="col">
                <div class="text-h6">Uninstall</div>
                <q-banner class="text-white bg-dark rounded-borders">
                    quasar ext remove qstatistic
                </q-banner>
            </div>
        </div>

        <q-separator />

        <div class="text-h4">Examples:</div>
        <div class="row q-gutter-x-md">
            <QStatistic class="col" label="Example1" bordered textAlign="center">
                123456
            </QStatistic>
            <QStatistic class="col" label="Example2" dark>
                <q-icon name="star" />
                987654
            </QStatistic>
            <QStatistic class="col" label="Example3" bordered>
                123
            </QStatistic>
            <QStatistic class="col" label="Example4" textAlign="right">
                <q-icon name="font_download" />
                123 / 456
            </QStatistic>
        </div>
        <div class="row q-gutter-x-md">
            <pre class="col bg-grey-8 text-white" style="height: 150px;">
                <code>
                    {{ Example1 }}
                </code>
            </pre>
            <pre class="col bg-grey-8 text-white" style="height: 150px;">
                <code>
                    {{ Example2 }}
                </code>
            </pre>
            <pre class="col bg-grey-8 text-white" style="height: 150px;">
                <code>
                    {{ Example3 }}
                </code>
            </pre>
            <pre class="col bg-grey-8 text-white" style="height: 150px;">
                <code>
                    {{ Example4 }}
                </code>
            </pre>
        </div>

        <div class="text-h4">Examples:</div>
        <div class="row q-gutter-x-md">
            <QStatistic class="col" label="Example5" bordered boldLabel>
                <div class="row justify-between items-center" style="width: 100%;">
                    <q-icon name="star" />
                    987654
                </div>
            </QStatistic>
            <QStatistic class="col" label="Example6" bordered textAlign="center" :style="{ backgroundImage: gradualColor }">
                beautiful colours
            </QStatistic>
        </div>
        <div class="row q-gutter-x-md">
            <pre class="col bg-grey-8 text-white" style="height: 250px;">
                <code>
                    {{ Example5 }}
                </code>
            </pre>
            <pre class="col bg-grey-8 text-white" style="height: 250px;">
                <code>
                    {{ Example6 }}
                </code>
            </pre>
        </div>
        <div class="row q-gutter-x-md">
            <QStatistic class="col" label="Example7" bordered boldLabel>
                <div class="text-italic text-h6 row items-center" style="width: 100%;">
                    <q-icon name="star" size="sm" />
                    987654
                </div>
            </QStatistic>
            <QStatistic class="col" label="Example8" bordered boldLabel :labelStyle="{ color: 'red' }">
                <div class="text-italic text-h6 row items-center" style="width: 100%;">
                    <q-icon name="star" size="sm" />
                    <q-space></q-space>
                    987654
                </div>
            </QStatistic>
        </div>
        <div class="row q-gutter-x-md">
            <pre class="col bg-grey-8 text-white" style="height: 250px;">
                <code>
                    {{ Example7 }}
                </code>
            </pre>
            <pre class="col bg-grey-8 text-white" style="height: 250px;">
                <code>
                    {{ Example8 }}
                </code>
            </pre>
        </div>
    </q-page>
</template>

<script>
const gradualColor = `linear-gradient(to bottom right, #ec4786, #b955a4`

const Example1 = `
<QStatistic label="Example1" bordered textAlign="center">
    123456
</QStatistic>
`
const Example2 = `
<QStatistic label="Example2" dark>
    <q-icon name="star" />
    987654
</QStatistic>
`
const Example3 = `
<QStatistic label="Example3" bordered>
    123
</QStatistic>
`
const Example4 = `
<QStatistic label="Example4" textAlign="right">
    <q-icon name="font_download" />
    123 / 456
</QStatistic>
`
const Example5 = `
<QStatistic label="Example5" bordered boldLabel>
    <div class="row justify-between items-center" style="width: 100%;">
        <q-icon name="star" />
        987654
    </div>
</QStatistic>
`
const Example6 = `
<QStatistic label="Example6" bordered textAlign="center" :style="{ backgroundImage: gradualColor }">
    beautiful colours
</QStatistic>

gradualColor: linear-gradient(to bottom right, #ec4786, #b955a4)
`
const Example7 = `
<QStatistic label="Example7" bordered boldLabel>
    <div class="text-italic text-h6 row items-center" style="width: 100%;">
        <q-icon name="star" size="sm" />
        987654
    </div>
</QStatistic>
`
const Example8 = `
<QStatistic label="Example8" bordered boldLabel :labelStyle="{ color: 'red' }">
    <div class="text-italic text-h6 row items-center" style="width: 100%;">
        <q-icon name="star" size="sm" />
        <q-space></q-space>
        987654
    </div>
</QStatistic>
`
export default {
    setup() {
        return {
            gradualColor,
            Example1,
            Example2,
            Example3,
            Example4,
            Example5,
            Example6,
            Example7,
            Example8
        }
    }
}
</script>

<style lang="sass" scoped>
</style>
