import{_ as e,c as t,o as a,a as n}from"./app.13db81f4.js";var i="/assets/payment-quick-edit.ca1f520a.png",s="/assets/payment-writeoff.18c9aec6.png";const g=JSON.parse('{"title":"Payments","description":"","frontmatter":{},"headers":[{"level":2,"title":"Making Payments","slug":"making-payments"},{"level":3,"title":"Payment Reference","slug":"payment-reference"},{"level":3,"title":"Write Off Amount","slug":"write-off-amount"},{"level":2,"title":"Making Payments from Invoices","slug":"making-payments-from-invoices"}],"relativePath":"transactions/payments.md","lastUpdated":1655206534000}'),o={name:"transactions/payments.md"},r=n('<h1 id="payments" tabindex="-1">Payments <a class="header-anchor" href="#payments" aria-hidden="true">#</a></h1><p>Payments are a type of transactional entry that indicates the transfer of funds.</p><p>Payments usually follow a sale or a purchase, depending on this a Payment entry can be made to either Receive or Pay funds.</p><table><thead><tr><th style="text-align:right;">#</th><th style="text-align:left;">Transaction</th><th style="text-align:left;">Payment Type</th><th style="text-align:left;">To Account</th><th style="text-align:left;">From Account</th></tr></thead><tbody><tr><td style="text-align:right;">1</td><td style="text-align:left;">Sale</td><td style="text-align:left;">Receive</td><td style="text-align:left;">Bank, Cash Accounts</td><td style="text-align:left;">Accounts Receivable</td></tr><tr><td style="text-align:right;">2</td><td style="text-align:left;">Purchase</td><td style="text-align:left;">Pay</td><td style="text-align:left;">Accounts Payable</td><td style="text-align:left;">Bank, Cash Accounts</td></tr></tbody></table><h2 id="making-payments" tabindex="-1">Making Payments <a class="header-anchor" href="#making-payments" aria-hidden="true">#</a></h2><p>To make a Payment first navigate to the Payment page</p><ul><li>For Sales: <code>Sales &gt; Sales Payments</code></li><li>For Purchases: <code>Purchases &gt; Purchase Payments</code></li></ul><p>Then click on the blue <code>+</code> button. This will open the Payment quick edit form.</p><p><img src="'+i+'" alt="Payment Quick Edit Form"></p><p>You can select the Party and enter other the details of the Payment.</p><p>Once the details have been set you can click on Save and then Submit to record the Payment.</p><h3 id="payment-reference" tabindex="-1">Payment Reference <a class="header-anchor" href="#payment-reference" aria-hidden="true">#</a></h3><p>If the Payment is being made for an invoice, you can add a reference to the invoice in the table at the bottom.</p><p>This will update the Outstanding Amount on the invoice.</p><div class="tip custom-block"><p class="custom-block-title">Invoice Payment</p><p>A more convenient way of settling an Invoice Payment is to do so using the Make Payment option from the Invoice Form.</p></div><h3 id="write-off-amount" tabindex="-1">Write Off Amount <a class="header-anchor" href="#write-off-amount" aria-hidden="true">#</a></h3><p>The write off amount is a deduction on the payment.</p><p><img src="'+s+'" alt="Payment Write Off"></p><p>This amount is booked under the Write Off Account that can set under General settings: <code>Setup &gt; Settings &gt; General</code></p><div class="info custom-block"><p class="custom-block-title">Transfered Amount</p><p>The final amount to be paid or received = Amount - Write Off</p></div><h2 id="making-payments-from-invoices" tabindex="-1">Making Payments from Invoices <a class="header-anchor" href="#making-payments-from-invoices" aria-hidden="true">#</a></h2><p>To make an Invoice Payment to settle the Outstanding Amount of a Sales Invoice or a Purchase Invoice, you can navigate to the Invoice form and click on the Make Payment button under the <code>...</code> menu.</p><p>For more information check these links:</p><ul><li><a href="/transactions/sales-invoices.html#making-sales-payments">Making Sales Payments</a></li><li><a href="/transactions/purchase-invoices.html#making-purchase-payments">Making Purchase Payments</a></li></ul>',24),c=[r];function l(d,m,h,p,y,f){return a(),t("div",null,c)}var P=e(o,[["render",l]]);export{g as __pageData,P as default};