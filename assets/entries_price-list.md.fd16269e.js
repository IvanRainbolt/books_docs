import{_ as e,c as t,o as i,a as s}from"./app.dd2c2581.js";var r="/assets/enable-price-list.20e192aa.png",a="/assets/price-list.ebd58473.png",c="/assets/price-list-selection.c3233f62.png";const f=JSON.parse('{"title":"Price List","description":"","frontmatter":{},"headers":[{"level":2,"title":"Enable Price List","slug":"enable-price-list"},{"level":2,"title":"Create a Price List","slug":"create-a-price-list"},{"level":2,"title":"Setting a Price List","slug":"setting-a-price-list"}],"relativePath":"entries/price-list.md","lastUpdated":1686124164000}'),n={name:"entries/price-list.md"},l=s('<h1 id="price-list" tabindex="-1">Price List <a class="header-anchor" href="#price-list" aria-hidden="true">#</a></h1><p>Using Price List, you can keep track of multiple <a href="#item-price-table-fields">Item Prices</a> for sales and purchase.</p><p>An Item can by priced differently depending on whether it is for sale or purchase, if it is discount season, etc.</p><p>A Price List helps by grouping multiple item prices under a single entry. You can then select this entry when making a Sales or a Purchase Invoice, and when an item is selected its rate will be fetched from the Price list.</p><p>To use Price Lists you need to first enable them.</p><h2 id="enable-price-list" tabindex="-1">Enable Price List <a class="header-anchor" href="#enable-price-list" aria-hidden="true">#</a></h2><p>The Price List feature needs to be enabled first by checking the <strong>Enable Price List</strong> option in the General Settings.</p><p>To navigate: <code>Setup &gt; Settings &gt; General Tab</code><img src="'+r+'" alt="Enable Price List"></p><h2 id="create-a-price-list" tabindex="-1">Create a Price List <a class="header-anchor" href="#create-a-price-list" aria-hidden="true">#</a></h2><p>To create a Price Lists, go to:<code>Common &gt; Price List</code>. And then click on the blue <code>+</code> button to open a new Price List creation form.</p><p><img src="'+a+'" alt="Price List Form"></p><p>Add Item Prices to your price list, when done click on the Save button.</p><p>Price List Fields:</p><ol><li><strong>Is Price List Enabled</strong>: enables the Price List, if disabled it cannot be used.</li><li><strong>For Sales</strong>: if enabled, the Price List can be selected in Sales Invoices.</li><li><strong>For Purchases</strong>: if enabled, the Price List can be selected in Purchase Invoices.</li></ol><div class="tip custom-block"><p class="custom-block-title">Multiple Prices</p><p>You can add multiple prices for an Item in the Price List. When fetching the price from the Price List, the first Item Price with a matching Unit Type will be selected.</p></div><h2 id="setting-a-price-list" tabindex="-1">Setting a Price List <a class="header-anchor" href="#setting-a-price-list" aria-hidden="true">#</a></h2><p>To use a Price List, ou need to select <strong>Price List</strong> in the Sales or Purchase Invoice form.</p><p><img src="'+c+'" alt="Price List Selection"></p><p>Once this is done, when a new item is selected it&#39;s price will be fetched from the selected Price List.</p>',19),o=[l];function p(d,h,g,u,P,m){return i(),t("div",null,o)}var _=e(n,[["render",p]]);export{f as __pageData,_ as default};