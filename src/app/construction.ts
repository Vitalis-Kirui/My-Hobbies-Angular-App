export class Construction {

    showDetails:boolean;

    constructor(public id: number, public name: string, public details: string, public dueDate : Date){

        this.showDetails = false;

    };

}
