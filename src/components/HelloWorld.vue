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


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="date" v-model="first_date" placeholder="dd-mm-yyyy" value="" min="1997-01-01" max="2030-12-31">
            <input type="date" v-model="last_date">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

            <button type="button" class="btn btn-primary"
              v-on:click="createReview(first_date, last_date)">Создать</button>

          </div>
        </div>
      </div>
    </div>



    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Список книг</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item" v-for="(i, name, index) in this.reports" v-bind:key="index">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + index" aria-expanded="false" aria-controls="flush-collapseOne">
                {{ name }} 1
              </button>
            </h2>
            <div :id="'flush-collapse' + index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                                    <!-- inner dropdown -->
                      <div class="accordion accordion-flush" id="accordionFlushExample2">
                        <div class="accordion-item" v-for="(i, name, idx) in i" v-bind:key="idx">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapse2' + idx" aria-expanded="false"
                              aria-controls="flush-collapseTwo">
                              {{ name }} 2
                            </button>
                          </h2>
                          <div :id="'flush-collapse2' + idx" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                            <div class="accordion-body">
                              <table>
                                <tr v-for="(item, name, index) in i" v-bind:key="index" style="font-size: 10px">
                                  <!-- <td><a v-bind:href="item.link" target="_blank">{{ item.title }}</a></td> -->
                                  <!-- <td><a data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">{{ item.name
                                }}</a></td> -->
                                  <td>0{{ index + 1 }}</td>
                                  <td>{{ item.name }}</td>
                                  <td>{{ item.author }}</td>
                                  <td>{{ item.data_approve }}</td>

                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
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
      books: [],
      reports: '',
      first_date: '',
      last_date: '',

      arrayOfElements: [{
        "name": "a",
        "subElements": [{
          "surname": 1
        }, {
          "surname": 2
        }]
      }, {
        "name": "b",
        "subElements": [{
          "surname": 3
        }, {
          "surname": 1
        }]
      }, {
        "name": "c",
        "subElements": [{
          "surname": 2
        }, {
          "surname": 5
        }]
      }],

    }
  },
  methods: {
    createReview(first_date, last_date) {
      console.log("2")
      this.$router.push({
        path: '/review',
        params: {
          first_date: first_date,
          last_date: last_date
        }
      })
    },
    filterByDate(first_date, last_date) {
      if (first_date === '' && last_date === '') {
        return this.books
      }
      console.log(first_date)

      // let filteredArray = this.books
      //                         .filter((element) => element.arr.some((subElement) => first_date <= subElement.publish_date && subElement.publish_date <= last_date));

      let filteredArray = this.books.filter((element) => element.arr.some((subElement) => first_date <= subElement.publish_date && subElement.publish_date <= last_date));
      // let filteredArray = this.books.filter((element) => element.arr.map(subElement => { if(first_date <= subElement.publish_date && subElement.publish_date <= last_date){
      //   console.log(subElement) 
      //   return subElement}} ));



      // for (var data in filteredArray) {
      //   filteredArray[data].arr = { "publish_date": first_date };
      // }

      return filteredArray
    },

    filterByDate2() {
      var surname = 1;
      let filteredArray = this.arrayOfElements.filter((element) => element.subElements.some((subElement) => subElement.surname === surname));

      for (var data in filteredArray) {
        filteredArray[data].subElements = { "surname": surname };
      }
      return filteredArray
    },
  },
  created() {
    axios.get("http://localhost:3000/list_reports")
      .then(response => (this.reports = response.data))
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
