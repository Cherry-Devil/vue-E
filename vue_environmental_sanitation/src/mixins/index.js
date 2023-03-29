export const mixin = {
    methods: {
        notify(title,type) {
            this.$notify({
                title: title,
                type: type
            }) 
        },
        delAll(){
            for(let item of this.multipleSelection){
                this.handleDelete(item.id);
                this.deleteRow();
            }
            this.multipleSelection = [];
        }
    }
}