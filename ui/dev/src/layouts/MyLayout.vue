<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round to="/" icon="home" />

                <q-toolbar-title>
                    <a href="https://github.com/Junvary/quasar-app-extension-qstatistic">
                        @junvary/quasar-ui-qstatistic v{{ version }}
                    </a>
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { version } from 'ui' // "ui" is aliased in quasar.conf.js

export default {
    name: 'MyLayout',

    setup() {
        return {
            version
        }
    }
}
</script>
