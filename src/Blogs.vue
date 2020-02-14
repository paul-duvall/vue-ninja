<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs'
        }
    },
    beforeCreate() {
        alert('beforeCreat hook')
    },
    created() {
        alert('created hook')
    }
}
</script>
