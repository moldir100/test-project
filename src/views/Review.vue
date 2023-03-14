<template>
    <div class="hello">
        <p>
            Review
        </p>

        Рецензия на период с {{ this.$route.params }} по {{ this.$route.params }}

    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'HelloWorld',

    props: {
        msg: String
    },
    data() {
        return {
            books: [],
           

        }
    },
    methods: {
      
    },
    created() {
        axios.get("http://localhost:3000/books")
            .then(response => (this.books = response.data))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}</style>
