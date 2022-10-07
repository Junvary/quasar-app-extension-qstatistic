# Quasar App Extension qstatistic
> QStatistic allows you to display data statistically.

[![npm](https://img.shields.io/npm/v/quasar-app-extension-qstatistic.svg?label=quasar-app-extension-qstatistic)](https://www.npmjs.com/package/quasar-app-extension-qstatistic)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-qstatistic.svg)](https://www.npmjs.com/package/quasar-app-extension-qstatistic)

[![npm](https://img.shields.io/npm/v/quasar-ui-qstatistic.svg?label=quasar-ui-qstatistic)](https://www.npmjs.com/package/quasar-ui-qstatistic)
[![npm](https://img.shields.io/npm/dt/quasar-ui-qstatistic.svg)](https://www.npmjs.com/package/quasar-ui-qstatistic)
# Install
```bash
quasar ext add qstatistic
```
Quasar CLI will retrieve it from NPM and install the extension.

# Uninstall
```bash
quasar ext remove qstatistic
```
# Example
```Vue
<div class="row q-gutter-md">
    <QStatistic class="col" label="count1" bordered textAlign="center">
        123456
    </QStatistic>
    <QStatistic class="col" label="count2" dark>
        <q-icon name="star" />
        987654
    </QStatistic>
    <QStatistic class="col" label="count3" bordered>
        123
    </QStatistic>
    <QStatistic class="col" label="count4" textAlign="right">
        <q-icon name="font_download" />
        123 / 456
    </QStatistic>
</div>
```
![qstatistic.jpg](https://s2.loli.net/2022/10/07/nYlBwtiVdDjM84R.png)

# License
MIT
