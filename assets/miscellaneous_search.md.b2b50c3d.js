import{_ as e,c as t,o as a,a as l}from"./app.e93f60a6.js";var s="/assets/search-bar.dfa7af73.png",r="/assets/search-dialog.8306207c.png",i="/assets/search-filters.0e7b4471.png",o="/assets/sales-person.80142076.png",n="/assets/purchase-item.8e68f99c.png",c="/assets/payment-invoice.27ea382d.png",d="/assets/payment-person.8bd2444c.png";const b=JSON.parse('{"title":"Quick Search","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dialog","slug":"dialog"},{"level":2,"title":"Filters","slug":"filters"},{"level":3,"title":"Regular Filters","slug":"regular-filters"},{"level":3,"title":"Doc Filters","slug":"doc-filters"},{"level":2,"title":"Examples","slug":"examples"}],"relativePath":"miscellaneous/search.md","lastUpdated":1660732768000}'),h={name:"miscellaneous/search.md"},p=l('<h1 id="quick-search" tabindex="-1">Quick Search <a class="header-anchor" href="#quick-search" aria-hidden="true">#</a></h1><p>The Quick Search interface is a quick way to navigate around in Frappe Books. To activate it you can click on the search button in the header:</p><p><img src="'+s+'" alt="Quick Search Bar"></p><p>Or you can press <code>Ctrl + K</code> or <code>Cmd + K</code> depending on your operating system.</p><h2 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt="Quick Search Dialog"></p><p>To search for anything type what you are looking for in the input bar at the top.</p><div class="tip custom-block"><p class="custom-block-title">Fuzzy Search</p><p>Because of the fuzzy search method used, you don&#39;t have to type the exact name of the thing you are searching.</p><p>So if you make spelling mistakes it is fine, you will still find what you are looking for.</p></div><p>Each row in the search results is classified as one of the following Types:</p><table><thead><tr><th style="text-align:right;">#</th><th style="text-align:left;">Type</th><th style="text-align:left;">Color</th><th style="text-align:left;">Purpose</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:right;">1</td><td style="text-align:left;">Docs*</td><td style="text-align:left;">blue</td><td style="text-align:left;">Opens the selected entry</td><td style="text-align:left;">PAY-1001</td></tr><tr><td style="text-align:right;">2</td><td style="text-align:left;">List</td><td style="text-align:left;">teal</td><td style="text-align:left;">Opens the List View</td><td style="text-align:left;">Sales Items</td></tr><tr><td style="text-align:right;">3</td><td style="text-align:left;">Create</td><td style="text-align:left;">green</td><td style="text-align:left;">Opens a Form or Quick Edit Form to create an entry</td><td style="text-align:left;">Purchase Invoice</td></tr><tr><td style="text-align:right;">4</td><td style="text-align:left;">Report</td><td style="text-align:left;">yellow</td><td style="text-align:left;">Opens the selected report</td><td style="text-align:left;">General Ledger</td></tr><tr><td style="text-align:right;">5</td><td style="text-align:left;">Page</td><td style="text-align:left;">red</td><td style="text-align:left;">Opens the page</td><td style="text-align:left;">Dashboard</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">Docs*</p><p>Rows of the <em>Docs</em> type will show they type of entry it is. For example, Item or Purchase Invoice.</p></div><p>In the bottom section you will find the filters which will help you narrow your search results.</p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>Clicking on More Filters will display all the filters.</p><p><img src="'+i+'" alt="Quick Search Filters"></p><p>There are two kinds of filters here.</p><ol><li>Regular Filters: coloured buttons in the first row.</li><li>Doc Filters: blue coloured buttons after the first row.</li></ol><div class="tip custom-block"><p class="custom-block-title">Skip Filters</p><p>Skip Child Tables and Skip Transactions are used to toggle multiple Doc Filters at once.</p></div><h3 id="regular-filters" tabindex="-1">Regular Filters <a class="header-anchor" href="#regular-filters" aria-hidden="true">#</a></h3><p>Clicking on one of the regular filters will exclude that type from the search.</p><p>For example, if you unselect Doc then only List, Create, Report and Page type rows will show in the suggestions.</p><h3 id="doc-filters" tabindex="-1">Doc Filters <a class="header-anchor" href="#doc-filters" aria-hidden="true">#</a></h3><p>Clicking on a Doc filter will exclude that kind of entry from the search.</p><p>For example, if you unselect Payment, all Payments will be excluded from the search.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>The Quick Search functionality is very powerful, you can run various kind of queries just by entering a few letters.</p><p>Here are a few examples.</p><details><summary> 1. Finding all the Sales Invoices created for Karen </summary><p><img src="'+o+'" alt="Sales Invoices for Karen"></p></details><details><summary> 2. Finding all the Purchases Invoices with the item Jacket </summary><p><img src="'+n+'" alt="Purchase Invoices for Jacket"></p></details><details><summary> 3. Finding the Payment for Purchase Invoice PINV-1099 </summary><p><img src="'+c+'" alt="Purchase Invoices for Jacket"></p></details><details><summary> 4. Finding all Payments received from Jack </summary><p><img src="'+d+'" alt="Purchase Invoices for Jacket"></p></details><div class="tip custom-block"><p class="custom-block-title">Keyword Order</p><p>The order of the keyword doesn&#39;t matter. You can enter the search keywords in any order.</p></div>',32),u=[p];function g(f,y,m,x,k,_){return a(),t("div",null,u)}var w=e(h,[["render",g]]);export{b as __pageData,w as default};