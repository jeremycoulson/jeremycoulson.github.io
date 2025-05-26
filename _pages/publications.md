---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
[google scholar](https://scholar.google.com/citations?user=JpiVHJ0AAAAJ&hl=en)

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->


<div class="publications">

<h3>Journal Papers</h3>
<hr>
{% bibliography -f papers -q @*[keyword~=journal]* %}

<br>
<h3>Conference Papers</h3>
<hr>
{% bibliography -f papers -q @*[keyword~=conference]* %}

<br>
<h3>Extended Abstracts</h3>
<hr>
{% bibliography -f papers -q @*[keyword~=abstract]* %}

<br>
<h3>Theses</h3>
<hr>
{% bibliography -f papers -q @*[keyword~=thesis]* %}

</div>


