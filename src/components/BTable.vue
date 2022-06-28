<template>
    <table class="table" :class="[stripedClass, smallClass, hoverClass]">
        <thead>
            <tr>
                <th v-for="field in fields" :key="field.key" :class="getVariantClass(field)">{{ getLabel(field) }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td v-for="field in fields" :key="field.key" :class="getVariantClass(field)"> {{ item[field.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "b-table",
    props: {
        striped: {
            type: Boolean,
            default: false,
        },
        hover: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default: Array
        },
        small: {
            type: Boolean,
            default: false
        },
        fields: {
            type: Array,
            required: true,
            validator(value) {
                return value.every(e =>
                    (typeof e.key === 'string')
                    && (typeof e.sortable === 'boolean')
                    && (e.label === undefined || typeof e.label === 'string')
                    && (e.variant === undefined || typeof e.variant === 'string')
                );
            }
        }
    },
    methods: {
        getVariantClass(field) {
            return typeof field.variant === 'undefined' ? undefined : "table-" + field.variant
        },
        getLabel(field) {
            return field.label || field.key.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        }
    },
    data() {
        return {
            hoverClass: {
                "table-hover": this.hover,
            },
            smallClass: {
                "table-sm": this.small
            },
            stripedClass: {
                "table-striped": this.striped
            }
        }
    }/* ,
    setup(props, { slots }) {
        const navItems = slots.default().find((node) => node.type.name === "b-navbar-nav")
        return {
            navItems
        }
    } */
}
</script>

<style scoped>
</style>
