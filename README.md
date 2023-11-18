# Quasar App Extension qstatistic
> QStatistic allows you to display data statistically.

[![npm](https://img.shields.io/npm/v/@junvary/quasar-app-extension-qstatistic.svg?label=@junvary/quasar-app-extension-qstatistic)](https://www.npmjs.com/package/@junvary/quasar-app-extension-qstatistic)
[![npm](https://img.shields.io/npm/dt/@junvary/quasar-app-extension-qstatistic.svg)](https://www.npmjs.com/package/@junvary/quasar-app-extension-qstatistic)

[![npm](https://img.shields.io/npm/v/@junvary/quasar-ui-qstatistic.svg?label=@junvary/quasar-ui-qstatistic)](https://www.npmjs.com/package/@junvary/quasar-ui-qstatistic)
[![npm](https://img.shields.io/npm/dt/@junvary/quasar-ui-qstatistic.svg)](https://www.npmjs.com/package/@junvary/quasar-ui-qstatistic)

Compatible with Quasar UI v2 and Vue 3.

# Structure
* [/ui](ui) - standalone npm package

* [/app-extension](app-extension) - Quasar app extension

# Install
```bash
quasar ext add @junvary/qstatistic
```
Quasar CLI will retrieve it from NPM and install the extension.

# Uninstall
```bash
quasar ext remove @junvary/qstatistic
```
# Example
```Vue
<div class="row q-gutter-md">
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
</div>
```
![20231111155534.png](https://s2.loli.net/2023/11/11/FgqkAvGzZ5TP89j.png)
# License
MIT
