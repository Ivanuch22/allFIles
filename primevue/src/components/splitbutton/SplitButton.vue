<template>
    <div :class="containerClass" :style="style">
        <PVSButton type="button" class="p-splitbutton-defaultbutton" v-bind="$attrs" :icon="icon" :label="label" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-chevron-down" @click="onDropdownButtonClick" :disabled="$attrs.disabled"
            aria-haspopup="true" :aria-controls="ariaId + '_overlay'"/>
        <PVSMenu :id="ariaId + '_overlay'" ref="menu" :model="model" :popup="true" :autoZIndex="autoZIndex"
            :baseZIndex="baseZIndex" :appendTo="appendTo" />
    </div>
</template>

<script>
import Button from '../button/Button';
import Menu from '../menu/Menu';
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
		model: {
            type: Array,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: String,
            default: null
        },
        class: null,
        style: null
    },
    methods: {
        onDropdownButtonClick() {
            this.$refs.menu.toggle({currentTarget: this.$el, relativeAlign: this.appendTo == null});
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-splitbutton p-component', this.class];
        }
    },
    components: {
        'PVSButton': Button,
        'PVSMenu': Menu
    }
}
</script>

<style scoped>
.p-splitbutton {
    display: inline-flex;
    position: relative;
}

.p-splitbutton .p-splitbutton-defaultbutton {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton  {
    display: flex;
}
</style>
