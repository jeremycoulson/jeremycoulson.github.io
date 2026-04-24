---
layout: page
permalink: /teaching/
title: teaching
description:
nav: true
nav_order: 6
banner_image: coulson-whiteboard.jpg
banner_position: center 20%
---

{% assign teaching_by_institution = site.data.teaching | group_by: "institution" %}

{% for group in teaching_by_institution %}
### {{ group.name }}
___

{% for course in group.items %}
<div class="row mb-4 align-items-center">
  {% if course.image %}
  <div class="col-md-4">
    {% if course.url %}
    <a href="{{ course.url }}">
    {% endif %}
      {% include figure.liquid
         path=course.image
         class="img-fluid rounded"
         alt=course.title %}
    {% if course.url %}
    </a>
    {% endif %}
  </div>
  {% endif %}
  <div class="col-md-8">
    <h4 class="mb-1">
      {% if course.url %}
        <a href="{{ course.url }}">{{ course.title }}</a>
      {% else %}
        {{ course.title }}
      {% endif %}
    </h4>
    {% if course.code %}
    <p class="text-muted mb-0">{{ course.code }}</p>
    {% endif %}
    {% if course.terms %}
    <p class="text-muted">{{ course.terms }}</p>
    {% endif %}
  </div>
</div>
{% endfor %}

{% endfor %}
