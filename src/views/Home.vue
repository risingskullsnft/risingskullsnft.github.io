<template>
    <div id="home">
        <h1>Home page</h1>
        <p>Message: {{ message }}</p>
        <router-link to="about" >About</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: "Skulls rock",
        };
    },
};
</script>
