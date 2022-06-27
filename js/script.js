var app = new Vue(
    {
        el:'#app',
        data: {
            newToDo:'',
            toDoList: [
                {
                    text: 'fare i compiti',
                    done: false
                },
                {
                    text: 'fare la spesa',
                    done: true
                },
                {
                    text: 'fare il bucato',
                    done: false
                }
            ]
        },
        methods: {
            addNewToDo() {

                if(this.newToDo.length > 0) {
                    // Pushare nell'array newToDo
                    this.toDoList.push(
                        {
                            text: this.newToDo,
                            done: false
                        }
                    );
                    this.newToDo = '';
                }
            },
            removeTodo(index) {
                this.toDoList.splice(index, 1)
            }
        }
    }
)