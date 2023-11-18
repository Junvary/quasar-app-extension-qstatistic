<template>
    <q-page padding class="q-gutter-y-md">
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
            <QStatistic class="col" label="Example5" bordered boldLabel>
                <div class="row justify-between items-center" style="width: 100%;">
                    <q-icon name="star" />
                    987654
                </div>
            </QStatistic>
            <QStatistic class="col" label="Example6" bordered textAlign="center" :style="{ backgroundImage: gradualColor }">
                beautiful colours
            </QStatistic>
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
    </q-page>
</template>

<script setup>
const gradualColor = `linear-gradient(to bottom right, #ec4786, #b955a4`
</script>

<style lang="sass" scoped>
</style>
