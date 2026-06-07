import { Component, signal } from "@angular/core";

export type Product = {
    id: number;
    name: string;
    price: number;
};

@Component({
    selector: 'app-product-toolbar',
    templateUrl: './product-toolbar.html',
    styleUrls: ['./product-toolbar.scss'],
})
export class ProductToolbarComponent {
    protected product = signal<Product>({
        id: 1346,
        name: 'Standing Desk',
        price: 299.99
    });
}