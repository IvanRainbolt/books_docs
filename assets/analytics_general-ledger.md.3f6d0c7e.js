import{_ as e,c as a,o as t,a as r}from"./app.cbe0ddd2.js";var n="/assets/general-ledger.bee33184.png",l="/assets/groupby-ref.72b7831a.png";const m=JSON.parse('{"title":"General Ledger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filters","slug":"filters"},{"level":3,"title":"Ref Type","slug":"ref-type"},{"level":3,"title":"Ref Name","slug":"ref-name"},{"level":3,"title":"Account","slug":"account"},{"level":3,"title":"Party","slug":"party"},{"level":3,"title":"From Date","slug":"from-date"},{"level":3,"title":"To Date","slug":"to-date"},{"level":3,"title":"Group By","slug":"group-by"},{"level":3,"title":"Include Cancelled","slug":"include-cancelled"},{"level":3,"title":"Ascending Order","slug":"ascending-order"}],"relativePath":"analytics/general-ledger.md","lastUpdated":1655287482000}'),i={name:"analytics/general-ledger.md"},d=r('<h1 id="general-ledger" tabindex="-1">General Ledger <a class="header-anchor" href="#general-ledger" aria-hidden="true">#</a></h1><p>The General Ledger is a detailed report for all transactions posted to each account and for every transaction there is a Credit and Debit account so it lists them all up.</p><p>This helps you to get a full update for all entries posted in a period against any account.</p><p><img src="'+n+'" alt="General Ledger"></p><p>Navigate to the General Ledger from the sidebar: <code>Report &gt; General Ledger</code></p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>The General Ledger has several filters which can help you narrow the generated report to the entries you would like to see.</p><h3 id="ref-type" tabindex="-1">Ref Type <a class="header-anchor" href="#ref-type" aria-hidden="true">#</a></h3><p>Setting Ref Type as anything other than All will display entries only of that Transactional entry type.</p><p>Example setting Ref Type as Journal Entry will display only entries created due to Journal Entries.</p><h3 id="ref-name" tabindex="-1">Ref Name <a class="header-anchor" href="#ref-name" aria-hidden="true">#</a></h3><p>Ref Name filter allows to display all ledger entries that were generate due to a single Transactional Entry.</p><p>To enable this you need to first set Ref Type.</p><h3 id="account" tabindex="-1">Account <a class="header-anchor" href="#account" aria-hidden="true">#</a></h3><p>Selecting an Account will display only entries where an amount is being credited or debited from this account.</p><h3 id="party" tabindex="-1">Party <a class="header-anchor" href="#party" aria-hidden="true">#</a></h3><p>Selecting a Party will display only entries involving them.</p><h3 id="from-date" tabindex="-1">From Date <a class="header-anchor" href="#from-date" aria-hidden="true">#</a></h3><p>The initial date after which all the entries are to be displayed. The default value is one year before tomorrow.</p><h3 id="to-date" tabindex="-1">To Date <a class="header-anchor" href="#to-date" aria-hidden="true">#</a></h3><p>The final date before which all the entries are to be displayed. The default value is one day after today.</p><h3 id="group-by" tabindex="-1">Group By <a class="header-anchor" href="#group-by" aria-hidden="true">#</a></h3><p>Selecting a Group By option other than None groups the entry according to the selected option.</p><p><img src="'+l+'" alt="Group By Reference"></p><p>For instance setting Group By as Reference will group the entries by the Name of the transactional entry.</p><h3 id="include-cancelled" tabindex="-1">Include Cancelled <a class="header-anchor" href="#include-cancelled" aria-hidden="true">#</a></h3><p>Checking this will include the cancelled entries in the report.</p><div class="info custom-block"><p class="custom-block-title">Reverted Column</p><p>A new column <strong>Reverted</strong> is added to indicate which of the entries have been cancelled.</p></div><h3 id="ascending-order" tabindex="-1">Ascending Order <a class="header-anchor" href="#ascending-order" aria-hidden="true">#</a></h3><p>By default the entries are displayed by newest entry first, i.e. descending order of Date.</p><p>Checking this will display the entries in ascending order of date.</p>',31),s=[d];function o(h,c,p,u,g,f){return t(),a("div",null,s)}var b=e(i,[["render",o]]);export{m as __pageData,b as default};