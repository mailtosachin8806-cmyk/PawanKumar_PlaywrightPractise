exports.HomePage = class HomePage {


    constructor(page){
        this.page = page;
        this.productList = "//a[contains(@class,'hrefch')]";
        this.addToCartButton = "//a[text()='Add to cart']";
        this.cartpage = "//a[@id='cartur']";
    }

    async addProductCart(productName){
        const productList =  await this.page.$$(this.productList);
        for (const product of productList)
        {
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }

    await this.page.on('dialog', async dialog=> {
        if(dialog.message().includes('Product added.'))
               await dialog.accept();
    })
    await this.page.locator(this.addToCartButton).click();
    }

    async gotoCart(){
        await this.page.locator(this.cartpage).click();
    }
}