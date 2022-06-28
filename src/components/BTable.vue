<template>
    <table class="table" :class="[stripedClass, smallClass, hoverClass]">
        <thead>
            <tr>
                <th v-for="field in fields" :key="field.key" :class="getVariantClass(field)"
                    :aria-sort="getSortIcon(field)" @click="onHeaderClick(field.key)">
                    <div>{{ getLabel(field) }} </div>
                    <span class="sr-only" v-if="field.sortable"> (Click to sort {{ getSrLabel(field.key) }})</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in sortedItems" :key="index">
                <td v-for="field in fields" :key="field.key" :class="getVariantClass(field)"> {{ item[field.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref } from 'vue';
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
        },
        getSortIcon(field) {
            if (!field.sortable) return null;
            if (this.sort.key === field.key) return this.sort.asc ? 'ascending' : 'descending';
            return 'none';
        },
        onHeaderClick(key) {
            if (this.fields.find(f => f.key === key).sortable) {
                if (this.sort.key === key) {
                    this.sort.asc = !this.sort.asc;
                } else {
                    this.sort.key = key
                    this.sort.asc = true;
                }
                this.sortedItems.sort((a, b) => this.sort.asc ? a[this.sort.key] > b[this.sort.key] : a[this.sort.key] < b[this.sort.key]);
            }
        },
        getSrLabel(key) {
            return this.sort.key !== key || !this.sort.asc ? 'ascending' : 'descending';
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
            },
            sort: { key: "", asc: true },
        }
    },
    setup(props) {
        const sortedItems = ref(props.items);
        return {
            sortedItems
        }
    }
}
</script>

<style scoped>
</style>
