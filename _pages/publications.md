---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
[google scholar](https://scholar.google.com/citations?user=0AddzbIAAAAJ&hl=en)
<div class="publications">

<h3>Journal Papers</h3>
___
{% bibliography -f papers -q @*[keyword=journal]* %}


<h3>Conference Papers</h3>
___
{% bibliography -f papers -q @*[keyword=conference]* %}


<h3>Extended Abstracts</h3>
___
{% bibliography -f papers -q @*[keyword=abstract]* %}


<h3>Theses</h3>
___
{% bibliography -f papers -q @*[keyword=thesis]* %}

<!-- <h3>Preprints</h3>
{% bibliography -f papers -q @*[keyword=preprint]* %} -->

</div>
