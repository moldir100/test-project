<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Бесплатная онлайн библиотека для чтения книг без регистрации с телефона или компьютера. У нас собраны последние
      новинки, мировые бестселлеры книжного мира.
    </p>
    <button>
      <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Открыть
      </a>
    </button>



    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Список книг</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item" v-for="(i, index) in this.books" v-bind:key="index">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + index" aria-expanded="false" aria-controls="flush-collapseOne">
                {{ i.title }}
              </button>
            </h2>
            <div :id="'flush-collapse'+index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <table>
                  <tr v-for="(item, index) in i.arr" v-bind:key="index">
                    <td><a v-bind:href="item.link" target="_blank">{{ item.title }}</a></td>
                    <td>{{ item.author }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

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
      books: []
    }
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
