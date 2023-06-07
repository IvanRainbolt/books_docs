import{_ as t,c as e,o as a,a as i}from"./app.dd2c2581.js";var r="/assets/recent-invoices.a69fc95f.png";const g=JSON.parse('{"title":"Party","description":"","frontmatter":{},"headers":[{"level":2,"title":"Types of Party","slug":"types-of-party"},{"level":2,"title":"Party Fields","slug":"party-fields"},{"level":2,"title":"Recent Invoices","slug":"recent-invoices"}],"relativePath":"entries/party.md","lastUpdated":1655401545000}'),l={name:"entries/party.md"},s=i('<h1 id="party" tabindex="-1">Party <a class="header-anchor" href="#party" aria-hidden="true">#</a></h1><p><em>Party</em> is a term used in Frappe Books for any entity to whom a Sale or from whom a Purchase is made.</p><h2 id="types-of-party" tabindex="-1">Types of Party <a class="header-anchor" href="#types-of-party" aria-hidden="true">#</a></h2><p>A Party is classified by their Role it&#39;s used for.</p><table><thead><tr><th style="text-align:right;">#</th><th style="text-align:left;">Role</th><th style="text-align:left;">Name</th><th style="text-align:left;">Invoice</th><th style="text-align:left;">Navigation</th></tr></thead><tbody><tr><td style="text-align:right;">1</td><td style="text-align:left;">Customer</td><td style="text-align:left;">Customer</td><td style="text-align:left;">Sales Invoices</td><td style="text-align:left;"><code>Sales &gt; Customers</code></td></tr><tr><td style="text-align:right;">2</td><td style="text-align:left;">Supplier</td><td style="text-align:left;">Supplier</td><td style="text-align:left;">Purchase Invoices</td><td style="text-align:left;"><code>Purchases &gt; Suppliers</code></td></tr><tr><td style="text-align:right;">3</td><td style="text-align:left;">Both</td><td style="text-align:left;">Party</td><td style="text-align:left;">Sales and Purchase Invoices</td><td style="text-align:left;"><code>Common &gt; Party</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">Usage</p><p>Make sure that you create the Party under the correct Navigation as this cannot be changed after creation.</p></div><h2 id="party-fields" tabindex="-1">Party Fields <a class="header-anchor" href="#party-fields" aria-hidden="true">#</a></h2><ol><li>Party Image: an image to identify the Party by.</li><li>Party Name: a name to identify the Party by, each Party should have a unique name.</li><li>Email: the Party&#39;s email address that may be displayed when printing the invoice.</li><li>Phone: the Party&#39;s phone number that may be displayed when printing the invoice.</li><li>Address: the Party&#39;s address that may be displayed when printing the invoice.</li><li>Default Account: default account that may be credited or debited when a transaction involving the part is made.</li><li>Currency: the currency in which to create the invoice for the Party.</li><li>Role: the role of the Party, whether they are a Customer, Supplier or Both.</li></ol><h2 id="recent-invoices" tabindex="-1">Recent Invoices <a class="header-anchor" href="#recent-invoices" aria-hidden="true">#</a></h2><p>The Party Quick Edit Form has a Recent Invoices widget. This shows the last three invoices made for a Party.</p><p><img src="'+r+'" alt="Recent Invoices Widget"></p><p>Each row shows the following information</p><ul><li>Invoice Name</li><li>Invoice Status</li><li>Date</li><li>Paid Amount</li><li>Outstanding Amount</li></ul><p>Clicking on a row will take you to the Invoice from where <a href="/transactions/payments.html#making-payments-from-invoices">Payments can be made</a>.</p>',14),n=[s];function o(d,h,c,y,p,f){return a(),e("div",null,n)}var u=t(l,[["render",o]]);export{g as __pageData,u as default};