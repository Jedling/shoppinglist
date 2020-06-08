<template>
  <div class="form">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="item-form">
          <form @submit.prevent="addItemToList()" method>
            <label for="name">Name</label>
            <input v-model="newItem.Name" />
            <div class="row">
              <div class="col-6">
                <label for="quantity">Quantity</label>
                <input v-model="newItem.Quantity" min="0" type="number" />
              </div>
              <div class="col-6">
                <label for="category">Category</label>
                <select v-model="newItem.Category" class="category">
                  <option v-for="(item, index) in categoryList" :key="index.Id">
                    {{ item.Name }}
                  </option>
                </select>
              </div>
            </div>
            <label for="Add to list"></label>
            <input class="submit mt-3" type="submit" value="Add to list" />
          </form>
        </div>
      </div>
    </div>
    <div v-show="added">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <div class="list">
            <h2 class="list-header">Added items</h2>
            <table class="items">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
              <tr v-for="(item, index) in this.shoppingList" :key="index.Id">
                <td>
                  <span v-show="!item.Edit">{{ item.Name }}</span>
                  <input
                    class="edit-name"
                    type="text"
                    v-bind:placeholder="item.Name"
                    v-show="item.Edit"
                    v-model="item.Name"
                  />
                </td>
                <td>
                  <span v-show="!item.Edit">{{ item.Quantity }}</span>
                  <input
                    class="edit-quantity"
                    min="0"
                    type="number"
                    v-bind:placeholder="item.Quantity"
                    v-show="item.Edit"
                    v-model="item.Quantity"
                  />
                </td>
                <td>
                  <span v-show="!item.Edit">{{ item.Category }}</span>
                  <select
                    v-show="item.Edit"
                    v-model="item.Category"
                    class="edit-category"
                  >
                    <option
                      v-for="(item, index) in categoryList"
                      :key="index.Id"
                    >
                      {{ item.Name }}
                    </option>
                  </select>
                </td>
                <td>
                  <button
                    type="button"
                    class="save-button"
                    v-show="item.Edit"
                    @click="itemEdited(item)"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="edit-button"
                    v-show="!item.Edit"
                    @click="editItem(item)"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="delete-button"
                    @click="deleteItem(index)"
                  >
                    <i class="fa fa-remove"></i> Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <button
            @click="saveToDb()"
            class="submit mt-3"
            type="submit"
            value="Add to Done"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ItemModel } from "@/types/ItemModel";
@Component({
  components: {}
})
export default class ShoppingItem extends Vue {
  private newItem: ItemModel = new ItemModel();
  private shoppingList: ItemModel[] = [];
  private added = false;
  private doneList: any[] = [];
  private categoryList: any[] = [
    {
      Id: 1,
      Name: "Snack"
    },
    {
      Id: 2,
      Name: "Food"
    },
    {
      Id: 3,
      Name: "Other"
    }
  ];
  // created() {
  //   this.$store.dispatch("retrieveShoppingList");
  // }
  private addItemToList() {
    this.added = true;
    this.shoppingList.push(
      new ItemModel(
        this.newItem.Id,
        this.newItem.Name,
        this.newItem.Quantity,
        this.newItem.Category,
        this.newItem.Edit
      )
    );
    this.newItem = new ItemModel();
  }
  private editItem(item: any) {
    item.Edit = true;
  }
  private itemEdited(item: any) {
    item.Edit = false;
  }
  private deleteItem(index: number) {
    this.shoppingList.splice(index, 1);
    if (this.shoppingList.length === 0) {
      this.added = false;
    }
  }
  private async saveToDb() {
    const data = this.shoppingList;

    console.log("Sending: ", data);
    // blocked by corse
    // const response = await fetch("https://shoppinglist-d684b.firebaseio.com", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // });
    // console.log(response);
  }
}
</script>
<style scoped lang="scss">
.item-form {
  position: relative;
  background: darkorange;
  margin: 0 auto 100px;
  width: 100%;
  padding: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 3px;
}
.item-form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: white;
  width: 100%;
  border: 0;
  margin: 0 0 19px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
  position: relative;
}

.category {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: white;
  width: 100%;
  border: 0;
  margin: 0 0 19px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
  position: relative;
}

button .submit {
  text-transform: uppercase;
  align-items: center;
  outline: 0;
  background-color: lightcyan !important;
  width: 100%;
  max-width: 450px;
  border-radius: 0px;
  padding: 15px;
  color: black;
  margin-top: 15px;
  font-size: 14px;
  cursor: pointer;
}
.submit:hover {
  background-color: lightcyan !important;
}

/* Added to list */
.list-header {
  text-align: center;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.items {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
}

.items td,
th {
  padding: 8px;
  word-break: break-all;
}

.items tr:nth-child(even) {
  background-color: #f2f2f2;
}

.items tr:hover {
  background-color: #ddd;
}

.items th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: darkorange;
  color: white;
}

.edit-name {
  width: 60px;
  border: none;
}

.edit-quantity {
  width: 40px;
  border: none;
}

.edit-category {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: white;
  width: 65%;
  border: 0;
  padding: 5px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
}

.edit-button {
  color: #fff;
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: lightseagreen;
  width: 60%;
  border: 0;
  box-sizing: border-box;
  font-size: 14px;
  padding: 6px;
  border: none;
  border-radius: none;
  position: relative;
}

.save-button {
  color: #fff;
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: rgb(89, 197, 89);
  width: 60%;
  border: 0;
  box-sizing: border-box;
  font-size: 14px;
  padding: 6px;
  border: none;
  border-radius: none;
  position: relative;
}

.delete-button {
  color: #fff;
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: brown;
  width: 60%;
  border: 0;
  box-sizing: border-box;
  font-size: 14px;
  padding: 6px;
  border: none;
  border-radius: none;
  position: relative;
}

.delete-button:active {
  background: rgb(218, 76, 76);
}
</style>
