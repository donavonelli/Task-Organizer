export class TodoItem {

    title: string;
    details: string;
    completeBy: string;
    urgent: boolean;

    // set up our constructor
    // MUST do so properly for this file to compile
    constructor(title: string, details: string, completeBy: string, urgent:boolean) {
        this.title = title;
        this.details = details;
        this.completeBy = completeBy;
        this.urgent = urgent;
    }
}
