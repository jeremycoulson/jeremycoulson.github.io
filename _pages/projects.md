---
layout: page
title: research
permalink: /research/
description: A few highlighted research projects.
nav: true
nav_order: 2
banner_image: hankel-vs-statespace.png
banner_position: center 50%
---

{% assign sorted_projects = site.projects | sort: "importance" %}

{% for project in sorted_projects %}
<div class="row mb-4 align-items-center">
  {% if project.img %}
  <div class="col-md-4">
    {% include figure.liquid
       path=project.img
       class="img-fluid rounded"
       alt=project.title %}
  </div>
  {% endif %}
  <div class="col-md-8">
    <h4>{{ project.title }}</h4>
    <p>{{ project.description }}</p>
    {{ project.content | markdownify }}
  </div>
</div>
{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}
