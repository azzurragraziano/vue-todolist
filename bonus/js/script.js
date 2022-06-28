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
            //funzione per aggiungere una nuova to do
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
            //funzione per eliminare un elemento cliccando sulla x
            removeTodo(index) {
                this.toDoList.splice(index, 1)
            },
            //funzione che cambia la proprietà done da false a true e da true a false al click
            toggleToDo(toDoIndex) {
                this.toDoList[toDoIndex].done = !this.toDoList[toDoIndex].done
            }
        }
    }
)