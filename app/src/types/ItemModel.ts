interface IItemModel {
    Id: number;
    Name: string;
    Quantity: string;
    Category: string;
    Edit: boolean;
}

export class ItemModel implements IItemModel {
    public Id: number;
    public Name: string;
    public Quantity: string;
    public Category: string;
    public Edit: boolean;
/**
 * 
 */

constructor(id: number = 0, name: string = '', quantity: string = '', category: string = '', edit: boolean = false) {
    this.Id = id;
    this.Name = name;
    this.Quantity = quantity;
    this.Category = category;
    this.Edit = edit;
 }
}
